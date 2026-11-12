// Contenido del programa. Edita aquí los textos.
// IMPORTANTE: no cambies el "id" de una medida ya publicada: los votos y comentarios van ligados a él.
// Para añadir una medida, copia un bloque { ... } y dale un id nuevo (minúsculas, números y guiones).
// Campos opcionales: "datos" (cifras destacadas: [["40.000 €","explicación"],…]) y "tablas" ([{t:"título",h:[cabeceras],r:[filas]}]).
// "plan" (texto del calendario 2027–2034, sale destacado) y "nota" (lista de frases bajo las tablas).
// Después de añadir o cambiar títulos, vuelve a ejecutar herramientas/generar.js (ver LEEME.txt).
window.PROGRAMA={
// Medidas que aparecen en "Para empezar" (por id)
destacadas:[
 "irpf-40000-euros-exentos",
 "tiempos-maximos-de-espera-garantizados",
 "vivienda-publica-en-alquiler-que-nunca-se-vende",
 "autonomos-sin-cuota-fija",
 "atencion-y-resolucion-en-10-dias",
 "revocacion-anticipada-del-gobierno"
],
bloques:[
 {"nombre":"Estado y Administración","color":"#82488f","icono":"bank"},
 {"nombre":"Transparencia y control político","color":"#774d99","icono":"eye"},
 {"nombre":"Fiscalidad y modelo económico","color":"#6b51a1","icono":"receipt"},
 {"nombre":"Empleo, autónomos y protección social","color":"#5d56a7","icono":"briefcase"},
 {"nombre":"Gasto público y sostenibilidad financiera","color":"#4c5caa","icono":"coins"},
 {"nombre":"Vivienda","color":"#3861aa","icono":"house-line"},
 {"nombre":"Sanidad","color":"#1a66a7","icono":"heartbeat","nota":"Estos objetivos se alcanzan de forma progresiva entre 2027 y 2034 y se financian con el ahorro de la administración y la reordenación del gasto."},
 {"nombre":"Educación","color":"#006ba1","icono":"graduation-cap","nota":"Estos objetivos se alcanzan de forma progresiva entre 2027 y 2034 y se financian con el ahorro de la administración y la reordenación del gasto."},
 {"nombre":"Industria y economía productiva","color":"#007099","icono":"factory"},
 {"nombre":"Justicia y seguridad","color":"#00738e","icono":"scales"},
 {"nombre":"Infraestructuras y territorio","color":"#007682","icono":"train-regional","nota":"Estos objetivos se alcanzan de forma progresiva entre 2027 y 2034 y se financian con el ahorro de la administración y la reordenación del gasto."},
 {"nombre":"Política internacional, inmigración y defensa","color":"#007873","icono":"globe-hemisphere-west"},
 {"nombre":"Medio ambiente y sostenibilidad","color":"#007964","icono":"leaf"},
 {"nombre":"Agricultura, ganadería y pesca","color":"#007953","icono":"grains"},
 {"nombre":"Cultura, deporte y sociedad","color":"#007742","icono":"mask-happy"}
],
propuestas:[
 {
  "id": "auditoria-del-sector-publico",
  "block": "Estado y Administración",
  "title": "Un Estado fuerte en servicios y ligero en burocracia",
  "desc": "Auditar todos los organismos, agencias, consorcios, fundaciones y empresas públicas. Se mantienen los útiles, se fusionan los duplicados y se eliminan los que no tengan suficiente utilidad pública.",
  "goal": "Dedicar más recursos a prestar servicios —sanidad, educación, pensiones, infraestructuras y seguridad— que a mantener estructuras administrativas.",
  "datos": [
   [
    "8",
    "criterios de evaluación por organismo"
   ]
  ],
  "measures": [
   "Evaluar de cada organismo: coste total, personal y directivos, funciones, resultados, duplicidades, utilidad pública, costes de transición y ahorro neto real.",
   "Mantener los organismos útiles.",
   "Fusionar los duplicados.",
   "Eliminar los que no tengan suficiente utilidad pública.",
   "Auditar todos los procedimientos y eliminar permisos, certificados y trámites sin utilidad pública.",
   "Revisar periódicamente las normas que generan cargas innecesarias."
  ]
 },
 {
  "id": "ministerios-dirigidos-por-profesionales",
  "block": "Estado y Administración",
  "title": "Ministerios dirigidos por profesionales independientes y seleccionados por mérito",
  "desc": "Profesionalizar los responsables y equipos directivos de los ministerios por su preparación, experiencia, conocimientos y méritos relacionados con cada área. El Gobierno y sus ministros mantienen la responsabilidad política y democrática derivada del sistema constitucional.",
  "goal": "Evitar que los puestos técnicos y directivos se conviertan en repartos partidistas, sin trasladar la responsabilidad política de los ministros.",
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
  "pending": "Delimitar jurídicamente los puestos de ministro, secretario de Estado, subsecretario, director general y otros cargos."
 },
 {
  "id": "competencias-esenciales-iguales-en-toda-espana",
  "block": "Estado y Administración",
  "title": "Sanidad, educación, fiscalidad y seguridad iguales en toda España",
  "desc": "El Estado asume la legislación, la financiación y la dirección de las cuatro áreas esenciales. Las comunidades autónomas se mantienen, las gestionan en su territorio y conservan parlamentos elegidos con competencias propias.",
  "goal": "Que los derechos y servicios esenciales no dependan de la comunidad en la que se viva.",
  "datos": [
   [
    "4",
    "áreas esenciales con una sola legislación"
   ],
   [
    "7",
    "materias que siguen siendo autonómicas"
   ]
  ],
  "measures": [
   "El Estado legisla, financia y dirige sanidad, educación, fiscalidad y seguridad.",
   "Las comunidades autónomas ejecutan y gestionan territorialmente esas políticas, sin legislación independiente en ellas.",
   "Los parlamentos autonómicos se mantienen y siguen siendo elegidos directamente por los ciudadanos.",
   "Competencias autonómicas: cultura, patrimonio histórico, lenguas cooficiales, ordenación territorial y urbanismo, turismo, medio ambiente y movilidad regional, dentro del marco estatal.",
   "El presidente autonómico es elegido por su parlamento y dirige la administración territorial."
  ]
 },
 {
  "id": "diputaciones-y-municipios-sin-duplicidades",
  "block": "Estado y Administración",
  "title": "Diputaciones y municipios sin duplicidades",
  "desc": "Auditar diputaciones, organismos provinciales y estructuras intermedias para eliminar duplicidades, manteniendo los servicios compartidos que necesitan los municipios pequeños.",
  "goal": "Mejores servicios locales con menos estructura, sin perder identidad ni representación local.",
  "measures": [
   "Auditar diputaciones, organismos provinciales y estructuras intermedias.",
   "Eliminar duplicidades.",
   "Mantener servicios compartidos cuando sean necesarios para municipios pequeños.",
   "Evaluar individualmente la viabilidad de los municipios y fomentar servicios compartidos.",
   "Las fusiones o reorganizaciones municipales serán voluntarias y justificadas por razones económicas y de servicio.",
   "Mantener la identidad y la representación local."
  ]
 },
 {
  "id": "fin-de-los-privilegios-politicos",
  "block": "Estado y Administración",
  "title": "Fin de los privilegios políticos",
  "desc": "Publicar salarios, dietas, viajes y gastos de representación, y suprimir los privilegios que no tienen justificación. Los cargos públicos tendrán el mismo sistema de pensiones que el resto.",
  "goal": "Que quien ocupa un cargo público tenga las mismas reglas que cualquier ciudadano.",
  "measures": [
   "Publicar salarios, dietas, viajes y gastos de representación.",
   "No pagar dietas por asistencia si no hay asistencia efectiva.",
   "Limitar los vehículos oficiales a necesidades justificadas.",
   "Limitar y transparentar asesores y personal eventual.",
   "Suprimir indemnizaciones posteriores al cargo y pensiones especiales injustificadas.",
   "Aplicar a los cargos públicos el sistema general de pensiones."
  ]
 },
 {
  "id": "empleo-publico-profesional-y-evaluado",
  "block": "Estado y Administración",
  "title": "Empleo público profesional y evaluado",
  "desc": "Nuevo modelo de empleo público para prácticamente toda la Administración: contratos indefinidos como regla, periodo de prueba, evaluación periódica del desempeño y dirección profesional seleccionada por mérito, no por los partidos.",
  "goal": "Una Administración que premie el buen trabajo y pueda corregir el malo, con garantías para sus empleados.",
  "datos": [
   [
    "4 años",
    "de implantación progresiva"
   ]
  ],
  "tablas": [
   {
    "t": "Calendario de transición",
    "h": [
     "Año",
     "Qué se hace"
    ],
    "r": [
     [
      "1",
      "Auditoría y reformas legales"
     ],
     [
      "2",
      "Nuevos sistemas de selección, evaluación y dirección"
     ],
     [
      "3",
      "Adaptación y reorganización"
     ],
     [
      "4",
      "Aplicación completa, auditoría y corrección"
     ]
    ]
   }
  ],
  "measures": [
   "Contratos permanentes o indefinidos como regla general, con periodo de prueba; temporales solo para necesidades realmente temporales.",
   "Evaluación periódica con indicadores objetivos y objetivos conocidos, que mida calidad y no solo cantidad.",
   "Planes de mejora, derecho a recurrir la evaluación y revisión independiente.",
   "Extinción contractual solo por causas justificadas y conforme a la ley; protección frente a represalias políticas, personales o sindicales.",
   "Responsables de departamento seleccionados por procedimientos profesionales abiertos, con autonomía para organizar equipos.",
   "Salario base según responsabilidad, cualificación y experiencia, más un componente variable ligado al desempeño.",
   "Se respetan los derechos adquiridos: no se convierte unilateralmente a los empleados actuales a otro régimen."
  ],
  "pending": "Excepciones para funciones que requieran independencia o ejercicio de autoridad pública."
 },
 {
  "id": "administracion-digital-unica",
  "block": "Estado y Administración",
  "title": "Una sola Administración digital",
  "desc": "Identidad digital única y una plataforma común para los servicios estatales, autonómicos y municipales. El ciudadano no tendrá que presentar documentos que la Administración ya tiene, y podrá ver quién ha consultado sus datos.",
  "goal": "Que los trámites sean sencillos y que las ayudas lleguen solas a quien tiene derecho a ellas.",
  "datos": [
   [
    "1",
    "identidad digital para las tres administraciones"
   ]
  ],
  "measures": [
   "Identidad digital única y plataforma administrativa común.",
   "No pedir al ciudadano documentos que la Administración ya tenga.",
   "Concesión y renovación automática de ayudas cuando se cumplan requisitos verificables.",
   "Cruce de datos entre administraciones para detectar errores y posibles fraudes.",
   "Las decisiones desfavorables deberán estar motivadas y permitir revisión humana y recurso.",
   "Cada organismo accede solo a los datos necesarios; se registran los accesos y el ciudadano puede consultarlos.",
   "Sanciones por accesos no autorizados y auditorías periódicas de seguridad y privacidad.",
   "Se mantienen las oficinas presenciales y la atención telefónica."
  ],
  "pending": "Se centraliza el acceso y la interoperabilidad, sin presuponer que todos los datos sensibles se almacenen en una única base física."
 },
 {
  "id": "atencion-y-resolucion-en-10-dias",
  "block": "Estado y Administración",
  "title": "Cita en 10 días y trámites sencillos resueltos en 10 días",
  "desc": "Dos compromisos medibles: atención presencial en un máximo de 10 días naturales desde que se pide cita, y resolución de los procedimientos sencillos en un máximo de 10 días desde que la documentación está completa.",
  "goal": "Poner plazo a la Administración, igual que la Administración se lo pone al ciudadano.",
  "datos": [
   [
    "10 días",
    "máximo para tener cita presencial"
   ],
   [
    "10 días",
    "máximo para resolver un trámite sencillo"
   ],
   [
    "8:00–20:00",
    "horario de oficinas, de lunes a viernes"
   ]
  ],
  "measures": [
   "Cita y atención presencial en un máximo de 10 días naturales desde la solicitud.",
   "Resolución de procedimientos sencillos en un máximo de 10 días desde que la documentación esté completa.",
   "Oficinas abiertas de lunes a viernes en horario escalonado de 8:00 a 20:00, con cita previa.",
   "Prioridad para personas mayores, con discapacidad o en situación de exclusión digital.",
   "Plantillas adaptadas a la demanda.",
   "Los procedimientos complejos tendrán excepciones definidas por ley, justificadas, comunicadas y controladas."
  ]
 },
 {
  "id": "registro-publico-de-promesas-electorales",
  "block": "Transparencia y control político",
  "title": "Cada promesa electoral, con coste, plazo y responsable",
  "desc": "Registro oficial de programas electorales. Cada medida debe llevar su objetivo, plazo, presupuesto, financiación, responsable e indicadores, y un panel público mostrará cada trimestre si se está cumpliendo.",
  "goal": "Que prometer sin explicar cómo se paga deje de salir gratis.",
  "datos": [
   [
    "6",
    "datos obligatorios por promesa"
   ],
   [
    "Cada 3 meses",
    "seguimiento público"
   ]
  ],
  "measures": [
   "Registro oficial de programas electorales, archivado tras las elecciones.",
   "Cada promesa incluye objetivo, plazo, presupuesto, financiación, responsable e indicadores.",
   "Seguimiento trimestral y panel público de cumplimiento.",
   "Auditoría independiente.",
   "Los cambios quedan documentados: no se pueden ocultar los compromisos incumplidos.",
   "Se distingue el incumplimiento por mala gestión del causado por circunstancias externas o bloqueos parlamentarios."
  ]
 },
 {
  "id": "revocacion-anticipada-del-gobierno",
  "block": "Transparencia y control político",
  "title": "Revocación anticipada del Gobierno",
  "desc": "Los ciudadanos podrán iniciar un proceso para revocar al Gobierno si incumple compromisos fundamentales. Se activa con las firmas del 10% del censo electoral y se decide en referéndum.",
  "goal": "Que el voto no sea un cheque en blanco durante cuatro años.",
  "datos": [
   [
    "10%",
    "del censo electoral para activarla"
   ],
   [
    "1 vez",
    "como máximo por legislatura"
   ],
   [
    "Año 1",
    "excluido: no puede activarse"
   ]
  ],
  "measures": [
   "Umbral de activación: firmas del 10% del censo electoral nacional.",
   "Firmas digitales y físicas verificadas por una autoridad electoral independiente.",
   "No puede activarse durante el primer año de legislatura, y solo una vez por legislatura.",
   "Exige justificación pública y memoria de cumplimiento.",
   "Si el referéndum prospera, cesa el Gobierno y se convocan nuevas elecciones.",
   "Un Gobierno en funciones garantiza la continuidad administrativa."
  ],
  "pending": "Requiere una reforma constitucional y un diseño jurídico compatible con el sistema representativo."
 },
 {
  "id": "autoridad-independiente-de-evaluacion",
  "block": "Transparencia y control político",
  "title": "Una autoridad internacional independiente que evalúe al Gobierno",
  "desc": "Organismo independiente del Gobierno y de los partidos, formado por miembros internacionales elegidos por criterios profesionales y sorteo verificable, que comprueba presupuestos, costes y resultados y declara cada medida cumplida, parcialmente cumplida o incumplida.",
  "goal": "Que el cumplimiento del programa lo certifique alguien que no dependa de quien gobierna.",
  "datos": [
   [
    "3",
    "veredictos: cumplida, parcial o incumplida"
   ],
   [
    "0 €",
    "de donaciones privadas o de partidos"
   ]
  ],
  "measures": [
   "Miembros internacionales seleccionados por criterios profesionales y éticos, mediante sorteo verificable, con diversidad geográfica y jurídica.",
   "Mandatos limitados, rotación y control de conflictos de intereses.",
   "Identidad no pública, verificable confidencialmente por un custodio jurídico independiente: el anonimato no equivale a ausencia de control.",
   "Puede exigir documentación, ordenar auditorías y verificar presupuestos, costes y resultados.",
   "Publica metodología, evidencias y razonamientos; informe trimestral, auditoría anual y auditoría final de legislatura.",
   "Remite los indicios de delito a los tribunales. No impone penas ni cesa gobiernos, y sus decisiones pueden recurrirse.",
   "Presupuesto público plurianual protegido por ley, con auditoría externa y publicación anual de gastos."
  ]
 },
 {
  "id": "resultados-de-la-administracion-cada-trimestre",
  "block": "Transparencia y control político",
  "title": "Los resultados de la Administración, publicados cada trimestre",
  "desc": "Publicar cada tres meses cuánto cuesta cada servicio, cuánto tarda y cómo lo valoran los ciudadanos, con una auditoría independiente cada año.",
  "goal": "Que cualquiera pueda comprobar con datos si un servicio público funciona.",
  "datos": [
   [
    "Cada 3 meses",
    "publicación de resultados"
   ],
   [
    "1 al año",
    "auditoría independiente"
   ]
  ],
  "measures": [
   "Coste por servicio y por ciudadano.",
   "Tiempos de tramitación.",
   "Listas de espera sanitarias y judiciales.",
   "Satisfacción ciudadana y cumplimiento de objetivos.",
   "Absentismo, rotación y ahorros conseguidos.",
   "Auditorías anuales independientes."
  ]
 },
 {
  "id": "contratacion-publica-sin-enchufes",
  "block": "Transparencia y control político",
  "title": "Contratación pública sin enchufes",
  "desc": "Registro público de contrataciones, puestos, salarios y criterios de selección, con declaración obligatoria de conflictos de intereses y protección para quien denuncie.",
  "goal": "Acabar con el nepotismo en la Administración.",
  "measures": [
   "Registro público de contrataciones, puestos, salarios y criterios.",
   "Declaración de conflictos de intereses.",
   "Abstención obligatoria en decisiones con conflictos personales, familiares o económicos.",
   "Auditorías aleatorias.",
   "Sanciones.",
   "Protección de denunciantes."
  ]
 },
 {
  "id": "transparencia-de-ayudas-a-empresas",
  "block": "Transparencia y control político",
  "title": "Todas las ayudas a empresas, a la vista",
  "desc": "Registro público de quién recibe ayudas e incentivos, cuánto, a qué se comprometió y qué ha cumplido. Las empresas que superen 500.000 € anuales en incentivos tendrán auditoría independiente obligatoria.",
  "goal": "Saber qué se consigue con cada euro público que va a una empresa.",
  "datos": [
   [
    "500.000 €",
    "en incentivos al año: auditoría obligatoria"
   ]
  ],
  "measures": [
   "Se publican beneficiarios, importe, inversión comprometida y realizada, empleo, sector y resultados.",
   "Se publican incumplimientos y devoluciones.",
   "Auditoría independiente obligatoria por encima de 500.000 € acumulados de incentivos anuales.",
   "Por debajo de ese importe: documentación y controles aleatorios."
  ]
 },
 {
  "id": "autonomos-sin-cuota-fija",
  "block": "Fiscalidad y modelo económico",
  "title": "Autónomos: sin cuota fija y pagando según el beneficio",
  "desc": "Se elimina la cuota mensual fija. El autónomo tributa y cotiza sobre su beneficio neto, no sobre lo que factura: si no hay beneficio, no paga. Por debajo de 85.000 € de facturación, IVA simplificado o franquicia.",
  "plan": "Desde 2027: cuota cero cuando no hay beneficio, primer paso de la cotización por beneficio real y franquicia de IVA para facturación inferior a 85.000 €. La tabla completa del 2% al 10% llega después de 2034.",
  "goal": "Que empezar una actividad no cueste dinero antes de ganarlo.",
  "datos": [
   [
    "0 €",
    "de cuota cuando no hay beneficio, desde 2027"
   ],
   [
    "85.000 €",
    "de facturación: IVA simplificado o franquicia"
   ],
   [
    "2–10%",
    "cotización según beneficio"
   ]
  ],
  "tablas": [
   {
    "t": "Cotización final (después de 2034)",
    "h": [
     "Beneficio anual",
     "Cotización"
    ],
    "r": [
     [
      "Hasta 12.000 €",
      "2%"
     ],
     [
      "12.000–24.000 €",
      "4%"
     ],
     [
      "24.000–40.000 €",
      "6%"
     ],
     [
      "40.000–60.000 €",
      "8%"
     ],
     [
      "Más de 60.000 €",
      "10%"
     ]
    ]
   }
  ],
  "measures": [
   "Eliminar la cuota mensual fija.",
   "Tributación sobre el beneficio neto, no sobre la facturación.",
   "Régimen propio, separado del IRPF salarial.",
   "IVA simplificado o franquicia para facturación inferior a 85.000 €.",
   "Sin beneficio: cero impuesto sobre el beneficio y cero cotización."
  ]
 },
 {
  "id": "irpf-40000-euros-exentos",
  "block": "Fiscalidad y modelo económico",
  "title": "IRPF: 30.000 € de salario libres en 2034, con 40.000 € como objetivo",
  "desc": "Mínimo exento para rentas salariales: 30.000 € anuales en 2034. El objetivo final es 40.000 €. La tarifa final tiene cuatro tramos marginales del 15% al 30%, y tener varios pagadores deja de penalizar.",
  "goal": "Aumentar la renta disponible de quienes viven de su salario, manteniendo la progresividad.",
  "datos": [
   [
    "30.000 €",
    "de salario libre de IRPF en 2034"
   ],
   [
    "40.000 €",
    "objetivo final"
   ]
  ],
  "tablas": [
   {
    "t": "Calendario del salario libre de IRPF",
    "h": [
     "Año",
     "Salario libre de IRPF"
    ],
    "r": [
     [
      "Hoy",
      "Unos 17.100 €"
     ],
     [
      "2028",
      "20.000 €"
     ],
     [
      "2029",
      "22.500 €"
     ],
     [
      "2030",
      "25.000 €"
     ],
     [
      "2032",
      "27.500 €"
     ],
     [
      "2034",
      "30.000 €"
     ]
    ]
   },
   {
    "t": "Tarifa final (después de 2034)",
    "h": [
     "Tramo de salario",
     "Tipo"
    ],
    "r": [
     [
      "Hasta 40.000 €",
      "0%"
     ],
     [
      "40.000–50.000 €",
      "15%"
     ],
     [
      "50.000–65.000 €",
      "20%"
     ],
     [
      "65.000–80.000 €",
      "25%"
     ],
     [
      "Más de 80.000 €",
      "30%"
     ]
    ]
   }
  ],
  "nota": [
   "Hasta 2034, por encima del mínimo exento se mantienen los tipos actuales. El mínimo exento se aplica a salarios; las pensiones mantienen su tributación actual durante el plan."
  ],
  "measures": [
   "El mínimo exento se calcula sobre el salario bruto anual antes de cotizaciones sociales.",
   "Los tipos son marginales: cada porcentaje se aplica solo a su tramo.",
   "Un solo mínimo exento por persona; los salarios de varios pagadores se suman, sin penalización.",
   "Coordinación automática de retenciones y fin del umbral especial de declaración por varios pagadores.",
   "No se aplica a rentas de inversión, rentas inmobiliarias ni al beneficio de autónomos, que tienen su propio régimen."
  ]
 },
 {
  "id": "creditos-familiares-de-1200-euros",
  "block": "Fiscalidad y modelo económico",
  "title": "1.200 € al año por cada hijo o adulto dependiente",
  "desc": "Crédito fiscal de 1.200 € anuales por cada hijo dependiente y por cada adulto dependiente. Es reembolsable: se cobra aunque supere lo que se paga de impuestos, y no hay límite de dependientes por hogar.",
  "plan": "Calendario: menores de 18 años y adultos dependientes, desde 2029; jóvenes de 18 a 25 años, desde 2032.",
  "goal": "Apoyar a quien mantiene a otras personas, también cuando sus ingresos son bajos.",
  "datos": [
   [
    "1.200 €",
    "al año por cada dependiente"
   ],
   [
    "Sin límite",
    "de dependientes por hogar"
   ]
  ],
  "measures": [
   "1.200 € anuales por hijo dependiente y 1.200 € por adulto dependiente.",
   "Reembolsables aunque superen la cuota tributaria.",
   "Menores de 18 años: reconocimiento automático.",
   "De 18 a 25 años: si estudian, tienen bajos ingresos propios y dependen económicamente.",
   "A partir de 26 años: con discapacidad o dependencia reconocida.",
   "Adultos dependientes: discapacidad o dependencia oficial, o bajos ingresos con apoyo económico regular.",
   "Un único crédito por dependiente, repartido entre quienes lo mantienen; en custodia compartida, 50/50 salvo acuerdo o resolución judicial."
  ],
  "pending": "Umbrales de renta, residencia y acreditación."
 },
 {
  "id": "deducciones-personales-reembolsables",
  "block": "Fiscalidad y modelo económico",
  "title": "Deducciones por alquiler, hipoteca, formación y cuidados",
  "desc": "Ocho deducciones reembolsables por gastos documentados, con un tope global de 6.000 € al año por contribuyente. Los créditos familiares quedan fuera de ese tope.",
  "plan": "Desde 2032 se aplican tres deducciones, con la mitad de su límite final: alquiler de vivienda habitual (15%, hasta 750 €), intereses de hipoteca habitual (15%, hasta 750 €) y familia y cuidados (20%, hasta 1.000 €). Las demás deducciones y los límites completos llegan después de 2034.",
  "goal": "Devolver parte de lo que las familias gastan en vivienda, formación, cuidados y ahorro.",
  "datos": [
   [
    "6.000 €",
    "tope anual por contribuyente"
   ],
   [
    "8",
    "conceptos deducibles"
   ]
  ],
  "tablas": [
   {
    "t": "Deducciones finales (después de 2034)",
    "h": [
     "Concepto",
     "Deducción",
     "Límite"
    ],
    "r": [
     [
      "Alquiler de vivienda habitual",
      "15%",
      "1.500 €"
     ],
     [
      "Intereses de hipoteca habitual",
      "15%",
      "1.500 €"
     ],
     [
      "Rehabilitación y accesibilidad",
      "20%",
      "3.000 €"
     ],
     [
      "Eficiencia energética",
      "25%",
      "2.500 €"
     ],
     [
      "Educación y formación",
      "20%",
      "1.500 €"
     ],
     [
      "Familia y cuidados",
      "20%",
      "2.000 €"
     ],
     [
      "Donaciones admitidas",
      "30%",
      "10% de la base"
     ],
     [
      "Ahorro e inversión productiva",
      "15%",
      "2.000 €"
     ]
    ]
   }
  ],
  "measures": [
   "Educación: FP, universidad, idiomas, competencias digitales y reciclaje profesional.",
   "Familia: guardería de 0 a 3 años, cuidado fuera del horario escolar, atención domiciliaria a dependientes y asistencia a personas con discapacidad.",
   "Donaciones a entidades registradas sociales, científicas, médicas, culturales, patrimoniales y medioambientales.",
   "Inversión: permanencia mínima de cinco años, con excepciones por enfermedad grave, discapacidad, desempleo prolongado o fallecimiento.",
   "Los autónomos también pueden usarlas; sus gastos profesionales se deducen aparte.",
   "No se deducen gastos ya financiados públicamente ni se duplican deducciones."
  ]
 },
 {
  "id": "un-solo-impuesto-por-cada-hecho",
  "block": "Fiscalidad y modelo económico",
  "title": "Un solo impuesto por cada hecho, y los mismos en toda España",
  "desc": "Cada hecho imponible genera una única figura tributaria: Estado, comunidades y municipios comparten la recaudación en lugar de solapar impuestos. Mismas bases, tipos y deducciones en todo el país.",
  "goal": "Un sistema que se entienda, sin dobles imposiciones ni diferencias según dónde se viva.",
  "measures": [
   "Una única figura tributaria por hecho imponible; las administraciones comparten la recaudación.",
   "Mismas bases imponibles, tipos, deducciones y bonificaciones en toda España.",
   "Reparto de ingresos por criterios objetivos: población, necesidades, coste de servicios, envejecimiento y dispersión territorial.",
   "Los municipios no crean impuestos propios: se financian con participación en los ingresos tributarios nacionales.",
   "Los municipios pueden cobrar tasas vinculadas al coste real del servicio, sin convertirlas en impuestos encubiertos.",
   "Cada impuesto debe justificar su existencia."
  ],
  "pending": "Concretar la definición de hecho imponible para evitar dobles imposiciones reales y aparentes."
 },
 {
  "id": "sin-impuestos-de-patrimonio-sucesiones-y-donaciones",
  "block": "Fiscalidad y modelo económico",
  "title": "Sin impuestos de Patrimonio, Sucesiones ni Donaciones",
  "desc": "Se eliminan los tres como figuras independientes. Lo heredado o donado no tributa al recibirse: solo se grava la ganancia real, descontada la inflación, cuando el receptor lo vende.",
  "plan": "Se eliminan en 2030.",
  "goal": "No gravar dos veces lo que ya pagó impuestos, ni obligar a vender para heredar.",
  "datos": [
   [
    "3",
    "impuestos eliminados"
   ],
   [
    "0 €",
    "al recibir una herencia o donación"
   ]
  ],
  "measures": [
   "Eliminar el Impuesto sobre el Patrimonio, el de Sucesiones y el de Donaciones.",
   "Al heredar o recibir una donación se mantiene el coste histórico de adquisición, actualizado por inflación.",
   "Se suman los gastos originales de adquisición y las mejoras acreditadas.",
   "Solo se grava la ganancia real cuando el receptor vende.",
   "Mismo criterio para bienes en el extranjero, respetando impuestos extranjeros y convenios de doble imposición.",
   "Se mantienen mecanismos contra transferencias simuladas y fraude."
  ]
 },
 {
  "id": "ahorro-e-inversion-solo-ganancias-reales",
  "block": "Fiscalidad y modelo económico",
  "title": "Ahorro e inversión: solo tributan las ganancias reales",
  "desc": "Nunca se grava el capital ni las plusvalías no realizadas. Las ganancias se ajustan por inflación y tributan en cuatro tramos del 10% al 25%.",
  "plan": "Se aplica desde 2033.",
  "goal": "No cobrar impuestos por una subida de precios que solo es inflación.",
  "datos": [
   [
    "10–25%",
    "tipos sobre la ganancia real"
   ],
   [
    "5 años",
    "para compensar pérdidas"
   ]
  ],
  "tablas": [
   {
    "t": "Tipos marginales sobre ganancias reales",
    "h": [
     "Ganancia real",
     "Tipo"
    ],
    "r": [
     [
      "Hasta 5.000 €",
      "10%"
     ],
     [
      "5.000–20.000 €",
      "15%"
     ],
     [
      "20.000–50.000 €",
      "20%"
     ],
     [
      "Más de 50.000 €",
      "25%"
     ]
    ]
   }
  ],
  "measures": [
   "Solo se gravan ganancias realizadas.",
   "Ajuste por inflación y reconocimiento de gastos de adquisición y transacción.",
   "Compensación de pérdidas entre inversiones, durante un máximo de cinco años.",
   "Dividendos integrados teniendo en cuenta el impuesto de sociedades ya pagado, para evitar la doble imposición.",
   "Segundas residencias: sin impuesto por su mera propiedad; en la venta tributa la ganancia real, y en el alquiler el beneficio neto."
  ]
 },
 {
  "id": "iva-en-tres-tipos",
  "block": "Fiscalidad y modelo económico",
  "title": "IVA en tres tipos: 0%, 10% y 18%",
  "desc": "Productos esenciales al 0% desde 2027, consumo común al 10% y un tipo general que baja al 20% en 2031 y al 19% en 2033, con el 18% como objetivo final.",
  "goal": "Abaratar lo esencial y simplificar el impuesto.",
  "datos": [
   [
    "0%",
    "productos esenciales, desde 2027"
   ],
   [
    "19%",
    "tipo general en 2033"
   ],
   [
    "18%",
    "tipo general, objetivo final"
   ]
  ],
  "tablas": [
   {
    "t": "Tipos de IVA",
    "h": [
     "Tipo",
     "Hoy",
     "Plan 2027–2034",
     "Objetivo final"
    ],
    "r": [
     [
      "Productos esenciales",
      "4%",
      "0% desde 2027",
      "0%"
     ],
     [
      "Consumo común",
      "10%",
      "10%",
      "10%"
     ],
     [
      "General",
      "21%",
      "20% en 2031 y 19% en 2033",
      "18%"
     ]
    ]
   }
  ],
  "pending": "Comprobar la compatibilidad con la Directiva europea del IVA y las categorías que admite para tipos reducidos o cero."
 },
 {
  "id": "impuesto-de-sociedades-por-tamano",
  "block": "Fiscalidad y modelo económico",
  "title": "Impuesto de sociedades del 10% al 18% según tamaño",
  "desc": "Tipos nominales progresivos según el tamaño de la empresa, y un tipo del 5% durante los dos primeros ejercicios con beneficio para las empresas nuevas.",
  "goal": "Que las empresas pequeñas paguen menos y crecer no se castigue de golpe.",
  "datos": [
   [
    "10%",
    "microempresas, desde 2027"
   ],
   [
    "18%",
    "grandes empresas, en 2034"
   ],
   [
    "5%",
    "empresas nuevas, desde 2027"
   ]
  ],
  "tablas": [
   {
    "t": "Tipos por tamaño de empresa",
    "h": [
     "Empresa",
     "Tipo",
     "Desde"
    ],
    "r": [
     [
      "Microempresa",
      "10%",
      "2027"
     ],
     [
      "Pequeña",
      "12%",
      "2027"
     ],
     [
      "Mediana",
      "15%",
      "2030"
     ],
     [
      "Grande",
      "23% en 2033 y 18% en 2034",
      "2033"
     ]
    ]
   }
  ],
  "measures": [
   "Clasificación por facturación, trabajadores y beneficio neto.",
   "Se agregan grupos y empresas vinculadas para evitar la fragmentación artificial.",
   "Empresas nuevas (se aplica desde 2027): tipo del 5% en los dos primeros ejercicios con beneficio positivo, con actividad real en España.",
   "No vale para empresas creadas por escisión solo para beneficiarse del tipo reducido.",
   "Las deducciones no pueden reducir más del 70% de la cuota bruta: siempre se paga al menos el 30%.",
   "Las deducciones no usadas se pueden aplicar durante diez ejercicios."
  ]
 },
 {
  "id": "incentivos-a-la-inversion-productiva",
  "block": "Fiscalidad y modelo económico",
  "title": "Menos impuestos para la empresa que invierte, investiga y forma",
  "desc": "Deducciones para inversiones reales: 40% en I+D+i, 30% en digitalización, 30% en energía y medio ambiente y 30% en formación, con un 10% adicional en sectores estratégicos.",
  "plan": "Calendario: la deducción del 40% en I+D+i se aplica desde 2027. Las deducciones de digitalización, energía y medio ambiente, formación y sectores estratégicos llegan después de 2034.",
  "goal": "Que el beneficio que se reinvierte en España tribute menos que el que no.",
  "datos": [
   [
    "40%",
    "deducción en I+D+i"
   ],
   [
    "30%",
    "digitalización, energía y formación"
   ],
   [
    "+10%",
    "en sectores estratégicos"
   ],
   [
    "3 años",
    "para invertir la reserva de beneficios"
   ]
  ],
  "measures": [
   "40% en I+D+i acreditada: personal investigador, tecnología, prototipos, patentes y colaboración con universidades.",
   "30% en digitalización: ERP, CRM, sistemas industriales, IA, ciberseguridad y automatización.",
   "30% en inversiones energéticas y ambientales: autoconsumo, baterías, electrificación y maquinaria eficiente.",
   "30% en formación acreditada: técnica, industrial, robótica, IA, idiomas, seguridad y reciclaje.",
   "Reserva de beneficios: diferimiento fiscal de lo retenido para invertir en España en un máximo de tres años; si no se invierte, se regulariza con intereses.",
   "Se exige mantenimiento de los activos, justificación, auditoría y ausencia de ayudas duplicadas."
  ],
  "pending": "Importes y límites de algunas deducciones."
 },
 {
  "id": "lucha-contra-el-fraude-fiscal",
  "block": "Fiscalidad y modelo económico",
  "title": "Fraude fiscal: detección con IA, multas de hasta el 100%",
  "desc": "Cruce de datos e inteligencia artificial para detectar el fraude, siempre con investigación humana antes de sancionar. Se distingue el error de buena fe del fraude deliberado, que prescribe a los 20 años.",
  "goal": "Perseguir al que defrauda a propósito sin tratar como delincuente al que se equivoca.",
  "datos": [
   [
    "100%",
    "multa máxima sobre lo defraudado"
   ],
   [
    "20 años",
    "de prescripción"
   ],
   [
    "5 años",
    "sin ayudas ni contratos públicos"
   ],
   [
    "−50%",
    "de multa por regularizar antes de la inspección"
   ]
  ],
  "measures": [
   "Detección mediante IA y cruce de datos con autorización legal; investigación humana, explicación de motivos y derecho de defensa.",
   "Error involuntario de buena fe: corrección o regularización, sin sanción cuando corresponda.",
   "Negligencia grave: devolución más sanción proporcional.",
   "Fraude deliberado: devolución, intereses y multa de hasta el 100% de lo defraudado, y remisión a Fiscalía.",
   "Regularización voluntaria antes de la inspección: reducción del 50% de la multa; se pierde si se reincide en cinco años.",
   "Empresas condenadas por fraude deliberado: cinco años sin ayudas ni contratación pública.",
   "Inspección independiente, seleccionada por mérito, sin comisiones ligadas a multas o recaudación y con rotación cada cuatro años.",
   "Sin registro público nominal de defraudadores: se publican estadísticas agregadas cada año."
  ]
 },
 {
  "id": "multinacionales-y-deslocalizacion",
  "block": "Fiscalidad y modelo económico",
  "title": "Multinacionales: tributar aquí por lo que se gana aquí",
  "desc": "Las multinacionales tributan en España por la actividad real que realizan en España. Quien reciba ayudas públicas y después traslade su producción fuera deberá devolverlas.",
  "goal": "Igualdad de trato para la empresa que invierte y produce en España, sea de donde sea.",
  "datos": [
   [
    "10%",
    "de capital privado español para inversores de fuera de la UE en sectores estratégicos"
   ]
  ],
  "measures": [
   "Tributación en España de los beneficios generados por actividad económica real en España.",
   "Control de precios de transferencia, servicios intragrupo, royalties, intereses y sociedades instrumentales.",
   "Recuperación de impuestos cuando haya traslado artificial de beneficios.",
   "Devolución de ayudas e incentivos si se deslocaliza la producción incumpliendo compromisos, salvo insolvencia, fuerza mayor o reestructuración que preserve empleo.",
   "Mismos incentivos para empresas nacionales y extranjeras con inversión, empleo y actividad real.",
   "Exigencia de un mínimo del 10% de capital privado español para inversores de fuera de la Unión Europea que se establezcan en sectores estratégicos. No se aplica a empresas de la Unión Europea."
  ]
 },
 {
  "id": "cotizaciones-sociales-mas-bajas",
  "block": "Empleo, autónomos y protección social",
  "title": "Cotizaciones más bajas para contratar y cobrar más",
  "desc": "La cotización que paga la empresa baja del ≈ 32% de hoy al 28,5% en 2034, con el 10% del salario bruto como objetivo final. La del trabajador baja un punto en 2031 y, después de 2034, pasa a una tabla del 0% al 5% según salario.",
  "plan": "En 2031 la cotización del trabajador baja un punto, hasta cerca del 5,5%. La tabla por tramos llega después de 2034.",
  "goal": "Abaratar la contratación y subir el salario neto sin dejar desprotegidas a las personas.",
  "datos": [
   [
    "28,5%",
    "cotización de la empresa en 2034"
   ],
   [
    "10%",
    "objetivo final de la empresa"
   ],
   [
    "≈ 5,5%",
    "cotización del trabajador desde 2031"
   ]
  ],
  "tablas": [
   {
    "t": "Cotización empresarial",
    "h": [
     "Año",
     "Cotización empresarial"
    ],
    "r": [
     [
      "Hoy",
      "≈ 32%"
     ],
     [
      "2027",
      "31%"
     ],
     [
      "2031",
      "30%"
     ],
     [
      "2034",
      "28,5%"
     ],
     [
      "Objetivo final",
      "10% del salario bruto"
     ]
    ]
   },
   {
    "t": "Cotización final (después de 2034)",
    "h": [
     "Salario anual",
     "Cotización"
    ],
    "r": [
     [
      "Hasta 15.000 €",
      "0%"
     ],
     [
      "15.000–25.000 €",
      "2%"
     ],
     [
      "25.000–40.000 €",
      "3%"
     ],
     [
      "40.000–60.000 €",
      "4%"
     ],
     [
      "Más de 60.000 €",
      "5%"
     ]
    ]
   }
  ],
  "measures": [
   "Cotización final del trabajador progresiva, del 0% al 5%.",
   "Eliminar las cargas que penalizan la contratación."
  ],
  "pending": "Estudiar qué parte de las prestaciones se financia con cotizaciones y qué parte con impuestos generales."
 },
 {
  "id": "participacion-comunitaria-de-beneficiarios",
  "block": "Empleo, autónomos y protección social",
  "title": "Participación comunitaria de quien recibe prestaciones",
  "desc": "Quien recibe una prestación y está en condiciones de hacerlo participa en actividades comunitarias, con un máximo de 20 horas semanales, proporcionales a la prestación y adaptadas a sus circunstancias.",
  "goal": "Favorecer la inclusión y la experiencia laboral sin convertir las prestaciones en trabajo gratuito.",
  "datos": [
   [
    "20 h",
    "semanales como máximo"
   ]
  ],
  "measures": [
   "Máximo de 20 horas semanales, proporcionales a la prestación.",
   "Adaptación a capacidades y circunstancias personales.",
   "No puede sustituir puestos de trabajo remunerados y permanentes.",
   "Exenciones por salud, discapacidad, cuidados y otras causas justificadas.",
   "El Estado define reglas y prestaciones; las administraciones locales asignan y supervisan las actividades."
  ],
  "pending": "Debe respetar los derechos laborales y evitar cualquier forma de trabajo forzoso."
 },
 {
  "id": "bolsa-personal-de-desempleo",
  "block": "Empleo, autónomos y protección social",
  "title": "Tu paro es tuyo: bolsa personal que no caduca",
  "desc": "Cada tres meses trabajados generan un mes de prestación, hasta 24 meses. El derecho se acumula entre empleos, incluye a los autónomos y no caduca. Se cobra entre el 70% y el 80% de la renta media de los últimos diez años, con tope.",
  "goal": "Una protección que acompaña a la persona, no al puesto, y que también cubre a los autónomos.",
  "datos": [
   [
    "3 → 1",
    "meses trabajados por mes de prestación"
   ],
   [
    "24 meses",
    "máximo acumulable"
   ],
   [
    "80%",
    "de la renta media, los seis primeros meses"
   ]
  ],
  "tablas": [
   {
    "t": "Porcentaje de prestación",
    "h": [
     "Meses de prestación",
     "Porcentaje de la renta media de los últimos diez años"
    ],
    "r": [
     [
      "1 a 6",
      "80%"
     ],
     [
      "7 a 12",
      "75%"
     ],
     [
      "13 a 24",
      "70%"
     ]
    ]
   }
  ],
  "nota": [
   "Tope: 1,5 veces el SMI mensual normalizado (unos 2.140 € al mes con el SMI de 2026).",
   "Tras una baja voluntaria, la prestación empieza a cobrarse a los tres meses."
  ],
  "measures": [
   "Tres meses trabajados generan un mes de prestación, hasta 24 meses.",
   "El derecho persiste entre empleos y actividades por cuenta propia, y no caduca.",
   "La cuantía se calcula sobre los ingresos medios de los últimos diez años, actualizados por inflación.",
   "Incluye salarios y rendimientos netos de autónomos.",
   "El derecho se mantiene tras una baja voluntaria, con una espera de tres meses."
  ]
 },
 {
  "id": "pensiones-con-minima-universal",
  "block": "Empleo, autónomos y protección social",
  "title": "Pensiones: reparto, mínima ligada al salario mínimo y jubilación flexible",
  "desc": "Se mantiene el sistema de reparto y se garantiza una pensión mínima ligada al salario mínimo: el 75% del SMI anual, que sube cada año con él. La edad de jubilación irá de 65 a 70 años según el desgaste de cada profesión.",
  "goal": "Que nadie quede sin una pensión suficiente y que quien quiera seguir trabajando pueda hacerlo.",
  "datos": [
   [
    "75% del SMI",
    "pensión mínima: unos 12.800 € con el SMI de 2026"
   ],
   [
    "65–70",
    "años, según desgaste profesional"
   ]
  ],
  "measures": [
   "Mantener el sistema de reparto.",
   "Garantizar una pensión mínima ligada al salario mínimo.",
   "La pensión mínima queda ligada al salario mínimo: el 75% del SMI anual (unos 12.800 € con el SMI de 2026), y sube cada año con él. La cobra quien cumpla los requisitos de renta y residencia.",
   "Pensión contributiva según años cotizados y aportaciones.",
   "Edad de jubilación entre 65 y 70 años, fijada con criterios técnicos por una comisión independiente según el desgaste profesional.",
   "Jubilación anticipada voluntaria con reducción proporcional y excepciones.",
   "Compatibilidad de pensión y trabajo."
  ],
  "pending": "Cálculo actuarial hasta 2045 y análisis de sostenibilidad."
 },
 {
  "id": "prestaciones-asistenciales-compatibles-con-el-empleo",
  "block": "Empleo, autónomos y protección social",
  "title": "Ayudas que no se pierden de golpe al encontrar trabajo",
  "desc": "Las prestaciones asistenciales bajan gradualmente con el tiempo y son compatibles con el empleo: por cada euro que se gana trabajando solo se reducen 0,50 €.",
  "goal": "Que aceptar un trabajo siempre compense.",
  "datos": [
   [
    "0,50 €",
    "se reduce la ayuda por cada euro ganado"
   ],
   [
    "30%",
    "suelo a partir de 24 meses"
   ]
  ],
  "tablas": [
   {
    "t": "Cuantía según el tiempo",
    "h": [
     "Periodo",
     "Porcentaje"
    ],
    "r": [
     [
      "Meses 1–6",
      "100%"
     ],
     [
      "Meses 7–12",
      "85%"
     ],
     [
      "Meses 13–18",
      "70%"
     ],
     [
      "Meses 19–24",
      "50%"
     ],
     [
      "Más de 24 meses",
      "30%"
     ]
    ]
   }
  ],
  "measures": [
   "Reducción de 0,50 € de prestación por cada euro de ingreso neto.",
   "Suspensión al superar el umbral de ingresos y reactivación si vuelve la necesidad.",
   "Un nuevo episodio real de necesidad permite recuperar el 100%."
  ]
 },
 {
  "id": "incentivos-al-empleo-estable",
  "block": "Empleo, autónomos y protección social",
  "title": "Incentivos a quien crea empleo estable y sube salarios",
  "desc": "Deducciones para las empresas que crean empleo indefinido neto y lo mantienen 24 meses, y para las que suben los salarios por encima de la inflación.",
  "goal": "Premiar el empleo estable y los salarios que ganan poder adquisitivo.",
  "datos": [
   [
    "24 meses",
    "de mantenimiento del empleo creado"
   ],
   [
    "12 meses",
    "de mantenimiento de la subida salarial"
   ],
   [
    "30%",
    "deducción en formación"
   ]
  ],
  "measures": [
   "Deducción por creación neta de empleo indefinido, manteniéndolo 24 meses.",
   "Incentivos por aumentos salariales superiores a la inflación, mantenidos al menos 12 meses.",
   "Deducción del 30% en gastos de formación acreditados.",
   "Contratos temporales solo para necesidades realmente temporales."
  ],
  "pending": "Importes y límites de las deducciones."
 },
 {
  "id": "ningun-gasto-permanente-sin-financiacion-estable",
  "block": "Gasto público y sostenibilidad financiera",
  "title": "Ningún gasto permanente sin financiación estable",
  "desc": "No se asume gasto estructural permanente sin una fuente de ingresos estable. Los ingresos extraordinarios o el crecimiento aún no confirmado no pueden usarse para crear compromisos recurrentes.",
  "goal": "Que lo que se promete hoy se pueda seguir pagando mañana.",
  "measures": [
   "No asumir gasto estructural permanente sin financiación estable.",
   "No usar ingresos extraordinarios ni crecimiento no confirmado para crear gasto recurrente.",
   "Excepciones justificadas para emergencias, desastres y crisis.",
   "Las excepciones tendrán duración limitada y plan financiero."
  ]
 },
 {
  "id": "prioridades-claras-de-gasto",
  "block": "Gasto público y sostenibilidad financiera",
  "title": "Un orden claro de prioridades de gasto",
  "desc": "Seis niveles de prioridad presupuestaria. Si hay que ajustar, se revisan primero las duplicidades y las partidas de menor prioridad, preservando los servicios esenciales.",
  "goal": "Que en un ajuste lo último que se toque sea la sanidad, la educación y los servicios sociales.",
  "datos": [
   [
    "6",
    "niveles de prioridad"
   ]
  ],
  "tablas": [
   {
    "t": "Orden de prioridad",
    "h": [
     "Nº",
     "Partida"
    ],
    "r": [
     [
      "1",
      "Sanidad, educación y servicios sociales esenciales"
     ],
     [
      "2",
      "Pensiones y protección social"
     ],
     [
      "3",
      "Seguridad, justicia y defensa"
     ],
     [
      "4",
      "Infraestructuras, energía e inversión productiva"
     ],
     [
      "5",
      "Administración y funcionamiento institucional"
     ],
     [
      "6",
      "Cultura, deporte, cooperación y otras políticas"
     ]
    ]
   }
  ],
  "measures": [
   "En los ajustes se revisan primero duplicidades y partidas de menor prioridad.",
   "Se preservan los servicios esenciales y las obligaciones legales."
  ]
 },
 {
  "id": "deuda-solo-para-invertir",
  "block": "Gasto público y sostenibilidad financiera",
  "title": "Deuda pública solo para invertir, no para el gasto corriente",
  "desc": "La deuda se reserva para inversión productiva y estratégica, infraestructuras, modernización y emergencias graves con plan de recuperación. No financia el gasto corriente ordinario.",
  "goal": "No pasar a la siguiente generación la factura del gasto de cada día.",
  "measures": [
   "Deuda principalmente para inversión productiva y estratégica.",
   "Infraestructuras y modernización.",
   "Emergencias o crisis graves, con plan de recuperación.",
   "No usarla para financiar gasto corriente estructural ordinario."
  ]
 },
 {
  "id": "auditoria-anual-de-eficiencia",
  "block": "Gasto público y sostenibilidad financiera",
  "title": "Auditoría independiente de eficiencia cada año",
  "desc": "Todas las administraciones pasan cada año una auditoría independiente que mide cuánto cuestan, qué resultados dan y cuánto se podría ahorrar.",
  "goal": "Detectar cada año el dinero que se gasta mal.",
  "datos": [
   [
    "1 al año",
    "en todas las administraciones"
   ]
  ],
  "measures": [
   "Coste y resultados de cada administración.",
   "Coste por usuario.",
   "Duplicidades.",
   "Desviaciones presupuestarias.",
   "Ahorro potencial."
  ]
 },
 {
  "id": "el-gasto-no-crece-mas-que-los-ingresos",
  "block": "Gasto público y sostenibilidad financiera",
  "title": "El gasto ordinario no crece más que los ingresos",
  "desc": "El gasto ordinario no puede crecer de forma permanente por encima de los ingresos estructurales, calculados con ingresos recurrentes y no extraordinarios.",
  "goal": "Cuentas públicas sostenibles sin recortes de emergencia.",
  "measures": [
   "El gasto ordinario no crece permanentemente más que los ingresos estructurales.",
   "Se tienen en cuenta la inflación y el desarrollo económico.",
   "Se usan ingresos recurrentes, no extraordinarios.",
   "Excepciones justificadas y temporales.",
   "Regla del plan 2027–2034: el gasto público total crece cada año un punto menos que el PIB nominal y pasa del 45% al 40,75% del PIB en 2034."
  ]
 },
 {
  "id": "mas-vivienda-y-seguridad-juridica",
  "block": "Vivienda",
  "title": "Más vivienda y seguridad jurídica para inquilinos y propietarios",
  "desc": "Plan nacional de construcción con licencias más rápidas y suelo urbanizable sostenible, y reglas claras para las dos partes del alquiler: garantías frente a impagos, procedimientos judiciales rápidos y protección frente a abusos.",
  "goal": "Aumentar la oferta y reducir la incertidumbre de alquilar y de poner una vivienda en alquiler.",
  "measures": [
   "Modelo mixto: compraventa privada, alquiler privado, parque público permanente, incentivos a propietarios y ayudas de acceso.",
   "Apoyo a promotores privados para venta y alquiler; licencias más rápidas y concursos transparentes.",
   "Control de coste, calidad y plazos de las promociones.",
   "Garantías frente a impagos y contratos claros.",
   "Procedimientos judiciales rápidos y protección frente a abusos.",
   "Evaluación de vulnerabilidad y alternativas sociales.",
   "Respuesta judicial rápida frente a ocupaciones ilegales, respetando las garantías procesales."
  ]
 },
 {
  "id": "vivienda-publica-en-alquiler-que-nunca-se-vende",
  "block": "Vivienda",
  "title": "Vivienda pública en alquiler que nunca se vende",
  "desc": "Un parque público permanente, solo en alquiler, financiado por un Fondo Estatal de Vivienda. El alquiler máximo será el 50% del salario mínimo mensual, sea cual sea el tamaño de la familia.",
  "goal": "Un parque público de alquiler asequible que crezca y no se privatice.",
  "datos": [
   [
    "50% del SMI",
    "alquiler máximo mensual"
   ],
   [
    "0",
    "viviendas públicas vendidas"
   ],
   [
    "7",
    "niveles de prioridad de acceso"
   ]
  ],
  "tablas": [
   {
    "t": "Prioridad de acceso",
    "h": [
     "Nº",
     "Situación"
    ],
    "r": [
     [
      "1",
      "Situaciones especiales de necesidad"
     ],
     [
      "2",
      "Personas sin hogar o en riesgo inminente de desahucio"
     ],
     [
      "3",
      "Víctimas de violencia y emergencias"
     ],
     [
      "4",
      "Discapacidad y vivienda adaptada"
     ],
     [
      "5",
      "Familias vulnerables con menores o dependientes"
     ],
     [
      "6",
      "Personas mayores"
     ],
     [
      "7",
      "Resto, según situación económica y tiempo de espera"
     ]
    ]
   }
  ],
  "measures": [
   "La vivienda pública es exclusivamente de alquiler y nunca se vende.",
   "Alquiler máximo universal: 50% del SMI mensual normalizado.",
   "El Fondo Estatal de Vivienda se usa solo para construir, rehabilitar, mantener y gestionar profesionalmente vivienda pública.",
   "Contratos renovables, con revisión de requisitos.",
   "Protección frente a no renovaciones arbitrarias."
  ]
 },
 {
  "id": "ayudas-para-acceder-a-la-primera-vivienda",
  "block": "Vivienda",
  "title": "Ayudas para la fianza y avales para la primera vivienda",
  "desc": "Ayudas para la fianza y los gastos iniciales del alquiler, y avales públicos para comprar la primera vivienda, con requisitos de renta y prioridad para jóvenes y familias con menores.",
  "goal": "Que el ahorro inicial no sea la barrera para emanciparse.",
  "measures": [
   "Ayudas para fianzas y gastos iniciales de alquiler.",
   "Avales públicos para la primera vivienda.",
   "Requisitos de renta.",
   "Prioridad para jóvenes, familias con menores y personas vulnerables.",
   "Límites de precio o de alquiler de la vivienda."
  ]
 },
 {
  "id": "alquiler-asequible-con-menos-impuestos",
  "block": "Vivienda",
  "title": "Cuanto más barato alquilas, menos impuestos pagas",
  "desc": "La fiscalidad del casero depende del precio que cobra, medido contra el salario mínimo: el alquiler por debajo de la mitad del SMI mensual queda exento, y el que iguala o supera el SMI tributa más.",
  "goal": "Que al propietario le compense alquilar a un precio asequible.",
  "datos": [
   [
    "Exento",
    "alquiler inferior al 50% del SMI"
   ]
  ],
  "tablas": [
   {
    "t": "Tributación según el alquiler mensual",
    "h": [
     "Alquiler",
     "Tributación"
    ],
    "r": [
     [
      "Menos del 50% del SMI",
      "Exento"
     ],
     [
      "Entre el 50% y el 70%",
      "Reducida"
     ],
     [
      "Entre el 70% y el 100%",
      "Ordinaria"
     ],
     [
      "100% del SMI o más",
      "Elevada"
     ]
    ]
   }
  ],
  "measures": [
   "Referencia única: el SMI mensual normalizado (SMI anual entre doce).",
   "No se usan índices de mercado local, tamaño ni ubicación.",
   "Se tributa sobre el beneficio neto, descontando mantenimiento, reparaciones, comunidad, seguros, intereses hipotecarios, gestión e impuestos.",
   "Alquiler temporal: régimen intermedio, con bonificación si hay causa real (trabajo, estudios, tratamiento médico).",
   "Control de contratos temporales ficticios."
  ],
  "pending": "Tipos efectivos y cálculo exacto sobre el beneficio neto."
 },
 {
  "id": "vivienda-turistica-y-vacia-al-fondo-de-vivienda",
  "block": "Vivienda",
  "title": "Pisos turísticos y viviendas vacías pagan la vivienda pública",
  "desc": "Recargo del 30% sobre el beneficio del alquiler turístico de vivienda completa y gravamen anual a las viviendas vacías más de un año sin justificación. Todo lo recaudado va al Fondo Estatal de Vivienda. No se expropia ni se obliga a alquilar.",
  "goal": "Devolver vivienda al mercado residencial respetando la propiedad privada.",
  "datos": [
   [
    "+30%",
    "recargo al alquiler turístico de vivienda completa"
   ],
   [
    "12 meses",
    "vacía sin gravamen"
   ],
   [
    "30% del SMI anual",
    "gravamen máximo por vivienda vacía"
   ]
  ],
  "tablas": [
   {
    "t": "Gravamen anual por vivienda vacía",
    "h": [
     "Tiempo vacía",
     "Gravamen"
    ],
    "r": [
     [
      "0–12 meses",
      "0%"
     ],
     [
      "12–24 meses",
      "10% del SMI anual"
     ],
     [
      "24–36 meses",
      "20% del SMI anual"
     ],
     [
      "Más de 36 meses",
      "30% del SMI anual"
     ]
    ]
   }
  ],
  "measures": [
   "Alquiler turístico de vivienda completa: tributación general más un recargo del 30% sobre el beneficio neto.",
   "El alquiler turístico de habitaciones no tiene ese recargo.",
   "Licencia turística inactiva: gravamen anual fijo del 30% del SMI anual, que se extingue al renunciar a la licencia y volver al mercado residencial.",
   "Vivienda vacía: excepciones por obras, herencias en tramitación, traslado temporal, litigios o imposibilidad acreditada de alquilar.",
   "No se impone el alquiler de viviendas vacías ni se expropian por estar vacías.",
   "Todos estos gravámenes se destinan al Fondo Estatal de Vivienda."
  ]
 },
 {
  "id": "cambiar-de-vivienda-habitual-sin-impuestos",
  "block": "Vivienda",
  "title": "Cambiar de casa sin pagar impuestos por ello",
  "desc": "Quien vende su vivienda habitual para comprar otra vivienda habitual no tributa por la ganancia ni paga los impuestos de transmisión de la nueva compra, con 24 meses de plazo.",
  "plan": "Se aplica desde 2028.",
  "goal": "Que mudarse por trabajo o por familia no tenga peaje fiscal.",
  "datos": [
   [
    "24 meses",
    "de plazo para comprar la nueva"
   ],
   [
    "0 €",
    "por la ganancia y por la transmisión"
   ]
  ],
  "measures": [
   "Exención de la ganancia patrimonial.",
   "Exención de los impuestos de transmisión de la compra de sustitución (ITP o IVA/AJD, según corresponda).",
   "La nueva vivienda puede costar más o menos.",
   "No se grava el dinero sobrante por mantenerse en una cuenta bancaria.",
   "El alquiler temporal entre ambas viviendas no rompe la condición de vivienda habitual.",
   "No se aplica a segundas residencias."
  ]
 },
 {
  "id": "freno-a-la-reventa-especulativa",
  "block": "Vivienda",
  "title": "Freno a la reventa especulativa de inmuebles",
  "desc": "Recargo sobre el impuesto de la ganancia cuando un inmueble se revende en menos de cinco años: cuanto antes se revende, mayor es el recargo. La vivienda habitual queda excluida.",
  "goal": "Desincentivar comprar para revender rápido sin castigar a quien vende su casa.",
  "datos": [
   [
    "+30%",
    "si se revende en menos de 1 año"
   ],
   [
    "5 años",
    "de tenencia para no tener recargo"
   ]
  ],
  "tablas": [
   {
    "t": "Recargo sobre la cuota",
    "h": [
     "Tiempo de tenencia",
     "Recargo"
    ],
    "r": [
     [
      "Menos de 1 año",
      "+30%"
     ],
     [
      "Entre 1 y 2 años",
      "+20%"
     ],
     [
      "Entre 2 y 5 años",
      "+10%"
     ],
     [
      "Más de 5 años",
      "0%"
     ]
    ]
   }
  ],
  "measures": [
   "El recargo se aplica sobre la cuota correspondiente a la ganancia real.",
   "Se calcula después de ajustar la ganancia por inflación y gastos deducibles.",
   "La vivienda habitual queda excluida."
  ],
  "pending": "Tratamiento de sociedades, promociones, herencias y actividad profesional inmobiliaria."
 },
 {
  "id": "sanidad-publica-universal",
  "block": "Sanidad",
  "title": "Sanidad pública universal, financiada con impuestos",
  "desc": "Sanidad universal con la gestión pública como modelo principal. La colaboración privada se usa cuando es eficiente y reduce esperas, con contratos transparentes y control de coste, calidad y seguridad.",
  "goal": "Garantizar una sanidad de calidad para todos, sin importar la renta ni el lugar.",
  "measures": [
   "Sanidad universal financiada con impuestos.",
   "Gestión pública como modelo principal.",
   "Colaboración privada solo cuando sea eficiente y reduzca esperas.",
   "Contratos transparentes.",
   "Controles de coste, calidad y seguridad."
  ]
 },
 {
  "id": "tiempos-maximos-de-espera-garantizados",
  "block": "Sanidad",
  "title": "Tiempos máximos de espera garantizados",
  "desc": "Médico de cabecera en 48 horas, especialista y pruebas en 30 días y operación en 90. Si el plazo no se cumple, el paciente es derivado a otro centro, público o privado, sin coste.",
  "goal": "Que la lista de espera tenga un límite y una salida.",
  "datos": [
   [
    "48 h",
    "atención primaria"
   ],
   [
    "30 días",
    "especialista"
   ],
   [
    "30 días",
    "pruebas diagnósticas"
   ],
   [
    "90 días",
    "operaciones programadas"
   ]
  ],
  "tablas": [
   {
    "t": "Plazos máximos",
    "h": [
     "Servicio",
     "Espera máxima"
    ],
    "r": [
     [
      "Atención primaria ordinaria",
      "48 horas"
     ],
     [
      "Especialistas",
      "30 días"
     ],
     [
      "Pruebas diagnósticas",
      "30 días"
     ],
     [
      "Operaciones programadas",
      "90 días"
     ],
     [
      "Urgencias",
      "Según gravedad clínica"
     ]
    ]
   }
  ],
  "measures": [
   "Si no se cumple el plazo: derivación a un centro público o privado sin coste adicional para el paciente.",
   "Publicación trimestral de las listas de espera."
  ]
 },
 {
  "id": "plan-de-profesionales-sanitarios",
  "block": "Sanidad",
  "title": "Cuidar a quienes nos cuidan: plan de profesionales sanitarios",
  "desc": "Salarios competitivos, carrera por mérito y experiencia, menos burocracia y más tiempo con cada paciente, con incentivos para cubrir las zonas donde faltan profesionales.",
  "goal": "Retener a los profesionales sanitarios y cubrir las plazas donde más faltan.",
  "measures": [
   "Salarios competitivos.",
   "Carrera por mérito y experiencia.",
   "Formación continua.",
   "Menos burocracia y más tiempo con los pacientes.",
   "Incentivos para zonas con escasez.",
   "Planificación de plantillas."
  ]
 },
 {
  "id": "prevencion-y-salud-mental",
  "block": "Sanidad",
  "title": "Prevención y salud mental en atención primaria",
  "desc": "Revisiones según edad y riesgo, detección precoz y salud mental en el centro de salud, con seguimiento de las enfermedades crónicas.",
  "goal": "Llegar antes de que la enfermedad se agrave.",
  "measures": [
   "Revisiones según edad y riesgo.",
   "Detección precoz.",
   "Salud mental en atención primaria.",
   "Nutrición y actividad física.",
   "Seguimiento de enfermedades crónicas."
  ]
 },
 {
  "id": "tecnologia-sanitaria-con-decision-medica",
  "block": "Sanidad",
  "title": "Historia clínica única y tecnología al servicio del médico",
  "desc": "Historia clínica interoperable en todo el país, telemedicina cuando proceda e inteligencia artificial como apoyo. La decisión sigue siendo del médico y la atención presencial se mantiene.",
  "goal": "Que tu historial te acompañe a cualquier centro y el médico tenga más tiempo para ti.",
  "measures": [
   "Historia clínica interoperable.",
   "IA como apoyo, manteniendo la decisión médica.",
   "Telemedicina cuando proceda.",
   "Automatización de las tareas administrativas.",
   "Investigación biomédica y colaboración con universidades y empresas tecnológicas.",
   "Protección estricta de los datos.",
   "Se mantiene la atención presencial."
  ]
 },
 {
  "id": "aprendizaje-personalizado-por-competencias",
  "block": "Educación",
  "title": "Aprendizaje personalizado: avanzar por competencias, no solo por edad",
  "desc": "Cada alumno progresa por competencias y materias: avanza más rápido en lo que domina y recibe apoyo específico donde tiene dificultades. La edad deja de ser el único criterio de curso.",
  "goal": "Desarrollar el talento de cada alumno sin dejar a nadie atrás ni frenar a nadie.",
  "measures": [
   "Progresión por competencias y materias.",
   "Evaluación individual.",
   "Aceleración en las materias dominadas.",
   "Apoyo específico donde existan dificultades.",
   "La edad no es el único criterio de curso."
  ]
 },
 {
  "id": "orientacion-desde-edades-tempranas",
  "block": "Educación",
  "title": "Orientación desde edades tempranas",
  "desc": "Identificar pronto las aptitudes e intereses de cada alumno y acompañarlo con orientación periódica, contacto con profesionales y experiencias prácticas, sin encasillarlo antes de tiempo.",
  "goal": "Que cada joven elija su camino conociendo sus capacidades y todas sus opciones.",
  "measures": [
   "Identificación de aptitudes e intereses.",
   "Orientación periódica.",
   "Contacto con profesionales.",
   "Experiencias prácticas.",
   "Información sobre FP, universidad y empleo.",
   "Evitar el encasillamiento prematuro."
  ]
 },
 {
  "id": "fp-conectada-con-la-industria",
  "block": "Educación",
  "title": "Formación Profesional conectada con la industria",
  "desc": "FP dual con participación de las empresas en los contenidos, talleres y equipamiento modernos y prácticas remuneradas cuando haya trabajo productivo.",
  "goal": "Una FP que lleve directamente a un empleo cualificado.",
  "measures": [
   "Formación dual.",
   "Participación empresarial en los contenidos.",
   "Talleres y equipamiento moderno.",
   "Prácticas remuneradas cuando exista trabajo productivo.",
   "Reconocimiento de la experiencia.",
   "Pasarelas entre FP, universidad y empleo."
  ]
 },
 {
  "id": "docentes-evaluados-y-mejor-pagados",
  "block": "Educación",
  "title": "Docentes mejor pagados, evaluados y con menos burocracia",
  "desc": "Evaluar la labor docente teniendo en cuenta las circunstancias de cada aula y, a cambio, mejorar salarios, carrera, estabilidad y ratios, y reducir el papeleo.",
  "goal": "Dignificar la profesión docente y reconocer a quien enseña bien.",
  "measures": [
   "Evaluación de la capacidad pedagógica y del progreso del alumnado, considerando sus circunstancias.",
   "Atención individual y formación continua.",
   "Se tiene en cuenta la opinión de familias y estudiantes.",
   "Menos alumnos por aula donde sea necesario.",
   "Mejores salarios y carrera profesional.",
   "Estabilidad y conciliación.",
   "Reducción de la burocracia."
  ]
 },
 {
  "id": "curriculo-para-la-vida-adulta",
  "block": "Educación",
  "title": "Un currículo para la vida adulta",
  "desc": "Incorporar a la enseñanza lo que se necesita al salir del aula: finanzas e impuestos, empresa, inteligencia emocional, pensamiento crítico, IA, derechos y primeros auxilios.",
  "goal": "Que nadie termine la escuela sin saber leer una nómina, un contrato o una noticia falsa.",
  "datos": [
   [
    "9",
    "materias para la vida adulta"
   ]
  ],
  "measures": [
   "Educación financiera y fiscal.",
   "Emprendimiento y empresa.",
   "Inteligencia emocional y resolución de conflictos.",
   "Pensamiento crítico.",
   "Alfabetización digital e inteligencia artificial.",
   "Derechos y obligaciones legales.",
   "Nutrición, salud y primeros auxilios.",
   "Comunicación, negociación y trabajo en equipo."
  ]
 },
 {
  "id": "un-plan-nacional-de-reindustrializacion",
  "block": "Industria y economía productiva",
  "title": "Un plan nacional de reindustrialización",
  "desc": "La reindustrialización pasa a ser un objetivo estratégico nacional: más peso de la industria, pymes modernizadas, empleo cualificado y menos dependencias críticas del exterior.",
  "goal": "Diversificar la economía y aumentar el peso de la industria de alto valor añadido.",
  "measures": [
   "Aumentar el peso de la industria en la economía.",
   "Recuperar y ampliar producción.",
   "Modernizar las pymes industriales.",
   "Atraer inversión y crear empleo cualificado.",
   "Reducir dependencias críticas.",
   "Aumentar exportaciones y competitividad."
  ]
 },
 {
  "id": "nueve-sectores-estrategicos",
  "block": "Industria y economía productiva",
  "title": "Nueve sectores estratégicos para la industria",
  "desc": "Concentrar el esfuerzo industrial en nueve sectores, que tendrán una deducción fiscal adicional del 10% sobre los incentivos generales.",
  "goal": "Apostar por los sectores donde España puede competir y reducir dependencias.",
  "datos": [
   [
    "9",
    "sectores prioritarios"
   ],
   [
    "+10%",
    "de deducción adicional"
   ]
  ],
  "measures": [
   "Automoción, baterías y movilidad eléctrica.",
   "Semiconductores y microelectrónica.",
   "Aeroespacial y defensa.",
   "Robótica, maquinaria y automatización.",
   "Energía y almacenamiento.",
   "Química avanzada y nuevos materiales.",
   "Biotecnología y tecnología sanitaria.",
   "Inteligencia artificial y digitalización.",
   "Agroindustria y transformación alimentaria."
  ]
 },
 {
  "id": "ayudas-a-empresas-condicionadas-a-resultados",
  "block": "Industria y economía productiva",
  "title": "Ayudas a empresas solo a cambio de resultados",
  "desc": "Los incentivos se conceden a cambio de inversión real, empleo estable, formación e innovación, se auditan y se devuelven si se incumple sin justificación.",
  "goal": "Que cada ayuda pública a una empresa se traduzca en actividad y empleo en España.",
  "measures": [
   "Condicionados a inversión productiva real y empleo estable.",
   "Condicionados a formación, innovación y modernización.",
   "Capacidad productiva y exportadora.",
   "Auditorías de cumplimiento.",
   "Devolución de las ayudas ante incumplimientos injustificados.",
   "Igualdad para empresas nacionales y extranjeras que cumplan las condiciones."
  ]
 },
 {
  "id": "energia-competitiva-y-autoconsumo",
  "block": "Industria y economía productiva",
  "title": "Energía competitiva, autoconsumo y comunidades energéticas",
  "desc": "Elegir en cada caso la energía con mejor equilibrio de coste, emisiones, residuos y seguridad, e impulsar la generación distribuida: solar, baterías y autoconsumo en viviendas, empresas y edificios públicos.",
  "goal": "Reducir las facturas y la dependencia energética del exterior.",
  "measures": [
   "Priorizar el mejor equilibrio de coste, emisiones, residuos, impacto ambiental, mantenimiento y seguridad.",
   "Renovables de bajo impacto, almacenamiento, redes e interconexiones.",
   "Contratos energéticos estables y eficiencia industrial.",
   "Autoconsumo con solar y baterías en viviendas, comunidades, empresas, escuelas, hospitales y aparcamientos.",
   "Comunidades energéticas: compartir energía y compensar excedentes.",
   "La energía nuclear no se excluye, pero se usará lo mínimo posible y solo cuando esté justificada técnica, ambiental y económicamente."
  ]
 },
 {
  "id": "investigacion-que-acaba-en-productos",
  "block": "Industria y economía productiva",
  "title": "Investigación que acaba en productos fabricados aquí",
  "desc": "Orientar la I+D+i a la investigación aplicada y a la transferencia a la empresa, retener a investigadores e ingenieros y fabricar en España la tecnología que se desarrolla aquí.",
  "goal": "Que el conocimiento que se genera en España se convierta en empresas y empleo en España.",
  "datos": [
   [
    "40%",
    "deducción fiscal por I+D+i"
   ]
  ],
  "measures": [
   "Investigación aplicada.",
   "Colaboración entre universidad, centros tecnológicos y empresa.",
   "Transferencia tecnológica, patentes y productos.",
   "Retención de investigadores e ingenieros.",
   "Startups tecnológicas e industriales.",
   "Fabricación en España de la tecnología desarrollada aquí."
  ]
 },
 {
  "id": "una-justicia-mas-rapida-digital-e-igualitaria",
  "block": "Justicia y seguridad",
  "title": "Una justicia rápida, digital e independiente",
  "desc": "Expedientes digitales, más jueces, fiscales y personal, procedimientos simplificados para los casos sencillos y métricas públicas de cuánto dura cada tipo de proceso.",
  "goal": "Reducir los tiempos de espera garantizando el derecho de defensa y la presunción de inocencia.",
  "measures": [
   "Expedientes digitales.",
   "IA para tareas administrativas y de análisis, nunca para sustituir la decisión judicial.",
   "Refuerzo de jueces, fiscales y personal, y especialización.",
   "Simplificación de los casos sencillos.",
   "Métricas públicas de duración de los procedimientos.",
   "Protección de víctimas y menores.",
   "Derecho de defensa y presunción de inocencia."
  ]
 },
 {
  "id": "policias-coordinadas-a-nivel-nacional",
  "block": "Justicia y seguridad",
  "title": "Policías coordinadas a nivel nacional",
  "desc": "Policía Nacional, Guardia Civil, policías autonómicas y locales trabajarán con protocolos, formación, equipamiento y bases de datos comunes, con presencia en el territorio según las necesidades.",
  "goal": "Proteger a las personas con eficacia y con respeto a los derechos.",
  "measures": [
   "Coordinación de Policía Nacional, Guardia Civil, policías autonómicas y locales.",
   "Protocolos, formación y equipamiento comunes.",
   "Bases de datos interoperables y reguladas.",
   "Presencia territorial según necesidades y más tecnología.",
   "Protección jurídica de los agentes en actuaciones legítimas.",
   "Controles independientes ante abusos."
  ]
 },
 {
  "id": "firmeza-con-la-reincidencia",
  "block": "Justicia y seguridad",
  "title": "Más firmeza con la reincidencia y los delitos violentos",
  "desc": "Penas proporcionadas, con una respuesta más severa ante la reincidencia acreditada y prioridad a los delitos violentos y contra las personas. Procedimientos rápidos para delitos leves y flagrantes.",
  "goal": "Que delinquir una y otra vez tenga consecuencias, sin renunciar a la reinserción.",
  "measures": [
   "Penas proporcionadas.",
   "Respuesta más severa ante la reincidencia acreditada.",
   "Prioridad a los delitos violentos y contra las personas.",
   "Procedimientos rápidos para delitos leves y flagrantes, respetando las garantías.",
   "Alternativas a la prisión para delitos menores cuando proceda.",
   "Seguimiento judicial de reincidentes peligrosos.",
   "Ampliar los supuestos de prisión permanente revisable para delitos excepcionalmente graves: siempre revisable, proporcional y sin liberación automática."
  ]
 },
 {
  "id": "proteccion-integral-de-las-victimas",
  "block": "Justicia y seguridad",
  "title": "Protección integral de las víctimas",
  "desc": "Asistencia jurídica, psicológica y económica, protección frente al agresor y seguimiento cuando siga existiendo riesgo, para todas las víctimas con independencia de su sexo o condición.",
  "goal": "Que ninguna víctima se quede sola ni tenga que revivir lo ocurrido una y otra vez.",
  "measures": [
   "Asistencia jurídica, psicológica y económica cuando corresponda.",
   "Protección frente al agresor.",
   "Seguimiento cuando exista riesgo tras la condena o una salida permitida.",
   "Atención especial a menores, violencia sexual o doméstica, trata y delitos violentos.",
   "Protección con independencia del sexo o la condición de la víctima.",
   "Coordinación para evitar que tenga que repetir su testimonio."
  ]
 },
 {
  "id": "reinsercion-con-trabajo-y-formacion",
  "block": "Justicia y seguridad",
  "title": "Reinserción con trabajo y formación en prisión",
  "desc": "Trabajo penitenciario y actividades comunitarias adaptadas al riesgo de cada interno, con formación profesional y privilegios progresivos según su evolución. Trabajo digno, seguro y remunerado.",
  "goal": "Que quien sale de prisión tenga un oficio y menos motivos para volver.",
  "datos": [
   [
    "3",
    "niveles según riesgo y peligrosidad"
   ]
  ],
  "tablas": [
   {
    "t": "Actividad según el nivel de riesgo",
    "h": [
     "Riesgo",
     "Actividad"
    ],
    "r": [
     [
      "Bajo",
      "Actividades exteriores supervisadas"
     ],
     [
      "Medio",
      "Instalaciones públicas y proyectos comunitarios con mayor seguridad"
     ],
     [
      "Alto",
      "Formación, producción y mantenimiento dentro del centro"
     ]
    ]
   }
  ],
  "measures": [
   "Formación profesional.",
   "Reconocimiento del esfuerzo y privilegios progresivos según la evolución.",
   "Trabajo digno, seguro y remunerado.",
   "No sustituye empleo ordinario ni se impone trabajo forzoso."
  ]
 },
 {
  "id": "redes-electricas-y-de-telecomunicaciones",
  "block": "Infraestructuras y territorio",
  "title": "Redes eléctricas y de telecomunicaciones modernas",
  "desc": "Modernizar las redes eléctricas para integrar renovables y almacenamiento, reforzar las interconexiones con Francia y Portugal y llevar fibra y cobertura móvil al medio rural y a las carreteras.",
  "goal": "Reducir cuellos de botella y mejorar la competitividad y la resiliencia del país.",
  "measures": [
   "Modernizar las redes eléctricas.",
   "Integrar renovables y almacenamiento.",
   "Interconexiones eléctricas con Francia y Portugal.",
   "Fibra y conectividad de alta velocidad.",
   "Cobertura móvil rural y en carreteras.",
   "Ciberseguridad y resiliencia."
  ]
 },
 {
  "id": "transporte-que-conecta-el-pais",
  "block": "Infraestructuras y territorio",
  "title": "Transporte que conecta el país y sus mercancías",
  "desc": "Mantener y modernizar carreteras y ferrocarril convencional, impulsar el transporte ferroviario de mercancías y completar los corredores Atlántico y Mediterráneo. Alta velocidad solo donde esté justificada.",
  "goal": "Conectar personas, polígonos, puertos y mercados dentro y fuera de España.",
  "measures": [
   "Mantenimiento y modernización de carreteras y ferrocarril convencional.",
   "Alta velocidad solo donde esté justificada.",
   "Transporte ferroviario de mercancías y conexión de polígonos, puertos, aeropuertos y centros logísticos.",
   "Transporte público urbano y rural.",
   "Corredores Atlántico y Mediterráneo e interoperabilidad ferroviaria.",
   "Mejores conexiones con Portugal, Francia y Marruecos.",
   "Estudiar la viabilidad de un túnel ferroviario bajo el Estrecho de Gibraltar como proyecto a largo plazo, sin aprobar su construcción de antemano."
  ]
 },
 {
  "id": "plan-nacional-del-agua",
  "block": "Infraestructuras y territorio",
  "title": "Plan nacional del agua",
  "desc": "Aprovechar mejor embalses, ríos y acuíferos, almacenar más agua y sumar desalación y reutilización para abastecer hogares, agricultura e industria respetando los caudales ecológicos.",
  "goal": "Garantizar agua para todos los usos también en los años secos.",
  "measures": [
   "Aprovechar mejor embalses y pantanos.",
   "Gestionar los ríos respetando los caudales ecológicos.",
   "Uso sostenible de los acuíferos y recarga.",
   "Mejorar canales y conducciones y almacenar agua.",
   "Desalación y reutilización de aguas tratadas.",
   "Trasvases entre cuencas solo si están justificados técnica y ambientalmente."
  ]
 },
 {
  "id": "redes-de-agua-sin-fugas",
  "block": "Infraestructuras y territorio",
  "title": "Redes de agua sin fugas",
  "desc": "Renovar las redes de abastecimiento y reparar fugas, con contadores inteligentes y auditorías por municipio. Primero, los municipios que más agua pierden.",
  "goal": "Dejar de perder por las tuberías el agua que tanto cuesta conseguir.",
  "measures": [
   "Renovar las redes de abastecimiento y reparar fugas.",
   "Contadores inteligentes y control de presión.",
   "Monitorización digital.",
   "Auditorías periódicas por municipio.",
   "Prioridad a los municipios con grandes pérdidas.",
   "Apoyo técnico y financiero a los municipios pequeños."
  ]
 },
 {
  "id": "mantenimiento-preventivo-obligatorio",
  "block": "Infraestructuras y territorio",
  "title": "Mantenimiento preventivo obligatorio de las infraestructuras",
  "desc": "Planes obligatorios de mantenimiento para carreteras, puentes, túneles, ferrocarriles, presas, redes y edificios públicos, con inspecciones periódicas e informes públicos de su estado.",
  "goal": "Arreglar antes de que se rompa: más seguro y más barato.",
  "measures": [
   "Planes obligatorios para carreteras, puentes, túneles, ferrocarriles, presas, redes de agua, edificios y redes energéticas y de telecomunicaciones.",
   "Inspecciones periódicas.",
   "Monitorización digital.",
   "Presupuestos específicos de mantenimiento.",
   "Informes públicos del estado de cada infraestructura.",
   "Responsabilidad administrativa ante fallos injustificados."
  ]
 },
 {
  "id": "inmigracion-legal-vinculada-al-empleo",
  "block": "Política internacional, inmigración y defensa",
  "title": "Inmigración legal vinculada al empleo",
  "desc": "Establecer un modelo de inmigración ordenada, basado en las necesidades económicas y laborales del país: permisos vinculados a ofertas y necesidades reales, contratación ágil en sectores con déficit, trámites sencillos, formación lingüística y profesional y vías claras para renovar permisos y obtener residencia de larga duración.",
  "goal": "Contribuir a la economía y permitir que quienes llegan puedan desarrollar un proyecto de vida legal y estable, protegiendo sus derechos laborales.",
  "measures": [
   "Permisos vinculados a ofertas reales y a necesidades laborales.",
   "Procesos ágiles.",
   "Control de las condiciones laborales para evitar la explotación y la competencia desleal.",
   "Formación profesional y lingüística.",
   "Vías claras de renovación y residencia de larga duración."
  ]
 },
 {
  "id": "diplomacia-economica-y-alianzas-estrategicas",
  "block": "Política internacional, inmigración y defensa",
  "title": "Diplomacia económica y alianzas estratégicas",
  "desc": "Utilizar la red diplomática para generar oportunidades económicas, industriales y tecnológicas: promover acuerdos comerciales, abrir mercados para empresas españolas, atraer inversión productiva, facilitar transferencia tecnológica y acceso seguro a materias primas estratégicas, y cooperar en energía, industria, infraestructuras y corredores comerciales.",
  "goal": "Orientar la política exterior a resultados económicos medibles: nuevos mercados, inversión productiva, exportaciones y acuerdos tecnológicos.",
  "measures": [
   "Acuerdos bilaterales y multilaterales.",
   "Apertura de mercados y promoción de exportaciones.",
   "Atracción de inversión productiva.",
   "Transferencia tecnológica.",
   "Acceso a materias primas críticas.",
   "Cooperación energética, industrial y en infraestructuras.",
   "Apoyo a la internacionalización de las pymes.",
   "Medición de resultados."
  ],
  "pending": "Definir indicadores, metas y plazos."
 },
 {
  "id": "integracion-residencia-y-nacionalidad",
  "block": "Política internacional, inmigración y defensa",
  "title": "Integración, residencia y nacionalidad",
  "desc": "Establecer un modelo de integración basado en derechos, responsabilidades y oportunidades, con aprendizaje del castellano y de las lenguas cooficiales cuando corresponda, conocimiento de las instituciones, las leyes y los derechos fundamentales, e integración laboral y participación social.",
  "goal": "Ofrecer procedimientos transparentes y requisitos claros de residencia legal y continuada para avanzar hacia la residencia permanente y la nacionalidad, con evaluación individualizada y sin discriminación por origen, religión o nacionalidad.",
  "measures": [
   "Aprendizaje del castellano y de las lenguas cooficiales cuando corresponda.",
   "Conocimiento de las instituciones, las leyes y los derechos fundamentales.",
   "Integración laboral y participación social.",
   "Residencia legal y continuada como requisito.",
   "Procedimientos transparentes e individualizados.",
   "Sin discriminación por origen, religión o nacionalidad."
  ],
  "pending": "Revisión jurídica de requisitos, procedimientos y competencias, incluida su compatibilidad con los derechos fundamentales y la normativa aplicable."
 },
 {
  "id": "control-fronterizo-inmigracion-irregular-y-asilo",
  "block": "Política internacional, inmigración y defensa",
  "title": "Control fronterizo, inmigración irregular y asilo",
  "desc": "Mantener un control efectivo de las fronteras terrestres y marítimas, combatir las redes de tráfico de personas, e identificar y registrar las entradas irregulares respetando las garantías legales. Resolver con agilidad las solicitudes de asilo y protección internacional.",
  "goal": "Retornar, conforme a la ley, a quienes no tengan derecho a permanecer en España y cooperar con países de origen y tránsito, protegiendo efectivamente a refugiados y a quienes necesiten protección internacional.",
  "measures": [
   "Control efectivo de las fronteras terrestres y marítimas.",
   "Lucha contra las mafias y redes de tráfico de personas.",
   "Identificación y registro con garantías.",
   "Resolución ágil de las solicitudes de asilo.",
   "Retorno legal de quienes no tengan derecho a permanecer.",
   "Cooperación con los países de origen y tránsito.",
   "Protección efectiva de los refugiados.",
   "Respeto al principio de no devolución cuando exista riesgo de persecución, tortura o daños graves."
  ]
 },
 {
  "id": "defensa-seguridad-internacional-y-autonomia",
  "block": "Política internacional, inmigración y defensa",
  "title": "Defensa, seguridad internacional y autonomía estratégica",
  "desc": "Mantener los compromisos de España con la OTAN y la cooperación europea en defensa; desarrollar una industria de defensa propia y reducir dependencias tecnológicas y de suministros extranjeros. Reforzar la protección de infraestructuras críticas, la ciberseguridad y la investigación en tecnologías de defensa.",
  "goal": "Reforzar la cooperación militar y tecnológica con los aliados y mantener capacidades suficientes para proteger el territorio, las fronteras y los intereses nacionales.",
  "measures": [
   "Mantener los compromisos con la OTAN y la UE.",
   "Desarrollar una industria de defensa propia.",
   "Reducir dependencias tecnológicas y de suministros.",
   "Proteger las infraestructuras críticas.",
   "Reforzar la ciberseguridad.",
   "Investigación en tecnologías de defensa.",
   "Cooperación militar y tecnológica con los aliados.",
   "Capacidades suficientes para proteger el territorio, las fronteras y los intereses nacionales."
  ]
 },
 {
  "id": "politica-exterior-pragmatica",
  "block": "Política internacional, inmigración y defensa",
  "title": "Política exterior pragmática, basada en los intereses de España",
  "desc": "Relación estratégica con la Unión Europea y cooperación con Estados Unidos y la OTAN en seguridad, diversificando a la vez socios y dependencias con Marruecos, China, India y otros países.",
  "goal": "Proteger los intereses económicos, industriales y estratégicos de España.",
  "measures": [
   "Política exterior basada en los intereses nacionales.",
   "Relación estratégica con la UE.",
   "Cooperación con Estados Unidos y la OTAN en seguridad.",
   "Fortalecer relaciones con Marruecos, China, India y países europeos.",
   "Diversificar socios y dependencias.",
   "Mantener relaciones con países de distintos sistemas políticos respetando el derecho internacional."
  ]
 },
 {
  "id": "proteccion-del-territorio-y-biodiversidad",
  "block": "Medio ambiente y sostenibilidad",
  "title": "Protección del territorio y biodiversidad",
  "desc": "Establecer una política nacional de protección y recuperación del patrimonio natural, con la participación de quienes conocen y trabajan el territorio.",
  "goal": "Conservar y recuperar el patrimonio natural compatibilizándolo con las actividades económicas que sean compatibles con él.",
  "measures": [
   "Protección estricta de espacios naturales de alto valor ecológico.",
   "Recuperación de ecosistemas degradados y especies autóctonas.",
   "Control de especies invasoras.",
   "Compatibilizar la conservación ambiental con las actividades económicas que sean compatibles con ella.",
   "Aprovechamiento sostenible de los recursos naturales.",
   "Incorporar el conocimiento tradicional y práctico de agricultores, ganaderos, silvicultores, pescadores, profesionales forestales y personas que conocen y trabajan la tierra.",
   "La gestión ambiental contará con la experiencia de quienes conocen el territorio de primera mano y no se diseñará exclusivamente desde los despachos."
  ]
 },
 {
  "id": "gestion-forestal-activa-y-prevencion-de",
  "block": "Medio ambiente y sostenibilidad",
  "title": "Gestión forestal activa y prevención de incendios",
  "desc": "Establecer un modelo de gestión forestal activa durante todo el año, basado en prevención, aprovechamiento responsable y coordinación de emergencias.",
  "goal": "Pasar de una intervención centrada en apagar incendios a una gestión preventiva y continuada, aprovechando responsablemente los recursos del bosque y generando actividad económica rural.",
  "measures": [
   "Limpieza y mantenimiento preventivo de bosques.",
   "Recuperación de usos forestales sostenibles.",
   "Aprovechamiento responsable de biomasa y madera.",
   "Recuperación de caminos y accesos forestales.",
   "Pastoreo controlado como herramienta de prevención cuando sea adecuado.",
   "Refuerzo de brigadas forestales y coordinación de emergencias."
  ]
 },
 {
  "id": "proteccion-y-recuperacion-del-agua-y-los",
  "block": "Medio ambiente y sostenibilidad",
  "title": "Protección y recuperación del agua y los ecosistemas acuáticos",
  "desc": "Desarrollar una política nacional para proteger y recuperar los recursos hídricos y los ecosistemas acuáticos.",
  "goal": "Proteger el agua tanto como recurso de abastecimiento como elemento esencial de ecosistemas vivos.",
  "measures": [
   "Reducir la contaminación de ríos, lagos, humedales y acuíferos.",
   "Recuperar cauces y zonas húmedas degradadas.",
   "Controlar vertidos industriales, agrícolas y urbanos.",
   "Proteger los ecosistemas fluviales y la biodiversidad acuática.",
   "Mejorar el tratamiento y la reutilización de aguas residuales.",
   "Compatibilizar el abastecimiento humano, agrícola e industrial con los caudales ecológicos."
  ]
 },
 {
  "id": "residuos-y-economia-circular",
  "block": "Medio ambiente y sostenibilidad",
  "title": "Residuos y economía circular",
  "desc": "Establecer un modelo nacional que reduzca los residuos desde su origen y recupere el valor de los materiales.",
  "goal": "Convertir los residuos en recursos económicos, materias primas y oportunidades industriales.",
  "measures": [
   "Reducir envases y embalajes innecesarios.",
   "Mejorar la separación y recogida selectiva.",
   "Impulsar plantas de reciclaje y recuperación de materiales en España.",
   "Favorecer la reparación, reutilización y segunda vida de productos.",
   "Transformar residuos orgánicos en compost y otros recursos aprovechables.",
   "Reducir progresivamente el vertido.",
   "Controlar los residuos industriales peligrosos.",
   "Fomentar empresas que recuperen materiales y desarrollen nuevos usos para lo que actualmente se desecha."
  ]
 },
 {
  "id": "contaminacion-movilidad-electrica-y-calidad",
  "block": "Medio ambiente y sostenibilidad",
  "title": "Contaminación, movilidad eléctrica y calidad ambiental",
  "desc": "Establecer un plan nacional para reducir la contaminación y mejorar la calidad ambiental en ciudades, pueblos y zonas industriales.",
  "goal": "Mejorar la calidad ambiental con objetivos medibles, controles periódicos y publicación de resultados. En movilidad eléctrica, ningún conductor debería tener que recorrer más de 50 km por carretera para encontrar un área de recarga operativa.",
  "datos": [
   [
    "50 km",
    "distancia máxima hasta un punto de recarga operativo"
   ]
  ],
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
  "pending": "Encaje de la eliminación de las restricciones urbanas con las obligaciones de calidad del aire y las competencias municipales; definición de cobertura, potencia y disponibilidad de los puntos de recarga."
 },
 {
  "id": "soberania-alimentaria-produccion-nacional-y",
  "block": "Agricultura, ganadería y pesca",
  "title": "Soberanía alimentaria, producción nacional y comercio local",
  "desc": "Aumentar la producción alimentaria española, reducir la dependencia exterior y fortalecer los canales de comercialización de proximidad.",
  "goal": "Promover productos nacionales, de proximidad y de temporada, y facilitar que la producción llegue al consumidor a través de canales locales.",
  "measures": [
   "Aumentar la producción alimentaria española.",
   "Reducir la dependencia exterior.",
   "Favorecer el comercio local, mercados municipales, cooperativas y venta directa.",
   "Promover productos nacionales, de proximidad y de temporada."
  ]
 },
 {
  "id": "rentabilidad-y-proteccion-de-los-productores",
  "block": "Agricultura, ganadería y pesca",
  "title": "Rentabilidad y protección de los productores",
  "desc": "Mejorar la rentabilidad y la capacidad negociadora de agricultores, ganaderos y pescadores, con mayor transparencia en la cadena de precios.",
  "goal": "Proteger a los productores y facilitar condiciones sostenibles para que las explotaciones y actividades pesqueras puedan continuar.",
  "measures": [
   "Garantizar una remuneración justa para agricultores, ganaderos y pescadores.",
   "Evitar la comercialización sistemática por debajo de los costes efectivos de producción.",
   "Aumentar la transparencia de precios desde el origen hasta el consumidor.",
   "Mejorar la capacidad negociadora de los productores.",
   "Reducir burocracia y facilitar financiación, agua y energía competitivas."
  ]
 },
 {
  "id": "modernizacion-tecnologica-y-relevo-generacional",
  "block": "Agricultura, ganadería y pesca",
  "title": "Modernización tecnológica y relevo generacional",
  "desc": "Modernizar las explotaciones y facilitar la incorporación de jóvenes al campo mediante tecnología, formación y mejores condiciones rurales.",
  "goal": "Mejorar la competitividad y continuidad de las explotaciones, facilitando el relevo generacional.",
  "measures": [
   "Impulsar agricultura de precisión, sensores, drones, robótica e inteligencia artificial.",
   "Modernizar maquinaria e instalaciones.",
   "Desarrollar riego inteligente.",
   "Facilitar el acceso de jóvenes a tierras, explotaciones y financiación.",
   "Mejorar conectividad, vivienda y servicios rurales para atraer jóvenes al campo."
  ]
 },
 {
  "id": "proteccion-y-recuperacion-de-tierras-agricolas",
  "block": "Agricultura, ganadería y pesca",
  "title": "Protección y recuperación de tierras agrícolas",
  "desc": "Proteger las tierras de alto valor productivo, evitar su abandono y facilitar acuerdos voluntarios para que puedan volver a cultivarse.",
  "goal": "Mantener las tierras agrícolas productivas y facilitar el acceso a nuevos agricultores respetando la propiedad privada.",
  "measures": [
   "Proteger tierras de alto valor productivo.",
   "Evitar el abandono agrícola.",
   "Facilitar alquileres, cesiones y acuerdos voluntarios.",
   "Crear intermediación entre propietarios y nuevos agricultores.",
   "Respetar la propiedad privada."
  ]
 },
 {
  "id": "ganaderia-y-pesca-sostenibles-y-competitivas",
  "block": "Agricultura, ganadería y pesca",
  "title": "Ganadería y pesca sostenibles y competitivas",
  "desc": "Apoyar modelos ganaderos diversos, modernizar instalaciones y flotas, y promover pesca responsable y acuicultura sostenible.",
  "goal": "Mejorar la competitividad y sostenibilidad de la ganadería, la pesca y la acuicultura sin excluir modelos productivos por sistema.",
  "measures": [
   "Apoyar ganadería extensiva e intensiva sin excluir modelos por sistema.",
   "Exigir bienestar animal, sostenibilidad, trazabilidad y eficiencia.",
   "Modernizar flotas e instalaciones.",
   "Impulsar pesca responsable y acuicultura sostenible.",
   "Combatir pesca ilegal y mejorar la comercialización nacional."
  ]
 },
 {
  "id": "cultura-accesible-y-participacion-cultural",
  "block": "Cultura, deporte y sociedad",
  "title": "Cultura accesible y participación cultural",
  "desc": "Facilitar el acceso a la cultura, acercar actividades a jóvenes y municipios rurales y apoyar a creadores y espacios culturales.",
  "goal": "Ampliar la participación cultural y favorecer el acceso a actividades y servicios en distintos territorios y colectivos.",
  "measures": [
   "Facilitar acceso económico a museos, teatros, conciertos, exposiciones y actividades.",
   "Ofrecer entradas gratuitas o reducidas para determinados colectivos y actividades.",
   "Acercar la cultura a niños, jóvenes y municipios rurales.",
   "Apoyar artistas, creadores, bibliotecas y espacios culturales."
  ]
 },
 {
  "id": "deporte-y-actividad-fisica-para-todos",
  "block": "Cultura, deporte y sociedad",
  "title": "Deporte y actividad física para todos",
  "desc": "Mejorar el acceso a instalaciones y actividades deportivas para personas de todas las edades y capacidades.",
  "goal": "Promover la práctica deportiva y la actividad física a lo largo de la vida.",
  "measures": [
   "Mejorar instalaciones deportivas públicas.",
   "Ofrecer precios accesibles en polideportivos, piscinas y gimnasios.",
   "Promover deporte infantil, juvenil, adulto y para mayores.",
   "Apoyar deporte base, femenino y adaptado."
  ]
 },
 {
  "id": "juventud-asociaciones-y-financiacion-del",
  "block": "Cultura, deporte y sociedad",
  "title": "Juventud, asociaciones y financiación del deporte base",
  "desc": "Reforzar espacios juveniles, asociaciones y entidades de base, con financiación transparente y apoyo a actividades para infancia y juventud.",
  "goal": "Facilitar la participación de jóvenes y el desarrollo de clubes y entidades comunitarias.",
  "measures": [
   "Crear espacios juveniles y actividades culturales, deportivas y tecnológicas.",
   "Aumentar las partidas presupuestarias para clubes deportivos, asociaciones juveniles y entidades culturales y sociales.",
   "Priorizar actividades para infancia y juventud.",
   "Facilitar ayudas para material, instalaciones y entrenadores.",
   "Simplificar trámites y facilitar instalaciones públicas.",
   "Controlar el uso de las ayudas y sus resultados."
  ]
 },
 {
  "id": "patrimonio-tradiciones-y-bienestar-animal",
  "block": "Cultura, deporte y sociedad",
  "title": "Patrimonio, tradiciones y bienestar animal",
  "desc": "Conservar el patrimonio y las tradiciones compatibles con el bienestar animal, ayudando a adaptar celebraciones que impliquen maltrato.",
  "goal": "Proteger el patrimonio y la vida cultural local sin justificar el maltrato o sufrimiento animal.",
  "measures": [
   "Conservar patrimonio histórico, arquitectónico e industrial.",
   "Proteger tradiciones y fiestas compatibles con el bienestar animal.",
   "Establecer que ninguna tradición justifica el maltrato o sufrimiento animal.",
   "Sustituir progresivamente las celebraciones que impliquen maltrato por alternativas culturales, musicales, gastronómicas y artísticas sin animales.",
   "Ayudar a municipios y asociaciones a adaptar sus celebraciones."
  ]
 },
 {
  "id": "participacion-ciudadana-y-cohesion-social",
  "block": "Cultura, deporte y sociedad",
  "title": "Participación ciudadana y cohesión social",
  "desc": "Facilitar que los vecinos propongan y voten iniciativas culturales, deportivas y sociales y conozcan el uso de los presupuestos asociados.",
  "goal": "Fortalecer la participación local, el voluntariado y las iniciativas que conectan a distintas generaciones.",
  "measures": [
   "Crear partidas presupuestarias municipales para proyectos ciudadanos.",
   "Permitir que los vecinos propongan y voten iniciativas culturales, deportivas y sociales.",
   "Apoyar asociaciones y agrupaciones locales.",
   "Facilitar espacios públicos, voluntariado e iniciativas intergeneracionales.",
   "Publicar presupuestos, proyectos seleccionados y resultados."
  ]
 }
]
};
