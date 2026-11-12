// Genera una página por medida (para que cada enlace compartido tenga su propia vista previa)
// y actualiza las etiquetas de vista previa de index.html.
// Uso:  node herramientas/generar.js https://usuario.github.io/repositorio/
const fs=require("fs"),path=require("path"),vm=require("vm");
const root=path.join(__dirname,"..");
let base=process.argv[2];
if(!/^https?:\/\//.test(base||"")){console.error("Indica la dirección pública de la web, por ejemplo:\n  node herramientas/generar.js https://usuario.github.io/repositorio/");process.exit(1)}
if(!base.endsWith("/"))base+="/";
const box={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,"propuestas.js"),"utf8"),box);
const P=box.window.PROGRAMA,SITE="España, un país que puede funcionar";
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const cut=(s,n)=>s.length>n?s.slice(0,n).replace(/\s+\S*$/,"")+"…":s;
const og=(title,desc,url,img)=>`<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(SITE)}">
<meta property="og:locale" content="es_ES">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${img}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="${url}">`;
const ids=new Set();
fs.rmSync(path.join(root,"medida"),{recursive:true,force:true});
for(const p of P.propuestas){
 if(!/^[a-z0-9-]{3,80}$/.test(p.id)||ids.has(p.id))throw new Error("id no válido o repetido: "+p.id);ids.add(p.id);
 const dir=path.join(root,"medida",p.id);fs.mkdirSync(dir,{recursive:true});
 const hasImg=fs.existsSync(path.join(root,"og",p.id+".jpg"));
 const desc=cut(p.desc,190);
 fs.writeFileSync(path.join(dir,"index.html"),`<!DOCTYPE html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)} · ${esc(SITE)}</title>
<meta name="description" content="${esc(desc)}">
${og(p.title,"¿Estás de acuerdo? Vota y opina. "+desc,base+"medida/"+p.id+"/",base+"og/"+(hasImg?p.id:"portada")+".jpg")}
<script>location.replace("../../#m=${p.id}")</script>
<style>body{font:17px/1.6 system-ui,sans-serif;max-width:640px;margin:12vh auto;padding:0 20px;color:#1a1630;background:#f5f3f9}a{color:#7446c6;font-weight:600}</style>
</head><body><p>${esc(p.block)}</p><h1>${esc(p.title)}</h1><p>${esc(p.desc)}</p><p><a href="../../#m=${p.id}">Ver y votar esta medida</a></p></body></html>
`);
}
const idx=path.join(root,"index.html");let html=fs.readFileSync(idx,"utf8");
if(!/<!--OG-->[\s\S]*<!--\/OG-->/.test(html))throw new Error("No encuentro las marcas <!--OG--> en index.html");
html=html.replace(/<!--OG-->[\s\S]*<!--\/OG-->/,()=>"<!--OG-->\n"+og(SITE,P.propuestas.length+" medidas abiertas a tu voto. Lee el programa, vota cada propuesta y deja tu opinión.",base,base+"og/portada.jpg")+"\n<!--/OG-->");
fs.writeFileSync(idx,html);
const sinImg=P.propuestas.filter(p=>!fs.existsSync(path.join(root,"og",p.id+".jpg"))).map(p=>p.id);
console.log(`Listo: ${P.propuestas.length} páginas en /medida para ${base}`);
if(sinImg.length)console.log("Sin imagen propia (usan la portada): "+sinImg.join(", "));
