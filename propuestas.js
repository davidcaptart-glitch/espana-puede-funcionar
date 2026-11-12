// Contenido del programa. Edita aquí los textos.
// IMPORTANTE: no cambies el "id" de una medida ya publicada: los votos y comentarios van ligados a él.
// Para añadir una medida, copia un bloque { ... } y dale un id nuevo (minúsculas, números y guiones).
// Después de añadir o cambiar títulos, vuelve a ejecutar herramientas/generar.js (ver LEEME.txt).
window.PROGRAMA={
// Medidas que aparecen en "Para empezar" (por id)
destacadas:[
 "un-estado-fuerte-en-servicios-y-ligero-en",
 "un-irpf-mas-simple-y-progresivo",
 "mas-vivienda-y-seguridad-juridica-para",
 "sanidad-publica-accesible-y-pensiones",
 "un-plan-nacional-de-reindustrializacion",
 "educacion-por-competencias-e-itinerarios"
],
bloques:[
 {"nombre":"Estado y Administración","color":"#82488f","icono":"bank"},
 {"nombre":"Transparencia y control político","color":"#774d99","icono":"eye"},
 {"nombre":"Fiscalidad y modelo económico","color":"#6b51a1","icono":"receipt"},
 {"nombre":"Empleo, autónomos y protección social","color":"#5d56a7","icono":"briefcase"},
 {"nombre":"Gasto público y sostenibilidad financiera","color":"#4c5caa","icono":"coins"},
 {"nombre":"Vivienda","color":"#3861aa","icono":"house-line"},
 {"nombre":"Sanidad","color":"#1a66a7","icono":"heartbeat"},
 {"nombre":"Educación","color":"#006ba1","icono":"graduation-cap"},
 {"nombre":"Industria y economía productiva","color":"#007099","icono":"factory"},
 {"nombre":"Justicia y seguridad","color":"#00738e","icono":"scales"},
 {"nombre":"Infraestructuras y territorio","color":"#007682","icono":"train-regional"},
 {"nombre":"Política internacional, inmigración y defensa","color":"#007873","icono":"globe-hemisphere-west"},
 {"nombre":"Medio ambiente y sostenibilidad","color":"#007964","icono":"leaf"},
 {"nombre":"Agricultura, ganadería y pesca","color":"#007953","icono":"grains"},
 {"nombre":"Cultura, deporte y sociedad","color":"#007742","icono":"mask-happy"}
],
propuestas:[
{
 "id": "un-estado-fuerte-en-servicios-y-ligero-en",
 "block": "Estado y Administración",
 "title": "Un Estado fuerte en servicios y ligero en burocracia",
 "desc": "Mantener servicios públicos sólidos —sanidad, educación, pensiones, infraestructuras y seguridad— y reducir organismos duplicados, trámites innecesarios y privilegios injustificados.",
 "goal": "Mejorar la calidad de los servicios públicos y dedicar más recursos a su prestación que al mantenimiento de estructuras administrativas.",
 "detail": "Auditorías de organismos y gasto, simplificación normativa, evaluación de resultados y transparencia de contratos y retribuciones."
},
{
 "id": "reformar-la-fiscalidad-de-autonomos-y-pequenos",
 "block": "Fiscalidad y modelo económico",
 "title": "Reformar la fiscalidad de autónomos y pequeños negocios",
 "desc": "Revisar las cuotas de autónomos y simplificar las obligaciones fiscales. Estudiar un umbral de facturación para un régimen simplificado de IVA y una tributación progresiva basada en el beneficio, no en la facturación.",
 "goal": "Facilitar el emprendimiento y evitar que las cargas administrativas y fiscales desincentiven iniciar una actividad.",
 "detail": "La propuesta requiere estudiar el impacto en la recaudación, la protección social y la normativa europea del IVA."
},
{
 "id": "un-irpf-mas-simple-y-progresivo",
 "block": "Fiscalidad y modelo económico",
 "title": "Un IRPF más simple y progresivo",
 "desc": "Estudiar un mínimo exento elevado, deducciones por responsabilidades familiares y tramos progresivos para rentas superiores.",
 "goal": "Aumentar la renta disponible de los hogares con ingresos bajos y medios, manteniendo la progresividad del sistema.",
 "detail": "Los umbrales y tipos deben acompañarse de una memoria de impacto presupuestario y de financiación de los servicios públicos."
},
{
 "id": "una-justicia-mas-rapida-digital-e-igualitaria",
 "block": "Justicia y seguridad",
 "title": "Una justicia más rápida, digital e igualitaria",
 "desc": "Digitalizar expedientes, reducir tareas administrativas, reforzar juzgados saturados y facilitar el seguimiento de los procedimientos.",
 "goal": "Reducir tiempos de espera y garantizar protección efectiva, derecho de defensa, presunción de inocencia y acceso a la justicia.",
 "detail": "La IA puede apoyar tareas documentales, pero las decisiones judiciales deben corresponder a profesionales independientes."
},
{
 "id": "flexibilidad-laboral-con-proteccion-para-las",
 "block": "Empleo, autónomos y protección social",
 "title": "Flexibilidad laboral con protección para las personas",
 "desc": "Simplificar la contratación, revisar los costes empresariales y diseñar una protección por desempleo que acompañe a la persona, incluidos los autónomos que cesan su actividad.",
 "goal": "Facilitar la contratación y las transiciones laborales sin dejar desprotegidas a las personas.",
 "detail": "Cualquier reducción de cotizaciones debe incluir una propuesta viable para financiar pensiones y prestaciones."
},
{
 "id": "participacion-social-y-activacion-para-personas",
 "block": "Empleo, autónomos y protección social",
 "title": "Participación social y activación para personas beneficiarias de prestaciones",
 "desc": "Ofrecer itinerarios de empleo, formación o colaboración comunitaria a quienes reciben prestaciones y están en condiciones de participar, adaptados a sus capacidades y circunstancias.",
 "goal": "Favorecer la inclusión, la experiencia laboral y la contribución a la comunidad, sin convertir las prestaciones en trabajo gratuito.",
 "detail": "No sustituir puestos remunerados; respetar derechos laborales, cuidados, discapacidad, salud y situaciones de vulnerabilidad. La participación debe ajustarse a la ley y a cada caso."
},
{
 "id": "mas-vivienda-y-seguridad-juridica-para",
 "block": "Vivienda",
 "title": "Más vivienda y seguridad jurídica para inquilinos y propietarios",
 "desc": "Aumentar la oferta, agilizar licencias, facilitar la construcción donde sea sostenible y reforzar mecanismos frente a impagos y situaciones de vulnerabilidad.",
 "goal": "Mejorar el acceso al alquiler y reducir la incertidumbre jurídica.",
 "detail": "Combinar ayudas de acceso, mediación, garantías proporcionadas y procedimientos judiciales ágiles con tutela judicial efectiva."
},
{
 "id": "inmigracion-legal-vinculada-al-empleo",
 "block": "Política internacional, inmigración y defensa",
 "title": "Inmigración legal vinculada al empleo",
 "desc": "Establecer un modelo de inmigración ordenada, basado en las necesidades económicas y laborales del país: permisos vinculados a ofertas y necesidades reales, contratación ágil en sectores con déficit, trámites sencillos, formación lingüística y profesional y vías claras para renovar permisos y obtener residencia de larga duración.",
 "goal": "Contribuir a la economía y permitir que quienes llegan puedan desarrollar un proyecto de vida legal y estable, protegiendo sus derechos laborales.",
 "decision": "La inmigración laboral se vinculará a necesidades reales de empleo. Se controlarán las condiciones laborales para evitar la explotación y la competencia desleal.",
 "pending": "Auditoría jurídica y económica de permisos, procedimientos, homologaciones, impacto laboral y protección social."
},
{
 "id": "educacion-por-competencias-e-itinerarios",
 "block": "Educación",
 "title": "Educación por competencias e itinerarios personalizados",
 "desc": "Mantener una base común sólida y ayudar a cada alumno a descubrir y desarrollar sus capacidades mediante itinerarios progresivos y orientación.",
 "goal": "Desarrollar talento, pensamiento crítico y capacidades útiles para la vida y el trabajo.",
 "detail": "La especialización no debe cerrar oportunidades ni reducir prematuramente las expectativas de ningún alumno."
},
{
 "id": "sanidad-publica-accesible-y-pensiones",
 "block": "Sanidad",
 "title": "Sanidad pública accesible y pensiones sostenibles",
 "desc": "Reforzar atención primaria, prevención, personal sanitario y planificación a largo plazo de las pensiones.",
 "goal": "Garantizar servicios esenciales de calidad y sostenibilidad intergeneracional.",
 "detail": "Publicar indicadores de listas de espera, resultados, necesidades de personal y escenarios financieros."
},
{
 "id": "un-plan-nacional-de-reindustrializacion",
 "block": "Industria y economía productiva",
 "title": "Un plan nacional de reindustrialización",
 "desc": "Impulsar sectores tecnológicos y manufactureros, modernizar pymes, invertir en I+D, formación técnica, energía competitiva e infraestructuras.",
 "goal": "Diversificar la economía y aumentar el peso de la industria de alto valor añadido.",
 "detail": "Vincular incentivos a inversión productiva, empleo de calidad, innovación y transferencia tecnológica."
},
{
 "id": "infraestructuras-y-energia-para-una-economia",
 "block": "Infraestructuras y territorio",
 "title": "Infraestructuras y energía para una economía competitiva",
 "desc": "Planificar redes eléctricas, almacenamiento, transporte de mercancías, conexiones ferroviarias, agua y conectividad digital.",
 "goal": "Reducir cuellos de botella y mejorar la competitividad y resiliencia del país.",
 "detail": "Priorizar proyectos con evaluación pública de costes, beneficios, impacto ambiental y mantenimiento."
},
{
 "id": "seguridad-ciudadana-y-convivencia",
 "block": "Justicia y seguridad",
 "title": "Seguridad ciudadana y convivencia",
 "desc": "Mejorar prevención, coordinación policial, atención a víctimas y capacidad de respuesta ante delitos.",
 "goal": "Proteger a las personas y garantizar que la ley se aplique con eficacia y respeto a los derechos.",
 "detail": "Evaluar resultados, reforzar la prevención y mantener controles independientes sobre el uso de poderes públicos."
},
{
 "id": "diplomacia-economica-y-alianzas-estrategicas",
 "block": "Política internacional, inmigración y defensa",
 "title": "Diplomacia económica y alianzas estratégicas",
 "desc": "Utilizar la red diplomática para generar oportunidades económicas, industriales y tecnológicas: promover acuerdos comerciales, abrir mercados para empresas españolas, atraer inversión productiva, facilitar transferencia tecnológica y acceso seguro a materias primas estratégicas, y cooperar en energía, industria, infraestructuras y corredores comerciales.",
 "goal": "Apoyar también la internacionalización de las pymes y orientar la política exterior a resultados económicos medibles: nuevos mercados, inversión productiva, exportaciones y acuerdos tecnológicos.",
 "decision": "La diplomacia económica y las alianzas estratégicas promoverán los objetivos enumerados en esta propuesta.",
 "pending": "Definir indicadores, metas y plazos; comprobar viabilidad presupuestaria y encaje jurídico de los instrumentos y acuerdos."
},
{
 "id": "integracion-residencia-y-nacionalidad",
 "block": "Política internacional, inmigración y defensa",
 "title": "Integración, residencia y nacionalidad",
 "desc": "Establecer un modelo de integración basado en derechos, responsabilidades y oportunidades, con aprendizaje del castellano y de las lenguas cooficiales cuando corresponda, conocimiento de las instituciones, las leyes y los derechos fundamentales, e integración laboral y participación social.",
 "goal": "Ofrecer procedimientos transparentes y requisitos claros de residencia legal y continuada para avanzar hacia la residencia permanente y la nacionalidad, con evaluación individualizada y sin discriminación por origen, religión o nacionalidad.",
 "decision": "La integración será un compromiso mutuo entre las personas que llegan y el país que las recibe, respetando las leyes y el ordenamiento constitucional.",
 "pending": "Revisión jurídica de requisitos, procedimientos y competencias, incluida su compatibilidad con los derechos fundamentales y la normativa aplicable."
},
{
 "id": "control-fronterizo-inmigracion-irregular-y-asilo",
 "block": "Política internacional, inmigración y defensa",
 "title": "Control fronterizo, inmigración irregular y asilo",
 "desc": "Mantener un control efectivo de las fronteras terrestres y marítimas, combatir las redes de tráfico de personas, e identificar y registrar las entradas irregulares respetando las garantías legales. Resolver con agilidad las solicitudes de asilo y protección internacional.",
 "goal": "Retornar, conforme a la ley, a quienes no tengan derecho a permanecer en España y cooperar con países de origen y tránsito, protegiendo efectivamente a refugiados y a quienes necesiten protección internacional.",
 "decision": "Se respetará el principio de no devolución cuando exista riesgo de persecución, tortura o daños graves.",
 "pending": "Auditoría jurídica de los procedimientos fronterizos, de asilo y retorno, de las garantías individuales y de la cooperación internacional."
},
{
 "id": "defensa-seguridad-internacional-y-autonomia",
 "block": "Política internacional, inmigración y defensa",
 "title": "Defensa, seguridad internacional y autonomía estratégica",
 "desc": "Mantener los compromisos de España con la OTAN y la cooperación europea en defensa; desarrollar una industria de defensa propia y reducir dependencias tecnológicas y de suministros extranjeros. Reforzar la protección de infraestructuras críticas, la ciberseguridad y la investigación en tecnologías de defensa.",
 "goal": "Reforzar la cooperación militar y tecnológica con los aliados y mantener capacidades suficientes para proteger el territorio, las fronteras y los intereses nacionales.",
 "decision": "La defensa nacional y la autonomía estratégica se incorporan como complemento de la política internacional.",
 "pending": "Auditoría jurídica y económica de capacidades, industria, investigación, compras y compromisos, con evaluación de costes y compatibilidad con las obligaciones internacionales."
},
{
 "id": "proteccion-del-territorio-y-biodiversidad",
 "block": "Medio ambiente y sostenibilidad",
 "title": "Protección del territorio y biodiversidad",
 "desc": "Establecer una política nacional de protección y recuperación del patrimonio natural, con la participación de quienes conocen y trabajan el territorio.",
 "goal": "Conservar y recuperar el patrimonio natural compatibilizándolo con las actividades económicas que sean compatibles con él.",
 "decision": "Decisión política aprobada: proteger y recuperar el territorio y la biodiversidad.",
 "measures": [
  "Protección estricta de espacios naturales de alto valor ecológico.",
  "Recuperación de ecosistemas degradados y especies autóctonas.",
  "Control de especies invasoras.",
  "Compatibilizar la conservación ambiental con las actividades económicas que sean compatibles con ella.",
  "Aprovechamiento sostenible de los recursos naturales.",
  "Incorporar el conocimiento tradicional y práctico de agricultores, ganaderos, silvicultores, pescadores, profesionales forestales y personas que conocen y trabajan la tierra.",
  "La gestión ambiental contará con la experiencia de quienes conocen el territorio de primera mano y no se diseñará exclusivamente desde los despachos."
 ],
 "pending": "Pendiente de auditoría jurídica, económica y técnica de los instrumentos de protección y recuperación."
},
{
 "id": "gestion-forestal-activa-y-prevencion-de",
 "block": "Medio ambiente y sostenibilidad",
 "title": "Gestión forestal activa y prevención de incendios",
 "desc": "Establecer un modelo de gestión forestal activa durante todo el año, basado en prevención, aprovechamiento responsable y coordinación de emergencias.",
 "goal": "Pasar de una intervención centrada en apagar incendios a una gestión preventiva y continuada, aprovechando responsablemente los recursos del bosque y generando actividad económica rural.",
 "decision": "Decisión política aprobada: desarrollar una gestión forestal activa y preventiva durante todo el año.",
 "measures": [
  "Limpieza y mantenimiento preventivo de bosques.",
  "Recuperación de usos forestales sostenibles.",
  "Aprovechamiento responsable de biomasa y madera.",
  "Recuperación de caminos y accesos forestales.",
  "Pastoreo controlado como herramienta de prevención cuando sea adecuado.",
  "Refuerzo de brigadas forestales y coordinación de emergencias."
 ],
 "pending": "Pendiente de auditoría jurídica, económica y técnica de los instrumentos, recursos y criterios de aplicación."
},
{
 "id": "proteccion-y-recuperacion-del-agua-y-los",
 "block": "Medio ambiente y sostenibilidad",
 "title": "Protección y recuperación del agua y los ecosistemas acuáticos",
 "desc": "Desarrollar una política nacional para proteger y recuperar los recursos hídricos y los ecosistemas acuáticos.",
 "goal": "Proteger el agua tanto como recurso de abastecimiento como elemento esencial de ecosistemas vivos.",
 "decision": "Decisión política aprobada: reducir la contaminación y recuperar los ecosistemas acuáticos, conciliando los usos del agua con los caudales ecológicos.",
 "measures": [
  "Reducir la contaminación de ríos, lagos, humedales y acuíferos.",
  "Recuperar cauces y zonas húmedas degradadas.",
  "Controlar vertidos industriales, agrícolas y urbanos.",
  "Proteger los ecosistemas fluviales y la biodiversidad acuática.",
  "Mejorar el tratamiento y la reutilización de aguas residuales.",
  "Compatibilizar el abastecimiento humano, agrícola e industrial con los caudales ecológicos."
 ],
 "pending": "Pendiente de auditoría jurídica, económica y técnica de las medidas y de su aplicación."
},
{
 "id": "residuos-y-economia-circular",
 "block": "Medio ambiente y sostenibilidad",
 "title": "Residuos y economía circular",
 "desc": "Establecer un modelo nacional que reduzca los residuos desde su origen y recupere el valor de los materiales.",
 "goal": "Convertir los residuos en recursos económicos, materias primas y oportunidades industriales.",
 "decision": "Decisión política aprobada: priorizar la reducción de residuos y la recuperación de materiales y productos.",
 "measures": [
  "Reducir envases y embalajes innecesarios.",
  "Mejorar la separación y recogida selectiva.",
  "Impulsar plantas de reciclaje y recuperación de materiales en España.",
  "Favorecer la reparación, reutilización y segunda vida de productos.",
  "Transformar residuos orgánicos en compost y otros recursos aprovechables.",
  "Reducir progresivamente el vertido.",
  "Controlar los residuos industriales peligrosos.",
  "Fomentar empresas que recuperen materiales y desarrollen nuevos usos para lo que actualmente se desecha."
 ],
 "pending": "Pendiente de auditoría jurídica, económica y técnica de los instrumentos y de su aplicación."
},
{
 "id": "contaminacion-movilidad-electrica-y-calidad",
 "block": "Medio ambiente y sostenibilidad",
 "title": "Contaminación, movilidad eléctrica y calidad ambiental",
 "desc": "Establecer un plan nacional para reducir la contaminación y mejorar la calidad ambiental en ciudades, pueblos y zonas industriales.",
 "goal": "Mejorar la calidad ambiental con objetivos medibles, controles periódicos y publicación de resultados. En movilidad eléctrica, ningún conductor debería tener que recorrer más de 50 km por carretera para encontrar un área de recarga operativa.",
 "decision": "Decisión política aprobada: reducir la contaminación, eliminar las restricciones urbanas de circulación basadas en emisiones según lo acordado, incentivar la compra de vehículos eléctricos y crear una red nacional de recarga.",
 "measures": [
  "Reducir la contaminación atmosférica en ciudades y zonas industriales.",
  "Controlar emisiones de industrias y transportes.",
  "Reducir contaminación acústica y lumínica.",
  "Eliminar vertederos ilegales y perseguir vertidos contaminantes.",
  "Recuperar suelos contaminados y espacios naturales degradados.",
  "Mejorar la calidad ambiental de pueblos y ciudades mediante zonas verdes y corredores naturales.",
  "Establecer objetivos medibles de reducción de contaminación, controles periódicos y publicación de resultados.",
  "Eliminar las restricciones actuales de circulación urbana basadas en emisiones, según la decisión política acordada.",
  "Favorecer la compra de vehículos eléctricos mediante incentivos económicos y fiscales.",
  "Crear una red nacional de recarga eléctrica.",
  "Objetivo de cobertura: ningún conductor debería tener que recorrer más de 50 km por carretera para encontrar un área de recarga eléctrica operativa."
 ],
 "pending": "Auditoría jurídica de la eliminación de restricciones urbanas frente a las obligaciones de calidad del aire y las competencias municipales. Auditoría técnica de la definición de cobertura, potencia, disponibilidad y distribución de los puntos de recarga."
},
{
 "id": "ministerios-dirigidos-por-profesionales",
 "block": "Estado y Administración",
 "title": "Ministerios dirigidos por profesionales independientes y seleccionados por mérito",
 "desc": "Profesionalizar los responsables y equipos directivos de los ministerios por su preparación, experiencia, conocimientos y méritos relacionados con cada área. El Gobierno y sus ministros mantienen la responsabilidad política y democrática derivada del sistema constitucional.",
 "goal": "Evitar que los puestos técnicos y directivos se conviertan en repartos partidistas, sin trasladar la responsabilidad política de los ministros.",
 "decision": "Decisión política aprobada: seleccionar responsables y equipos directivos ministeriales mediante criterios profesionales, públicos y transparentes.",
 "measures": [
  "Priorizar perfiles profesionales independientes y sin dependencia orgánica de partidos políticos.",
  "Seleccionar responsables en función de su CV, formación, experiencia, trayectoria y méritos acreditados.",
  "Exigir experiencia y conocimientos específicos relacionados con el área que van a dirigir.",
  "Establecer procedimientos públicos, transparentes y competitivos de selección.",
  "Evaluar la capacidad técnica y profesional de los candidatos.",
  "Evitar nombramientos basados exclusivamente en afinidad partidista, cuotas políticas o compromisos internos.",
  "Publicar los criterios de selección, perfiles profesionales y méritos relevantes.",
  "Establecer mecanismos de evaluación del desempeño y rendición de cuentas."
 ],
 "pending": "Pendiente de auditoría jurídica y administrativa para delimitar ministros, secretarios de Estado, subsecretarios, directores generales y otros puestos. No se presume que todos puedan convertirse directamente en puestos funcionariales o independientes sin reformas legales."
},
{
 "id": "soberania-alimentaria-produccion-nacional-y",
 "block": "Agricultura, ganadería y pesca",
 "title": "Soberanía alimentaria, producción nacional y comercio local",
 "desc": "Aumentar la producción alimentaria española, reducir la dependencia exterior y fortalecer los canales de comercialización de proximidad.",
 "goal": "Promover productos nacionales, de proximidad y de temporada, y facilitar que la producción llegue al consumidor a través de canales locales.",
 "decision": "Decisión política aprobada: reforzar la soberanía alimentaria y la producción nacional y local.",
 "measures": [
  "Aumentar la producción alimentaria española.",
  "Reducir la dependencia exterior.",
  "Favorecer el comercio local, mercados municipales, cooperativas y venta directa.",
  "Promover productos nacionales, de proximidad y de temporada."
 ],
 "pending": "Pendiente de auditoría económica, comercial y jurídica de los instrumentos de apoyo y su encaje normativo."
},
{
 "id": "rentabilidad-y-proteccion-de-los-productores",
 "block": "Agricultura, ganadería y pesca",
 "title": "Rentabilidad y protección de los productores",
 "desc": "Mejorar la rentabilidad y la capacidad negociadora de agricultores, ganaderos y pescadores, con mayor transparencia en la cadena de precios.",
 "goal": "Proteger a los productores y facilitar condiciones sostenibles para que las explotaciones y actividades pesqueras puedan continuar.",
 "decision": "Decisión política aprobada: proteger la remuneración y la capacidad negociadora de los productores.",
 "measures": [
  "Garantizar una remuneración justa para agricultores, ganaderos y pescadores.",
  "Evitar la comercialización sistemática por debajo de los costes efectivos de producción.",
  "Aumentar la transparencia de precios desde el origen hasta el consumidor.",
  "Mejorar la capacidad negociadora de los productores.",
  "Reducir burocracia y facilitar financiación, agua y energía competitivas."
 ],
 "pending": "Pendiente de auditoría jurídica y económica de las garantías sobre costes, transparencia de precios, financiación y acceso a recursos."
},
{
 "id": "modernizacion-tecnologica-y-relevo-generacional",
 "block": "Agricultura, ganadería y pesca",
 "title": "Modernización tecnológica y relevo generacional",
 "desc": "Modernizar las explotaciones y facilitar la incorporación de jóvenes al campo mediante tecnología, formación y mejores condiciones rurales.",
 "goal": "Mejorar la competitividad y continuidad de las explotaciones, facilitando el relevo generacional.",
 "decision": "Decisión política aprobada: impulsar la modernización tecnológica y facilitar el relevo generacional en el sector.",
 "measures": [
  "Impulsar agricultura de precisión, sensores, drones, robótica e inteligencia artificial.",
  "Modernizar maquinaria e instalaciones.",
  "Desarrollar riego inteligente.",
  "Facilitar el acceso de jóvenes a tierras, explotaciones y financiación.",
  "Mejorar conectividad, vivienda y servicios rurales para atraer jóvenes al campo."
 ],
 "pending": "Pendiente de auditoría técnica y económica de las medidas de modernización, conectividad, vivienda y acceso a financiación."
},
{
 "id": "proteccion-y-recuperacion-de-tierras-agricolas",
 "block": "Agricultura, ganadería y pesca",
 "title": "Protección y recuperación de tierras agrícolas",
 "desc": "Proteger las tierras de alto valor productivo, evitar su abandono y facilitar acuerdos voluntarios para que puedan volver a cultivarse.",
 "goal": "Mantener las tierras agrícolas productivas y facilitar el acceso a nuevos agricultores respetando la propiedad privada.",
 "decision": "Decisión política aprobada: proteger y recuperar tierras agrícolas y facilitar su uso mediante acuerdos voluntarios.",
 "measures": [
  "Proteger tierras de alto valor productivo.",
  "Evitar el abandono agrícola.",
  "Facilitar alquileres, cesiones y acuerdos voluntarios.",
  "Crear intermediación entre propietarios y nuevos agricultores.",
  "Respetar la propiedad privada."
 ],
 "pending": "Pendiente de auditoría jurídica y administrativa de las fórmulas de protección, alquiler, cesión e intermediación, garantizando el respeto a la propiedad privada."
},
{
 "id": "ganaderia-y-pesca-sostenibles-y-competitivas",
 "block": "Agricultura, ganadería y pesca",
 "title": "Ganadería y pesca sostenibles y competitivas",
 "desc": "Apoyar modelos ganaderos diversos, modernizar instalaciones y flotas, y promover pesca responsable y acuicultura sostenible.",
 "goal": "Mejorar la competitividad y sostenibilidad de la ganadería, la pesca y la acuicultura sin excluir modelos productivos por sistema.",
 "decision": "Decisión política aprobada: apoyar una ganadería y pesca competitivas, sostenibles y sujetas a bienestar animal, trazabilidad y eficiencia.",
 "measures": [
  "Apoyar ganadería extensiva e intensiva sin excluir modelos por sistema.",
  "Exigir bienestar animal, sostenibilidad, trazabilidad y eficiencia.",
  "Modernizar flotas e instalaciones.",
  "Impulsar pesca responsable y acuicultura sostenible.",
  "Combatir pesca ilegal y mejorar la comercialización nacional."
 ],
 "pending": "Pendiente de auditoría jurídica, económica y técnica de los requisitos de bienestar animal, sostenibilidad, flotas, pesca y acuicultura."
},
{
 "id": "cultura-accesible-y-participacion-cultural",
 "block": "Cultura, deporte y sociedad",
 "title": "Cultura accesible y participación cultural",
 "desc": "Facilitar el acceso a la cultura, acercar actividades a jóvenes y municipios rurales y apoyar a creadores y espacios culturales.",
 "goal": "Ampliar la participación cultural y favorecer el acceso a actividades y servicios en distintos territorios y colectivos.",
 "decision": "Decisión política aprobada: facilitar el acceso económico y territorial a la cultura y apoyar a quienes la hacen posible.",
 "measures": [
  "Facilitar acceso económico a museos, teatros, conciertos, exposiciones y actividades.",
  "Ofrecer entradas gratuitas o reducidas para determinados colectivos y actividades.",
  "Acercar la cultura a niños, jóvenes y municipios rurales.",
  "Apoyar artistas, creadores, bibliotecas y espacios culturales."
 ],
 "pending": "Pendiente de auditoría económica y administrativa de las medidas de acceso y apoyo."
},
{
 "id": "deporte-y-actividad-fisica-para-todos",
 "block": "Cultura, deporte y sociedad",
 "title": "Deporte y actividad física para todos",
 "desc": "Mejorar el acceso a instalaciones y actividades deportivas para personas de todas las edades y capacidades.",
 "goal": "Promover la práctica deportiva y la actividad física a lo largo de la vida.",
 "decision": "Decisión política aprobada: mejorar instalaciones y facilitar el acceso al deporte y la actividad física.",
 "measures": [
  "Mejorar instalaciones deportivas públicas.",
  "Ofrecer precios accesibles en polideportivos, piscinas y gimnasios.",
  "Promover deporte infantil, juvenil, adulto y para mayores.",
  "Apoyar deporte base, femenino y adaptado."
 ],
 "pending": "Pendiente de auditoría económica y técnica de instalaciones, precios y programas."
},
{
 "id": "juventud-asociaciones-y-financiacion-del",
 "block": "Cultura, deporte y sociedad",
 "title": "Juventud, asociaciones y financiación del deporte base",
 "desc": "Reforzar espacios juveniles, asociaciones y entidades de base, con financiación transparente y apoyo a actividades para infancia y juventud.",
 "goal": "Facilitar la participación de jóvenes y el desarrollo de clubes y entidades comunitarias.",
 "decision": "Decisión política aprobada: ampliar el apoyo presupuestario y práctico a clubes deportivos, asociaciones juveniles y entidades culturales y sociales.",
 "measures": [
  "Crear espacios juveniles y actividades culturales, deportivas y tecnológicas.",
  "Aumentar las partidas presupuestarias para clubes deportivos, asociaciones juveniles y entidades culturales y sociales.",
  "Priorizar actividades para infancia y juventud.",
  "Facilitar ayudas para material, instalaciones y entrenadores.",
  "Simplificar trámites y facilitar instalaciones públicas.",
  "Controlar el uso de las ayudas y sus resultados."
 ],
 "pending": "Pendiente de auditoría económica y administrativa de las partidas, criterios de ayudas, controles y resultados."
},
{
 "id": "patrimonio-tradiciones-y-bienestar-animal",
 "block": "Cultura, deporte y sociedad",
 "title": "Patrimonio, tradiciones y bienestar animal",
 "desc": "Conservar el patrimonio y las tradiciones compatibles con el bienestar animal, ayudando a adaptar celebraciones que impliquen maltrato.",
 "goal": "Proteger el patrimonio y la vida cultural local sin justificar el maltrato o sufrimiento animal.",
 "decision": "Decisión política aprobada: ninguna tradición justifica el maltrato o sufrimiento animal; las celebraciones que lo impliquen se sustituirán progresivamente por alternativas sin animales.",
 "measures": [
  "Conservar patrimonio histórico, arquitectónico e industrial.",
  "Proteger tradiciones y fiestas compatibles con el bienestar animal.",
  "Establecer que ninguna tradición justifica el maltrato o sufrimiento animal.",
  "Sustituir progresivamente las celebraciones que impliquen maltrato por alternativas culturales, musicales, gastronómicas y artísticas sin animales.",
  "Ayudar a municipios y asociaciones a adaptar sus celebraciones."
 ],
 "pending": "Pendiente de auditoría jurídica, económica y administrativa de los procesos de adaptación y apoyo."
},
{
 "id": "participacion-ciudadana-y-cohesion-social",
 "block": "Cultura, deporte y sociedad",
 "title": "Participación ciudadana y cohesión social",
 "desc": "Facilitar que los vecinos propongan y voten iniciativas culturales, deportivas y sociales y conozcan el uso de los presupuestos asociados.",
 "goal": "Fortalecer la participación local, el voluntariado y las iniciativas que conectan a distintas generaciones.",
 "decision": "Decisión política aprobada: ampliar la participación ciudadana y el apoyo a iniciativas locales y asociativas.",
 "measures": [
  "Crear partidas presupuestarias municipales para proyectos ciudadanos.",
  "Permitir que los vecinos propongan y voten iniciativas culturales, deportivas y sociales.",
  "Apoyar asociaciones y agrupaciones locales.",
  "Facilitar espacios públicos, voluntariado e iniciativas intergeneracionales.",
  "Publicar presupuestos, proyectos seleccionados y resultados."
 ],
 "pending": "Pendiente de auditoría jurídica y administrativa de los mecanismos municipales de participación y rendición de cuentas."
}
]
};
