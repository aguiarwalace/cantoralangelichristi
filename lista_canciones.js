const canciones = [
/*Categorías siempre en minúsculas y sin acentos, para facilitar la búsqueda. 
Ejemplo: entrada, piedad, aspersion, gloria, aleluya, ofrendas, ofertorio, santo, doxologia, padrenuestro, cordero, comunion, reflexion, salida, adoracion, espiritusanto, mariano, navidad, alabanza,pasion,angelichristi.*/
  
// --- SECCIÓN: CANTOS DE ENTRADA status: terminado ---
  {
    id: 1,
    titulo: "A TI LEVANTO MIS OJOS",
    autor: "Miguel Manzano",
    categoria: "entrada",
    tonoOriginal: "Dm",
    //linkYoutube: "https://www.youtube.com/watch?v=ejemplo", // NUEVO
    //linkPartitura: "https://drive.google.com/file/d/ejemplo", // NUEVO
    letra: `
Intro: [Dm] [D7]

[Gm]A ti levanto mis [Dm]ojos,
[A7]a ti que habitas en el [Dm]cielo,[D7]
[Gm]A ti levanto mis [Dm]ojos,
por que es[A7]pero, [Dm]tu misericordia.

[Dm]Como están los [Gm]ojos de los esclavos,
[C7]Fijos en las manos de [F]sus señores,
[Dm]Así están nuestros [Gm]ojos en el Señor,
[A7]Esperando su [Dm]misericordia.

[Dm]Misericordia Se[Gm]ñor, misericordia,
[C7]Estamos sa[F]ciados de burlas.
[Dm]Misericordia Se[Gm]ñor, misericordia,
[A7]Estamos sa[Dm]ciados de desprecios.
`
  },
  {
    id: 2,
    titulo: "ALABANZAS",
    autor: "Eduardo Ortiz Tirado",
    categoria: "entrada",
    tonoOriginal: "D",
    letra: `
[D]Este es el día y el [E]lugar,
[G]Dios está aquí y te [A]quiere hablar,
[D]Abre la puerta y es[E]cúchalo,
[G]Y déjalo en[A]trar.

[D]Este es el día y el [E]lugar.
[G]Dios esa aquí y te [A]quiere amar.
[D]Dale tu vida y tu [E]corazón.
[G]Y empieza a can[A]tar.

[D]Alabanzas al Se[Bm]ñor,
[G]Por sus obras y por [A]sus dones,
[D]Alabanzas al Se[Bm]ñor, [G]por la vida y su pa[A]labra,
[D]Y da [F#m]gracias al Se[Bm]ñor, nuestro [G]Dios, [A] por su A[D]mor.
`
  },
  {
    id: 3,
    titulo: "CAMINARÉ",
    autor: "J.A. Espinoza",
    categoria: "entrada",
    tonoOriginal: "Em",
    letra: `
[Em]Cami[A]na[Am]ré en [Em]presencia del Se[B7]ñor. [Em](x2)

[Em]Amo al Señor porque escu[D]cha mi voz supli[Em]cante.
Porque inclina su [D]oído hacia [G]mí, [C]el día que lo in[B7]voco.

[Em]Me envolvían [D]redes de muerte,
Caí en tris[Em]teza y en angustia.
[D]Invoqué el nombre del [G]Señor:
[C]Señor, salva mi [B7]vida.

[Em]Alma mía, re[D]cobra tu calma,
Que el Se[Em]ñor fue bueno contigo,
Arran[D]có mi alma de la [G]muerte,
Mis [C]ojos de las lágrimas, mis pies de la ca[B7]ída.
`
  },
  {
    id: 4,
    titulo: "CUANTO GOZO ME DIO AL OÍR",
    autor: "Anónimo",
    categoria: "entrada",
    tonoOriginal: "D",
    letra: `
[D]Cuanto [A]gozo me [Em]dio al o[G]ír,
[D]Vamos [A]ya a la [Em]casa de [G]Diooo[A]os.
[D]A tus [A]puertas Je[Em]rusa[G]lén,
Vamos [D]ya a la [A]casa de [D]Dios.

[D]Fuerte y bien cons[A]truida,
[G]Es la ciudad de [A]Sion,
[D]En ellas se re[A]únen,
[G]Las tribus del Se[A]ñor.

Llegamos a alabar a Dios
Que nos mandó venir,
Aquí está la justicia
Del trono de David.
`
  },
  {
    id: 5,
    titulo: "COMO EL CIERVO",
    autor: "Alejandro Mejía",
    categoria: "entrada",
    tonoOriginal: "G",
    letra: `
[G]Como el cier[C]vo al agua [D7]va, [G]
[G]Vamos ha[C]cia ti, Se[D7]ñor, [G]
[G]Pues de ti [C]tenemos [D7]sed, [G]
[G]Fuente del [C]eterno a[D7]mor. [G]

[C]Cami[D7]namos ha[G]cia [Em]ti
[C]Con a[D7]legres cán[G]ti[G7]cos;
[C]Hoy ve[D7]nimos a [G]tu al[Em]tar,
[C]Para a[D7]marte más, Se[G]ñor.

Quien escucha mí gemir,
Dice “¿dónde está tu Dios?”
El Señor se encuentra aquí
En la voz de júbilo.

Ya mi llanto ha de cesar;
El Señor es Salvador.
Cuando tenga que sufrir
En ti pensaré, Señor.

Gloria al Padre eterno,
Gloria al Hijo Redentor.
Gloria al Espíritu
Que nos une en el amor.
`
  },
  {
    id: 6,
    titulo: "DE AQUÍ HASTA EL FINAL",
    autor: "Eduardo Ortiz Tirado",
    categoria: "entrada",
    tonoOriginal: "D",
    letra: `
[D]De aquí hasta el fi[A]nal con[Bm]tigo, [D7]
[G]De hoy hasta la [E]eterni[A]dad.
[D]Será el Señor [A]nuestro ca[Bm]mino, [D7]
[G]Y su amor se[A]rá nuestra ra[D]zón.

[D]Para ti yo se[A]ré [Bm7]luz cuando no pue[D7]das ver,
[G]Para mi se[E]rás sol cuando [A]llueva.
[D]Trataré [F#7]para ti de [Bm7]ser cada vez me[D7]jor
[G]Y lle[A]narte con mi a[D]mor.
`
  },
  {
    id: 7,
    titulo: "DIOS ESPERA EN EL ALTAR",
    autor: "Brotes de Olivo",
    categoria: "entrada",
    tonoOriginal: "E",
    letra: `
[E]Dios es[A]pera en el al[E]tar, [B7]Vamos todos hacia El,
[A]Llevemos nuestra son[E]risa,
[A]La inquie[B7]tud nuestra [E]hambre, nuestra sed.

Dios sobre todo es Amor,
Quiere nuestra salvación,
Que juntos nos salvemos,
Para ir a la mano hacia Dios.

Al entrar en la casa de Dios,
Libre de rencores he de entrar,
Llevar el alma tranquila,
Y pensar que al salir más he de amar.

[E]Ese es [B7]Cristo, ese es [E]Dios,
[B7]Ese es Cristo, nuestro [E]Dios. (x2)
`
  },
  {
    id: 8,
    titulo: "DIOS ESTÁ AQUÍ",
    autor: "Anónimo",
    categoria: "entrada",
    tonoOriginal: "D",
    letra: `
[D]Dios está a[A7]quí [Bm](si está aquí)
[G]Es tan cierto como el [A]aire que res[D]piro, [D7]
[G]Es tan cierto como la ma[A]ñana se le[F#m]vanta el [Bm]sol,
[G]Es tan cierto como que te [A]canto y me puedes o[D]ír.

Lo puedes notar a tu lado en este mismo instante,
Lo puedes llevar muy dentro de tu corazón,
Ahora y siempre por los siglos de los siglos amen.
`
  },
  {
    id: 9,
    titulo: "ÉL VIVE Y REINARÁ (Ele vive e reinará)",
    autor: "Ministério Adoração e Vida",
    categoria: "entrada",
    tonoOriginal: "F",
    letra: `
Intro: [F] [Bb] [F] [Bb] [F] [Bb] [F] [Bb]

[Dm]Hasta a[C]quí el Se[Bb]ñor nos ayudó
[Dm]Siempre [C]con su brazo [Bb]fuerte
[Dm]Resisti[C]remos para [Bb]testimoniar
[F]Su po[Dm]der y [C]su amor

[Dm]Hasta a[C]quí el Se[Bb]ñor nos ayudó
[Dm]Su pro[C]mesa es [Bb]vida
[F]Todo a[C]quel que en [Bb]él confiar
[Dm]Salva[F]ción y [C]vida tendrá

[F]Ale[C]grense y rin[Bb ]danle glória
[F]Cele[C]brar con can[Eb]ción de victoria
[Dm]Si la [C]muerte no lo [Bb]pudo ven[Dm]cer
[Dm]¿Quién [Am]po[G]drá?
[Bb]El [C]vive y rei[F]na[C]rá! (x2)

[F]¡Él [Eb]vive, [Bb]Él [F]reina! [E] [Bb]
[F]Él [Eb]vive [Bb]Él [F]vive y rei[E]na[Bb]rá! [F]
`
  },
  {
    id: 10,
    titulo: "HA VENCIDO EL CORDERO",
    autor: "Jésed",
    categoria: "entrada",
    tonoOriginal: "F",
    letra: `
[F]Toda la tierra te a[Dm]labe Señor,
[A#]Te alabe la luna y el [C]sol.
[F]Toda la tierra te a[Dm]labe Señor,
[A#]Las estrellas te rindan lo[C]or.

[Gm]Todos los reyes del [Dm]mundo Señor,
[Gm]Se postren ante tu es[Dm]plendor,
[Gm]Exulten el cielo, la [Dm]tierra y el mar,
[A#]Y estallen en una can[C]ción. (x2)

[F]Aleluya, a[Dm]leluya, [A#]Ha llegado el [C]reino de Dios,
[F]Ha vencido el [Dm]Cordero, [A#]Ha triunfado con armas de [C]Amor. (x2)
`
  },
  {
    id: 11,
    titulo: "HACIA TI, MORADA SANTA",
    autor: "Kiko Argüello",
    categoria: "entrada",
    tonoOriginal: "Gm",
    letra: `
[Gm]Hacia ti, mo[D]rada Santa,
[D7]hacia ti, tierra del sal[Gm]vador,
[F]peregrinos, cami[D#]nantes,
[D]vamos hacia ti.

[D7]Venimos a tu [Gm]mesa, [F]sellaremos tu pacto
[D#]Comeremos tu carne, [Cm6]tu [D]sangre nos limpiará.

Reinaremos contigo, en tu morada santa,
beberemos tu sangre, tu fe nos salvará.

Somos tu pueblo santo que hoy camina unido.
Tú vas entre nosotros, tu amor nos guiará.
`
  },
  {
    id: 12,
    titulo: "ME ACERCARÉ",
    autor: "Anónimo",
    categoria: "entrada",
    tonoOriginal: "G",
    letra: `
[G] [Bm] [C]Me acer[G]caré, al altar de Dios,
[C]Al Dios que me [Am]da su ale[A7]gría y va[D]lor,
[D7]A mi juven[G]tud. [Em]La, la, [Am]la, [D7]la…

[G]El Señor [Em]me ha creado, [C]Su amis[D7]tad me ha ofrecido,
[G]En mi vida me [Em]orienta, en mi [C]muerte, [D7]Me es[G]pera,
El Se[Em]ñor es mi [C]Padre, [D7]Y su [G]paz, [Em]un a[Am]migo. [D7]
La, la, la, la…
`
  },
  {
    id: 13,
    titulo: "NOS HAS LLAMADO AL DESIERTO",
    autor: "Anónimo",
    categoria: "entrada",
    tonoOriginal: "Em",
    letra: `
[Em]Nos has llamado al desierto [Am]Señor [B7]de la liber[Em]tad
[F]Y esta el cora[B7]zón abi[Em]erto [Am]A la luz de tu ver[B7]dad

Subimos con esperanza la escalada Cuaresmal
El pueblo de dios avanza hasta la cumbre pascual

[Em]Tu pueblo, señor camina desde la aurora al ocaso
[G]Tu pascua se encamina [D]Y te sigue paso a [Em]paso
`
  },
  {
    id: 14,
    titulo: "JUNTOS CANTANDO LA ALEGRÍA",
    autor: "Cesáreo Gabaraín",
    categoria: "entrada",
    tonoOriginal: "G",
    letra: `
[G]Juntos can[D7]tando la ale[G]gría [G7]
[C]De vernos unidos en la [Am]fe y el a[D7]mor;
[G]Juntos sin[D7]tiendo en nuestras [G]vidas [G7]
[C]La alegre pre[D7]sencia del Se[G]ñor.

[G]Somos la Iglesia pere[Em]grina que Él fundó,
[C]Somos un pueblo que ca[Am]mina sin ce[D7]sar.
[G]Entre cansancios y espe[Em]ranzas hacia Dios,
[C]Nuestro a[D7]migo Je[G]sús nos llevará.

Hay una fe que nos alumbra con su luz,
Una esperanza que empapó nuestro esperar.
Aunque la noche nos envuelva en su inquietud,
Nuestro amigo, Jesús nos guiará.

Es el Señor, nos acompaña al caminar,
Con su ternura a nuestro lado siempre va.
Si los peligros nos acechan por doquier,
Nuestro amigo Jesús nos salvará.
`
  },
  {
    id: 15,
    titulo: "JUNTOS COMO HERMANOS",
    autor: "Cesáreo Gabaraín",
    categoria: "entrada",
    tonoOriginal: "D",
    letra: `
[D]Juntos como her[Bm]manos [G]Miembros de una i[A]glesia,
[D]Vamos cami[Bm]nando [G]Al en[A]cuentro del Se[D]ñor.

[D]Un largo cami[Bm]nar [G]Por el desierto bajo el [A]sol,
[D]No podemos avan[Bm]zar [G]Sin la a[A]yuda del Se[D]ñor.

Unidos al rezar, unidos en una canción,
Viviremos nuestra fe con la ayuda del Señor.

La iglesia en marche está, a un mundo nuevo vamos ya,
Donde reinará el amor, donde reinará la paz.
`
  },
  {
    id: 16,
    titulo: "QUE ALEGRÍA CUANDO ME DIJERON",
    autor: "Miguel Manzano",
    categoria: "entrada",
    tonoOriginal: "E",
    letra: `
Qué ale[E]gría [A]cuando me di[E]jeron,
[F#m]Vamos a la [F#]casa del Se[B]ñor, [B7]
[E]Ya están pi[E7]sando nuestros [A]pies, [Am]
Tus um[E]brales [B]Jerusa[E]lén.

[E]Jerusalén está fun[C#m]dada,
Como ciu[F#]dad bien com[B]pacta, [B7]
[E]Haya su[E7]ben las [A]tribus,
[Am]las [E]tribus del Se[B7]ñor. [E]

Según las costumbres de Israel,
A celebrar el nombre del señor,
Ahí están los tribunales de justicia,
En el palacio de David.

Mis hermanos y compañeros,
Voy a decir la paz contigo,
Por la casa del Señor, nuestro Dios,
Te deseo todo bien.
`
  },
  {
    id: 17,
    titulo: "UN PUEBLO QUE CAMINA POR EL MUNDO",
    autor: "J. A. Espinoza",
    categoria: "entrada",
    tonoOriginal: "Em",
    letra: `
[Em]Un pueblo que camina por el [D]mundo,
[C]Gritando [B7]ven Se[Em]ñor.
[Em]Un pueblo que busca en esta [D]vida,
[C]La gran li[B7]bera[Em]ción.

[Am]Lo pobres siempre [D]esperan el ama[Em]necer,
[Am]De un día más [D]justo y sin opre[Em]sión.
[Am]Los pobres hemos [D]puesto la espe[Em]ranza,
[C]En ti liber[B7]tador.
`
  },
  {
    id: 18,
    titulo: "VAMOS CAMINANDO",
    autor: "Anónimo",
    categoria: "entrada",
    tonoOriginal: "C",
    letra: `
[C]Vamos cami[Em]nado a la [F]casa del Se[G]ñor,
[C]Juntos como her[Em]manos, en un [F]gran lazo de [G]amor.

[F]Por qué Cristo ha de[G]mostrado, [C]Con sus [Em]obras la ver[Am]dad,
[F]Porque solo un buen a[G]póstol, senti[C]rá feli[C7]cidad
[F]Porque el mundo necesi[G]ta más a[Em]mor y liber[Am]tad,
[F]Es por eso que ve[G]nimos a can[C]tar.
`
  },
  {
    id: 19,
    titulo: "VAMOS, VAMOS, VAMOS",
    autor: "Anónimo",
    categoria: "entrada",
    tonoOriginal: "E",
    letra: `
[E]Vamos, [C#m]vamos, [F#m]vamos,
[B7]Vamos al al[E]tar, al [C#m]altar de [F#m]Dios,
[B7]Que en Cristo te[E]nemos nuestr[C#m]a ale[F#m]gría,
[B7]Y nuestra juven[E]tud: [C#m]la, [F#m]la, [B7]la, 
[E]la, [C#m]la, [F#m]la, [B7]la, [E]laaa

[E]Cristo, [C#m]Cristo, [F#m]Cristo, 
[B7]nos ofrece[E]rá, nos o[C#m]frece[F#m]rá,
[B7]Su verdad y [E]vida, con [C#m]su pal[F#m]abra, 
[B7]cantaremos [E]ya: [C#m]la, [F#m]la, [B7]la,
[E]la, [C#m]la, [F#m]la, [B7]la, [E]laaa

Gloria, gloria, gloria, al Dios del Amor, al Dios del Amor,
Que nos ha reunido en torno a su mesa, para ser nuestro pan: la, la, la, la…
`
  },
  {
    id: 20,
    titulo: "VEN, VEN SEÑOR NO TARDES",
    autor: "Cesáreo Gabaraín",
    categoria: "entrada",
    tonoOriginal: "E",
    letra: `
[E]Ven, ven Señor no [F#m]tardes, [E]
[F#m]Ven, ven que te [A]espera[E]mos. [B] [E]
[E]Ven, ven Señor no [F#m]tardes, [E]
[F#m]Ven [B]pronto Se[E]ñor.

[E]El mundo muere de [A]frío, [E]
[F#m]El alma per[A]dió el ca[B]lor, [E]
[E]Los hombres no son her[A]maanos, [E]
[F#m]Al mundo le [A]falta a[E]mor.

Envuelto en sombría noche, el mundo sin paz no ve.
Buscando va una esperanza, buscando Señor tu Fe.

Al mundo le falta vida, al mundo le falta luz,
Al mundo le falta cielo, al mundo le faltas tú.
`
  },
  {
    id: 21,
    titulo: "VENID A CELEBRAR",
    autor: "Anónimo",
    categoria: "entrada",
    tonoOriginal: "E",
    letra: `
[E]Venid a cele[C#m]brar, la [E]Pascua del Se[C#m]ñor,
[F#m]la juventud e[B7]terna de su a[E]mor. (x2) [B7]

[E]Venid a contem[C#m]plar [F#m]la luz de un nuevo [B7]sol,
[C#m]la paz podemos decla[A]rar, [F#]el triunfo del a[B7]mor,
[E]hoy resuci[C#m]tó y [E]la liber[F#m]tad [B7]salió de su prisión.

Venid a contemplar que todo estalla en flor,
la primavera vuelve ya vestida de color
hoy resucito, y la libertad nos abre el corazón.
`
  },
  {
    id: 22,
    titulo: "VENIMOS HOY A TU ALTAR",
    autor: "Anónimo",
    categoria: "entrada",
    tonoOriginal: "G",
    letra: `
[G]Venimos [Bm]hoy a tu altar, [C]A can[D]tarte Señor,
[C]Pues Tú eres la ale[G]gría, [D7]De nuestro cora[G]zón.

[G]Tú hiciste los [Em]cielos, [C]Los llenas de estrellas, [D]De luz y color.
[G]Tú pintaste la au[Em]rora, [C]Hiciste las nubes, [D]Las puestas de sol.

Tú creaste la risa, la paz y la dicha, la felicidad.
Tú al darnos la vida, nos das la riqueza, tu eterna amistad.
`
  },
  {
    id: 23,
    titulo: "VIENEN CON ALEGRÍA",
    autor: "Cesáreo Gabaraín",
    categoria: "entrada",
    tonoOriginal: "E",
    letra: `
[E]Vienen con ale[B7]gría Se[E]ñor,
[B7]Cantando viene con ale[E]gría Señor,
[A]Los que caminan por la [E]vida Señor,
[F#]Sembrando tu [C#m]Paz [F#]y A[B]mor. [B] [F#] [B] [E]

[E]Vienen trayendo la espe[B7]ranza, [E]
A un mundo cargado de ansiedad,
A un mundo que busca y que no alcanza, [B7]caminos de Amor y de Amis[E]tad.

Vienen trayendo entre sus manos, esfuerzos de hermanos por la Paz,
Deseos de un mundo más humano, que hable del bien y la Verdad.
`
  },
    {
    id: 241,
    titulo: "ENTRA JESUS",
    autor: "Anónimo",
    categoria: "entrada",
    tonoOriginal: "C",
    letra: `
[C]Cuando escuches la [A7]voz del Se[Dm]ñor, [G7]
[C]Que te está hablando [Am]a tu corazón,
[Dm]No te resistas, [G7]ni quieras seguir,
[C]Como un rebelde.

[C]Porque Él está espe[A7]rando a la [Dm]puerta, [G7]
[C]A que le habrás [Am]tu corazón,
[Dm]Para entrar y mo[G7]rar junto a ti,
[C]Toda la vida.

[F]Entra Je[G]sús toma mi [C]ser, [Am]
[F]Toma mi [G]vida que es para [C]ti,
[F]Y entre tus [G]brazos quiero sa[Em]ber, [Am]
[F]Cuánto me [G]amas. (x2) [C]
`
  },
    {
    id: 400,
    titulo: "Marcha de la Iglesia (Marche d'Eglise)",
    autor: "David Julien",
    categoria: "entrada",
    tonoOriginal: "Dm",
    linkYoutube: "https://www.youtube.com/watch?v=mEAxL2huaWg",
    linkPartitura: "https://emreligiosa.cl/partituras/marcha_de_la_iglesia.pdf",
    letra: `
Intro: 
[Em]Todos unidos a los pastores, [C]vamos [Am]hacia [Em]ti.
[C]Todos unidos en una fe, [Am]vamos hacia [Em]ti.
[Em]Todos armados de fortaleza,   [C]vamos [Am]hacia [Em]ti.
[C]Todos radiantes de caridad,  [Am]vamos hacia [Em]ti.

    [F]Ciudad [Em]celeste, [Dm]tierra del [G]Señor.
    [Em]Gloria a [Am]ti, [G]Iglesia [F]Santa,
    [Em]Patria de la [Am]cristiandad.
    [Am]Que algún [F]día en [G]tu [F]recinto,
    consi[Em]gamos la [Am]unidad.

2.[Em]Desde los pueblos y las ciudades, [C]vamos [Am]hacia [Em]ti.
[C]Desde los valles y las montañas, [Am]vamos hacia [Em]ti.
[Em]Desde las chozas y los cobijos, [C]vamos [Am]hacia [Em]ti.
[C]Desde las fábricas y oficinas, [Am]vamos hacia [Em]ti.

3.[Em]LLenos de angustias y de esperanzas, [C]vamos [Am]hacia [Em]ti.
[C]LLenos de penas y de alegrías, [Am]vamos hacia [Em]ti.
[Em]LLenos de gracias y de flaquezas, [C]vamos [Am]hacia [Em]ti.
[C]LLenos de bienes y de indigencias, [Am]vamos hacia [Em]ti.

4.[Em]Con la fatiga de los trabajos, [C]vamos [Am]hacia [Em]ti.
[C]Con la vileza de los pecados, [Am]vamos hacia [Em]ti.
[Em]Hijos alegres del Dios eterno, [C]vamos [Am]hacia [Em]ti.
[C]Miembros gozosos de Jesucristo, [Am]vamos hacia [Em]ti.

5.[Em]Pueblo de Dios orientado al futuro, [C]vamos [Am]hacia [Em]ti.
[C]Pueblo de Dios enemigo del mal, [Am]vamos hacia [Em]ti.
[Em]Pueblo de Dios, sembrador de esperanzas, [C]vamos [Am]hacia [Em]ti.
[C]Piedras vivas del templo de Dios, [Am]vamos hacia [Em]ti.
`
  },

  // --- SECCIÓN: CANTOS DE PIEDAD (status: verificar los no litúrgicos y comentarlos) ---
  {
    id: 24,
    titulo: "PIEDAD 1",
    autor: "A. Mejía Misa melódica",
    categoria: "Piedad",
    tonoOriginal: "Dm",
    letra: `
[Dm]Señor ten pie[A7]dad de nos[Dm]otros. (x2)
[D7]De nos[Gm]otros Se[C7]ñor ten pie[F]dad, [Dm]
[Gm]De nos[A7]otros Se[Dm]ñor ten piedad.

[F]Cristo ten pie[C]dad de nos[F]otros,
[A#]Cristo ten pie[C]dad de nos[Dm]otros.
[D7]De nos[Gm]otros Se[C7]ñor ten pie[F]dad, [Dm]
[Gm]De nos[A7]otros Se[Dm]ñor ten piedad.
`
  },
  {
    id: 25,
    titulo: "PIEDAD 2",
    autor: "Anónimo",
    categoria: "Piedad",
    tonoOriginal: "G",
    letra: `
[G]Señor, [Bm](Señor) [C]Ten piedad, (ten piedad) (x2)
[D]De nos[Em]otros, [D]Peca[Em]dores, [B7] [Em]Ten [B7]piedad.
[Em]Cristo ten pie[B7]dad. (x2)
`
  },
  {
    id: 26,
    titulo: "PIEDAD 3",
    autor: "Cesáreo Gabaraín, La misa es una fiesta",
    categoria: "Piedad",
    tonoOriginal: "Dm",
    letra: `
[Dm]Tú que siempre nos perdonas, [C]Por qué nos [A#]quieres [C]mu[Dm]cho,
[Gm]Tú que [A]siempre nos per[Dm]donas, [C]Señor ten pie[Dm]dad.

Tú que siempre nos ayudas, por qué nos quieres mucho,
Tú que siempre nos ayudas, Cristo ten piedad.

Tú que siempre nos escuchas, por qué nos quieres mucho,
Tú que siempre nos escuchas, Señor ten piedad.
`
  },
  {
    id: 27,
    titulo: "PIEDAD 4",
    autor: "A. Mejía Misa rítmica",
    categoria: "Piedad",
    tonoOriginal: "Em",
    letra: `
[Em]Señor, Señor, pie[B7]dad, pie[Em]dad. (x2)
[Am]Señor, Señor, Se[Em]ñor, Señor, [B7]Piedad, pie[Em]dad, [B7]Piedad, Se[Em]ñor.

[Am]Cristo, pie[E7]dad, pie[Am]dad. (x2)
[F]Cristo, Cristo, [Am]Piedad, pie[E7]dad [Am] [E7]Piedad Se[Am]ñor. [B7]
Señor Señor…
`
  },
  {
    id: 28,
    titulo: "PIEDAD 5",
    autor: "Anónimo",
    categoria: "Piedad",
    tonoOriginal: "A",
    letra: `
[A]Señor (Se[C#m]ñor) Ten piedad, [D]Señor [Bm]ten pie[E]dad, de nosotros. (x2)
[D]Cristo ([C#m]Cristo) ten piedad. (x2)
[A]Señor (Se[C#m]ñor) Ten piedad, [D]Señor [Bm]ten pie[E]dad, de nosotros, [A]Ten piedad.
`
  },
  {
    id: 29,
    titulo: "PIEDAD 6",
    autor: "Anónimo",
    categoria: "Piedad",
    tonoOriginal: "Em",
    letra: `
[Em]Señor ten pie[Am]dad de noso-[Em]o-[B7]o-[Em]tros. (x2)
[G]Cristo ten pie[Am]dad de noso-[Em]o-[B7]o-[Em]tros. (x2)
[Em]Señor ten pie[Am]dad de noso-[Em]o-[B7]o-[Em]tros. (x2)
`
  },
  {
    id: 30,
    titulo: "PIEDAD 7",
    autor: "Anónimo",
    categoria: "Piedad",
    tonoOriginal: "D",
    letra: `
[D]Señor, Se[A]ñor, [G]ten pie[D]dad. (x2)
[D]Cristo, [A]ten pie[G]dad. [D](x2)
[D]Señor, Se[A]ñor, [G]ten pie[D]dad. (x2)
`
  },
  {
    id: 31,
    titulo: "PIEDAD 8",
    autor: "C. Camacho, Misa de juventud",
    categoria: "Piedad",
    tonoOriginal: "E",
    letra: `
[E]Señor, ten piedad de no[F#]sotros, [F#m] 
[E]Señor, ten pie[G#m]dad de nos[A]otros, [C#] 
[F#m]Señor, ten pie[F#]dad de nos[B]otros. [Bdim] 

[E]Cristo ten piedad de no[F#]sotros, [F#m] 
[E]Cristo ten pie[G#m]dad de nos[A]otros, [C#] 
[F#m]Cristo ten pie[F#]dad de nos[B]otros. [Bdim] 

[E]Señor, ten piedad de no[F#]sotros, [F#m] 
[E]Señor, ten pie[G#m]dad de nos[A]otros, [C#]
[F#m]Señor, ten pie[B]dad de nos[E]otros. [D] [E] 
`
  },
  {
    id: 32,
    titulo: "PIEDAD 9",
    autor: "Anónimo",
    categoria: "Piedad",
    tonoOriginal: "A",
    letra: `
[A]Señor ten pie[C#m]dad, ten pie[D]dad de nos[E]otros. (x2)
[D]Cristo ten pie[Dm]dad, ten pie[C#m]dad de nos[F#m]otros,
[Bm]Cristo ten pie[D]dad, ten pie[Bm]dad de nos[E]otros,
[A]Señor ten pie[C#m]dad, ten pie[D]dad de nos[E]otros. (x2) [A]Señor.
`
  },
  {
    id: 33,
    titulo: "PIEDAD 10",
    autor: "Anónimo",
    categoria: "Piedad",
    tonoOriginal: "C",
    letra: `
[C]Oh Señor, ten pie[Em]dad de nos[F]otros. [G](x2) [C]Oh Señor.
[D]Cristo ten pie[F#m]dad de nos[G]otros. [A](x2) [D]Cristo.
[E]Oh Señor, ten pie[F#m]dad de nos[A]otros. [B](x2) [E]Oh Señor.
`
  },
  {
    id: 34,
    titulo: "PIEDAD 11",
    autor: "Anónimo",
    categoria: "Piedad",
    tonoOriginal: "Am",
    letra: `
[Am]Ten pie[G]dad, ten piedad, [Am]Ten pie[F]dad, [E7]ten pie[Am]dad. (x2)
[Am]Ten pie[Dm]dad Señor ten pie[Am]dad, [F]soy peca[E7]dor, ten pie[Am]dad.
[F]Y de mi Cristo a[G]piádate, contra [Am]ti yo pe[E7]que. (x2)
`
  },
  {
    id: 35,
    titulo: "PIEDAD 12",
    autor: "Mario Ramos",
    categoria: "Piedad",
    tonoOriginal: "Em",
    letra: `
[Em]Piedad, ten pie[Am7]dad Señor, [Am7] [D] [D7] ([Em]) ([G] [Bm7] [B7])
Piedad, piedad. (x2)
[Em]Cristo ten pie[Am7]dad, [D]Cristo ten pie[Bm7]dad [Em]
`
  },
  {
    id: 36,
    titulo: "PIEDAD 13",
    autor: "Anónimo",
    categoria: "Piedad",
    tonoOriginal: "Em",
    letra: `
[Em]Tú, que [C9]has sido en[C]viado a sanar,
[Am7]Los cora[Am/G]zones afli[D]gidos.
[G]Señor, [Bm7]ten pie[Em]dad de nos[Bm7]otros, [Am7] [D]
[G]Señor, [Bm7]ten pie[Em]dad de nos[Bm7]otros.

Tú, que has venido a llamar, a todos los pecadores.
Cristo, ten piedad de nosotros, Cristo, ten piedad de nosotros.

[Em]Tú, que [C9]estás sen[F]tado a la [C]diestra del Padre,
[Am7]Para inter[Am/G]ceder por nos[D]otros.
[G]Señor, [Bm7]ten pie[Em]dad de nos[Bm7]otros, [Am7] [D]
[G]Señor, [Bm7]ten pie[Em]dad de nos[Bm7]otros.
`
  },
  {
    id: 173,
    titulo: "Piedad de Oliver",
    autor: "Anónimo",
    tonoOriginal: "D",
    categoria: "piedad",
    letra: `
[D]Señor, ten pie[Bm]dad.
[D]Cristo, ten pie[Bm]dad.
[G]Señor, ten pie[A]dad. (2x)

[D]Señor, ten pie[Bm]dad.
[D]Cristo, ten pie[Bm]dad.
[G]Señor, ten pie[A]dad de nos[D]otros. 
`
},
{
    id: 113, // Ajusta el ID según tu lista
    titulo: "Rocíanos Señor",
    autor: "Tradicional Litúrgico",
    tonoOriginal: "A",
    categoria: "entrada, aspersion, piedad",
    letra: 
`[A] [E] [D] [A] (Intro)

[A]Rocíanos, Se[E]ñor, con [D]tu bendi[A]ción,
[Bm]rocíanos [F#m]con tu a[D]mor. [E]Ale[A]luya.

[F#m]Vi agua bro[C#m]tar de [D]lado de[E]recho del [A]Templo..
[F#m]Renueva, [C#m]Dios de a[D]mor, nuestro bau[B7]tis[E7]mo.

[F#m]Vi que tus e[C#m]legidos re[D]cibí[E]an el [A]agua.
[F#m]Santifica, [C#m]Dios de a[D]mor, [B7]nuestra [E7]vida.

[F#m]Vi sur[C#m]gir vida [D]nueva en [E]todo tu [A]pueblo.
[F#m]Salva, [C#m]Dios de a[D]mor, a [B7]todos tus [E7]hijos.

[F#m]Vi can[C#m]tar con [D]gozo a [E]los rena[A]cidos.
[F#m]Purifica, [C#m]Dios de a[D]mor, a tu I[B7]glesia [E7]santa.

[F#m]Gloria al [C#m]Padre, y al [D]Hijo, y al Es[E]píritu [A]Santo,
[F#m]a Tí la ala[C#m]banza por [D]siempre, Se[B7]ñor.[E7]`
},
{
     id: 396,
    titulo: "KYRIE - Misa de Angelis (Kyriale VIII)",
    autor: "Gregoriano",
    categoria: "piedad",
    tonoOriginal: "Dm",
    //linkYoutube: "https://www.youtube.com/watch?v=ejemplo",
    linkPartitura: "https://www.el-atril.com/partituras/Gregoriano/AngKyrieGR.pdf",
    linkPartitura: "https://www.verbumgloriae.es/project/misa-viii-de-angelis/",
    letra: `
[Dm]Kyrie eleison, [A7]Kyrie eleison, [Dm]Kyrie eleison.
[D7]Christe eleison, [Gm]Christe eleison, [Dm]Christe eleison.
[Dm]Kyrie eleison, [A7]Kyrie eleison, [Dm]Kyrie eleison.`
},

  // --- SECCIÓN: CANTOS DE GLORIA status: agregar gloria shalom ressuscitou---
   /*{
    id: 37,
    titulo: "GLORIA 1",
    autor: "Anónimo",
    categoria: "Gloria",
    tonoOriginal: "D",
    letra: `
[D]Gloria [A]al Se[D]ñor, [A]Que reina en el [D]cielo,
[G]Y en la tierra [D]paz, [A]A los hombres que [D]ama Él.

[D]Señor te ala[A]bamos, [D]Señor te bendi[A]cemos, [D]
[G]Todos te ado[D]ramos, [A]Gracias por tu [D]Gloria.

Tú eres el Cordero, que quita el pecado, ten piedad de nosotros, y escucha nuestra oración.
Tú solo eres Santo, Tú solo el Altísimo, con el Espíritu Santo, en la Gloria de Dios Padre.
`
  },*/
  {
    id: 38,
    titulo: "GLORIA 2",
    autor: "Mejía, Misa melódica",
    categoria: "Gloria",
    tonoOriginal: "E",
    letra: `
[E]Gloria, [B]gloria, [C#m]gloria, [F#m]Gloria [A]Dios en el [B]cielo.
[E]Y en la [B]tierra [C#m]paz, [A]A los hombres que [B]aman al Se[E]ñor.

[A]Te ala[F#]bamos, te bendi[B]cemos
[G#]Te ado[C#m]ramos, te glori[F#]ficalos. [B]

[E]Te damos gracias Se[C#]ñor, [F#m]Por tu inmensa gloria, te damos [D#]gracias.
[G#m]Señor, Señor.
[C#]Dios reyceles[F#m]tial, [B7]Dios Padre [E]todo po[F#m]de[F#]ro[B]so.

[C#m]Señor, hijo [F#m]único Jesu[G#7]cristo.
[F#m]Señor, Dios Cordero de [C#m]Dios, [G#]Hijo del Padre.

[F#m]Tú que quitas el pe[B7]cado del [E]mundo,
[C#m]Ten pie[F#m]dad, ten pie[G#]dad, de nos[C#m]otros. [C#7]

[F#m]Tú que quitas el pe[B7]cado del [E]mundo,
[C#m]Atiende [A]a nuestras [F#m]suplica, [G#]Atiende a nuestras [C#m]suplica.

[C#]Tú que estas sen[F#m]tado a la de[B7]recha del [E]Padre,
[C#m]Ten pie[F#m]dad, ten pie[G#]dad, de nos[C#m]otros. [B7]

[E]Porque solo [B]Tú eres [C#m]Santo, [F#]Solo [A]Tú Señor Al[B]tísimo,
[E]Con el Es[B]píritu [C#m]Santo, [A]En la gloria de [B]Dios [E]Padre.

[C#m]Aaaaa [F#m]men, [G#7] [C#]aaa [F#m]men. [B7] [E]
`
  },
  /*{
    id: 39,
    titulo: "GLORIA 3 (LA, LA, LA)",
    autor: "Anónimo",
    categoria: "Gloria",
    tonoOriginal: "G",
    letra: `
[G]Gloria a [Bm]Dios en el cielo, [C]Y en la [D]tierra paz a los hombres. (x2)

[B7]Te ala[Em]bamos y te bendecimos, [B7]Te ado[Em]ramos te glorificamos,
[C]Te damos gracias Señor, [Am]Por tu inmensa [D]gloria. [D7]

Porque solo Tú eres el Cordero, el que quita el pecado del mundo, ten Piedad de nosotros Señor.

[C]Solo Tú eres [Cm]Santo, [G]solo Tú Se[Em]ñooor,
[Am]Con el Es[D7]píritu Santo, [Am]En la [D7]Gloria de Dios [G]Padre, Amen.
`
  },
  {
    id: 40,
    titulo: "GLORIA 4",
    autor: "Mejía, Misa rítmica",
    categoria: "Gloria",
    tonoOriginal: "Em",
    letra: `
[Em]Gloria, [G]Gloria a [B7]Dios en el [Em]cielo,
[G]Y en la [D]tierra a los [C]hombres [B7]paz. [Em](x2)

[Em]Te ala[D]bamos y te bendecimos, [C]Te ado[B7]ramos, te glorificamos,
[Em]Y nosotros hoy te damos [D]gracias, [C]Por tú [B7]grande y eterna Gloria.

[Em]Señor Dios [B7]nuestro, [Em]Padre, [Am]Padre, [Em]Padre,
[D]Señor Dios [Em]Hijo, [B7]Piedad, pie[Em]dad, pie[B7]dad Se[Em]ñor,
[D]Tú que quitas el pe[Em]cado del mundo, [B7]Escú[Em]chanos, es[B7]cúcha[Em]nos,
[D]Tú que estás a la de[Em]recha del Padre, [B7]Piedad, pie[Em]dad, pie[B7]dad Se[Em]ñor.

[Em]Solo Tú [G]eres Santo, [B7]solo Tú Se[Em]ñor, [G]solo Tú Al[D]tísimo,
[C]Jesu[B7]criis[Em]to, [Em]con el [G]Santo Espíritu, [B7]En la [Em]Gloria de Dios Padre,
[G]Amén, a[D]mén, aaa[C]mén. [B7] [Em]
`
  },*/
  {
    id: 41,
    titulo: "GLORIA 5",
    autor: "C. Camacho Misa de Juventud",
    categoria: "Gloria",
    tonoOriginal: "E",
    letra: `
[E]Gloria a [D]Dios en el [E]cielo, [E]Gloria a [D]Dios en el [A]cielo,
[D]Y [G]en la [D]tierra [E]paz, [A]A los [E]hombres de [B7]buena voluntad.

[G]Te ala[B7]bamos, te bendecimos, [G]Te ado[B7]ramos, te glorificamos,
[C]Te damos gracias por tu in[E]mensa Gloria.

[Bmaj7]Señor Dios rey celes[Amaj7]tial, [Bmaj7]Dios Padre todo pode[Amaj7]roso,
[E]Señor [D]Hijo [A]único Jesu[B]cristo, [E]Señor Dios Cor[D]dero de Dios, [C]Hijo del Pa[B7]adre. [Em]

[Em]Tú que quitas el pe[D]cado del [Em]mundo, [C]Ten piedad de nos[G]otros,
[Em]Tú que [D]quitas el pe[Em]cado del mundo, [C]Atiende a nuestras [G]suplicas,
[Em]Tú que estás sen[D]tado a la de[Em]recha del Padre, [C]Ten pie[B7]dad, de nos[E]otros.

[E]Por qué [D]solo Tú eres [E]Santo, [E]Por qué [D]solo Tú Se[A]ñor,
[D]Solo [G]Tú [D]eres Al[E]tísimo, [A]Solo [E]Tú Jesuc[B7]risto,
[G]Con el Es[B7]píritu Santo, [C]En la [E]Gloria de Dios Padre,
[D]Aa[E]men, aa[D]men, aa[D]men. [E]
`
  },
  /*{
    id: 42,
    titulo: "GLORIA 6",
    autor: "Anónimo",
    categoria: "Gloria",
    tonoOriginal: "C",
    letra: `
[C]Gloria [F]a Dios en las al[G]turas, [F]Paz, [G]paz en la [C]tierra,
[F]A los hombres que [G]aman al Se[C]ñor.

[C]Te alabamos, te bendecimos, [G]Te adoramos, te glorificamos.
Gloria al Padre, Dios Creador, Gloria al Espíritu santificador.
Solo tú eres Santo, solo tu Señor, solo tú Altísimo, Jesucristo.
`
  },*/
  {
    id: 43,
    titulo: "GLORIA 7",
    autor: "Jeséd",
    categoria: "Gloria",
    tonoOriginal: "G",
    letra: `
[G]Gloria [F]a Dios en el [G]cielo. [F]
[G]Y en la [F]tierra a los hombres [G]paz. [F](x2)

[A#]Te ala[G]bamos, te bendecimos, [A#]Te ado[G]ramos, te glorificamos.
[G]Te damos [F]gracias por tu in[G]mensa gloria. [F]
[G]Señor [F]Dios, Rey celes[G]tial. [F]
[Em]Dios Padre todo[F]poderoso, [G]Señor Hijo único, Jesu[F]cristo,
[C]Señor, Dios, Cordero de [F]Dios; Hijo del [G]Pa[F/Gm]dre.

[Gm]Tú que quitas el pe[F]cado del mundo, [C]Ten piedad de nos[Gm]otros;
[Gm]Tú que quitas el pe[F]cado del mundo, [C]Atiende a nuestras [A#]suplicas;
[F]Tú que estas a la derecha del Padre; [C]Ten piedad de nos[G]otros.

[Em]Porque sola[F]mente Tú eres [G]Santo, [G]Solo tu al[F]tísimo Jesucristo;
[C]con el Es[F]píritu Santo en la Gloria del [G]Pa[F]dre.

[G]Gloria [F]a Dios en el [G]cielo. [F] [G]Y en la [F]tierra a los hombres [G]paz. [F]
[C]A[F]mén. [G](x2)
`
  },
  /*
    id: 44,
    titulo: "GLORIA 8",
    autor: "Amigos",
    categoria: "Gloria",
    tonoOriginal: "D",
    letra: `
[D]Gloria [A]a Dios en el [Em]cielo. [G]
[D]Y en la [A]tierra paz a los [Em]hombres que [G]ama él. (x2)

[Em]Te ala[A]bamos señor, [D]Te bendi[Em]cemos, te adoramos
[G]Te damos [A]gracias, señor, [A#]Por tu in[A]mensa gloria.

Gloria a Dios en el cielo... (x2)

Tu eres el cordero, El que quita el pecado, Damos gracias, señor, Escucha nuestra oración.

Gloria a Dios en el cielo... (x2)

[F#m]Solo tu [Bm]eres santo, [G] [A] [F#]
[Bm]Solo tu se[A]ñor, [G]solo tu al[D]tísimo Jesús
[Em]Con el es[G]píritu [A]santo, [D]En la [G]gloria de [Em]Dios, [A]padre.

Gloria a Dios en el cielo... (x2)
`
  },*/
  {
    id: 45,
    titulo: "GLORIA",
    autor: "Comunidad Católica Shalom - Na danca da Vida",
    categoria: "gloria",
    tonoOriginal: "G",
    letra: `
Intro: [Em] [D/F#] [G] [A9] [Bm] [A/C#] [D/F#] [G] [A9] [G] [A] [Bm]

  [G]Gloria, [A9]gloria a [G]Dios [A]en el [Bm]cielo
  [D/F#]o-[A9]o [G] [A9]gloría, [G]y en la [A]tierra [Bm]reine paz. (x2)

[Em]Señor Dios, rey celes[A]tial, [Bm]Dios padre omnipo[F#m]tente
[G]Te ala[A]bamos, bendi[Em7]cemos, ado[A4]ramos, te glori[F#7]ficamos
[Bm]Señor [F#m]te damos [G]gracias, [Em]por tu.

  [G]Gloria, [A9]gloria a [G]Dios [A]en el [Bm]cielo
  [D/F#]o-[A9]o [G] [A9]gloría, [G]y en la [A]tierra [Bm]reine paz. (x2)

[Em]Jesucristo, se[A]ñor Dios, [Bm]Hijo [F#m]único del padre
[G]Cordero de Dios que [A]quitas [Bm]El pecado del mundo, Ten piedad
[G]Tu que [A]estas a la derecha del [Bm]padre, Ten piedad
[G]Tu que [A]quitas el pecado del [Em]mundo, [D]Ten pie[A/C#]dad
[Bm]Escucha [F#m]nuestras [G]súpli[Em]ca. [D/F#] [G]

  [G]Gloria, [A9]gloria a [G]Dios [A]en el [Bm]cielo
  [D/F#]o-[A9]o [G] [A9]gloría, [G]y en la [A]tierra [Bm]reine paz. (x2)

[Em]Solo tu [D/F#]eres [G]santo, señor, [A]El al[Bm]tísimo Se[Em]ñor [D]Jesu[A/C#]cristo
[Bm]Con el [F#m]espí[G]ritu [D/F#]y el [G]padre, en su.

  [G]Gloria, [A9]gloria a [G]Dios [A]en el [Bm]cielo
  [D/F#]o-[A9]o [G] [A9]gloría, [G]y en la [A]tierra [Bm]reine paz. (x2)`
  },
  {
    id: 112,
    titulo: "Rey del Cielo (Gloria)",
    autor: "Comunidad Católica Shalom",
    tonoOriginal: "E",
    categoria: "Gloria",
    letra: 
`[E] [E/G#] [A] [E/G#] [A] [C#m] [B] (Intro)

[C#m]Glo[A]_____ria a [E]Dios en el [B]cielo!
[C#m]Glo[A]_____ria y [E]paz en la [B]tierra a los [A] [D]hombres por [A]Él a[E]mados!
[C#m]Glo[A]_____ria a [E]Dios en el [B]cielo!
[C#m]Glo[A]_____ria y [E]paz en la [B]tierra a los [A] [D]hombres por [A]Él a[E]mados!

[C#m]Señor Dios, [A]Rey del cielo, [E]Dios Padre todo[B]poderoso 
[C#m]Te alabamos, [A]te bendecimos, [E]te ado[B]ramos
[F#m]Te glorifi[G#m]camos, te damos [A]gracias por [C#m]tu in[B]mensa 
[C#m]Glo[A]______[E]ria [B]

[C#m]Señor [A]Jesucristo, [E]Hijo uni[B]génito 
[C#m]Señor Dios, [A]Cordero de Dios, [E]Hijo de Dios [B]Padre

[A]Tu que quitas el pe[E/G#]cado del mundo, [F#m]ten piedad de no[B]sotros 
[A]Tu que quitas el pe[E/G#]cado del mundo, [F#m]Atiende a nuestra [B]súplica 
[A]Tu que estas a la de[B]recha del Padre, [E]ten piedad de no[G#]sotros 

[A]Solo tu eres [B]Santo, Solo tu el Se[C#m]ñor 
[E]Solo tu Al[A]tísimo, [B]Jesucristo, con el Es[C#m]píritu Santo 

[F#m]En la gloria de Dios [A]Padre 
¡Am[B]én!

[C#m]Glo[A]_____ria a [E]Dios en el [B]cielo!
[C#m]Glo[A]_____ria y [E]paz en la [B]tierra a los [D]hombres por [A]Él a[E]mados!
[C#m]Glo[A]_____ria a [E]Dios en el [B]cielo!
[C#m]Glo[A]_____ria y [E]paz en la [B]tierra a los [D]hombres por [A]Él a[E]mados!`
},
{
  id: 242,
  titulo: "Amados por Dios (Gloria)",
  autor: "Comunidade Católica Shalom - Divino Corazón",
  categoria: "gloria",
  tonoOriginal: "A",
  letra: `
Intro: [D9] [A9] [D9] [E] / [D9] [A9] [F#m] [E]

[D] Glo-[D9]ria, [A9] oooh [D/F#] gloria [F#m7] a [E4] Dios [E] en el [D9] cielo
[A/C#] Paz en la [Bm7] tierra a los [E4] hombres [E] amados.
[D] Glo-[D9]ria, [A9] oooh [D/F#] gloria [F#m7] a [E4] Dios, [E] en el [D9] cielo
[A/C#] Paz en la [Bm7] tierra a los [E4] hombres [E] amados [G9] por Dios.

( [E4] [E] [F#m] [E/G#] )

[A9] Señor Dios, [D/A] rey celestial, [E/G#] Dios [A4] padre [A] omnipotente.
[A] Te ala[D/A]bamos, te [E/G#] bendi[A4]ce[A]mos,
te [D9] adoramos, te [A/C#] glorificamos, te [Bm7] damos gracias
[E4] Por tu inmensa [G9] gloria.

( [E4] [E] [F#m] [E/G#] )

[A9] Señor [D/A] jesucristo, [E/G#] hijo [A4] unigé[A/C#]nito,
Señor [D9] Dios, cordero de [A/C#] Dios, hijo de [Bm7] Dios [E4] pa[E]dre.

[F#m7] Tú que quitas el [D] pecado del mundo, [A9] ¡ten piedad de [E4] nos[E]otros!
[F#m] Tú que quitas el [D] pecado del mundo, [A] ¡atiende nuestra [E4] sú[E]plica!
[D] Tú que estás a la [A/C#] derecha del padre, [G9] ¡ten piedad de [E4] nos[E]otros!

[A] Sólo tú eres [D/A] santo, [E/G#] sólo tú el [A4] se[A/C#]ñor, el [D] altísimo, [A/C#] jesucristo
con el [Bm7] espíritu santo [E4] en la gloria de [E] Dios [G9] padre. [E4] A[E]mén.

[D] Glo-[D9]ria, [A] oooh [D/F#] gloria [F#m7] a [E4] Dios [E] en el [D9] cielo
[A/C#] Paz en la [Bm7] tierra a los [E4] hombres [E] amados.
[D] Glo-[D9]ria, [A9] oooh [D/F#] gloria [F#m7] a [E4] Dios, [E] en el [D9] cielo
[A/C#] Paz en la [Bm] tierra a los [E4] hombres [E] ama[G9]dos [D/F#] por Dios,
a los [Bm7] hombres [E4] ama[E]dos [G9] por [D/F#] Dios,
a los [Bm7] hombres [E4] ama[E]dos por [A] Dios.

Final: [A9] [D9] [A9]
`
},
{
  id: 243,
  titulo: "GLORIA A DIOS EN EL CIELO",
  autor: "Eliana Ribeiro",
  categoria: "gloria",
  tonoOriginal: "G",
  letra: `
Intro: [D9] [C9] [D9] 
       [C9] [D9] [C9] 

[D9]Gloria a Dios en el [C9]cielo
y en la [G]tierra paz
a los hombres por Él [D9]amados. [(D4)] [(D)] 
[D9]Señor Dios, Rey [C9]celestial,
[G]Dios Padre [D9]todopoderoso.

[Am]Te ala[D9]bamos,
[Am]Te bende[D9]cimos,
[Am]Te ado[D9]ramos,
[Am]Te glorifi[D9]camos.
Te damos [C9]gracias
por [G]Tu inmensa [D9]gloria.

[D9]Señor Jesu[C9]cristo,
[G]Hijo uni[D9]génito. ([D4] [D])
[D9]Señor Dios, [C9]Cordero de Dios,
[G]Hijo del [D9]Padre.

[Am]Tú que quitas el pe [G]cado del mundo,
[C9]ten piedad de [D9]nosotros.
[Am]Tú que quitas el pe[G]cado del mundo,
[C9]atiende nuestra [D9]súplica.
[Am]Tú que estás a la de[G]recha del Padre,
[C9]ten piedad de [D9]nosotros.

Sólo tú eres [Am]San[D9]to,
Sólo tú Se[Am]ño[D9]or,
sólo tú Al[C9]tísimo, Jesu[D9]cristo,
[E]con el Espíritu [A]Santo

En la gloria de Dios [G]Padre. [D9]Amén.
En la gloria de Dios [G]Padre. [D9]Amén.
En la gloria de Dios [G]Padre. [D9]Amén.
En la gloria de Dios [G]Padre.[A] [D9]Amén.
`
},
 {
  id: 245,
  titulo: "GLÓRIA A DEUS NAS ALTURAS",
  autor: "Ministério Amor e Adoração",
  categoria: "gloria",
  tonoOriginal: "E",
  letra: `
[E] Glória a Deus nas al[B9]turas
[A9] Glória a Deus nas al[B9]turas
E [C#m] paz na terra aos [B9] homens por Ele a[A9]mados 

[E] Glória a Deus nas al [B9] turas
[A9] Glória a Deus nas al [B9] turas
E [C#m] paz na terra aos [B9] homens por Ele a [A9] mados 

[F#m] Senhor Deus rei dos [G#m] céus, Deus [A] pai todo poderoso
Nós vos lou[C#m7]vamos, vos bendi [B9] zemos
Nós vos ado [A] ramos e glorificamos
[F#m] Nós vos damos [G#m] graças, por [A] vossa imensa [B9] glória

[E] Glória a Deus nas al [B9] turas
[A9] Glória a Deus nas al [B9] turas
E [C#m] paz na terra aos [B9] homens por Ele a [A9] mados 

[F#m] Senhor Jesus [G#m] Cristo, [A] filho unigênito
Senhor [C#m7] Deus, cordeiro de [B9] Deus, [A] filho de Deus [B9] pai
[C#m] Vós que tirais o pe [B9] cado do mundo [A] tende piedade de [B9] nós [G#]
[F#m7] Vós que tirais o pe [G#m7] cado do mundo, [A] acolhei a nossa [B9] súplica
[C#m7] Vós que estais a di [B9] reita do Pai [A] tende piedade de [B9] nós [G#]
Só [F#m] vós sois o [G#m] santo, só [A] vós o Se [B9] nhor
Só [C#m7] vós o al [B9] tíssimo, Jesus [A] Cristo
Com Es [F#m] pírito Santo na [A] glória de Deus [B9] pai a [E] mém [B9]

[E] Glória a Deus nas al [B9] turas
[A9] Glória a Deus nas al [B9] turas
E [C#m] paz na terra aos [B9] homens por Ele a [A9] mados 

[E] Glória a Deus nas al [B9] turas
[A9] Glória a Deus nas al [B9] turas
E [C#m] paz na terra aos [B9] homens por Ele a [A9] mados [E]
`
},

  // --- SECCIÓN: CANTOS DE ALELUYA ---
  {
    id: 46,
    titulo: "1. ALELUYA (BUSCA PRIMERO)",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "D",
    letra: `
[D]Alelu[A]ya, ale-[Bm]lu-ale-[F#m]lu-ya [G]a-a-le-[D]lu-ale-[A]lu-ya.
[D]Alelu[A]ya, ale-[Bm]lu-ale-[F#m]lu-ya [G]a-a-le-[D]lu-ale-[A]luuu-[D]ya.
`
  },
  {
    id: 47,
    titulo: "2. ALELUYA",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "Em",
    letra: `
[Em]Aleluya, a-a-[D]leluya [C]a-a-[B7]lelu-[Em]ya. (x2)
`
  },
  {
    id: 48,
    titulo: "3. ALELUYA (EL SEÑOR RESUCITÓ)",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "E",
    letra: `
[E]Aleluya, aleluya, [B7]Aleluya, aleluya,
[E]Aleluya, aleluya, [B7]El Señor resuci[E]to.

[B7]El Señor resucitó, [E]Cantemos con alegría,
[B7]Demos gracias al se[E]ñor, Aleluya.
`
  },
  {
    id: 49,
    titulo: "4. ALELUYA",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "G",
    letra: `
[G]Aleluya, ale[Am]luya, [D7]Aleluya, ale[G]luya. (X2)
`
  },
  {
    id: 50,
    titulo: "5. HONOR Y GLORIA",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "C",
    letra: `
[C]Honor [Em]y gloria [Am]a ti, [F]Señor Je[G]sús [F]Honor y [G]gloria [C]a ti.
`
  },
  {
    id: 51,
    titulo: "6. ALELUYA",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "G",
    letra: `
[G]Aleluya, ale[Em]luya, [Am]Alelu-[D7]u-ya, [G]Aleluya, ale[Em]luya, [Am]Alelu-[D7]u-[G]ya.
`
  },
  {
    id: 52,
    titulo: "7. ALELUYA",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "Am",
    letra: `
[Am]Aleluya, ale[G]luya, [F]a..le..lu.. [E7]ya. [Am](x2)
`
  },
  {
    id: 53,
    titulo: "8. ALELUYA",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "F",
    letra: `
[F]Aleluya [A#](aleluya) [F]Aleluya (aleluya) [C7]Aleluya (aleluya) [F]Aleluya. (x2)
`
  },
  {
    id: 54,
    titulo: "9. ALELUYA",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "D",
    letra: `
[D]Alelu-u-[G]ya, alelu-u-ya, [A]Alelu-u-u-ya.
[G]Alelu-[A]u-ya, [D]alelu-[Bm]u-ya, [G]Alelu-[A]u-[D]u-ya.
`
  },
  {
    id: 55,
    titulo: "10. ALELUYA",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "G",
    letra: `
[G]A-le-[C]luya, [D]a-le-luya, [G] [C] [D] A-le-luya, a-le-lu-ya.
`
  },
  {
    id: 56,
    titulo: "11. ALELUYA",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "F",
    letra: `
[F]Aleluya, ale[Gm]luya, ale[Dm]lu-[C]u-[F]ya. (x2)
`
  },
  {
    id: 57,
    titulo: "12. ALELUYA",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "C",
    letra: `
[C]Aleluya, ale[Am]luya, ale[C]luya, ale[G]luya. [C]
`
  },
  {
    id: 58,
    titulo: "13. EL NIÑO DIOS HA NACIDO",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "G",
    letra: `
[G]El niño Dios ha nacido en Belem, [D7]Aleluya, ale[G]luya.
[G]Quiere nacer en nosotros también, [D7]Aleluya, ale[G]luya.

[G]Aleluya, (aleluya) [D7]Aleluya, (aleluya) [D7]Aleluya, (aleluya) [G]Aleluya.

Solo los pobres y humildes lo ven, Aleluya, aleluya.
Solo el amor nos conduce hasta Él, Aleluya, aleluya.
Hay en los cielos mensajes de paz, Aleluya, aleluya.
Para los hombres de Fe y voluntad, Aleluya, aleluya.
`
  },
  {
    id: 59,
    titulo: "14. ALELUYA",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "C#m",
    letra: `
[C#m]Alelu[F#m]uya, alelu[B7]uya, [E]Aaa-[C#m]lelu[F#m]uu[B7]ya. [E](x2)
`
  },
  {
    id: 60,
    titulo: "15. ALELUYA",
    autor: "P. Cristobal fones, la mesa de todos",
    categoria: "Aleluya",
    tonoOriginal: "G",
    letra: `
[G] Ale[C]lu[D]ya, [C] ale[D]lu[G]ya,
[G] ale[C]lu[D]ya, [C] ale[D]lu[G]ya.

[G] El Padre [C] me ha en[D]viado para [C] anun[D]ciar,
[G] la buena [C] nueva a los [Dsus4] pobres, ale[D7]luya.`
  },
  {
    id: 61,
    titulo: "16. ESTE ES EL DÍA QUE ACTUÓ EL SEÑOR",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "D",
    letra: `
[D]Este [F#m]es e[G]l d[F#m]ía en e[l] que actuó e[l] Señor,
[Em]Sea [A7]nuestra a [D]legría y nuestro go-[A]zo. [E7] [A]

[D]Dad gra[G]cias al Se[F#m]ñor por que es bueno, [D7] [G]Por que es [D]eter[Em]na su [A7]miseri[D]cordia,
[Bm]A-le-[E7]lu-ya, [A]a-[Em]le[A7]lu-ya. [D] [A] [D]

Que lo diga la casa de Israel, [F#m]Es [E7]eterna su [A]misericordia [A7]
[D]Que lo [D7]diga la [G]casa de Aarón, [D]Es [Em]eterna su [A7]miseri[D]cordia.
[D]Que lo [F#m]digan los [E7]fieles del Se[A]ñor, [A7] [D]Es [Em]eterna su [A7]miseri[D]cordia.
`
  },
  {
    id: 62,
    titulo: "17. HONOR Y GLORIA A TI",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "D",
    letra: `
[D]Honor y g[Bm]loria a [Em]ti, Se[A]ñor Jesus.
[D]Honor y g[Bm]loria a [Em]ti, Se[A]ñor Je-[D]sus.
`
  },
  {
    id: 63,
    titulo: "18. ALELUYA",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "A",
    letra: `
[A]Ale [D]luuuuu[E]uya, Ale [A]luuuuuuya, [D]El Se[E]ñor es nuestro [A]Rey.
[A]Ale [D]luuuuu[E]uya, Ale [A]luuuuuuya, [E]El Se[A]ñor es nuestro Rey.

[A]Can[D]tad al Se[A]ñor, un cantico nuevo, [D]Por[E]que ha hecho mara[A]villas.
[A7]Su [D]diestra le ha dado la victoria, [E]Su santo braaa[A]azo.
`
  },
  {
    id: 64,
    titulo: "19. ALELUYA (VERBUM PANIS)",
    autor: "Anónimo",
    categoria: "Aleluya",
    tonoOriginal: "Bm",
    letra: `
[Bm]A-le-[A]lu-[D]ya, alelu-[Em]u-ya [A] 
[Bm]A-le-[A]lu-[D]ya, ale[Em]lu-[F#m]uu-[Bm]ya [G] 
`
  },
  {
    id: 65,
    titulo: "20. ALELUYA",
    autor: "Comunidade Católica Shalom",
    categoria: "Aleluya",
    tonoOriginal: "G",
    letra: `
(G F C D)
[G]A-le-lu-[F]ya-a [C] [D] [G]A-le-lu-[F]ya-a. (x2)

[Em]Al oír tu [C]voz, nuestro cora[G]zón [D]se lle[Eb]nó de ale[Em]gría
[C]Y con júbilo sin fin [D]cantaremos [C]a tu paz.

A-le-lu-ya-a A-le-lu-ya-a. (x2)
`
  },
   {
  id: 244,
  titulo: "21. ALELUIA (SÉCULO I)",
  autor: "Século I",
  categoria: "aleluya",
  tonoOriginal: "G",
  letra: `

[G]A[A]le[Bm]luia, [G]A[A]le[Bm]luia
Alel[G]u[A]u[Bm]ya, Alel[G]u[A]u[Bm]ya.

Mesmo sendo rico
Cristo fez-se pobre
Sua pobreza nos enriqueceu

[G]A[A]le[Bm]luia, [G]A[A]le[Bm]luia
Alel[G]u[A]u[Bm]ya, Alel[G]u[A]u[Bm]ya.
`
},
{
  id: 402,
  titulo: "21. ALELUYA (Cuando estamos unidos)",
  autor: "Padre Zeca",
  categoria: "aleluya",
  tonoOriginal: "E",
  letra: `
[E]A---le[B7]luia,  [C#m]a---le[G#m]luia,  [A]ale[E]luia[B7]
[E]A---le[B7]luia,  [C#m]a---le[G#m]luia,  [A]ale[E]luia[B7]

[F#m]Cuando estamos [G#m]unidos, [A]con nosotros [G#m]estás
[A]Y nos [F#m]hablarás de Tu [B7(4)]vida[B7] 

[E]A---le[B7]luia,  [C#m]a---le[G#m]luia,  [A]ale[E]luia[B7]
[E]A---le[B7]luia,  [C#m]a---le[G#m]luia,  [A]ale[E]luia[B7]

[F#m]Este nuestro [G#m]mundo [A]sentido [G#m]tendrá
[A]Si Tu [F#m]palabra [B7(4)]renovar[B7] 
`
},
  // --- SECCIÓN: CANTOS DE CREDO ---
     {
  id: 397,
  titulo: "Credo - Padre Jorge",
  autor: "Padre Jorge",
  categoria: "credo",
  tonoOriginal: "G",
  letra: `

[G]Creo, Señor, pero [C]aumenta mi [G]fe.
[C]Creo, [G]Señor, pero [D7]aumenta mi [G]fe.
`
},
  // --- SECCIÓN: CANTOS DE OFRENDAS ---
  {
    id: 66,
    titulo: "ALFARERO",
    autor: "Anónimo",
    categoria: "Ofrendas",
    tonoOriginal: "D",
    letra: `
[D]Señor, yo quiero aban[Em]donarme,
[G]Como el barro en las [A]manos [D]del alfarero,
[D7]Toma mi vida y [G]hazla de [Gm]nuevo,
[D]Yo quiero ser, [A]yo quiero ser, [D]Un vaso nuevo.

[D]Te cono[G]cí y te a[A]mé, [G]Te pe[Gm]dí per[D]dón y me escuchaste,
[D7]Si te ofen[G]dí, per[Gm]dóname Señor, [D]Pues te [A]amo y nunca te olvida[D]ré.
`
  },
  {
    id: 67,
    titulo: "EL NIÑO DEL TAMBOR",
    autor: "Anónimo",
    categoria: "Ofrendas",
    tonoOriginal: "G",
    letra: `
[G]El camino que [C]lleva a Be[G]lén,
[C]Baja hasta el [G]valle que la nieve cubrió,
[D]Los pastorcillos [C]quieren ver a su [D]rey.
[G]Le traen regalos en su [G7]humilde zu[C]rrón,
[G]Ro-po-pon-pon. Ro-po-pon-pon.
[G]Ha na[C]cido en un por[G]tal de Be[D]lén el Niño [G]Dios.

Yo quisiera poner a tus pies, algún presente que te agrade, Señor,
Más tú ya sabes que soy pobre también, y no poseo más que un viejo tambor.
Ro-po-pon-pon. Ro-po-pon-pon. En tu honor frente al portal tocare con mi tambor.

El camino que lleva a Belén, yo voy marcando con mi viejo tambor,
Nada hay mejor que te pueda ofrecer, su ronco acento es un canto de amor.
Ro-po-pon-pon. Ro-po-pon-pon. Cuando Dios me vio tocando ante Él me sonrió.
`
  },
  {
    id: 68,
    titulo: "ENTRE TUS MANOS",
    autor: "Anónimo",
    categoria: "Ofrendas",
    tonoOriginal: "D",
    letra: `
[D]Entre tus [Em]manos, [A7]esta mi vida Se[D]ñor;
[Em]Entre tus [A7]manos [D]pongo mi existir.
[D7]Hay que mo[G]rir [A]para vi[D]vir. [Bm] [Em]Entre tus [A]manos Señor confío en mí [D]ser.

Si el grano de trigo no muere, si no muere, sólo quedará,
Pero si muere en abundancia dará, un fruto eterno que no morirá.
`
  },
  {
    id: 69,
    titulo: "LÁVAME CON TU SANGRE",
    autor: "Anónimo",
    categoria: "Ofrendas",
    tonoOriginal: "D",
    letra: `
[D]Lávame con tu [A]Sangre, [Bm]sana todas mis heridas,
[G]Escucha mi [A]voz y háblame.
[D]Quiero entre[A]garme Entero, [Bm]ofrecerte vida y alma,
[G]Y decirte que te quiero de ver[A]dad. [E7]¡Es-cu-cha-me! [D] [A] [D]

[Em]Sentir de [A]nuevo un viento [D]cálido, [G]Verme en tus [A]brazos sonreír,
[D]Entregar[A]te todos mis [Bm]Problemas, [G]Volver a ser fe[A]liz. [E7] [D]¡Es-cú-cha-me! [A] [D]

Muéstrame tu palabra, siembra en mi semilla Nueva, que quiero ser fruto de tu Amor.
Líbrame de peligros, guíame por senda Nueva, que siento cansancio al caminar. ¡Escúchame!

Dame tu pan, tu vino, alimenta mi alma enferma, que vive en anhelos de verdad,
Dame De esa agua que me da la vida eterna, y dime Que siempre me amaras. ¡Escúchame!
`
  },
  {
    id: 70,
    titulo: "RECÍBEME",
    autor: "Anónimo",
    categoria: "Ofrendas",
    tonoOriginal: "D",
    letra: `
[D]Recíbeme con toda la mi[A]seria que hay en [Bm]mí,
[F#m]Con todos los de[G]seos de se[Em]guir por tu ca[A]mino.
[D]Iluminar es hoy el [A]reto en la oscuri[Bm]dad, [F#m]Servicio, [G]entrega en fideli[Em]dad, [A]Hasta la muerte.
[D]Hoy es tiempo de dar [A]a manos [Bm]llenas lo que se me [A]dio,
[D]Brillar hasta con[A]sumirse, [Bm]iluminar a un [Em]mundo en penumbras, [A]
[G]Hasta que no [A]quede yo, sino [Bm]Tú.

(Modulación a G) [G] [C] [D7]
[G]Recíbeme con toda la mi[D]seria que hay en [Em]mí,
[Bm]Con todos los de[C]seos de se[Am]guir por tu ca[D]mino.
[G]Iluminar es hoy el [D]reto en la oscuri[Em]dad, [Bm]Servicio, [C]entrega en fideli[Am]dad, [D]Hasta la muerte.

(Modulación a A)
[A]Recíbeme con toda la mi[E]seria que hay en [F#m]mí,
[C#m]Con todos los de[D]seos de se[Bm]guir por tu ca[E]mino.
[A]Iluminar es hoy el [E]reto en la oscuri[F#m]dad, [C#m]Servicio, [D]entrega en fideli[Bm]dad,
[E]Hasta la [F#m]muer[C#m]teeeeee[D]eeee[E]eeee. [A]Recíbeme.
`
  },
  {
    id: 71,
    titulo: "YO NO SOY NADA",
    autor: "Anónimo",
    categoria: "Ofrendas",
    tonoOriginal: "D",
    letra: `
[D]Yo no soy [Bm]nada y del polvo nací,
[G]Pero [E]tú me [A]amas y moriste por mí.
[D]Ante la [Bm]cruz solo puedo exclamar: [G] [A]¡Tuyo Soy Tuyo Soy!
[D]Toma mis [D7]manos, te pido, [G]Toma mis [Gm]labios, te amo,
[D]Toma mi vida, Oh! Cristo, [A]¡Tuyo Soy!, Tuyo [D]Soy.

Cuando de rodillas te miro Jesús, veo tu grandeza y mi pequeñez,
¿Qué puedo darte yo? Sólo mi ser, ¡Tuyo Soy! ¡Tuyo Soy!
`
  },

  // --- SECCIÓN: CANTOS DE OFERTORIO ---
  {
    id: 72,
    titulo: "A TI SEÑOR",
    autor: "Anónimo",
    categoria: "Ofertorio",
    tonoOriginal: "E",
    letra: `
[E]A ti Señor, [A]Te ofrezco el [E]pan,
[C#m]Acéptalo, es [F#m]nuestro [B7]don,
[E]Salmo de a[A]mor, signo de uni[E]dad, [A]Bendi[E]celo, [A]con tu bon[B]dad. [E] [A] [E]

El santo altar, nos reunirá, Al ofrecer oh Padre Dios,
Este licor, fruto de la Vid, A ti Señor, te alabaré.

Congrega Dios, junto al altar, A los que en ti, han de vivir,
Juntos están, para celebrar, Tu memorial, de redención.
`
  },
  {
    id: 73,
    titulo: "BENDITO SEAS SEÑOR",
    autor: "Anónimo",
    categoria: "Ofertorio",
    tonoOriginal: "E",
    letra: `
[E]Bendito seas, Se[D]ñor, [A]Dios del Uni[B4]verso, [E]
[G]Por este pan, fruto de la [D]tierra,
[E]Y del tra[C#7]bajo del [F#]hombre, [B]Que recibimos de tu generosi[E]dad,
[B]Y ahora te presen[E]tamos, [G]él será para nos[B]otros [F#]Pan [F#7]de Vi[B]daa,
[G]Él será para nos[B]otros [F#]Pan [F#7]de Vi[B]daa.

Bendito seas, Señor, Dios del Universo, por este vino, fruto de la vid, y del trabajo del hombre que recibimos de tu generosidad, y ahora te presentamos, Él será para nosotros bebida de salvación.
`
  },
  {
    id: 74,
    titulo: "BENDITO SEAS SEÑOR (T2)",
    autor: "Anónimo",
    categoria: "Ofertorio",
    tonoOriginal: "Dm",
    letra: `
[Dm]Bendito seas Señor, [Gm]Por [A7]este [Dm]pan y este vino
[A#]Que gene[Dm]roso nos diste [Gm]Para cami[A7]nar contigo
[Dm]Y será para nos[Gm]otros [Dm]Alimento [A7]en el ca[D]mino
[D]Te ofrecemos el tra[G]bajo, las [Em]penas [A7]y la ale[Dm]gría
[Em]El [F#]pan nos ali[Bm]menta [G]y el a[A7]fán de cada día.

Te ofrecemos nuestro barro que oscurece nuestras vidas,
Y el vino que no empleamos para curar las heridas.
`
  },
  {
    id: 75,
    titulo: "ESTE PAN Y VINO SEÑOR",
    autor: "Anónimo",
    categoria: "Ofertorio",
    tonoOriginal: "E",
    letra: `
[E]Este pan y [A]vino Se[E]ñor, 
[A]Se transfor[B7]mará, [E]
[A]En tu Cuerpo y [E]Sangre Señor, 
[A]Es [B7]nuestro man[E]jar.

[E]Gracias al [A]sol y al la[E]brador, 
[A]En el al[E]tar flo[E7]recen hoy,
[A]Las es[B7]pigas, los ra[G#m]ci[C#m]mos, 
[A]Que presen[B7]tamos a Dios.

Lo que sembré con mi dolor, 
lo que pedí en mi oración,
Hoy son frutos, son ofrendas, 
que presentamos a Dios.
`
  },
  {
    id: 76,
    titulo: "ESTO QUE TE DOY",
    autor: "Anónimo",
    categoria: "Ofertorio",
    tonoOriginal: "D",
    letra: `
[D]Esto que te [F#m]doy, 
es [G]vino y pan Se[A]ñor,
[G]Esto que te [D]doy 
es mi tra[A]bajo,
[G]Es mi cora[A]zón, mi alma, [F#m]
Es mi cuerpo y mi ra[Bm]zón,
[G]El es[A]fuerzo de mí cami[D]nar. [A]

[D]Toma mi [F#m]vida, 
[G]ponla en tu cora[A]zón,
[D]Dame tu [F#m]mano 
[G]y lléva[A]me,
[G]Cambia mi [A]pan en tu Carne, 
[F#m]Y mi vino en tu [Bm]Sangre,
[G]Y a mi Se[A]ñor [D]renuéva[D7]me, 
[G]Límpiame [A]y sálva[D]me.

Esto que te doy mi vida es Señor, es mi amor, también es mi dolor, es la ilusión mis sueños, es mi gozo y mi llorar, es mi canto y mi oración.

Esto que te doy no sólo yo, Señor, esta voz también es de mi hermano. Es la unión, la paz, un orden, armonía y felicidad, es un canto en comunidad.
`
  },
  {
    id: 77,
    titulo: "EL SEMBRADOR",
    autor: "Anónimo",
    categoria: "Ofertorio",
    tonoOriginal: "D",
    letra: `
[D]Era un sembra[F#m]dor [G]Que iba en busca, de una [D]tierra
[F#7]Donde sem[Bm]brar [G]Aquella se[D]milla, que al [G]mundo da[D]ría [G]La [D]paz, [G]la [D]paz [A7]

[D]Con María [F#m]hoy te ofrecemos [G]Este vino y [A]este pan
[F#7]Que en tu [Bm]cuerpo y en tu sangre [G]Pronto se [E7]converti[A7]rán.

Y María era la tierra que en su seno se formó, la semilla más amada de la huerta del señor.
Y por fin llegó el gran día la semilla germinó, Jesucristo había nacido y con Él la redención.
`
  },
  {
    id: 78,
    titulo: "HEMOS ENTREGADO",
    autor: "Anónimo",
    categoria: "Ofertorio",
    tonoOriginal: "C",
    letra: `
[C]Hemos entre[G]gado nuestras [Am]vidas al Se[Em]ñor,
[F]No hay mayor bendi[Dm]ción que ser de [G]Él.
[C]Hemos entre[G]gado nuestras [Am]vidas al Se[Em]ñor,
[F]Y el ahora nos [Dm]da su vida e[C]te-[G]er-[F]na.

[Am]Bendito seas Se[F]ñor por este pan,
[G]Fruto de la tierra y del tra[C]bajo del [G]hombre.
[Am]Bendito seas Se[F]ñor por este vino,
[G]Que hemos recibido de tu a[C]mor y bon[G]dad.

Y ahora Señor te presentamos el pan, y el vino que tú convertirás. En el cuerpo y sangre de tu hijo Jesús, pan de vida y bebida de salvación.
`
  },
  {
    id: 79,
    titulo: "HOY SEÑOR",
    autor: "Anónimo",
    categoria: "Ofertorio",
    tonoOriginal: "C",
    letra: `
[C]Hoy Se[G]ñor, [F]venimos a ofre[G]certe este hu[C]milde [G]pan,
[F]Que es fruto del tra[G]bajo de la humani[C]dad, [G]
[F]Que es digno de fraterni[G]da-a-[C]ad, [G] [F] [G]Fe, espe[C]ranza y cari[C7]dad.

[F]Tómalo, a[G]cép[Em]talo, [Am] [F]Por amor trans[G]fórmalo, [C] [C7]
[F]En el [G]cuerpo de Je[Em]sús, [Am] [F]Bendito [G]seas Se[C]ñor.

Hoy Señor, venimos a ofrecerte el Vino que nos das, para que lo recibas en tu santo altar, que digno de fraternidad, fe, esperanza y caridad. Tómalo, acéptalo. Por amor transfórmalo, en la sangre de Jesús, bendito seas Señor.
`
  },
  {
    id: 80,
    titulo: "PADRE HOY TE OFREZCO ESTOS DONES",
    autor: "Anónimo",
    categoria: "Ofertorio",
    tonoOriginal: "C",
    letra: `
[C]Padre hoy te [Dm]ofrezco estos dones, [C]Y te pido ben[Dm]digas mis labores,
[F]Son el fruto de la [G]tierra, [C]Son mi [C/B]diario cami[Am]nar,
[F]Son mi vida son mi entrega, mi ver[G]dad.

Padre, hoy yo en ti me confío, y te ofrezco, cuanto he recibido, todo Tú me lo has dado es tuyo mi Dios, pues cuanto en mi tú has confiado, te doy cuentas Señor.

[C]Tómalos, ben[Em]dícelos, [F]Conviértelos en Cuerpo y Sangre de Je[G]sús,
[C]Tómalos, ali[Em]menta hoy, [F]Al pueblo que tú [G]compraste
[C]Con la sangre de Je[Am]sús, [F]Al morir Él por nos[G]otros en la [C]cruz.
`
  },
  {
    id: 81,
    titulo: "POR AMOR",
    autor: "Anónimo",
    categoria: "Ofertorio",
    tonoOriginal: "Am",
    letra: `
Capo: 4
Intro: Am Em F E

[Am]Padre a[Em]cepta con a[F]mor el [E]dulce sacri[Am]ficio
[Em]Del justo que mu[F]rió pa[E]gando mi de[Am]lito
[Em]Quisiera hoy Se[F]ñor ser [E]víctima de a[Am]mor
[Em]Uniendo esta obla[F]ción mi [E]pobre cora[F]zón [E]

[F]Pan y vino en el al[E]tar [F]Serán a hora cuerpo y sangre del Se[E]ñor
[F]Convertidos en dulce man[G]jar.

[C]Padre acepta con a[G]mor mi tierno cora[Dm]zón
[Am]Lo hago por Je[G]sús lo hago por a[C]mor
[G]Acepta con a[Dm]mor mi tierno cora[Am]zón [G]Lo hago por Je[C]sús lo hago por a[G]mor-[E]

[Am]Hoy y para [Em]siempre vivi[F]ré uni[E]da al cruci[Am]ficado
[Em]Padre es[F]cucha la ora[E]ción que elevo con fer[Am]vor
[Em]Quiero entre[F]garme hoy junto [E]con tu hijo a[Am]mado
[Em]Ser uno [F]solo en [E]ti y vi[F]vir con el a[Em]mado [E]para ser
[F]en tu cuerpo y sangre inmo[G]lado tam[C]bién.

[G]Acepta con a[Dm]mor mi tierno cora[Am]zón [G]Lo hago por Je[C]sús lo hago por a[G]mor.
[G]En tus manos [Dm]pongo mi ser mi gran debili[Am]dad [G]En ti con[C]fiaré cuando haya tempes[G]tad.

Padre acepta con amor mi tierno corazón... (hasta el final).
`
  },
  {
    id: 82,
    titulo: "SUBE A JERUSALEN",
    autor: "Anónimo",
    categoria: "Ofertorio",
    tonoOriginal: "D",
    letra: `
[D]Sube a Jeru[F#]salén [Bm]Virgen gene[G]rosa [A2]sin i[D]gual
[F#]Ve a presentar a [Bm]Dios, tu niñito: [Em]luz que lle[G]gó en navi[A2]dad [A7]
[D]Y, junto a [F#]su [Bm]cruz [G]cuando él mu[A2]rió, quedas de [D]pie. [D4] [D]
[F#]Si el te sal[Bm]vó, más lo ofre[Em]ciste [A2]por nos[A2]otros con tu [D]fe. [A2]

Vamos a renovar este sacrificio de Jesús muerte y resurrección vida que brotó de su ofrenda en la cruz.

Madre, ven a enseñar a hacer la vida una oblación. Culto agradable a Dios es hacer la ofrenda del propio corazón.
`
  },
  {
    id: 83,
    titulo: "TE OFRECEMOS PADRE NUESTRO",
    autor: "Anónimo",
    categoria: "Ofertorio",
    tonoOriginal: "C",
    letra: `
[C]Te ofrecemos padre nuestro, [G7]Con el vino y con el pan
Nuestras penas y alegrías [C]El trabajo y nuestro afán.

[D]Como el trigo de los [G]campos, [D]Bajo el signo de la [G]cruz.
[D]Se transforma en nuestras [G]vidas [D]Como el cuerpo de Je[G]sús. [G7]

A los pobres de la tierra, a los que sufriendo están, cambia su dolor en vino como la uva en el agar.
`
  },
  {
    id: 84,
    titulo: "TE PRESENTAMOS EL VINO Y EL PAN",
    autor: "Anónimo",
    categoria: "Ofertorio",
    tonoOriginal: "E",
    letra: `
[E]Te presentamos el [A]vino y el [E]pan,
[A]Bendito [E]seas por [B7]siempre Se[E]ñor. (x2)

[E]Bendito seas Se[A]ñor, [E]Por [A]este pan que nos [E]diste,
[A]Fruto de la tierra, [E]Y del tra[B7]bajo de los hombres.

Bendito seas Señor, el vino tú nos lo diste, fruto de la tierra y del trabajo de los hombres.
`
  },
  {
    id: 85,
    titulo: "TÚ VENDRÁS",
    autor: "Anónimo",
    categoria: "Ofertorio",
    tonoOriginal: "C",
    letra: `
[C]Como espe[G7]ramos, que [C]venga, El [F]tiempo, de la [G]siega en el tri[C]gal;
[F]Para transfor[C]mar, los granos [D]Que obte[G]nemos en un trozo de pan,
[C]Pan que es espe[G7]ranza, de que [C]tú estarás, [F]Pronto a nuestro la[G]do. [C] [C7]

[F]Porque [G]tú, ven[Em]drás Se[Am]ñor, [F]Te conver[G]tirás, [C] [C7]
[F]En el [G]pan que [Em]da la salva[Am]ción. (x2)

Como esperamos, que venga, el tiempo de la uva en el lagar, y ver transformar el jugo, que obtenemos, en vino de bondad, vino que es certeza, de que tú estarás, siempre a nuestro lado.

Porque tú, vendrás Señor, te convertirás en bebida, que da la salvación. (x2)
[F]Pan y [G]vino que [C]da la salvación.
`
  },
  {
    id: 86,
    titulo: "VINO Y PAN",
    autor: "Anónimo",
    categoria: "Ofertorio",
    tonoOriginal: "D",
    letra: `
[D]Vino y [A]pan se conver[Bm]tirán, [F#m]En tu [G]Cuerpo y en tu [D]Sangre, [A]Hoy mi Se[D]ñor.

Pan es el fruto del inmenso amor, que nos viene mi buen Jesús.
Vino es el fruto de gran dolor, que padeciste, por nosotros en la cruz.
`
  },
  {
    id: 87,
    titulo: "VINO Y PAN EN OBLACIÓN",
    autor: "Anónimo",
    categoria: "Ofertorio",
    tonoOriginal: "Am",
    letra: `
[Am]Vino y [Dm]Pan [Am]en obla[G]ción, [C]Esperan el mi[F]lagro del Se[G]ñor.
[C]Ve nuestra o[Em]frenda, [F]Sobre tu [G]santo al[C]tar.
[G#]Era en Los [D#]campos [C#]dulce [C]vid y tri[G]gal.
Pero, tú, por tu bondad, transformas nuestra ofrenda en ti, Señor.
Toma mi vida, Y también cambiará, llena mi alma, De tu gracia y tu paz, amén.
`
  },
{
  id: 391,
  titulo: "Padre de Bondad",
  autor: "Anónimo",
  tonoOriginal: "C",
  categoria: "Ofertorio",
  letra: `
[C] Padre de bon[Dm]dad hoy te ofre[G]cemos,
[Dm] el fruto de la [G] tierra y de la humani[C]dad.
[C/D] El pan de nuestro es[Am]fuerzo de la diaria fa[Dm]tiga,
[G] el pan de nuestra [C] vida que se entrega a los de[E]más.

[Am] Recíbelo por las [Dm] manos de María,
[G] transfórmalo en el [C] fuego de tu a[C7]mor.
[F] Y conviértelo se[Dm]ñor en pan de vida
[Bb] y bebida de salva[G]ción.

[C] Cristo Je[Dm]sús hoy te ofre[G]cemos,
[Dm] el fruto de la [G] tierra y de la humani[C]dad,
[C/D] el vino del do[Am]lor y de nuestra ale[Dm]gría,
[G] el vino que es la [C] fuerza en nuestro diario cami[E]nar.`
},
  // --- SECCIÓN: CANTOS DE SANTO No terminado---
  {
    id: 88,
    titulo: "SANTO 1",
    autor: "Tradicional (Seminario)",
    categoria: "Santo",
    tonoOriginal: "Bm",
    letra: `
[Bm]Santo, [Em]Santo, [A7]Santo [D]es el Se[Bm]ñor, [Em]Dios del uni[F#7]verso. [Bm]
[Bm]Llenos es[Em]tán el [A7]cielo y la [D]tierra, [Bm]De tu [Em]Gloria, Ho[F#7]sanna. [Bm]
[Bm]Ho-sa-[B7]nna, [Em]Hosanna, [A7]Hosanna, [D] [Bm] [Em]En el [F#7]cielo. [Bm] (x2)

Bendito el que viene, en el nombre del Señor, Hosanna en el cielo, Hosanna.
`
  },
  {
    id: 89,
    titulo: "SANTO 2",
    autor: "Anónimo",
    categoria: "Santo",
    tonoOriginal: "D",
    letra: `
[D]Santo, [Bm]Santo, [G]Santo [E]es el Se[A]ñor,
[D]Dios, pode[Bm]roso, del uni[G]verso. [E] [A]
[D]Los cielos [Bm]y la tierra, es[G]tán llenos, [E]De tu [A]gloria.
[D]Hosanna, [Bm]Hosanna, [G]Hosanna [A]en el [D]cielo. (x2)
[G]Bendito el que [A]viene [D]en el [Bm]nombre del Se[G]ñor. [A]
`
  },
  {
    id: 90,
    titulo: "SANTO 3 (ana)",
    autor: "Anónimo",
    categoria: "Santo",
    tonoOriginal: "A",
    letra: `
[A]Santo, [C#m]Santo, [D]Santo es el Se[Dm]ñor, [A]Dios del uni[C#m]verso.
[A]Llenos, es[C#m]tán el [D]cielo, [Dm]La tierra de tu [A]gloria.
[D]Hosanna en el [G]cieelo, [C] [Am] [Dm]Hosanna en el [G7]cieelo, [C] [Am]
[B7]Bendito el que viene, en el [Bm7]nombre del Se[E]ñor.
[G]Hosanna [D]en el [A]cielo. (x3)
`
  },
  {
    id: 91,
    titulo: "SANTO 4",
    autor: "Anónimo",
    categoria: "Santo",
    tonoOriginal: "E",
    letra: `
[E]Santo, [A]Santo, en el cielo, [E]Santo [B7]es el Se[E]ñor. (x2)
[G#]Gloria a Dios del uni[C#m]verso, [G#]Gloria Dios aquí en la [C#m]tierra,
[F#]Y bendito es el que [C#m]viene, [F#] [B]
`
  },
  {
    id: 92,
    titulo: "SANTO 5",
    autor: "Anónimo",
    categoria: "Santo",
    tonoOriginal: "E",
    letra: `
[E]Santo, [G#m]Santo, [A]Santo [F#]es el Se[B]ñor,
[E]Del uni[G#m]verso, del [A]cielo y de la [B]tierra.
[E]Hosanna en el [G#m]cielo [A]y las al[B]turas.
Bendito el que viene en el nombre del Señor, del universo, del cielo y de la tierra.
Hosanna en el cielo y las alturas.
`
  },
  {
    id: 93,
    titulo: "SANTO 6 - Ópera",
    autor: "Anónimo",
    categoria: "Santo",
    tonoOriginal: "Em",
    letra: `
[Em]Sa-[D]a-[C]a-[B7]a-nto, [Em] Sa-[D]a-[C]a-[B7]a-nto, [Em]
[Em]Los cielos y la [D]tierra, [C]Están llenos de tu [B7]gloria.
[Em]Hosanna, [D]Hosanna, [C]Hosanna, [B7]Hosanna en el [Em]cielo.
Bendito es el que viene, en el nombre del Señor. Hosanna…
`
  },
  {
    id: 94,
    titulo: "SANTO 7",
    autor: "Anónimo",
    categoria: "Santo",
    tonoOriginal: "E",
    letra: `
[E]San[C#m]to, [F#m]San[B]to [E]es el Se[C#m]ñor. [F#m]
`
  },
  {
    id: 95,
    titulo: "SANTO 8",
    autor: "P. Cristóbal Fones, La mesa de todos",
    categoria: "Santo",
    tonoOriginal: "G",
   letra: 
`[G]Santo, [C]Santo, [D]Santo es el Se[G]ñor. (x2)

[C]Hosanna [D]en el cielo, [C]Hosanna [D]en el cielo,
[C]Bendito es [D]el que viene, [C]en nombre [D]del Señor.

[G]Santo, [C]Santo, [D]Santo es el Se[G]ñor. (x2)`
},
  {
    id: 96,
    titulo: "SANTO 9",
    autor: "P. Cristóbal Fones, La mesa de todos",
    categoria: "Santo",
    tonoOriginal: "B",
    letra: 
`[B]Santo, [D#m]Santo, [E]Santo es el Se[F#]ñor,
[E]Dios del uni[F#]verso, [G#m]Santo es el [E]Se[F#]ñor. [B]

[G#m]El cielo y la [D#m]tierra, están [E]llenos de tu [F#]gloria,
[E]Hosanna [F#]en el cielo.

[G#m]Bendito es el que [D#m]viene, en el [E]nombre del Se[F#]ñor,
[E]Hosanna [F#]en el cielo. [B]`
},
  {
    id: 97,
    titulo: "SANTO 10",
    autor: "Gen Rosso",
    categoria: "Santo",
    tonoOriginal: "",
    letra: ""
  },
  {
    id: 98,
    titulo: "SANTO 11",
    autor: "Anónimo",
    categoria: "Santo",
    tonoOriginal: "",
    letra: ""
  },
  {
    id: 99,
    titulo: "SANTO 12",
    autor: "Anónimo",
    categoria: "Santo",
    tonoOriginal: "",
    letra: ""
  },
  {
    id: 100,
    titulo: "SANTO 13",
    autor: "Anónimo",
    categoria: "Santo",
    tonoOriginal: "C",
    letra: `
[C]San[G]to, [Am]es el [Em]Señor, [F]Dios poderoso [C]del universo.
Su[Dm] Gloria inmensa [F]llena los cielos y la [G]tierra.

[C]Hosan[G]na, [Am]Hosan[Em]na, [F]Hosanna,
En el [C]cie[G]lo. (x2)

B[Dm]endito es el que viene, [C]en nombre del Señor,
[F]Hosanna en las altu[G]ras.

[C]Hosan[G]na, [Am]Hosan[Em]na, [F]Hosanna,
En el [C]ci[G]e[C]lo. (x2)`
  },
    {
    id: 392,
    titulo: "SANTO 14",
    autor: "A Mejía",
    categoria: "Santo",
    tonoOriginal: "",
    letra: ""
  },
  {
    id: 108,
    titulo: "Santo Sem Nome",
    autor: "Walace Aguiar",
    categoria: "santo, angelichristi",
    tonoOriginal: "C",
    letra: `
[C] [G] [C] [G]\n
[C]San[G]to, [C]san[G]to
[C]San[G]to, [C]san[G7]to
[Dm]Santo es el Se[Am]ñor, [Dm]Santo es el Se[Am]ñor
[F]El Se[G]ñor Dios del u[C]niverso.\n
[Em]El cielo y la [F]tierra están llenos de Tu gloria
[G]Hosana en el [Am]cielo
[Em]Bendito el que [F]viene en el nombre del Señor
[G]Hosana en el [Am]cielo oooooo[G7]ooo.\n
[C]San[G]to, [C]san[G7]to
[C]San[G]to, [C]san[G]to
[Dm]Santo es el Se[Am]ñor, [Dm]Santo es el Se[Am]ñor
[F]El Se[G]ñor Dios del u[C]ni[Am]verso
[F]El Se[G]ñor Dios del u[C]niverso. ([G7] [C])
    `
},
    {
    id: 405,
    titulo: "SANTO Oli",
    autor: "A Mejía",
    categoria: "Santo",
    tonoOriginal: "A (capo3)",
    letra: `
    [A]Santo, Santo, Santo (ooooo)
    [E]Santo es el Señor, 
    Dios del uni[D]verso.[Bm]
    Dios del uni[E]verso. (2x)

    [F#m]LLenos están el cielo y la tierra de tu [C#m]gloria
    Hosanna en el c[D]ielo, [A]Hosanna en el c[E]ielo

    [F#m]Bendito el que viene en el nombre del S[C#m]eñor
    Hosanna en el c[D]ielo, Hos[A]anna en el c[E]ielo
    
    [A]Santo, Santo, Santo (ooooo)
    [E]Santo es el Señor, 
    Dios del uni[D]verso.[Bm]
    Dios del uni[E]verso.
    [A]Santo, Santo, Santo (ooooo)
    [D]Santo es [E]]el Señ[A]or. 
    `
  },

   // --- SECCIÓN: CANTOS DE Doxología ---
  {
    id: 101,
    titulo: "DOXOLOGÍA",
    autor: "Anónimo",
    categoria: "doxologia",
    tonoOriginal: "Em",
    letra: `
    Por cristo, con Él y en Él
A ti Dios padre omnipotente
En la unidad del espíritu santo
Todo honor y toda gloria
Por los siglos de los siglos [B7] 
[Em]Amen, [C]Amen, [D]Amen, [Ddim]Amen [Em] [(B7)]    (x2)
`
  },
   // --- SECCIÓN: CANTOS DE Padre Nuestro ---
    {
    id: 114,
    titulo: "Padre Nuestro (lento)",
    autor: "Anónimo",
    categoria: "padrenuestro",
    tonoOriginal: "A",
    letra: `
[A] [F#m] [Bm] [E7]
Padre nuestro, que estas en el cielo
Santificado, sea tu nombre
Venganos, venga tu reino,
Hágase, tu voluntad
Así en la tierra, como en el cielo
Danos hoy nuestro pan, de cada día.
Y perdona, nuestras ofensas,
Como nosotros también, perdonamos
A los que nos ofenden,
No nos dejes caer, en tentación,
Padre nuestro, padre nuestro,
Libranos, de todo mal.`
  },
  {
    id: 115,
    titulo: "Padre Nuestro (movido)",
    autor: "Anónimo",
    categoria: "padrenuestro",
    tonoOriginal: "C",
    letra: `
Padre nuestro, que estas en el cielo
Santificado, sea tu nombre
Venganos, venga tu reino,
Hágase, tu voluntad
Así en la tierra, como en el cielo
Danos hoy nuestro pan, de cada día.
Y perdona, nuestras ofensas,
Como nosotros también, perdonamos
A los que nos ofenden,
No nos dejes caer, en tentación,
Padre nuestro, padre nuestro,
Libranos, de todo mal.`
  },
   
    // --- SECCIÓN: CANTOS DE Cordero id 116 a 131 ---
     {
    id: 116,
    titulo: "CORDERO 1",
    autor: "Vicente Bianchi",
    categoria: "Cordero",
    tonoOriginal: "Em",
    letra: `
[Em]Corde-[D]ro de [Em]Dios. (x2)
[G]Que quitas el [D]pecado del [Em]mundo,
[C]Ten piedad [B7] de [Em]nosotros. (x2)

Cordero de Dios. (x2)
Que quitas el pecado del mundo,
Danos la paz, danos la paz.
`
  },
  {
    id: 117,
    titulo: "CORDERO 2",
    autor: "Anónimo",
    categoria: "Cordero",
    tonoOriginal: "Dm",
    letra: `
[Dm]Cordero de [Gm]Dios,
[Dm]Que quitas el [A7]pecado del [Dm]mundo.[D7]
[Gm]Ten piedad, (ten piedad de mí)
[F]Ten piedad, (ten piedad de mí)
[Gm]Ten piedad, [A7]ten piedad. [Dm]

[Dm]Cordero de [Gm]Dios,
[Dm]Que quitas el [A7]pecado del [Dm]mundo.[D7]
[Gm]Y la paz, (dánosla, dánosla)
[F]Y la paz, (dánosla, dánosla)
[Gm]Y la paz, [A7] dánosla. [Dm]
`
  },
  {
    id: 118,
    titulo: "CORDERO 3",
    autor: "Anónimo",
    categoria: "Cordero",
    tonoOriginal: "B",
    letra: `
[B]Cordero de Dios,
[G#m]Que quitas el [C#m]pecado del mundo,
[F#7]Ten piedad, (ten piedad)
[B]De nosotros. (x2)

Cordero de Dios,
Que quitas el pecado del mundo,
Danos, (Danos)
La Paz.
`
  },
  {
    id: 119,
    titulo: "CORDERO 4",
    autor: "Alejandro Mejía",
    categoria: "Cordero",
    tonoOriginal: "Em",
    letra: `
[Em]Cordero de Dios que [A]quitas,
[C]El pecado [Bm]Del [Em]mundo.
[Am]Ten piedad de [D7]nosotros, [G] [C]
[Am]Ten Piedad de [B7]nosotros. (x2)

[Em]Cordero de Dios que [A]quitas,
[C]El pecado [Bm]Del [Em]mundo.
[Em] [E7]Danos [Am]La paz, [D7]danos la [G]paz,
[Am]Danos, [D7]danos, [G]danos [C]la paz, [Am] [B7] [Em] [E7]
[Am]Danos, [D7]danos, [G]danos [C]la paz.
`
  },
  {
    id: 120,
    titulo: "CORDERO 5",
    autor: "Anónimo",
    categoria: "Cordero",
    tonoOriginal: "D",
    letra: `
[D]Cordero de [Bm]Dios,
[G]Que quitas el [A]pecado del [D]mundo.
[Bm]Ten piedad de [G]nosotros,
[A]Ten piedad. [D]

[D]Cordero de [Bm]Dios,
[G]Que quitas el [A]pecado del [D]mundo.
[Bm]Danos la [G]paz, [A]dánosla [D]
`
  },
  {
    id: 121,
    titulo: "CORDERO 6",
    autor: "Anónimo",
    categoria: "Cordero",
    tonoOriginal: "D",
    letra: `
[D]Cordero de [A]Dios,
[Bm]Que quitas el [F#m]pecado del mundo,
[G]Ten piedad de [D]nosotros,
[E]Ten piedad de [A]nosotros. (x2)

[D]Cordero de [A]Dios,
[Bm]Que quitas el [F#m]pecado del mundo,
[G] [D] [E]Danos la paz, [A]danos la [D]paz.
[C] [G] [A]
`
  },
  {
    id: 122,
    titulo: "CORDERO 7",
    autor: "Anónimo",
    categoria: "Cordero",
    tonoOriginal: "G",
    letra: `
[G]Cordero de Dios, ([Bm]Cordero de Dios)
[Em]Tú que quitas el [C]pecado, [D7] ([C]ten piedad)
[D7]Ten piedad de [G]nosotros, [Em] ([C]Ten piedad)
[D]De nosotros peca[G]dores, [Em] [A]
[D]Ten piedad. (x2)

[G] [Em] [C] [D7]
Cordero de Dios, Tú que quitas el pecado,
Ten piedad de nosotros y danos la paz,
Y danos la paz y danos la paz.
`
  },
  {
    id: 123,
    titulo: "CORDERO 8",
    autor: "Anónimo",
    categoria: "Cordero",
    tonoOriginal: "E",
    letra: `
[E]Oh cordero, [C#m]cordero,
[A]Cordero de Dios que [B]quitas,
[E]El pecado del [C#m]mundo,
[A]Ten piedad de [B]nosotros. (x2)

[E]Y danos la paz.
`
  },
  {
    id: 124,
    titulo: "CORDERO 9",
    autor: "P. Cristóbal Fones",
    categoria: "Cordero",
    tonoOriginal: "Am",
    letra: `
[Am]Cordero de [Em]Dios,
[D]Tú, que quitas el [C]pecado del [G]mundo,
[Am]Ten piedad de [B7]nosotros.

[G]Cordero de [D]Dios,
[Am]Tú, que quitas el [Em]pecado del [D]mundo,
[G]Ten piedad de [D7]nosotros.

[G]Cordero de [Bm]Dios,
[Am7]Tú, que quitas el [Em]pecado del [D]mundo,
[G] [D]Danos la [C]paz, [G]danos la paz.
`
  },
  {
    id: 125,
    titulo: "CORDERO 10",
    autor: "Anónimo",
    categoria: "Cordero",
    tonoOriginal: "Em",
    letra: `
[Em]Cordero de Dios,
[Am]Que quitas el pecado del [Em]mundo.
[B7]Ten piedad de [Em]nosotros,
[B7]Ten piedad de [Em]nosotros. (x2)

[Em]Cordero de Dios,
[Am]Que quitas el pecado del [Em]mundo.
[B7]Danos la [Em]paz. [B7]Danos la [Em]paz. [B7]Danos la [Em]paz.
`
  },
  {
    id: 126,
    titulo: "CORDERO 11",
    autor: "Anónimo",
    categoria: "Cordero",
    tonoOriginal: "G",
    letra: `
[G]Cordero de Dios, tú que [D]qui-[Em]tas,
[C]El pecado del [Am]mundo, ten piedad de [D]nosotros. (x2)

[Em] [Em7]Cordero de [Bm]Dios, tú que [Cmaj7]qui-tas,
[Am]El pecado del [D]mundo, danos la [G]paz.
`
  },
  {
    id: 127,
    titulo: "PAZ EN LA TIERRA",
    autor: "Anónimo",
    categoria: "Cordero",
    tonoOriginal: "C5",
    letra: `
[C5]Paz en la tierra,
[F5] [G5] [C5]
Paz y amor,
[F5] [G5] [C5] Que ya ha nacido el Rey,
Cantemos con el coro en los cielos,
Adoremos al nuevo Rey,
[G5]Adoremos al nuevo Rey,
[C5] [F5]Adoremos al nuevo Rey,
[G5] [C5]Al Santo Rey.
`
  },
  {
    id: 128,
    titulo: "CORDERO 13",
    autor: "Anónimo",
    categoria: "Cordero",
    tonoOriginal: "G",
    letra: `
[G]Corde-[Em]ro, [C]cordero de [D]Dios, [G] [Em] [C]
[D]Que quitas el [G]peca[Em]aaaado del [C]mundo,
[D]Te piedad de [G]nos[Em]otros. [C] [D]

[G]Corde-[Em]ro, [C]cordero de [D]Dios, [G] [Em] [C]
[D]Que quitas el [G]peca[Em]aaaado del [C]mundo,
[D] [D7]Danos la [G]paz, [Em] [C]danos la paz,
[D] [G] [Em] [C] [D] [G]Danos la paz.
`
  },
  {
    id: 129,
    titulo: "CORDERO 14",
    autor: "Anónimo",
    categoria: "Cordero",
    tonoOriginal: "D",
    letra: `
[D] [F#m] [Bm]Cooordero de Dios
[G] [Em] [A],
Tú que quitas el pecado del mundo.
[Em] [A] [Am] [Bm]Ten piedad, ten piedad, de nosotros. (x2)

[D] [F#m] [Bm]Cooordero de Dios
[G] [Em] [A],
Tú que quitas el pecado del mundo.
[G] [A] [C] [D] [E]Danos la paz. Tu paz señor, danos la paz.
`
  },
  {
    id: 130,
    titulo: "DA PAZ AL MUNDO",
    autor: "Anónimo",
    categoria: "Cordero",
    tonoOriginal: "E",
    letra: `
[E]Da la paz al mundo
[F#m]Que Tú puedes dar,
[G#m]Paz que rompe muros,
[D] [B]Paz de libertad,
[E]Paz que es de justicia,
[F#m]Paz que es nuestra luz.
[G#m]Da la paz al mundo,
[D] [B] [E]Da la paz, Jesús.

Danos la paz, Señor,
Danos la paz del corazón.
Danos la paz, señor,
La paz que brota de tu amor.
`
  },
  {
    id: 131,
    titulo: "CORDERO Amigos",
    autor: "Amigos",
    categoria: "Cordero",
    tonoOriginal: "Am",
    letra: `
[Am]Cordero de Dios que [G]quitas
[F]El pecado, del [Em]mundo. (x2)

Cordero de Dios que quitas
El pecado del mundo. (x2)

[Dm]Ten piedad de [Am]nosotros
[Em]De nosotros ten [Am]piedad. (x2) ([Am] [G] [F] [Em])

Cordero de Dios que quitas
El pecado del mundo. (x2)

Ten piedad de nosotros
De nosotros ten piedad. (x2)

Cordero de Dios que quitas
El pecado del mundo. (x2)

Ten piedad de nosotros
Y danos de tu paz. (x2)
`
  },
  
    // --- SECCIÓN: CANTOS DE Comunión ---
  {
    id: 132,
    titulo: "ALMA DE CRISTO",
    autor: "Anónimo",
    categoria: "comunion",
    tonoOriginal: "D",
    letra: `
[D]Alma de [Bm]Cristo, [G]santi[A]fíca[D]me.
[A]Cuerpo de [Bm]Cristo, [G]sálva[D]me.
[A]Sangre de [Bm]Cristo, [A]embriá[G]game.
[D]Agua del cos[A]tado de [D]Cristo, lávame.

[Em]Pasión de [D]Cristo, [Em]confórta[D]me.
[Em]¡Oh, buen Je[D]sús!, [Em]óye[D7]me.
[G]Y dentro de [D]tus llagas, [A]escónde[Bm]me.
[A]No per[G]mitas que me a[D]parte de [A]Ti.

[Em]Del ene[D]migo, [Em]defiénde[D]me.
[Em]En la hora de mi [D]muerte, [Em]lláma[D][D7]me.
[G]Y mándame i[D]r a Ti.
[A]Para con tus [Bm]santos te a[G]labe
[D]Por los siglos de los [A]siglos, [G]A[D]mén.
`
  },
  {
    id: 133,
    titulo: "ALMA DE CRISTO (Pascua Juvenil)",
    autor: "Anónimo",
    categoria: "comunion",
    tonoOriginal: "D",
    letra: `
[D]Alma de Cristo, [C9]santi[G]fíca[D]me.
[D]Cuerpo de Cristo, [C9]sál [G]va [D]me.
[D]Sangre de Cristo, [C9]embriá [G]ga [D]me.
[D]Agua de su costado, [C9]láva[G]me.

[D]Pasión de Cristo, [C9]con [G]fórta[D]me,
[D]Oh buen Jesús, [C9]ó [G]ye [D]me.

[Bm]Dentro de tus [G]llagas, es[D]cónde[A]me.
[Bm]No permitas que me a[G]parte de [D]Ti.
[Bm]Del maligno ene[G]migo, de[D]fiénde[A]me.
[Bm]En la hora de mi [G]muerte, [D]lláma[A]me,

[Em]y mándame a ir a Ti
[G]para que con tus [D]santos te a[A]labe
[Em]por los siglos de los [G]siglos.
[C9]A [D]mén.
`
  },
  {
    id: 134,
    titulo: "ANIMA CHRISTI",
    autor: "Mons. Marco Frisina",
    categoria: "comunion",
    tonoOriginal: "Bbm",
        linkPartitura: "https://www.andsolm.info/scores/AnimaChristi.pdf",

    letra: 
    `
[Bbm] Anima [Gb] Christi, [Ab] sanctifica [Bbm] me.
[Ebm] Corpus [Bbm] Christi, [Gb7] salva [F] me.
[Bbm] Sanguis [Gb] Christi, [Ab] inebria [Gb] me.
[Bbm] Aqua la[Ebm]teris [Bbm] Christi, [F] lava [Bbm] me.

[Bbm] Passio [Gb] Christi, [Ab] conforta [Bbm] me.
[Ebm] O bone [Bbm] Iesu, [Gb7] exaudi [F] me.
[Bbm] Intra [Gb] vulnera [Ab] tu[Gb]a
[Ebm] Abs[Bbm]conde, [Gb7] abscon[F]de [Bbm] me.

[Bbm] Ne per[Gb]mittas [Ab] a te me se[Bbm]parari.
[Ebm] Ab hoste ma[Bbm]ligno [Gb7] defende [F] me.
[Bbm] In hora [Gb] mortis [Ab] me[Gb]æ
[Bbm] voca [Ebm] me, [Bbm] vo[F]ca [Bbm] me.

[Bbm] Et iu[Gb]be me ve[Ab]nire ad [Bbm] te,
[Ebm] ut cum sanctis [Bbm] tuis [Gb7] laudem [F] te,
[Bbm] per infi[Gb]nita [Ab] sæcula sæcu[Gb]lorum.
[Bb] Amen.`
},
  {
    id: 135,
    titulo: "AQUÍ HAY UN MUCHACHO",
    autor: "Anónimo",
    categoria: "comunion",
    tonoOriginal: "D",
    letra: `
[D]Aquí hay un mu[A]chacho
[Bm]Que sola[F#m]mente tiene [G]cinco panes y dos [D]peces
[Em]Más ¿Qué es eso para [A]tanta gente?

[D]Aquí hay un mu[A]chacho
[Bm]Que sola[F#m]mente tiene un [G]corazón dispuesto a [D]dar
[Em]Más, ¿Qué es eso para [A]tanta gente?

[Em]Aquí esta es[F]té corazón
[G]Que quiere [D]serte fiel
[Em]Más, ¿Qué [A]es eso [Em]si no [G]tiene a ti?
[A]¿Si no te [D]tiene a [A]ti?

[D]Toma [A]este cora[Em]zón
[D]Toma [A]cuanto [D]tengo y cuanto [A]soy
[G]Toma mi pa[A]sado, mi pre[F]sente y mi fu[Bm]turo
[G]¡Todo cuanto [A]tengo [D]tómalo!

[D]Mi cora[A]zón to[Em]maste
[D]Mis pa[A]nes ben[D]dijis[A]te
[G]A la gente re[A]partiste, [F]y a todos al[Bm]canzó

[G]Mi vida es[A]tá en tus manos
[F]Y quieres re[Bm]partirla
[G]Como hiciste con mis [Em]panes
[G]Aquel día, [A]¡Oh Señor!

[D]Aquí es[A]tán mis pa[Em]labras
[D]Aquí es[A]tán mis ac[D]ciones, aquí es[A]tán mis ilusiones
[G]Más, ¿Qué [A]es eso sin tu [D]amor Señor?

[Em]Aquí esta es[F]té corazón [G]que quiere [D]serte fiel
[Em]Más, ¿Qué [A]es eso si no [Bm]te tiene a [G]ti?
[Em]¿Si no te [A]tiene a ti?

[Bm]Aquí está este [F]corazón, con mis [G]panes y mis [D]peces
[Em]Toma [A]todo y [D]¡repártelo, se[A]ñor!

[D]Toma [A]este cora[Em]zón
[D]Toma [A]cuanto [D]tengo y cuanto [A]soy
[G]Toma mi pa[A]sado, mi pre[F]sente y mi fu[Bm]turo
[G]¡Todo cuanto [A]tengo [D]tómalo! (Tómalo)

[D]Toma [A]este cora[Em]zón
[D]Toma [A]cuanto [D]tengo y cuanto [A]soy
[G]Toma mi pa[A]sado, mi pre[F]sente y mi fu[Bm]turo
[G]¡Todo cuanto [A]tengo [D]tómalo!
[G]¡Todo cuanto [A]tengo [D]tómalo!

Aquí hay un muchacho
`
  },
  {
    id: 136,
    titulo: "BENDITO",
    autor: "Anónimo",
    categoria: "comunion",
    tonoOriginal: "E",
    letra: `
[E]Bendito, ben[A]dito, ben[B7]dito, sea [E]Dios,
[A]Los ángeles [E]cantan y a[B7]laban a [E]Dios. (x2)

[E]Yo creo Je[A]sús mío que es[B7]tás en el al[E]tar,
[A]Oculto en la [E]hostia te [B7]vengo a ado[E]rar. (x2)

[E]Espera Je[A]sús mío de [B7]tu suma bon[E]dad,
[A]Poder reci[E]birte con [B7]fe y cari[E]dad.

[E]Yo te amo [A]Dios mío de [B7]mi cora[E]zón,
[A]De esto mis [E]culpas te [B7]pido per[E]dón.

[E]Por Amor al [A]hombre mo[B7]riste en la [E]cruz,
[A]Y al cáliz des[E]ciendes por [B7]nuestra sa[E]lud.

[E]Quisiera Je[A]sús mío con [B7]puro cora[E]zón,
[A]Llegarme a tu [E]mesa de [B7]santa comu[E]nión.
`
  },
  {
    id: 137,
    titulo: "CANTEMOS AL AMOR DE LOS AMORES",
    autor: "Anónimo",
    categoria: "comunion",
    tonoOriginal: "D",
    letra: `
[D]Cantemos al a[A7]mor de los a[Bm]mores,
[G]Cantemos [Em]al Se[A7]ñor.
[D]Dios está a[Bm]quí, ve[Em]nid ado[G]radores,
[Bm]Adore – [F#m]mos a [C#7]Cristo Reden[F#m]tor.

[A7][D]Gloria a [B7]Cristo Je[Em]sús, [A7]Cielos y [D]tierra,
[Bm]Benedecid al Se[A7]ñor.
[G]Honor y [A7]gloria a [D]Ti, [F#7]Rey de la [G]Glo – [B7]ria,
[Em]Amor por [A7]siem __ [D]pre a [Bm]Ti, [D]
[Em]Dios [D]del a [A7]– [D]mor.

[D]Unamos nues[A7]tra voz a [Bm]los cantares
[G]Del [Em]coro celes[A7]tial.
[D]Dios está a[Bm]quí, al [Em]Dios de [G]los altares,
[Bm]Alabe[F#m]mos con [C#7]gozo angeli[F#m]cal.

[D]Cantemos al [A7]Amor de [Bm]los amores,
[G]Cante[Em]mos sin ce[A7]sar.
[D]Dios está a[Bm]quí, ve[Em]nid ado[G]radores,
[Bm]Adore[F#m]mos a [C#7]Cristo en el al[F#m]tar.
`
  },
  {
    id: 138,
    titulo: "COMIENDO DEL MISMO PAN",
    autor: "Joaquín Madurga",
    categoria: "comunion",
    tonoOriginal: "Dm",
    letra: `
[Dm]Comiendo del [F]mismo Pan,
[A#]Bebiendo del [A7]mismo [Dm]Vino,
[Gm]Queriendo en el [A7]mismo A[Dm]mor,
[A7]Sellamos tu A[Dm]lianza Cristo.

[Dm]La noche de [F]su pasión,
[A#]Tomo Pan en[A7]tre sus [Dm]manos,
[Gm]Y dijo “To[A7]mad, co[Dm]med,
[A7]Este es mi Cuerpo En[Dm]tregado”

[Dm]La noche de [F]su pasión,
[A#]Tomo el Cáliz [A7]entre sus [Dm]manos,
[Gm]Y dijo “To[A7]mad, Be[Dm]bed,
[A7]Es la Sangre que de[Dm]rramo”

[Dm]La noche de [F]su pasión,
[A#]Nos dio el Se[A7]ñor su man[Dm]dato:
[Gm]“amarnos u[A7]nos a [Dm]otros,
[A7]Lo mismo que yo los [Dm]amo”
`
  },
  {
    id: 139,
    titulo: "EL SEÑOR NOS INVITA YA",
    autor: "J. Thien",
    categoria: "comunion",
    tonoOriginal: "D",
    letra: `
[D]El Se[Bm]ñor nos in[G]vita [A]ya,
[D]Con A[Bm]mor su [G]Cuerpo a Comul[A]gar,
[D]Ya no es [Bm]Vino [G]ya no es [A]Pan,
[D]Cristo [Bm]mismo [G]se nos [A]da.
[D]Ale[Bm]lu, ale[G]lu, a[A]lelu-[u]-[D]ya.

[D]Hoy la Fa[Bm]milia [G]de [A]Dios,
[D]Que en la [Bm]mesa [G]parte el [A]Pan,
[D]Como el [Bm]Cuerpo [G]del Se[A]ñor,
[D]Y con[Bm]vive en u[G]ni[A]dad.

[D]Esta San[Bm]ta Co[G]mu[A]nión,
[D]Es co[Bm]mida Fra[G]ter[A]nal,
[D]Es testi[Bm]monio [G]de A[A]mor,
[D]Es Ban[Bm]quete Fa[G]mi[A]liar.
`
  },
  {
    id: 140,
    titulo: "EN TI SEÑOR",
    autor: "Eduardo Diaz Covarrubias",
    categoria: "comunion",
    tonoOriginal: "G",
    letra: `
[G]En ti Señor encon[Bm]tré la respuesta a mis dudas,
[C]Diste consuelo a mis angustias,
[Cm]Y alegría en mis momentos de sole[G]dad.

[G]Contigo Señor tuve [Bm]mil momentos de felicidad,
[C]Y aunque a veces tuve que llorar,
[Cm]Tú lo sabes nunca te de[G]je de a[D]mar.

[G]Quisiera Señor, pa[Bm]garte lo que has hecho por mí,
[C]Solo te ofrezco mi vida entera,
[Cm]Se tu ahora el dueño de mi vi[G]vir. [D]

[G]Solo tu Señor me [D]diste el va[C]lor para se[G]guir,
[D]Me diste la ra[G]zón de vi[G7]vir,
[C]Y me mos[D]traste el camino para encon[G]trar,
[Em]La ver[C]dad [D]gracias Se[G]ñor.

[G]Gracias Señor por[D]que puedo [C]verte en mis her[G]manos,
[D]Porque puedo reci[G]bir tu [G7]cuerpo,
[C]Y pe[D]dir perdón por mis pe[G]cados.

[C]_ Me has dado [D]tanto en ver[G]dad, [G7]
[C] _Que nada [D]te puedo ofre[G]cer, [G7]
[C] _Solo te ofrez[D]co en mi [G]canto, [G7]
[C] _Lo que [D]siente mi [G]ser. [G7]

[C] _Y que me empuja a de[D]cir,
[G]Y que me obliga a gritar:
[C]Que [D]yo te [G]amo.
`
  },
  {
    id: 141,
    titulo: "ES MI CUERPO, TOMAD Y COMED",
    autor: "Anónimo",
    categoria: "comunion",
    tonoOriginal: "E",
    letra: `
[E]Es mi Cuerpo, to[A]mad y co[E]med,
[E]Es mi Sangre, To[A]mad y Be[B7]bed,
[E]Porque yo soy [A]Vida, yo soy A[Am]mor,
[E]Oh Señor, nos reu[B7]niremos en tu A[E]mor.

[E]El Señor nos da su A[A]mor como [E]nadie nos lo dio.
[E]El nos guía como es[A]trella en la in[B7]mensa oscuridad.
[E]Al partir juntos el [A]Pan, Él nos [E]llena de su Amor,
[A]Pan de Dios, el [B7]Pan comamos de amis[E]tad.

[E]El Señor nos da su A[A]mor como [E]nadie nos lo dio.
[E]Como todos sus a[A]migos traba[B7]jaba en Nazaret,
[E]Carpintero se ale[A]gró, traba[E]jando en su taller:
[A]Con sus manos [B7]Cristo obrero traba[E]jó.

[E]El Señor nos da su A[A]mor como [E]nadie nos lo dio.
[E]Era tan grande y tan [A]hondo que mu[B7]rió sobre una cruz,
[E]Era tan fuerte su A[A]mor, que de la [E]muerte triunfó,
[A]De la tumba [B7]sale libre y vence[E]dor.

[E]El Señor nos da su A[A]mor como [E]nadie nos lo dio.
[E]El reúne a sus a[A]migos en la [B7]mesa del Amor.
[E]En el mundo todos [A]son Carne y [E]Sangre del Señor,
[A]Nada puede sepa[B7]rarnos de su A[E]mor.
`
  },
  {
    id: 142,
    titulo: "ESTAS AQUÍ",
    autor: "Jeséd",
    categoria: "comunion",
    tonoOriginal: "C",
    letra: `
    Intro: [C] [Am] [F] [G]
           [Em] [Am] [F] [G] [C]
           
[C]Estás a[Em]quí, aunque [F]no te pueda [G]ver,
[F]Pues es[Dm]condes tu gloria y majes[G]tad.
[C]Estás a[Em]quí reves[F]tido sola[Dm]mente del a[G]mor,
[F]Bajo la [G]forma de un [C]Pan.

[Am]Con senci[Em]llez, te me [F]vienes a entre[G]gar,
[Am]Y en mi inte[F]rior vas haciendo mara[G]villas,
[F]Corazón con cora[G]zón, en pro[F]funda comu[G]nión, [Am]
[F]Me haces [G]templo de la Santa Trini[C]dad.

[C]Ven y cena con[G]migo,
[F]Ven y mora en mi ho[G]gar,
[C]Ven y nunca me [G]dejes,
[F]Pues sin ti me mo[G]riría.

[Am]Me has herido con tu a[Em]mor,
[F]Ven y mora en mi inte[G]rior,
[F]De ti quiero co[G]mulgar Se[Am]ñor,
[F]De ti quiero co[G]mulgar Se[C]ñor.
`
  },
  {
    id: 143,
    titulo: "HACIENDOTE PAN",
    autor: "Anónimo",
    categoria: "comunion",
    tonoOriginal: "F#m",
    letra: `
[F#m] _Comenzaste a ha[A]certe pan, en Be[E]lén,
[D]Sol pequeñito en nuestra [C#7]noche.
[F#m] _Aprendiste en Naza[A]ret, de ellos [E]dos,
[D]El gesto manso de la en[C#7]trega.

[F#m] _Niño que en Jerusa[D]lén te en[E]tregaste de una [F#m]vez,
[D]A las [E]cosas de tu [F#m]padre.
[F#m] _Debe tu cuerpo cre[D]cer, para po[E]derse ofre[F#m]cer,
[D]Como [E]pan a nuestra [F#m]hambre.

[F#m] _Mi Cuerpo es [D]esto, _mi Sangre es [E]esta,
Que por us[F#m]tedes doy.
[F#m] _Coman y [D]vivan, _crean y [E]vivan,
Que para [F#m]siempre soy. [D]Soy yo, [E]soy yo, [F#m]soy yo.

[F#m] Se multipli[A]có tu amor, se par[E]tió,
[D]Todos saciados y aun so[C#7]braba.
[F#m] Se mostró tu inti[A]midad, eres [E]pan,
[D]Que solo vive por do[C#7]narse.

[F#m] Noches de Jerusa[D]lén, Cristo [E]pan entréga[F#m]te,
[D]Eres [E]tú nuestro cor[F#m]dero.
[F#m] Cena, huerto, [D]beso y Cruz, y tu en[E]trega pan Je[F#m]sús,
[D]Fue más [E]fuerte que el ma[F#m]dero.
`
  },
  {
    id: 144,
    titulo: "IN PERSONA CHRISTI",
    autor: "Anónimo",
    categoria: "comunion",
    tonoOriginal: "C",
    letra: `
[C]Ya no soy yo quien [G]vive,
[F]Tú eres quien vive en [C]mí;
[Am]mi vida la he per[Em]dido,
[F]pues todo lo vivo en [G]ti.

[Am]Tú pronuncias con mis [Em]labios,
[Dm]las palabras de tu [C]boca;
[Am]y levantas en mis [Em]manos,
[F]el misterio de tu [Dm]cuer[G]po.

[Dm]Tu Espíritu mora en [G]mí,
[F]Y mi espí[G]ritu mora en [C]ti.

[C]In per[Em]sona [F]Chris[G]ti, [Am]in per[Em]sona [F]Chris[G]ti;
[Am]este es mi [Em]cuerpo, [F]esta es mi [C]sangre.
[Am]In per[Em]sona [F]Chris[G]ti.
[Am]Tomen y [Em]coman, [F]tomen y [C]beban;
[Dm]Que este soy [G]yo. [F]In per[G]sona [C]Christi.

[C]Ya todo lo he per[G]dido para ga[F]narte a [C]ti,
[Am]Y ahora lo tengo [Em]todo pues todo lo [F]tengo en [G]ti;
[Am]Con tu amor me has se[Em]ducido, me de[Dm]jé sedu[C]cir.
[Am]Mi corazón en[Em]cendido arde de [F]amor por [Dm]ti;[G]
Sólo quiero cono[Dm]certe y solo [G]para [F]ti vi[C]vir.
`
  },
  {
    id: 145,
    titulo: "JESÚS AMIGO",
    autor: "Jaire",
    categoria: "comunion",
    tonoOriginal: "E",
    letra: `
[C#m]Hoy te quiero con[B]tar, Jesús amigo,
[A]Que Contigo es[B]toy feliz.
[C#m]Si tengo tu amis[B]tad lo tengo todo,
[A]Pues estás den[B]tro de mí.

[E]Después de comul[B]gar me haces como [A]Tú,
Me llenas con tu [B]paz,
[E]En cada pedi[B]cito de este [A]Pan,
Completo estás y a[B]sí te das.

[C#m]Estas ahí por [B]mí, porque co[A]noces,
Que sin ti pe[B]queño soy.
[C#m]De ahora en ade[B]lante nada,
[A]Nos separa[B]ra ya lo veras.

[E]Te escondes en el Pan,
[A]Y aunque no te [B]pueda ver,
[G#m]Te puedo acompa[C#m]ñar, es mi lu[A]gar prefe[B]rido.
[E]Hoy quiero comul[B]gar, abrirte mi [A]corazón
Así de par en [B]par, eres mi mejor a[E]migo.

[C#m]Dos mil años a[B]trás a tus amigos,
[A]Invitaste a ce[B]nar y ahí les prome[C#m]tiste,
Que con ellos por [B]siempre ibas a es[A]tar,
Y ahora cada vez que el sa[B]cerdote
[E]Eleva el Pan en el al[B]tar, me pongo de ro[A]dillas
Porque sé que en esa [B]hostia Tu estas.

[C]Me vuelves a sal[F]var como lo hi[A#]ciste en la [C]cruz,
[Am]En cada misa [Dm]Tú repites [A#]tu sacri[C]ficio.
Hoy quiero comul[F]gar, abrirte mi [A#]corazón
Así de par en [C]par, eres mi mejor a[F]migo, Jesús.
`
  },
  {
    id: 146,
    titulo: "MILAGRO DE AMOR",
    autor: "Betsaida",
    categoria: "comunion",
    tonoOriginal: "E",
    letra: `
[E]Jesús [B]aquí pre[C#m]sente de forma real,
[A]Te pido [F#m]un poco más de [D]Fe y de Humil[B]dad.
[E]Quisiera [B]poder ser [C#m]digno de compartir,
[A]Contigo el [F#m]milagro más [D]grande de A[B]mor.

[E]Milagro de A[B]mor tan infi[C#m]nito,
[B]En que Tú mi [A]Dios te has hecho,
[F#m]Tan pequeño y tan hu[B]milde, Para entrar en mí.
[E]Milagro de A[B]mor tan infi[C#m]nito,
[B]En que Tú mi [A]Dios te olvidas,
[F#m]De tu gloria y de tu ma[B]jestad por mí.

[G]Y hoy vengo [D]lleno de ale[Em]gría,
[C]A reci[Am]birte en esta [F]Eucaris[D]tía.
[G]Te doy gracias por [D]llamarme a esta [Em]cena,
[D]Porque aunque no soy [C]digno, visi[Am]tas Tú mi [D]alma.

[G]Milagro de A[D]mor tan infi[Em]nito,
[D]En que Tú mi [C]Dios te has hecho,
[Am]Tan pequeño y tan hu[D]milde, Para entrar en mí.
[G]Milagro de A[D]mor tan infi[Em]nito,
[D]En que Tú mi [C]Dios te olvidas,
[Am]De tu gloria y de tu ma[D]jestad por mí.
`
  },
  {
    id: 147,
    titulo: "PAN DE LOS ÁNGELES",
    autor: "Anónimo",
    categoria: "comunion",
    tonoOriginal: "G",
    letra: `
[G]Tan simple así, tan [D]fácil así
A[C]cepta y [Am]prueba de esa [D]gracia
El [G]pan sustenta al hombre
[D]Jesús sustenta al alma
[Am7]Milagro a[C]sí, no hay quien [D4] [D]haga

[Am7]Cuerpo que era pan, Sangre que era [D]vino
[Am]hacia la eter[C]nidad es el ca[D]mino

[G]Pan que los ángeles comen
Transfor[D/F#]mado en pan del hombre
Son los [Em]hijos que consumen
Pan del [C]alma que tiene [D]hambre

[G]A los mortales das comida, 
das tam[D/F#]bién el pan de vida
Que la [Em7]familia nutrida 
sea un [C]día reuni[D]da en el [G]cielo [C/G] [D/G] [C/G] 

[G]Trigo triturado [D/F#]Cristo inmolado
[Am]Ambos [C]se tornan en [D]pan
[G]Uno que perece [D/F#]Otro que permanece
[Am7]Para [C]nuestra salva[D]ción

[Am7]¡Oh, Señor de la uni[D]dad!
[Am7]Quítanos[C] la orfan[D]dad

[G]Pan que los ángeles comen
Transfor[D/F#]mado en pan del hombre
Son los [Em]hijos que consumen
Pan del [C]alma que tiene [D]hambre

[G]A los mortales das comida, 
das tam[D/F#]bién el pan de vida
Que la [Em7]familia nutrida 
sea un [C]día reuni[D]da en el [G]cielo [C/G] [D/G] [C/G] [bis.]

[G]Tan simple así, tan [D/F#]fácil así [Em7/9] 
`
  },
  {
    id: 148,
    titulo: "PAN TRANSFORMADO",
    autor: "Anónimo",
    categoria: "comunion",
    tonoOriginal: "C",
    letra: `
[C]Pan transfor[Am]mado en el [Dm]Cuerpo de [G7]Cristo,
[C]Vino transfor[Am]mado en la [Dm]Sangre del Se[G7]ñor.

[C]Euca[Em]ristía Mi[F]lagro de A[C]mor,
[F]Euca[C]ristía Pre[G7]sencia del Se[C]ñor.

[C]Cristo nos [Am]dice To[Dm]men y Co[G7]man,
[C]Este es mi [Am]Cuerpo que [Dm]ha sido entre[G7]gado.

[C]Cristo en per[Am]sona nos [Dm]viene a libe[G7]rar,
[C]De nuestro ego[Am]ísmo y la divi[Dm]sión fa[G7]tal.

[C]Oh Gran in[Am]vento de [Dm]Cristo sabio y [G7]bueno,
[C]Para alimen[Am]tarnos con su [Dm]Sangre y con su [G7]Cuerpo.

[C]Con este [Am]Pan te[Dm]nemos vida e[G7]terna,
[C]Cristo nos in[Am]vita a la [Dm]gran resurrec[G7]ción.

[C]Este ali[Am]mento re[Dm]nueva nuestras [G7]fuerzas,
[C]Para cami[Am]nar a la [Dm]gran libera[G7]ción.
`
  },
  {
    id: 149,
    titulo: "SEÑOR ¿A QUIÉN IREMOS?",
    autor: "Alejandro Mejía",
    categoria: "comunion",
    tonoOriginal: "D",
    letra: `
[D]Señor, [A]¿A quién i[Bm]remos?
[G]Tú tienes pa[A]labras de vida,
[D]Nosotros [A]hemos cre[Bm]ído,
[G]Que tú [A]eres el hijo de [D]Dios.

[D]Soy el Pan que os da la [Bm]vida eterna,
[G]El que viene a [E]mí no tendrá [A]hambre,
[D]El que viene a [D7]mí no tendrá [G]sed, [Gm]
[D]Así ha ha[Em]blado Je[A]sús.

[D]No busquéis ali[Bm]mento que perece,
[G]Sino aquel que per[E]dure eterna[A]mente,
[D]El que ofrece el [D7]hijo del [G]hombre, [Gm]
[D]Que el [Em]Padre os ha en[A]viado.

[D]No es moisés quien os [Bm]dio Pan del cielo,
[G]Es mi Padre quien os [E]da Pan verda[A]dero,
[D]Por que el Pan de [D7]Dios baja del [G]cielo, [Gm]
[D]Y [Em]da la vida al [A]mundo.

[D]Pues si yo he ba[Bm]jado del cielo,
[G]No es para ha[E]cer mi volun[A]tad,
[D]Sino la volun[D7]tad de mi [G]Padre, [Gm]
[D]Que es [Em]dar al mundo la [A]vida.

[D]El que viene al ban[Bm]quete de mi Cuerpo,
[G]En mi vive [E]y yo vivo en [A]Él,
[D]Brotará en [D7]él la vida e[G]terna, [Gm]
[D]Y [Em]yo lo resuci[A]taré.
`
  },
  {
    id: 150,
    titulo: "UNA ESPIGA DORADA",
    autor: "Cesáreo Gabaráin",
    categoria: "comunion",
    tonoOriginal: "E",
    letra: `
[E]Una es[A]piga do[D]rada por el [A]sol,
[E]El ra[A]cimo que [F#m]corta el viña[E]dor,
[D]Se convierten ahora en pan y vino de a[A]mor,
[Bm]En el [E]cuerpo y la [A]sangre del Señor.

[E]Comul[A]gamos la [D]misma comu[A]nión,
[E]Somos [A]trigos del [F#m]mismo sembra[E]dor,
[D]El molino, la vida, nos tritura con do[A]lor,
[Bm]Dios nos [E]hace euca[A]ristía en el Amor. (x2)

[E]Como [A]granos que ha [D]hecho el mismo [A]Pan,
[E]Como [A]notas que [F#m]tejen un can[E]tar,
[D]Como gotas de agua que se funden en el [A]mar,
[Bm]Los cris[E]tianos un [A]Cuerpo formarán. (x2)

[E]En la [A]mesa de [D]Dios se senta[A]rán,
[E]Como [A]hijos su [F#m]Pan comulga[E]rá,
[D]Una misma esperanza caminando canta[A]rán,
[Bm]En la [E]vida como [A]hermanos se amarán. (x2)
`
  },
  {
    id: 151,
    titulo: "VAMOS CANTANDO A COMULGAR",
    autor: "Julio César Labaké",
    categoria: "comunion",
    tonoOriginal: "Dm",
    letra: `
[Dm]Vamos can[F]tando a comulgar,
[Dm]Con el Se[F]ñor que nos dejó,
[Dm]La misma [A#]Fe para mirar
[C]La vida e[Dm]terna que nos dio.

[Dm]Porque tú [A#]y yo,
[C]Somos en [Dm]El un solo ser. (x2)

[Dm]Vamos her[F]manos a comer,
[Dm]El mismo [F]Cuerpo del Señor,
[Dm]Que compro[A#]mete nuestro amor,
[C]Para que a[Dm]memos como El.

[Dm]Vamos can[F]tando a comulgar,
[Dm]Para de[F]cirnos con valor,
[Dm]Que si hubo al[A#]gún odio o rencor,
[C]Aquí lo ha[Dm]bremos de olvidar.

[Dm]Vamos can[F]tando a comulgar,
[Dm]A procla[F]mar a decisión,
[Dm]De transfor[A#]mar el mundo actual,
[C]En la fa[Dm]milia del Señor.
`
  },
  {
    id: 152,
    titulo: "VERBUM PANIS",
    autor: "Mite Balduzzi",
    categoria: "comunion",
    tonoOriginal: "Em",
    letra: `
[Em]Antes del [D/E]tiempo, mucho [Em]antes que la [D/E]tierra,
[Em]Comen[D/E]zase a exis[Em]tir el [D/E]Verbo estaba [Em]junto a Dios.
[Em]Vino a este [D/E]mundo para [Em]no abando[D/E]narnos,
[Em]En el [D/E]viaje nos de[Em]jó, su [D/E]Cuerpo hecho [Em]Pan de Vida.

[Em] _Verbum Caro [C]factum est,
[D4]Verbum [D]Panis factum est. (x2)

[G]Tú sigues [D/F#]repartién[C]donos tu [D]Pan,
[G]Y quien [D/F#]coma de este [C]pan, [D]No tendrá más [G]hambre.

[G]Tú sigues [D/F#]habitán[C]donos, Se[D]ñor,
[G]En tu [D/F#]Iglesia vives [C]hoy, [D]Esta es nuestra [G]casa.

[Em]Antes del [D/E]tiempo, cuando el u[Em]niverso fue cre[D/E]ado,
[Em]De la os[D/E]curidad, el [Em]Verbo es[D/E]taba junto a [Em]Dios.
[Em]Vino a este [D/E]mundo, en su [Em]gran miseri[D/E]cordia,
[Em]La Pa[D/E]labra se en[Em]carnó: su [D/E]Hijo hecho [Em]Pan de Vida.
`
  },
  {
    id: 153,
    titulo: "YA NO ERES PAN Y VINO",
    autor: "Jorge Luis Bohorquez",
    categoria: "comunion",
    tonoOriginal: "D",
    letra: `
[D]Ya no eres [G]pan y [D]vino,
[D]Ahora que eres [G]cuerpo y [D]sangre, vives en [A]mí,
[G]De rodillas yo caigo al contem[D]plar tu bondad,
[Gdism]Como no te voy a ado[A]rar.

[D]Mientras te [G]pierdes en mis [D]labios,
[D]Tu gracia va inun[G]dando [D]todo mi cora[A]zón,
[G]Por esa paz que me llena de ale[D]gría mi ser,
[Gdism]Como no te voy a ado[A]rar.

[D]Señor Je[A]sús, mi salva[Bm]dor,
[G]Amor e[D]terno, amor di[A]vino,
[G]Ya no falta [D]nada, lo tengo [A]todo, te tengo a [Bm]ti
[G]Ya no falta [D]nada, lo tengo [A]todo, te tengo a [D]ti.

[D]Dueño y [G]Rey del uni[D]verso,
[D]Como puede ser po[G]sible que [D]busques mi a[A]mor,
[G]Tú tan grande y yo pe[D]queño y te fijas en mi,
[Gdism]Como no te voy a ado[A]rar.

[D]De rodillas [G]yo te [D]pido,
[D]Que el día cuando [G]tú me [D]llames sea como [A]hoy,
[G]Para mirarte a los [D]ojos y poderte de[A]cir,
[Gdism]Que como no te voy a ado[A]rar.
`
  },
  {
    id: 154,
    titulo: "YO SOY EL PAN DE VIDA",
    autor: "Cesáreo Gabaráin",
    categoria: "comunion",
    tonoOriginal: "G",
    letra: `
[G]Yo soy el [Bm]pan de vida,
[C]El que viene a [Am]mí no tendrá [D]hambre,
[G]El que viene a [Bm]mí no tendrá [C]sed,
[G]Nadie [G7]viene a [C]mí,
[Am]Si mi [A7]Padre no lo [D]llama. [D7]

[G]Yo [D7]lo re[G]su-ci-[G7]tare, [C]yo [Am]lo re[D]su-ci-[D7]taré,
[G]Yo [G7]lo re[C]su-ci-[Am]tare - e - [D]en [D7]el dí-a [G]final. (x2)

[G]El pan que [Bm]yo le daré,
[C]Es mi [Am]Cuerpo y la [D]vida del mundo,
[G]El que [Bm]coma de mi [C]carne,
[G]Tendrá [G7]vida e[C]terna,
[Am]Tendrá [A7]vida e[D]terna. [D7]

[G]Si tú no [Bm]te alimentas,
[C]Del [Am]Cuerpo del [D]Hijo del Hombre,
[G]Y no [Bm]bebes de su [C]Sangre,
[G]No ten[G7]drás parte con [C]Él,
[Am]No ten[A7]drás la vida e[D]terna. [D7]

[G]Yo soy la [Bm]Resurrección,
[C]El Ca[Am]mino y la Ver[D]dad.
[G]Todo a[Bm]quel que crea en [C]Mí,
[G]Aunque [G7]muera, tendrá [C]vida,
[Am]Porque [A7]tiene vida e[D]terna. [D7]

[G]Sí, Se[Bm]ñor, yo creo,
[C]Que [Am]Tú eres el [D]Hijo de Dios,
[G]Que en[Bm]viado por tu [C]Padre,
[G]Has ve[G7]nido al [C]mundo,
[Am]Para [A7]darnos vida e[D]terna. [D7]
`
  },
  {
    id: 172,
    titulo: "Banquete Eterno",
    autor: "Comunidad Católica Shalom",
    tonoOriginal: "A",
    categoria: "comunion",
    letra: 
`Intro:
[E] [F#m] [D] 
[A] [Bm] [C#m] [D]

[E]Nuestros ojos te ven ele[F#m]vado en la Cruz, Cor[D]dero inmo[A]lado
[E]Y resucitado vienes a habi[F#m]tar nuestro cora[D]zón [A]
[E/G#]Tu amor rasga el velo
[F#m]Que nos abre las [E]puertas del cielo

[Bm]Y ahora podemos en[A/C#]trar, contem[D]plarte
[E]Y recibir Tu [F#m]cuerpo y sangre
[Bm]Como brasa del [A/C#]santo altar
[G]Tu presencia inflama nuestro cora[E]zón

[A]Comulgamos Tu [F#m]cuerpo y sangre
[Bm]Banquete Eterno que nos [E4]das
[A]En tu altar la Cruz, la Resur[F#m]rección [B]
[D]Irrumpe como un nuevo dia
[E4]Que no terminara

[Bm] [A/C#] [G] [D/F#] [E] (Puente)

[Bm]Y ahora podemos en[A/C#]trar, contem[D]plarte
[F#m]y recibir Tu [A]cuerpo y sangre
[Bm]Como brasa del [A/C#]santo altar
[G]Tu presencia inflama nuestro cora[D/F#]zón [E]

[A]Comulgamos Tu [F#m]cuerpo y sangre
[Bm]Banquete Eterno que nos [E4]das
[A]En tu altar la Cruz, la Resur[F#m]rección [B] [A/D#]
[D]Irrumpe como un nuevo dia
[E4]Que no terminara

[A]Comulgamos Tu [F#m]cuerpo y sangre
[Bm]Banquete Eterno que nos [E4]das
[A]En tu altar la Cruz, la Resur[F#m]rección [B] [A/D#]
[D]Irrumpe como un nuevo dia
[E4]Que no terminara

[D]Irrumpe como un nuevo dia
[E4]Que no terminara

[F#m] [E/G#] [Bm] [E4] [A] (Final)`
},
{
    id: 173,
    titulo: "Al Partir el Pan (Ao partir o Pão)",
    autor: "Walmir Alencar (Comunidad Shalom)",
    tonoOriginal: "E",
    categoria: "comunion",
    letra: 
`Intro: [A9] [E/G#] [F#m7(11)] [B4] [B] 

[E9]¿Quién podría ima[B/D#]ginar
[C#m]que aquella [G#m]cruz
[A9]era solo el co[E/G#]mienzo
[F#m]de una historia de a[B4]mor? [B]

[E9]Comentaban con gran do[B/D#]lor
[C#m7]todo lo que pa[G#m]só
[A9]y jamás espe[E/G#]raban
[F#m7]reencontrar al Se[C#m]ñor. [B]

A[E/G#]conteci[A9]ó sin espe[B/A]rar
Él apareci[G#m]ó entre los di[C#m]scípulos [E/B]a cami[A9]nar
Habla[B/A]ba de amor; tan solo su [G#m]voz
Les ar[C#m7]día el cora[C#]zón
Y de[B/D#]cían [C#/F]

[F#m7]Quédate con[B4] noso[B]tros 
[G#m]Es tarde y el día[C#4] decli[C#]na 
[F#m]Casi sin espe[B4]ranza
[B]Nos vamos sin di[Bm]rección [E]
[F#m7]En torno a la [B7(4/9)]mesa [B]
[G#m]Se abrieron nuestros o[C#4]jos [C#]
[F#m]Te recono[B4]cimos al [B]partir el [E]pan  [B7(4/9)]

[E]Ya no llores, Jerusa[B/D#]lén
[C#m7]La alegría vol[G#m]vió!
[A9]Tu Señor está [E/G#]vivo!
[F#m]Él resuci[C#m]tó! [B]

A[E/G#]conteci[A9]ó sin espe[B/A]rar
Él apareci[G#m]ó entre los di[C#m]scípulos [E/B]a cami[A9]nar
Habla[B/A]ba de amor; tan solo su [G#m]voz
Les ar[C#m7]día el cora[C#]zón
Y de[B/D#]cían [C#/F]

[F#m7]Quédate con no[B4]sotros [B]
[G#m]Es tarde y el día de[C#4]clina [C#]
[F#m]Casi sin espe[B4]ranza
[B]Nos vamos sin di[Bm]rección [E]
[F#m7]En torno a la [B7(4/9)]mesa [B]
[G#m]Se abrieron nuestros o[C#4]jos [C#]
[F#m]Te reconocimos al par[B4]tir el [B]pan [E]

[E]Ya no llores, Jerusa[B/D#]lén

Final:
[C#m7] [E/B] [A] [E/G#] 
[F#m] [C#m] [B] [C] [D] 
[G] [D/F#] [C/E] [G/B] 
[C] [G/B] [Am] [C/G] [D] `
},
    // --- SECCIÓN: CANTOS DE Reflexión ---
  {
    id: 175,
    titulo: "ALIANZA DE AMOR",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "C",
    letra: `
[C]En la pobreza o en la ri[G]queza te ama[C]re,
[C]En la salud o en la enferme[F]dad yo te ama[G]re,
[Am]En la tristeza o [G]en la alegría,
[F]En la tormenta o [C]en la paz,
[Am]Ante todo y sobre [G]todo te amare.

[F]Tú me ama[C]ras, [G]yo te ama[Am]re,
[F]Alianza e[Dm]terna entre tú y [G]yo
[F]Tú me ama[C]ras, [G]yo te ama[Am]re,
[F]Hasta que la muerte nos una [G]más.

[C]En las buenas o [G]en las malas te ama[C]re
[C]En el pecado o en la [F]gracia te ama[G]re
[Am]En la noche o [G]en el día
[F]En la fuerza o la debili[C]dad
[Am]Ante todo y sobre [G]todo te amare.
`
  },
  {
    id: 176,
    titulo: "AMAR ES ENTREGARSE",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "D",
    letra: `
[D]Amar es en[A]tregarse olvi[D]dándose de [A]si [D] [D7]
[G]Buscando lo que a [D]otros pueda [A]hacer fe[D]liz, [D7]
[G]Buscando lo que a [D]otros pueda [A]hacer fe[D]liz.

[A]Qué lindo es vi[D]vir para amar
[A]Qué grande es te[D]ner para dar
[D7]Dar ale[G]gría y felici[D]dad
[A]Darse uno [D]mismo eso es amar,
[D7]Dar ale[G]gría y felici[D]dad
[A]Darse uno [D]mismo eso es amar.

[D]Si amas como a [A]ti mismo y te en[D]tregas a los de[A]más [D] [D7]
[G]Verás que no hay ego[D]ísmo que no [A]puedas supe[D]rar, [D7]
[G]Verás que no hay ego[D]ísmo que no [A]puedas supe[D]rar.
`
  },
  {
    id: 177,
    titulo: "AMÉMONOS DE CORAZÓN",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "Em",
    letra: `
[Em]Amémonos de Cora[B7]zón,
[Em]No de labios ni de oídos. (x2)
[E7] [Am]Para cuando Cristo [Em]venga,
[B7]Para cuando Cristo venga,
[Em]Nos encuentre bien unidos. (x2)

[Em]Cuantas veces de[B7]bo yo,
[Em]¿Perdonar al que me ofende? (x2)
[E7] [Am]Setenta veces [Em]siete,
[B7]Setenta veces siete,
[Em]Perdonarás a tu hermano. (x2)

[Em]Ven, acércate [B7]a Jesús,
[Em]Y confiesa tus pecados. (x2)
[E7] [Am]Porque justo es nues[Em]tro Dios,
[B7]Porque justo es nuestro Dios,
[Em]Y fiel para perdonarnos. (x2)

[Em]Mandamiento nue[B7]vo os doy:
[Em]Que os améis unos a otros, (x2)
[E7] [Am]Como yo os he a[Em]mado,
[B7]Como yo os he amado,
[Em]Os améis también vosotros. (x2)
`
  },
  {
    id: 178,
    titulo: "AMÉNSE",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "A",
    letra: `
[A]Hoy que [C#m]juntos es[F#m]tán, [Em7] [A7]
[D]Uní[C#m]dos [Bm]fren[A]te a [G]él, en su a[E]mor, [E7]
[A]Hoy que sus manos [Em7/A]juntas van a seguir
[F#m]A luchar hasta el fi[C#m]nal,
[D]Ámen[Bm]se, quiéran[D]se, únan[E]se.

[A]HOY QUE LA TI[Em7/A]ENES JUNTO A TI
[D]QUE DIOS YA [Dm7]TE LA HA DADO
[A]AMALA, [F#m]HERMANO, [Bm7]AMALA, [E] [E7]
[A]HOY QUE LA TI[Em7/A]ENES JUNTO A TI
[D]QUE DIOS YA [Dm7]TE LA HA DADO
[A]AMALO, [F#m]HERMANA, [Bm7]AMALO, [E] [E7]
[A]ÁMENSE SIEMPRE ASI

[A]Dios los ben[C#m]deci[F#m]rá, [Em7] [A7]
[D]Él los ayu[C#m]dará [Bm]sin fa[A]llar, [G] [E] [E7]
[A]Y aunque este mundo [Em7/A]trate de separar,
[F#m]No podrá, jamás po[C#m]drá,
[D]Tú la [Bm]amas, ella te [D]ama, y los dos [E]aman a Dios.
`
  },
  {
    id: 179,
    titulo: "AQUÍ ESTOY SEÑOR",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "G",
    letra: `
[G]Aquí estoy Se[Bm]ñor te oiré,
[C]Cumpliré Je[Am]sús tu volun[D]tad,
[G]Aquí estoy Señor y [Bm]háblame,
[C]Tu palabra [Am]es mi [D]salvación.

[G]Aquí estoy Se[Bm]ñor escucharé,
[C]Tu mensaje [Cm]que a todos [D]daré,
[Em]Corazones muertos [Bm]salvaré,
[C]Y a todos los [Cm]hombres [D]librare.

    [G]Quiero oír tu [Bm]voz y alabarte,
    [Em]Y saber que no es mi cora[Bm]zón,
    [C]Y poner mi [D]vida en la [G]tuya, [Em] 
    [C]Y saber que [D]todo tuyo [G]es. [C] [D] 
    [G]Quiero oír tu [Bm]voz y alabarte,
    [Em]Y saber que no es mi cora[Bm]zón,
    [C]Y ponernos [D]todos en tus [G]manos, [Em] 
    [C]Y saber que [D]el mundo salvo [G]es.

[G]Aquí estoy Señor y [Bm]guíame, 
[C]sólo un hombre [Cm]es lo que yo [D]soy, 
[Em]pero Tú me quieres y [Bm]me llamas 
[C]aquí estoy [Cm]Señor, Sí, aquí [D]estoy

    [G]Quiero oír tu [Bm]voz y alabarte,
    [Em]Y saber que no es mi cora[Bm]zón,
    [C]Y poner mi [D]vida en la [G]tuya, [Em] 
    [C]Y saber que [D]todo tuyo [G]es. [C] [D] 
    [G]Quiero oír tu [Bm]voz y alabarte,
    [Em]Y saber que no es mi cora[Bm]zón,
    [C]Y ponernos [D]todos en tus [G]manos, [Em] 
    [ral.][C]Y saber que [D]el mundo salvo [G]es.
    `
  },
  {
    id: 180,
    titulo: "BAUTÍZAME, SEÑOR",
    autor: "Anónimo",
    categoria: "reflexion, aspersion",
    tonoOriginal: "Em",
    letra: `
[Em]Bautízame Señor, con tu es[B7]píritu,
[Em]Bautízame Señor, con tu espíritu,
[Em]Bautízame Señor, con tu es[B7]píritu,
[Em]Bautízame, bau[E7]tízame, Señor.

[Am]Y déjame sen[Em]tir el fuego de tu Amor,
[B7]Aquí en mi cora[Em]zón, Se[E7]ñor. (x2)

[Em]Renuévame Señor, con tu es[B7]píritu...
[Em]Condúceme Señor, con tu es[B7]píritu...
[Em]Abrázame Señor, con tu es[B7]píritu...
`
  },
  {
    id: 181,
    titulo: "CANTO DE LA PASCUA",
    autor: "Anónimo",
    categoria: "pascua, reflexion",
    tonoOriginal: "D",
    letra: `
Intro: [D] [A] [G] [Em] [A] [D]

[G]Renace la esperanza, la vida surge,
[D]crece el amor, florece la alegria
[D]en medio del pueblo, [F#]pues Jesús resuci[Bm]tó.

[G]El dolor y la muerte
[D]y las injusticias no han de vencer,
[Bm]si Jesús resu[A]cita, otro ma[Bm]ñana,
[A]pueblo que[Bm]rido, [F#]tú vas a [Bm]ver.

[D]Un canto me llena el corazón
y despierta la alegría en todo mi pueblo,
la muerte no es la última palabra,
[Bm]y tampoco nuestra historia de sufrimiento,
[G] [D]Ha resucitado, [Em] [F#m] [Bm] [A]derroto a la [Bm]muerte. [A]

[D]El que fue crucificado,
[Bm]surgió triunfante como hombre nuevo,
[G] [A]y su buena no[D]ticia [Em]va a[F#m]cabar con los [Bm]miedos.
`
  },
  {
    id: 182,
    titulo: "CON ESTAS CENIZAS SEÑOR",
    autor: "Anónimo",
    categoria: "cuaresma,reflexion",
    tonoOriginal: "Dm",
    letra: `
[Dm]Con estas ceniza Se[Bb]ñor.
[Csus4]Renunciamos [Fsus4]al [F]pe[A7]cado.
[Dm]Con estas ceniza Se[Bb]ñor,
[Csus4]Nos acer[C7]camos [F]a ti.

[Bb]Arrepen[C/Bb]tidos Se[Am7]ñor, [Dm7]
[Bb]Cami[Gm7]namos [A7]hacia ti.

[Dm]Te piedad Je[Bb]sús,
[Csus4]Porque somos peca[F]dores.
[Dm]Desde lo hondo Se[Bb]ñor.
[Csus4]Hoy cla[C7]mamos tu per[F]dón.
`
  },
  {
    id: 183,
    titulo: "CREO EN UN SOLO DIOS",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "Em",
    letra: `
[Em]Creo en un solo [C]Dios, [G]Padre omnipo[D]tente,
[Em]creo en un solo [C]Dios, [G]creador de cielo y [D]tierra,
[Em]de todo lo invi[C]sible y [G]de todo lo vi[D]sible,
[Am]creo en [C]un solo [D]Dios, [Em]Amén.

[F#m]Creo en un solo [D]Dios, [A]Nuestro Señor Jesu[E]cristo,
[F#m]creo en un solo [D]Dios, [A]Hijo de Dios, uni[E]génito,
[F#m]nacido del [D]Padre [A]antes del [E]tiempo,
[Bm]creo en [D]un solo [E]Dios, [F#m]Amén.

[G#m]Creo en un solo [E]Dios, [B]Espíritu [F#]Santo,
[G#m]creo en un solo [E]Dios [B]vivo y vivifi[F#]cante,
[G#m]que procede del [E]Padre, [B]señor y dador de [F#]vida,
[C#m]Creo en [E]un solo [F#]Dios, [G#m]Amén.

[Fm]Creo en un solo [C#]Dios, [G#]Padre omnipo[D#]tente;
[Fm]creo en un solo [C#]Dios, [G#]Nuestro Señor Jesu[D#]cristo;
[Fm]creo en un solo [C#]Dios, [G#]Espíritu [D#]Santo;
[A#m]creo en [C#]un solo [D#]Dios, [Fm]Amén.
[Cm]Aa[C#]men [D#]Ameeeeee[G#]en.
`
  },
  {
    id: 184,
    titulo: "DAME UN NUEVO CORAZÓN",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "G",
    letra: `
[G]Dame un nuevo cora[Am7]zón, Se[D7]ñor,
[Bm7]Un corazón para ado[Em7]rarte,
[Am7]Un corazón para ser[D7]virte,
[G]Dame un nuevo cora[G7]zón.

[Cmaj7]Dulce, como la [D9]miel, [Bm7]Limpio como el cris[Em7]tal
[Am7]Un corazón Se[D7]ñor, como el [G]tuyo.
`
  },
  {
    id: 185,
    titulo: "DENLE AL SEÑOR SUS ALABANZAS",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "F",
    letra: `
[F]Den al Señor sus alabanzas,
[Dm]Denle poder honor y gloria,
[A#]A una voz [Gm]canten un himno al Se[C]ñor. (x2)

[F]En siete días Dios cre[Dm]ó al mundo,
[F]Adán pecó y per[Dm]dió el cielo,
[F]Jesús vino para re[Dm]dimirnos,
[A#]Murió en la cruz y nos sal[C]vó.

[F]Dios dijo a Moisés: [Dm]haz mi pueblo libre.
[F]Yo seré tu guía, [Dm]siempre sígueme.
[F]Salidos ya de Egipto [Dm]y el mar pasado
[A#]Cantaron y bailaron, se [C]llenaron de júbilo.
`
  },
  {
    id: 186,
    titulo: "DIOS ES FIEL",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "Dm",
    letra: `
[Dm]Dios es fiel. [Gm]Guarda siempre su ali[C7]anza [F]
[Bb]Libra al [Gm]pueblo de [Am]toda esclavi[Dm]tud
[D7]Su pa[Gm]labra re[C7]suena en los pro[F]fetas
[Gm]Recla[Dm]mando el [A7]bien y la vir[Dm]tud.

[Dm]Pueblo en marcha [Gm]por el de[C7]sierto ar[F]diente
[Bb]Horizon[Gm]tes de [Am]paz y liber[Dm]tad
[D7]Asam[Gm]blea de [C7]Dios eterna [F]fiesta
[Gm]Tierra [Dm]nueva pe[A7]renne here[Dm]dad.

[Dm]Si al mirar hacia [Gm]atrás [C7]somos ten[F]tados
[Bb]De vol[Gm]ver a E[Am]gipto seduc[Dm]tor
[D7]El es[Gm]píritu em[C7]puja con su [F]fuerza
[Gm]A avan[Dm]zar por la [A7]vía del a[Dm]mor.
`
  },
  {
    id: 187,
    titulo: "EL ENCUENTRO",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "Am",
    letra: `
[Am]Señor, per[A7]mite que te [Dm]hable hoy,
[G]Del dulce encuentro que me [C]cambio,
[F]La hora fe[Am]liz en que yo escuche,
[E7]Tus palabras de A[Am]mor.

[Am]Dime como [Dm]pudo suceder,
[G]Si en la voz que el sol [C]vierte al surgir,
[F]O en la clari[Am]dad que hace Vivir,
[E7]O fue en la noche al vol[Am]ver.

[Am]Fue cuando una [Dm]rosa deshoje,
[G]O en la fuente el [C]Agua que bebí,
[F]O fue en el ca[Am]lor del dulce hogar,
[E7]Donde por fin te mi[Am]ré.
`
  },
  {
    id: 188,
    titulo: "EL ESPÍRITU DE DIOS",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "D",
    letra: `
[D]El Espíritu de [G]Dios está en este lu[D]gar, [G]
[D]El Espíritu de [G]Dios se mueve en este lu[A]gar,
[D]Está aquí para con[G]solar, [D]está aquí para libe[G]rar,
[D]Está aquí para guiar,
[G]El Espíritu de [A]Dios está a[D]quí. (x2)

[D7]Muévete en [G]mi[A]í, Muévete en [D]mí, [Bm]
[G]Toca mi mente, mi [A]corazón,
[F#m]Llena mi vida de [Bm]tu Amor,
[G]Muévete en mi [A]Dios Espí[D]ritu muévete en [Bm]mi.
[G]Muévete en mi [A]Dios Espí[G]ritu [Gm]muévete en [D]mi.
`
  },
  
  {
    id: 189,
    titulo: "EL LEÓN DE LA TRIBU DE JUDÁ",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "Em",
    letra: `
[Em]El león de la tribu de Judá,
[Am]Jesús venció las cadenas y nos liberó,
[Em]Él es nuestra antorcha de victo[B7]ria.
[Em]Nuestra fortaleza en tiempos de flaqueza,
[Am]Una torre en tiempos de guerra,
[Em]¡Oh! La espe[B7]ranza de Is[Em]rael. [B7]

[Em]Resucito hoo, hoo,
[D]Resucito hoo ,hoo,
[C]Resucito hoo, hoo ale[B7]luya. (x2)

[Em]Venció la muerte con poder,
[D]Venció la muerte con poder,
[C]Venció la muerte con poder, se levan[B7]tó. (x2)

[Em]Huyen lo demonios cuando canta el pueblo,
[D]Huyen los demonios cuando cae el fuego,
[C]Huyen los demonios porque no soportan
[B7]La alabanza al Rey. (x2)

[Em]Al rey Yahvé 3 veces santo,
[D]Al rey Yahvé 3 veces santo,
[C]Vida y canto son solo para [B7]él. (x2)
`
  },
  {
    id: 190,
    titulo: "EL SEÑOR ES MI LUZ",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "G",
    letra: `
[G]El Señor es mi luz y mi salva[C]ción [G]
[Em]El Señor es la de[A]fensa de mi [D]vida.
[Bm]Si el Señor es mi [Em]luz, [C]¿a quién teme[G]ré?
[C]¿Quién me ha[D]rá tem[G]blar?

[C]Una cosa [D]pido al Se[G]ñor, [Em]
[Am]Habitar por [D7]siempre en su [G]casa
[C]Gozar de la dul[D]zura del Se[G]ñor [Em]
[C]Contem[Am]plando su [D7]rostro santo.

[C]No me es[D]condas tu [G]rostro Se[Em]ñor
[Am]Buscaré to[D7]do el día tu [G]rostro;
[C]Si mi padre y mi [D]madre me aban[G]donan [Em]
[C]El Se[Am]ñor me re[D7]cogerá.

[C]Oh Se[D]ñor en[G]séñame el ca[Em]mino
[Am]Guíame por la [D7]senda verda[G]dera
[C]Gozaré de la [D]dicha del Se[G]ñor [Em]
[C]En la [Am]tierra de la [D7]vida.
`
  },
  {
    id: 191,
    titulo: "EL SEÑOR ES MI PASTOR",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "D",
    letra: `
[D]El Señor es mi Pas[Bm]tor,
[G]La [E]vida ha dado por [A]mí.
[D]Yo su voz he de escu[Bm]char,
[G]Y su[A]yo por siempre se[D]ré.

[D]Yo Soy El Buen Pas[F#m]tor,
[G]Doy la [A]vida a mis ovejas,
[D]Por su nombre yo las [F#m]llamo,
[G]Y con gran A[E]mor me si[A]guen. [Dmaj7]

[D]Yo no soy el merce[F#m]nario,
[G]Que aban[A]dona a las ovejas,
[D]Cuando ve venir al [F#m]lobo,
[G]Que las [E]mata y las dis[A]persa.

[D]Mis ovejas mi voz [F#m]oyen,
[G]Y me [A]siguen por doquiera,
[D]Yo les doy la vida e[F#m]terna,
[G]Ellas [E]no ve[A]rán la muerte.
`
  },
  {
    id: 192,
    titulo: "EN JESÚS PUSE TODA MI ESPERANZA",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "G",
    letra: `
[G]En Jesús puse [Bm]toda [A#m]mi es[Am]peranza-aa-aa,
[D7]Él se incli[G]nó [G7]hacia [C]mí y es[D7]cucho mi cla[G]mo-o-[Em]or.
[C]Y es[D7]cucho mi cla[G]mor. [C] [D] [G]

[G]Me saco de la [Bm]fosa [A#m]fata-[Am]al,
[D7]Del fango cena[G]go[G7]so,
[C]Asentó mis pies [D7]sobre la [G]ro-o-[Em]ca,
[C]Mis pa[D7]sos conso[G]lido. [C] [D] [G]

[G]Puso en mi [Bm]boca un [A#m]canto [Am]nuevo,
[D7]Una alabanza a [G]nues[G7]tro Dios,
[C]Muchos ve[D7]rán y cre[G]e[Em]rán,
[C]Y en Je[D7]sús confia[G]rán. [C] [D] [G]

[G]En ti se [Bm]gocen y [A#m]se [Am]alegren,
[D7]Todos los [G]que te [G7]buscan,
[C]Repitan [D7]sin ce[G]sar: [Em]
[C]¡Qué [D7]grande es nues[G]tro Dios! [C] [D] [G]
`
  },
  {
    id: 193,
    titulo: "ESPÍRITU DE DIOS",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "Em",
    letra: `
[Em]Espíritu de Dios,
[D]Llena mi vida,
[C]Llena mi alma,
[B7]Llena mi ser.

[Em]Lléname, lléname,
[D]Con tu presencia, lléname,
[C]Lléname con tu poder, lléname,
[B7]Lléname con tu bondad.

[Em]Si Dios no vive en mí,
[D]Vivo sin rumbo,
[C]Vivo sin calma,
[B7]Vivo sin luz.
`
  },
  {
    id: 194,
    titulo: "GLORIA",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "Dm",
    letra: `
[Dm]Gloria, [Dm/C] [Bb]Gloo[A]ria,
[Dm]Gloria, [Dm/C] [Bb]Gloo[A]ria.

[Gm]A Jesús el Se[C]ñor,
[F]Al Cordero de [Dm]Dios.
[Gm]Al nombre sobre [A9]todo [Dm]nombre. [D7]
`
  },
  {
    id: 195,
    titulo: "HIMNO PASCUAL",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "Dm",
    letra: `
[Dm]Cristo Jesús el [C]cual existía en la [Am]forma de [Dm]Dios,
[Dm]No exigió tener la [G]gloria debida a su [C]divini[E7]dad. [Am]

Se anonado tomando la forma del siervo de Dios,
Y se asemejo a todos los hombres en su Condición.

[Dm]Haciéndose [Am]hombre se humi[E7]llo, [Am]
[Dm]Se hizo obe[Am]diente hasta mo[F]rir en la [E7]cruz. [Am]

Por eso Dios de modo admirable a Cristo exalto
Y le otorgo un nombre tan alto que a todo excedió.

Para que así el cosmos entero se centre en Jesús
Él es el Señor que a todos conduce al Padre: AMEN.
`
  },
  {
    id: 196,
    titulo: "HOY EN ORACIÓN",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "E",
    letra: `
[E]Hoy en ora[A]ción, quiero pregun[E]tar Señor,
[A]quiero escu[E]char tu voz, [A]tus palabras con a[B]mor.
[E]Ser como [A]eres tú, servi[E]dor de los demás,
[A]dime como en [E]qué lugar, [A]te hago [B]falta [E]más. [E7]

[A]Dime Se[B]ñor en que [G#m]te puedo ser[C#m]vir,
[A]déjame co[B]nocer tu volun[E]tad. [E7]
[A]Dime Se[B]ñor, en [G#m]ti yo quiero vi[C#m]vir,
[A]quiero de ti a[B]prender saber a[E]mar.

[E]Hoy quiero se[A]guir, tu ca[E]mino junto al mar,
[A]Tus pala[E]bras, tu ver[A]dad, ser imagen [B]de ti.
[E]Ser como [A]eres tú, servi[E]dor de los demás,
[A]Dime como en [E]qué lugar, [A]te hago [B]falta [E]más.
`
  },
  {
    id: 197,
    titulo: "JUNTO A LA CRUZ",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "Em",
    letra: `
[Em]Cuando el Se[Bm]ñor va a la [C]muerte,
[Am]Junto al Se[C]ñor [D7]estás [G]tú.
[Am]Lloran tus [Em]ojos de madre;
[C]Lloran mi[D]rando a la [Em]Cruz.

[Am]Pero [Em]tú, junto a la cruz,
[B7]Olvidas el do[Em7]lor,
[Am]Y nos [Em]das en tu mirar
[B7]La fuerza del a[Em]mor.

[Em]Virgen que [Bm]sufres y [C]lloras, junto a la [Am]Cruz
[C]Tu do[D7]lor; [G]dime si [Am]ves a los [Em]hombres,
[C]O sólo [D]ves al Se[Em]ñor.

[Em]Ves el do[Bm]lor de los [C]hombres, [Am]Hombres cla[C]vados en [D7]cruz; [G]
[Am]Hombres que [Em]miran al cielo; [C]Hombres se[D]dientos de [Em]luz.

[Em]Ves esta [Bm]tierra gas[C]tada, [Am]En una [C]lucha sin [D7]fin. [G]
[Am]Ves a los [Em]hombres que pasan, [C]Sin ilu[D]sión de vi[Em]vir.
`
  },
  {
    id: 198,
    titulo: "LA LLAMADA",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "D",
    letra: `
[D]Señor, algo nuevo sen[A]tí dentro de [Bm]mí, [F#m]
[G]Y pensé que [Em]yo era tu mo[A]rada,
[G]Cuando en ver[A]dad te cono[D]cí, [Bm]
[G]Pude [Em]ver que Tú me lla[A]mabas.

[D]A servirte a ti es[A]toy predestinado,
[Bm]Llegaré hasta [F#m]ti,
[G]Escucharé tu lla[Em]mada,
[A]Amaré hasta morir. (x2)

[D]Antes nada ve[A]ía pues ciego es[Bm]taba [F#m]
[G]Me inun[Em]dó la fuerza de tu a[A]mor,
[G]Seré fe[A]liz cumpliendo tus pre[D]ceptos, [Bm]
[G]Enseñaré al [Em]mundo el mensaje con ca[A]lor.

[D]Mi corazón no es [A]mío, sino del [Bm]mundo, [F#m]
[G]Lo ofre[Em]cí por Cristo ilusio[A]nado,
[G]El me com[A]pensa cada nuevo [D]día, [Bm]
[G]Está con[Em]migo en cualquier sitio en que es[A]té.

[D]Señor por ti ofre[A]ceré mi [Bm]vida, [F#m]
[G]Canta[Em]ré mi can[A]ción,
[G]Lleva[A]ré mi ale[D]gría [Bm]
[G]Al más o[Em]culto rin[A]cón. (x2)
`
  },
  {
    id: 199,
    titulo: "MISIONERO AMIGO",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "G",
    letra: `
[G]Un nuevo día, [D]un nuevo cami[Em]nar,
[C]Un nuevo sol que ilu[Am7]mina cada desper[D]tar,
[Em]Contigo hoy vuelvo a empe[C]zar,
[Am7]Cada paso que he de encon[D]trar.

[G]Aquí estas misio[Em]nero amigo,
[C]Caminando una vez [Am7]más,
[D]Al lado mío.
[G]Aquí en[B7]trego mi cora[Em]zón,
[C]Y otra vez en tus [D]manos Se[G]ñor. [D] (x2)

[G]No importa [D]cuán difícil [Em]es,
[C]El camino [Am7]que yo en Ti con[D]fío,
[Em]Misionero de Amor, me lla[C]mas Señor,
[Am7]Para entregar tu pala[D]bra Hoy.
`
  },
  {
    id: 200,
    titulo: "NADIE TE AMA COMO YO",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "C",
    letra: `
[C]Cuanto de espe[Em]rado este mo[Am]mento,
[F]Cuanto he espe[Dm]rado que estu[G]vieras así,
[C]Cuanto he espe[Em]rado que me ha[Am]blaras,
[F]Cuanto he espe[Dm]rado que vi[G]nieras a mí.

[C]Yo sé [Em]bien lo que has vi[Am]vido,
[F]Yo sé [Dm]bien lo que has llo[G]rado,
[C]Yo sé [Em]bien lo que has su[Am]frido,
[F]Pues de tu [Dm]lado, no me he [G]ido.

[C]Pues nadie te [G]ama como [Am]yo,
[F]Pues nadie te [Dm]ama como [G]yo,
[C]Mira la [G]cruz esa es mi más grande [Am]prueba,
[F]Nadie te [Dm]ama como [G]yo.

[C]Pues nadie te [G]ama como [Am]yo,
[F]Pues nadie te [Dm]ama como [G]yo,
[C]Mira la [G]cruz fue por ti, fue porque te [Am]amo,
[F]Pues nadie te [Dm]ama como [G]yo.

[C]Yo sé [Em]bien lo que me [Am]dices,
[F]Aunque a [Dm]veces no [G]hablas,
[C]Yo sé [Em]bien lo que tú [Am]sientes,
[F]Aunque [Dm]nunca lo com[G]partas.

[C]Yo a tu [Em]lado he cami[Am]nado,
[F]Junto a [Dm]ti yo siempre he [G]ido,
[C]Aun a [Em]veces te he car[Am]gado,
[F]Yo he sido [Dm]tu mejor a[G]migo.
`
  },
  {
    id: 201,
    titulo: "PERDÓN HO DIOS MIO",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "Em",
    letra: `
[Em]Perdón oh Dios [B7]mío, per[Em]dón e indul[D]gencia,
[G]Perdón y cle[D]mencia, Per[Em]dón y pie[B7]dad. [Em]

[Em]Peque ya mi [B7]alma, su [Em]culpa con[D]fiesa,
[G]Mil veces me [D]pesa de [Em]tanta mal[B7]dad. [Em]

[Em]Mil veces me [B7]pesa, de [Em]haber obsti[D]nado,
[G]Tu pecho ras[D]gado ¡Oh [Em]suma bon[B7]dad! [Em]

[Em]Yo fui quien del [B7]duro ma[Em]dero incle[D]mente,
[G]Te puso pen[D]diente con [Em]vil impie[B7]dad. [Em]

[Em]Por mí en el tor[B7]mento, tu [Em]sangre ver[D]tiste,
[G]Y prenda me [D]diste de a[Em]mor y humil[B7]dad. [Em]

[Em]Y yo en recom[B7]pensa, pe[Em]cado a pe[D]cado,
[G]La copa he lle[D]nado de [Em]ini[B7]quidad. [Em]

[Em]Mas ya arrepen[B7]tido, te [Em]busco llo[D]roso,
[G]¡Oh padre a[D]moroso! ¡Oh [Em]Dios de bon[B7]dad! [Em]
`
  },
  {
    id: 202,
    titulo: "PERDONA A TU PUEBLO",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "Em",
    letra: `
[Em]Perdona a tu pueblo Se[B7]ñor,
[Em]Perdona a tu [Am]pueblo [B7]Perdónale Se[Em]ñor.

[Em]No estés eterna[C]mente eno[D]ja-[G]ado,
[D]No estés eterna[Em]mente enojado,
[B7]Perdónale Se[Em]ñor.

[Em]Por tus profundas [C]llagas [D]cru[G]eles
[D]Por tus sali[Em]vas y por tus hieles
[B7]Perdónale Se[Em]ñor

[Em]Por tus heridas de [C]pies y [D]ma[G]nos
[D]Por los azotes [Em]tan inhumanos
[B7]Perdónale Se[Em]ñor

[Em]Por los tres clavos que [C]te cla[D]va[G]ron
[D]Por las es[Em]pinas que te punzaron
[B7]Perdónale Se[Em]ñor

[Em]Por las tres horas de [C]ago[D]ní[G]a
[D]En que por [Em]madre diste a María
[B7]Perdónale Se[Em]ñor

[Em]Por la abertura de [C]tu cos[D]ta[G]do
[D]No estés eter[Em]namente enojado
[B7]Perdónale Se[Em]ñor
`
  },
  {
    id: 203,
    titulo: "PESCADOR DE HOMBRES",
    autor: "Cesáreo Gabaráin",
    categoria: "reflexion",
    tonoOriginal: "D",
    letra: `
[D]Tú [A7]has venido a la [D]orilla, [D7]
[G]No has buscado ni a [A]sabios ni a ricos,
[D]Tan solo quieres [A]que yo te [D]siga. [D7]

[G]Señor, [A] me has mirado a los [F#m]ojos, [Bm]
[G]Sonriendo [A]has dicho mí [D]nombre. [D7]
[G]En la arena [A]he dejado mi [F#m]barca, [Bm]
[G]Junto a [A]ti buscaré otro [D]mar.

[D]Tú sabes bien lo que [A7]tengo, [D] [D7]
[G]En mi barca no hay [A]oro ni plata,
[D]Tan solo [A]redes y mi tra[D]bajo. [D7]

[D]Tú necesitas mis [A7]manos, [D] [D7]
[G]Mi cansancio que [A]otros descanse,
[D]Amor que [A]quiera seguir a[D]mando. [D7]

[D]Tu pescador de otros [A7]mares, [D] [D7]
[G]Ansia eterna de [A]almas que esperan,
[D]Amigo [A]bueno que así me [D]llamas. [D7]
`
  },
  {
    id: 204,
    titulo: "¿QUÉ SERÍA DE MÍ?",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "G",
    letra: `
[G]¿Qué sería de [D]mí, si no me [C]hubieras alcanzado?
[G]¿Dónde esta[D]ría hoy, si no me [C]hubieras perdonado?

[G]Tendría un va[D]ció en mi cora[Em]zón, vagaría sin [C]rumbo, sin direc[D]ción.
[G]Si no fuera [D]por tu gracia y por tu [C]Amor. (x2)

[Am]Sería como un [Em]pájaro herido, [D]que se muere en el suelo,
[Am]sería como un [Em]siervo que brama, [D]por agua en un desierto.

[C]Si no fuera [D]por tu gracia y por tu [Em]Amor.
[C]Si no fuera [D]por tu gracia y por tu [G]Amor.
`
  },
  {
    id: 205,
    titulo: "QUE VIVA MI CRISTO",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "E",
    letra: `
[E]Que viva mi Cristo, que viva mi [B7]rey
[A]¡Que im[E]pere doquiera triun[B7]fante su [E]ley!
[B7]¡Viva Cristo [E]rey! ¡Viva Cristo [B7]rey!

[E]Mexicanos un [A]padre tenemos,
[B7]Que nos dio de la [E]patria la unión,
[E7]A ese padre go[A]zoso can[Am]temos,
[E]Empu[B7]ñando con fe su pen[E]dón.

[E]El formó con voz [A]hacedora,
[B7]cuanto existe de[E]bajo del sol,
[E7]De la inercia y la [A]nada inco[Am]lora,
[E]formó [B7]luz en candente arre[E]bol.
`
  },
  {
    id: 206,
    titulo: "QUISIERA SER TU CRUZ",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "G",
    letra: `
[G]Quisiera ser [Bm]puente de amor,
[Em]Donde tú y el [C]hombre se encontraran,
[D]Y darlo todo [G]hasta la cruz,
[G7]Para que el mundo en[C]tienda [D]cuanto lo [C]amas.[G]

[G]Quisiera ser [Bm]fuente de paz,
[Em]Donde aquél que [C]busca te encontrara,
[D]Tomar del [G]hombre su dolor,
[G7]Para que por tu a[C]mor se [D]vuelva [C]gracia.[G]

[C]Quisiera [D]ser tu [Bm]cruz, [Em]quisiera ser tu cruz,
[C]Donde tu cora[D]zón ar[G]diera, [F]y se abriera para [D]amar,
[Em]Donde [F]sólo quede de [C]mí tu [D]volun[C]taaad.[G]
`
  },
  {
    id: 207,
    titulo: "RENUÉVAME",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "D",
    letra: `
[D]Renuéva[G]me, [A]Señor Je[D]sús,
[G]Ya no [Em]quiero ser i[A]gual.
[D]Renuéva[G]me, [A]Señor Je[D]sús,
[G]Pon en [Em]mí tu cora[A]zón.

[D]Porque todo lo que [A]hay dentro de [Bm]mí, [F#m]
[G]Necesita ser [Em]cambiado Se[A]ñor.
[D]Porque todo lo que [A]hay dentro de [Bm]mí, [F#m]
[G]Corazón, necesita [A]más de [D]ti.
`
  },
  {
    id: 208,
    titulo: "RESUCITÓ",
    autor: "Anónimo",
    categoria: "salida",
    tonoOriginal: "Em",
    letra: `
[Em]Resucitó, [D]Resucitó, [C]Resucitó, Ale[B7]luya,
[Em]Aleluya, [D]Aleluya, [C]Aleluya, re[B7]sucitó.

[Em]La muerte. ¿Don[D]de está la muerte?
[C]¿Dónde está mi muerte? [B7]¿Dónde es su victoria?

[Em]Gracias, sean [D]dadas al Padre,
[C]Que nos pasó a su reino, [B7]donde se vive de Amor.

[Em]Alegría, ale[D]gría hermanos,
[C]Que si hoy nos queremos, [B7]Es que Él resucitó.
`
  },
  {
    id: 209,
    titulo: "SACERDOTE PARA SIEMPRE",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "G",
    letra: `
[G]Porque eres la ra[D]zón de mi vida
[C]MI fuerza con[D]suelo y ale[G]gría
[C]Porque eres el a[G]mor que yo soñé
[Em]Y sin Ti estoy per[D]dido y nada soy.

[G]Aquí estoy Se[D]ñor toma mi vida
[C]Sacerdote para [D]siempre quiero [G]ser
[D]Aquí estoy Señor toma mi vida
[C]Sacerdote para [D]siempre [Em]quiero [A]ser. [C] [D]

[G]Al postrarme en tu pre[D]sencia estoy temblando
[C]Consiente de mi [D]nada y peque[G]ñez
[D]Y al levantarme con tu Es[D]píritu Divino
[C]Tu siervo consa[D]grado [Em]yo se[D]ré.
`
  },
  {
    id: 210,
    titulo: "SALMO (CANTEMOS AL SEÑOR)",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "D",
    letra: `
[D]Cantemos al se[F#m]ñor, [G]Sublime es su vic[A]toria.
[Gm]Cantad a Ya[C]vé, pues se cu[F]brió de glo[Dm]ria,
[Gm]Los carros y ca[A]ballos arro[D]jó en el [D7]mar.

[Gm]Mi forta[C]leza y mi [F]canto es Ya[Dm]ve,
[Gm]Él es mi salva[A]ción.
[Gm]Él es mi [C]Dios, y yo [F]le alaba[Dm]ré,
[Gm]Es el Dios de mis [A]padres; [D]yo le can[D7]taré.

[Gm]El señor es un gue[C]rrero, su [F]nombre es Ya[Dm]ve,
[Gm]Él es nuestra salva[A]ción.
[Gm]Los carros y ji[C]netes del fara[F]ón de E[Dm]gipto,
[Gm]La flor de sus gue[A]rreros arro[D]jó en el [D7]mar.
`
  },
  {
    id: 211,
    titulo: "SI CONOCIERAS EL DON DE DIOS",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "C",
    letra: `
[C]Si conocieras como te amo,
[Em]Si conocieras como te amo,
[F]Dejarías de vi[G]vir sin Amor.

[C]Si conocieras como te amo,
[Em]Si conocieras como te amo,
[F]Dejarías de men[G]digar cualquier amor.

[Am]Si conocieras como te [Em]amo, como te [F]amo,
[G]Serias más fe[C]liz.

[C]Si conocieras como te busco, (x2)
[Em]Dejarías que te alcanza mi voz.
[F]Si conocieras como te busco, (x2)
[G]Dejarías que te hablara al corazón.
`
  },
  {
    id: 212,
    titulo: "SI YO NO TENGO AMOR",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "E",
    letra: `
[E]Si yo no tengo A[C#m]mor, [F#m]yo [F#7]nada soy Se[B]ñor,
[E]Si yo no tengo A[C#m]mor, [F#m]yo [B7]nada soy Se[E]ñor.

[E]El Amor es com[G#m]prensivo, [A]el Amor es servi[E]cial,
[A]El Amor no tiene [F#m]envidia, [A]el Amor no busca el [B7]mal.

[E]El Amor nunca se i[G#m]rrita, [A]el Amor no es descor[E]tés,
[A]El Amor no es ego[F#m]ísta, [A]el Amor nunca es do[B7]blez.
`
  },
  {
    id: 213,
    titulo: "SUMÉRGEME",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "A",
    letra: `
[A]Cansado del camino, [C#m]Sediento de ti.
[D]Un desierto he cruzado, [Bm]sin fuerzas he que[E]dado, vengo a ti.
[A]Luché como un soldado, [C#m]Y a veces sufrí,
[D]Y aunque la lucha he ganado, [Bm]mi armadura he desgas[E]tado, Vengo a ti.

[A]Sumérgeme, [C#m]en el río de tu Espíritu,
[D]Necesito refrescar, [Bm]esté seco corazón, [E]sediento de ti.
`
  },
  {
    id: 214,
    titulo: "TAN CERCA DE MÍ",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "D",
    letra: `
[D]Tan [A]cerca de [D]mí, [Am] [D7]
[G]Tan [E]cerca de [A]mí,
[D]Que hasta le [D7]puedo to[G]car, [Gm]
[D]Jesús [A]está a[D]quí.

[D]Míralo a tu [A]lado por la [D]calle, [D7]
[G]Caminando en[A]tre la multi[D]tud,
[G]Muchos [A]ciegos van [F#m]sin quererlo [Bm]ver,
[Em]Llenos de ce[E]guera espiri[A]tual.

[D]Le hablare muy [A]quedo al o[D]ído, [D7]
[G]Le diré las [A]cosas que hay en [D]mí,
[G]Y que [A]solo a [F#m]Él, le intere[Bm]saran,
[Em]Él es un a[E]migo para [A]mí.
`
  },
  {
    id: 215,
    titulo: "TESTIGO",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "D",
    letra: `
[D]Un día como [A]hoy que me lla[Bm]maste,
[G]A seguir cami[E]nando tras de [A]ti,
[G]Y al mirarte [A]yo a los ojos, [F#m]decidí de[Bm]cirte si,
[G]Y en mi corazón, [E]una paz pu[A]siste Tú.

[D]Buscando por las [A]calles y ve[Bm]redas,
[G]A esa gente que una [E]vez rezo con[A]migo,
[G]Y al gri[A]tarles se olvidaron, [F#m]se olvida[Bm]ron de ti,
[G]Se olvidaron de [E]ese Cristo que vi[A]ví.

[G]Yo quiero [A]ser testigo [D]del Amor de [Bm]Dios,
[G]Buscar con[A]tigo la ver[D]dad, [D7]
[G]Ser en el [A]mundo [F#m]instrumento de tu [Bm]paz,
[G]Y hacia [A]ti Señor, cami[D]nar.
`
  },
  {
    id: 216,
    titulo: "TRANSFÓRMAME",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "D",
    letra: `
[D]Señor tu gusano sueña ser mari[Em]posa,
[A7]Ya no quiero arras[D]trarme, [A7]tengo ansias de vo[D]lar.
[D]Busco tu rostro, ardo en de[Em]seos de contem[A7]plarte,
Suelta ya mis ca[D]denas, [A7]hazme sentir tú Ver[D]dad.

[Em]Transfórma[A7]me, y reina en mi [D]vida,
[Em]Mi Dios y Se[A7]ñor conviérteme a [D]ti,
[Em]Transfórma[A7]me y quema mis [D]alas,
[Em]Que ya no viva [A7]yo, que tú vivas en [D]mí.
`
  },
  {
    id: 217,
    titulo: "TÚ ESTÁS AQUÍ",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "E",
    letra: `
[E]Aunque mis ojos, [C#m]no te puedan ver,
[A]Te puedo sentir, [E]sé que estas aquí.
[E]Aunque mis manos, [C#m]no pueden tocar,
[A]Tu rostro Señor, [E]sé que estas a[B]quí.

[C#m]Mi cora[A]zón, puede sentir Tú pre[E]sencia,
[E]Tú estás a[B]quí, Tú estás aquí.
[C#m]Puedo sen[A]tir tu majes[E]tad,
[E]Tú estás a[B]quí, Tú estás aquí.
`
  },
  {
    id: 218,
    titulo: "TU ME TRANSFORMAS",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "D",
    letra: `
[D]Si no soy ca[A]paz de dar mi vida por amor,
[Bm]si no puedo yo entre[F#m]garme todo a los demás,
[G]si al abrir los [D]labios no pre[A]dico la ver[Bm]dad,
[G]soy hoja en el [A]viento nada soy.

[D]Si no puedo a[A]mar más que a mi propio corazón,
[Bm]si no entiendo [A]pleno la palabra caridad,
[D]si cuando he ca[A]ído no hago nada por cambiar,
[Bm]soy grano de a[A]rena nada soy.

[D]Tú me trans[A]formas señor, a cada instante,
[Bm]por ti yo puedo cam[A]biar, para salvarme,
[D]dame tu [A]mano y veraz, dame esperanza,
[Bm]como la lluvia a la [A]flor, tú me haces falta.

[G]soy otro [A]yo, ya lo ves, [D]tengo un nuevo [A]cora[Bm]zón,
[G]tú tienes [A]tantas formas de a[D]mar.
`
  },
  {
    id: 219,
    titulo: "TU REINARÁS",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "E",
    letra: `
[E]Tú reinaras este el grito,
[A]Que ardiente ex[B7]hala nuestra fe,
[E]Tu reinaras oh Rey Bendito,
[F#]Pues tú dijiste rei[B]naré.

[E]Reine Jesús por [B7]siempre,
[E]Reine su corazón en nuestra patria,
[E7]En [A]nuestro suelo es [E]de ma[F#]ría la na[B7]ción.
[A]En nuestra patria en [E]nuestro suelo,
[B7]Es de maría la na[E]ción.

[E]¡Tú reinarás! Dulce es[A]peranza [B7]
[E]que al alma llena de pla[F#]cer. [B]
[E]Habrá por fin paz y bo[A]nanza, [B7]
[E]felicidad habrá por do[F#]quier. [B]

[E]¡Tú reinarás! Dicho[A]sa era, [B7]
[E]dichoso pueblo con tal [F#]Rey; [B]
[E]será tu cruz nuestra ban[A]dera, [B7]
[E]Tu amor será la nuestra [F#]ley. [B]

[E]¡Tú reinarás! Toda la [A]vida [B7]
[E]trabajaremos con gran [F#]fe [B]
[E]en realizar y ver cum[A]plida [B7]
[E]la gran promesa: ¡Reina[F#]ré! [B]
`
  },
  {
    id: 220,
    titulo: "TU SEÑOR",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "G",
    letra: `
[G]Tú Señor, [D]sabes bien
[C]Lo que yo tengo guar[D]dado en mi inte[G]rior, [G7]
[C]Todo aquello que me a[D]turde,
[G]Lo que no puedo cam[Em]biar,
[C]Esas cosas que no [D]dejan cami[G]nar.

[G]Tú Señor, [D]hasta hoy
[C]Me has seguido en cada [D]paso de mi [G]vida [G7]
[C]Y me has dado grandes [D]cosas
[G]Que no puedo olvi[Em]dar,
[C]Los momentos que en mi [D]vida queda[G]rán.

[G7]Por eso, [C]ven Señor Je[D]sús,
[G]Que te quiero hoy de[Em]cir
[C]Que mis ojos se han a[D]bierto
[G]Y que sin ti no puedo [G7]más seguir.
[C]Ven Señor Je[D]sús,
[G]Que ahora tengo el cora[Em]zón
[C]En un grito que te [D]pide tu a[G]mor.
`
  },
  {
    id: 221,
    titulo: "TÚ Y YO",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "D",
    letra: `
[D]Cuanto he querido yo a[F#m]marte Jesús,
[G]Como me [A]amas tú a mí.
[D]En todo momento he que[F#m]rido Jesús,
[G]Que me sonrías y me [A]hagas muy feliz.

[G]Tú y Yo,
[A]Siempre a[F#m]delante, hasta el final,
[Bm]Tú y yo sin separarnos,
[G]Cada momento pienso en [A]ti un poco más,
[D]Un poco más.

[D]Hoy volveré a recor[F#m]darte Jesús,
[G]Te sentiré [A]dentro de mí, te cantare.
[D]Porque tú me has transfor[F#m]mado Jesús,
[G]Me haz ayudado a perdo[A]nar a los demás.
`
  },
  {
    id: 222,
    titulo: "UN DÍA CAMINABA",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "C",
    letra: `
[C]Un día cami[Am]naba, muy triste por a[Dm]hí Señor,
[G7]Mi corazón gritaba, ya no quiero vivir así.
[C]Sintiendo mil tris[Am]tezas, oí hablar de [Dm]ti Jesús,
[G7]Decían que me amabas, que habías muerto por mí en la cruz.

[C]Lloré en ese mo[Am]mento, al recordar el [Dm]tiempo,
[G7]Ese tiempo que perdí sin saber de ti.

[C]Y aquí está mi [Am]vida y mi voz, para can[Dm]tar,
[G7]Para alabarte Señor,
[C]Y aquí están mis [Am]ansias de amar,
[Dm]De vivir y de perdo[G7]nar.
`
  },
  {
    id: 223,
    titulo: "UNA ALIANZA DE AMOR",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "E",
    letra: `
[E]Una alianza los dos,
[B]Una alianza de amor,
[C#m]Una alianza de fe y de es[A]peran[B]za,
[E]Una alianza, Señor,
[B]Hoy queremos en Ti empe[C#m]zar,
[A]Y ya [B]nunca termi[E]nar. [E7]

[A]Es la res[B]puesta de un cora[G#m]zón, [C#m]
[A]Que has for[B]mado Tú,
[E]Que has u[E7]nido Tú,
[A]Es vida [B]nueva que nace [G#m]hoy, [C#m]
[A]Y que sólo en Ti se puede vi[B7]vir.

[E]Una alianza los dos, [B]una alianza de amor,
[C#m]una alianza de fe y de es[A]peran[B]za,
[E]Una alianza, Señor, [B]hoy queremos en Ti empe[C#m]zar,
[A]Y ya [B]nunca termi[E]nar. [E7]

[A]Es darte [B]gracias porque tu a[G#m]mor, [C#m]
[A]Hoy po[B]demos ver,
[E]En no[E7]sotros dos,
[A]Ver el fu[B]turo con ilu[G#m]sión, [C#m]
[A]Y saber que nunca nos falla[B7]rás.
`
  },
  {
    id: 224,
    titulo: "UNA VEZ MÁS REZARÉ",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "C",
    letra: `
[C]Una vez más reza[G]ré, de rodillas me pon[F]dré,
[G]Puede ser que una vez [C]más Él me per[G]done.
[C]Le diré que soy hu[G]mano, que pequé, que lucho en [F]vano,
[G]Puede ser que una vez [C]más Él me perdone.

[C]Para un [G]Dios que cono[A]ció, la tenta[Em]ción,
[F]del amigo la trai[Dm]ción, yo no [G]dudo me perdones Dios Amigo. (x2)

[C]Yo vi Su[G]frir a mi her[F]mano, y no le ten[G]dí la mano,
[G]Puede ser que una vez [C]más Él me per[G]done.
[C]Lo vi solo y desahu[G]ciado, y yo de [F]brazos cruzados,
[G]Puede ser que una vez [C]más Él me per[G]done.
`
  },
  {
    id: 225,
    titulo: "VASO NUEVO",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "D",
    letra: `
[D]Gracias quiero darte, [G]por a[A]marme,
[G]Gracias quiero [Gm]darte, [D]Yo a ti Señor.
[D]Hoy soy fe[D7]liz, [G]porque te cono[Gm]cí,
[D]Gracias por a[A]marme a mí tam[D]bién.

[D]Yo quiero [D7]ser, [Em]Señor amado, como el [G]barro,
[A]En las [D]manos del alfa[D7]rero
[G]Toma mi [Gm]vida, y [D]hazla de nuevo,
[A7]Yo quiero ser, yo quiero ser, [D]un vaso nuevo.

[D]Te cono[G]cí y te a[A]me-e,
[G]Te pedí per[Gm]dón y me escu[D]chaste.
[D7]Hoy soy fe[G]liz, porque te cono[Gm]cí,
[D]Gracias por a[A7]marme a mí tam[D]bién.
`
  },
  {
    id: 226,
    titulo: "VEN PRONTO SEÑOR",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "G",
    letra: `
[G]Que los cielos [D7]lluevan al [G]justo,
[Em]Que la tierra [G7]brote al salva[C]dor, [E7]
[Am]Que nos ilu[D]mine el sol de la jus[Em]ticia, [G]
[D]¡Ven [D7]pronto Se[G]ñor!

[G7]¡Oh Señor [C]Pastor de la [G]casa de Isr[A7]ael,
[D7]Ven a resca[Em]tarnos por el po[Bm]der [A7]¡De tu [D]Brazo! [D7]

[G7]¡Oh sabi[C]duría, sa[G]lida de la [A7]boca del [D]Padre,
[D7]¡Ven a en[Em]señarnos el ca[Bm]mino de sa[A7]lud! [D] [D7]
`
  },
  {
    id: 227,
    titulo: "VEN SALVADOR",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "G",
    letra: `
[G]Ven salvador, ven [Em]sin tar[C]dar, [D]
[D7]Danos tu [G]gracia y tu paz.
[G]Ven salvador, ven [Em]sin tar[C]dar, [D]
[D7]Danos tu [Em]fuerza y verdad.

[Em]Nos diste tu palabra, [B]es firme nues[B7]tra es[Em]peera,
[G]Iremos tras tus huellas, [D]sabemos que ven[Em]drás,
[B]Ven, [B7]ven Señor Je[Em]sús. [D7]

[Em]Los hombres de mi pueblo, [B]Esperan que [B7]tú ven[Em]gas,
[G]Que se abran horizontes, [D]Por donde cami[Em]nar:
[B]Ven, [B7]ven Señor Je[Em]sús.
`
  },
  {
    id: 228,
    titulo: "VEN SEÑOR JESÚS",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "C",
    letra: `
[C]Ven Señor Jesús [G]porque sin ti,
[Am]Ya no hay pai[G]saje, ven Señor Je[F]sús,
[Dm]Porque sin ti no hay melo[G]día.

[C]Ven Señor Jesús [G]porque sin ti,
[Am]No encuentro [G]paz, nada, [F]sin ti ya mis [Dm]ojos no [G]brillan.

[Am]La vida es [Em]poca cosa sin [F]ti, [C]sin ti, sin [Dm]ti, sin ti,
[G]La vida es poca [C]cosa. [G] [Am]

[G]Ven Señor Je[F]sús, ven pronto a mi [Dm]vida, [G]
[G7]Ven pronto Se[C]ñor, ven [G]pronto, [Am]
[G]Porque sin [F]ti, ya no quiero la [Dm]vida, [G]
[G7]Ya no Canto con [C]alma, ya mis [G]manos no [Am]sirven,
[G]Ya no escucho la[F]tidos, ya no a[Dm]brazo con fuerza,
[G7]mi corazón no se en[C]sancha, mi [G]sonrisa no es [Am]plena. [G] [F] [Dm] [G]

[G7]Y todo sin [C]ti, nada [G]vale la [Am]pena,
[G]Porque sin [F]ti, ya no me [Dm]llena nada [G]
[G7]Porque sin [C]ti, todo [E]suena va[Am]cíiio [G] [F] [Dm] [G]
[C]Sin ti, todo me deja tris[Am]teza.

[C]Porque sin ti ya no re[G]spiro hondo,
[Am]Porque sin ti [G]todo me cansa,
[F]Porque sin ti me falta [Dm]todo y me [G]sobra, todo, todo sin ti, sin ti...

[G]Ven Señor Je[F]sús, ven pronto a mi [Dm]vida, [G]
[G7]Ven pronto Se[C]ñor, ven [G]pronto, [Am]
[G]Porque sin [F]ti no me importa mi [Dm]hermano,
[G]No me importa el que [G7]sufre, porque sin [C]ti,
Mi corazón es de [G]piedra, a [Am]quien todo re[G]sbala,
acostum[F]brada a los pobres, acomo[Dm]dada en su casa,
sin ju[G]garse la vida, sin gas[G7]tarla por nada.
`
  },
  {
    id: 229,
    titulo: "YO TE BUSCO",
    autor: "Anónimo",
    categoria: "reflexion",
    tonoOriginal: "D",
    letra: `
[D]Yo te [G]busco, [D]yo te [G]busco, con [D]fuego en mi cora[G]zón.
[D]Yo te [G]busco, [D]yo te [G]busco, re[D]cibe mi adora[G]ción.

[A]Te an[G]helo, te nece[Bm]sito, [A]te a[G]mo,
[Em]Más que a mi [D]ser.
`
  },
  {
    id: 401,
    titulo: "Quien pierde su vida",
    autor: "Hermana Glenda",
    categoria: "comunion, reflexion",
    tonoOriginal: "D",
    letra: `
Intro:
Intro
e|-------5--------------3---------------|
B|-7--7-5--3--3---7--------7-5-3-3---3--|
G|--------------6---4--4-----------6----|
D|--------------------------------------|
A|--------------------------------------|
E|--------------------------------------|

Quien [D]pierde su [A]vida por [Bm]mí,
La en[F#m]contra[G]rá,
La encontra[A]rá, La encontra[D]rá.

Quien [D]deja su [A]padre por [Bm]mí,
su [F#m]madre por [G]mí,
me encontra[A]rá, me encontra[D]rá.

No [A]tengas [Bm]miedo, no [F#m]tengas [G]miedo
yo estoy [A]aquí, yo estoy [D]aquí.

Quién [D]deja su [A]tierra por [Bm]mí,
sus [F#m]bienes por [G]mí,
sus hijos por [A]mí la encontra[D]rá.

No t[A]engas [Bm]miedo, 
[F#m]yo [G]conozco a quienes ele[A]gí,
a quienes ele[D]gí.

Quien [D]pierde su [A]vida por [Bm]mí,
La en[F#m]contra[G]rá,
La encontra[A]rá, La encontra[D]rá.
`
  },
  {
  id: 403, 
  titulo: "A Ti siempre iré",
  autor: "Verónica Sanfilippo",
  tonoOriginal: "C (capo2)",
  categoria: "reflexion, adoracion",
  letra: `
[C]Hoy quiero elevar esta ora[Am]ción
para mi [F]padre, para mi [G]Dios.

Con [C]ella quiero pedirte un nuevo cora[Am]zón.
Que pueda [F]verte y escuchar tu [G]voz.

[Am](Quiero abrirme al misterio de tu amor.
Sentir tu pre[F]sencia en mi corazón.
Que reveles tu [C]gloria y majestad en mi [G]alma.
Dame la [Am]gracia de tu pequeñez
para bus[F]carte y poderte ver
y en ti encon[C]trar mi paz,
en ti des[G]cansar mi corazón. (x2)

A ti siempre [Am]iré, contigo [F]me quedaré
tengo la cer[C]teza de que me amas
en ti pongo [G]mi confianza.
A ti siempre [Am]iré. [F] [C] [G] [Am]`
},

    // --- SECCIÓN: CANTOS DE Adoración ---
     {
    id: 337,
    titulo: "AL CONTEMPLARTE EN LA CRUZ",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "F",
    letra: `
Intro: [Dm] [Bb] [F] [C]

[F]Siendo Dios [C]Fuiste tan humilde
[Gm]Hombre tu te hiciste [C]Traicionado y rechazado
[F]Siendo Dios [C]Tomaste mi lugar
[Gm]Cargaste en tus hombros [C]mis heridas y pecados

[Gm]Fue por mi, [Dm]Te entregaste
[Bb]Para darme [Gm]vida nueva [C]Y rescatarme

[F]Al contemplarte en la Cruz [C]Al contemplar tanto amor
[Gm]No puedo más que Adorarte [Am]Y mi vida [Bb]entre[C]garte
[F]Al contemplarte en la Cruz [C]Al contemplar tanto amor
[Gm]No puedo más que Adorarte [Am]Y mi vida [Bb]entre[C]garte, [F]Jesús.

[Dm] [Bb] [F] [C] 

[F]Siendo Dios [C]Tomaste mi lugar
[Gm]Cargaste en tus hombros [C]mis heridas y pecados

[Gm]Fue por mi [Dm]Te entregaste
[Bb]Para darme [Gm]vida nueva [C]Y rescatarme.

[F]Al contemplarte en la Cruz 
[C]Al contemplar tanto amor
[Gm]No puedo más que Adorarte 
[Am]Y mi vida [Bb]entre[C]garte (2x)

(suave/forte) 
[Bb/D] [C/E] [F]
[F]Al contemplarte en la Cruz [C]Al contemplar tanto amor
[Gm]No puedo más que Adorarte [Am]Y mi vida [Bb]entre[C]garte
[F]Al contemplarte en la Cruz [C]Al contemplar tanto amor
[Gm]No puedo más que Adorarte [Am]Y mi vida [Bb]entre[C]garte, [F]Jesús.

[F] [Bb] [F] [C] [F]
`
  },
  {
  id: 338,
  titulo: "ANÍMATE",
  autor: "Verónica Sanfilippo",
  categoria: "adoracion",
  tonoOriginal: "Am (capo 1)",
  letra: `
[Am]Ya confe[G]sé mi fe ante [C]ti,
[Am]Hoy me re[G]velaste el ca[C]mino que ele[F]gí.
[Am]Que es renun[G]ciar a todo [C]lo que un día fui,
[Am]Cargar mi [G]cruz y segui[C]rte hasta el [F]fin.

[Am]Y en esta [G]vida junto a [C]ti,
[Am]Me en[G]señas que no [C]solo se trata de [F]mi.
[Am]Me invitas [G]a que abra el [C]corazón,
[Am]Para mir[G]ar al otro y [C]ver en su inte[F]rior.

Lo que lo hace [Am]sufrir,
Lo que hiere su [F]sentir,
Lo que le quita la [C]paz,
Lo que no puede car[G]gar.

Y tú me dices a[Am]ní[G]ma[C]te,
A sal[F]ir de ti, [G]a morir a tí.
Ohh a[Am]ní[G]ma[C]te,
a car[F]gar tu cruz,
Ven y [G]sígueme,
Oh a[Am]ní[G]ma[C]te,
A perde[F]rte en mí,
una y [G]otra vez.
Oh a[Am]ní[G]ma[C]te,
a que tu [F]vida sea res[G]puesta de amor.[Am][G][C][F][G] 

Y con tu gracia yo me a[Am]ni[G]ma[C]ré,
A sa[F]lir de mí, [G]de morir a mi.
Yo me a[Am]ni[G]ma[C]ré,
Cargar[F]é mi cruz [G]y te seguiré.
Yo me a[Am]ni[G]ma[C]ré,
a perde[F]rme en ti, Una y [G]otra vez.
Yo me a[Am]ni[G]ma[C]ré, 
a que mi [F]vida sea respu[G]esta de amor.[Am][G][C][F][G] 

Yo [Am]quiero que mi [F]vida sea resp[G]uesta de amor.[Am][G][C][F][G] [Am] 
`
},
  {
  id: 339,
  titulo: "APÓSTOL DE TU LUZ",
  autor: "Anónimo",
  categoria: "adoracion",
  tonoOriginal: "C (capo 1)",
  letra: `(capo 1)
Intro: [C] [F] [G] [(x2)]

[C]Sentí muy dentro la[F]tir mi cora[G]zón
[C]mire tu rostro y [F]luego oí tu voz y te creí [Dm] 
creí en tu forma de [G]amar y en tu forma de [C]vivir [F] [G] 

[C]dijiste vayan yo [F]los envío a[G]hí
[C]donde tu hermano ne[F]cesite oír hablar de mi [Dm] 
del [G]amor

[C]Le digo si a tu en[F]vío 
[G]ya quiero empezar a [C] andar,
decirle al mundo que estas [F]vivo
que el [G]camino y la ver[Am]dad eres [Dm]Tú
quiero [G]ser apóstol de tu [Am]luz [G] [F] 

[F]bajo tu luz mi [G]fe no tiene [C]lími[Am]tes
[F]bajo tu luz mi [G]fe no tiene [C]límites [F] [G] 

[C]Mi voz se ha vuelto un [F]eco de tu [G]voz
[C]Y en cada paso encu[F]entro una razón para [Dm]seguir,
para nunca du[G]dar, yo sé que hablas por [C]mi [F][G] ,
[C]Me has dado fuerzas para [F]poder cam[G]biar,
[C]Sé que mis ojos te [F]pueden reflejar, Señor yo [Dm]estoy 
[G]dispuesto.

[C]Le digo si a tu en[F]vío 
[G]ya quiero empezar a [C] andar,
decirle al mundo que estas [F]vivo
que el [G]camino y la ver[Am]dad eres [Dm]Tú
quiero [G]ser apóstol de tu [Am]luz [G] [F] 

[F]bajo tu luz mi [G]fe no tiene [C]lími[Am]tes
[F]bajo tu luz mi [G]fe no tiene [C]lími[Am]tes [F][G]
`
}, 
  {
    id: 340,
    titulo: "AQUÍ ESTOY YO",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "G",
    letra: `
Intro: [G] [C]

[G]No quiero perder [Em]Las cosas que me quedan por hacer,
[C]Las cosas que me quedan por vi[G]vir en ti.
[G]No quiero olvidar [Em]Las cosas que planeaste para mi,
[C]Los sueños que me diste quiero [G]ver cumplir.

[D]Aquí estoy yo, [C]listo para lo que [G]quieras,
[D]Aquí estoy yo, [C]en tus manos mi [G]vida entera.
[Em]Úsame [D]Señor, [C]úsame [G]Señor,
[D]Aquí es[C]toy yo. [G]

[G]Listo quiero estar, [Em]Los dones que me diste voy a usar,
[C]Los años que me has dado vi[G]viré Por ti.
[G]Voy a conquistar [Em]La tierra que me diste sin dudar,
[C]Viviré por [G]ti.
`
  },
  {
    id: 341,
    titulo: "BIENAVENTURADOS (Himno JMJ 2016 - Cracovia)",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "E",
    letra: `
[C#m7]Levanto mis [A2]ojos a los [E]montes, [D]¿Quién me ayu[A2]da[E]rá?
[Bsus]La ayuda me [B]viene del Se[F#sus]ñor, [F#]por [A]Su gran com[B]pa[C#sus]sión. [C#]
[C#m7]Aun cuando es[A2]tamos en el e[E]rror, [D]nos a[A2]braza con Su a[E]mor,
[Bsus]con Su [B]sangre nuestro do[F#sus]lor [F#]al [A]fin se [B]sa[C#sus]na[C#]rá.

[E]Bienaventura[B]dos los misericor[C#m7]dio[A]sos,
[E]porque ellos alcan[Bsus]za[B]rán miseri[F#sus]cor[F#]dia. (x2)

[C#m7]Si no perdo[A2]namos, ¿Quién ga[E]nará? [D]¿Quién puede soste[A2]nerse en [E]pie?
[Bsus]¡Si Él nos per[B]dona, nosotros tam[F#sus]bién [F#]ha[A]gamos como [B]nuestro [C#sus]Dios! [C#]

[C#m7]En la [A2]cruz Él nos re[E]dimió, [D]de la [A2]tumba resuci[E]tó.
[Bsus]¡Jesucris[B]to es el Se[F#sus]ñor! [F#]¡Al [A]mundo hay que anun[B]ciar! [C#sus] [C#]

[A]Hay que soltar el [B]miedo y ser [C#m]fiel, [A]con la mi[E]rada en Su [B]amor, [A] 
Confiar por[B]que Él resuci[C#m]tó. [A] [B]¡Vive el Se[C#sus]ñor! [C#] 

[E]Bienaventura[B]dos los misericor[C#m7]dio[A]sos,
[E]porque ellos alcan[Bsus]za[B]rán miseri[F#sus]cor[F#]dia. (x2)
`
  },
  {
  id: 342,
  titulo: "CONFESIÓN DE FE",
  autor: "Verónica Sanfilippo",
  categoria: "adoracion",
  tonoOriginal: "C (capo 1)",
  letra: `
Intro: [F] [G] [C] [Am] [G] [C]

[F] Muchas cosas me han con[G]tado de [C]ti
[Am] Tus milagros y lo que hi[G]ciste por [C]mi
[F] Sin embargo no supe de [G]ti se[C]ñor
[Am] Hasta que por fin tu a[G]mor me conquis[C]to

[F] [G] [C] Ohh [Am] oohh [G] oohh [C] ooohh

[F] Y si pre[G]guntas [C] ¿quién eres tu?
[Am] Quien [G] es Je[C]sús
[F] Es quien me [G] salva, me da [C] vida y paz
[Am] El hijo de dios [G] vivo, mi camino y mi ver[C]dad

[F] [G] [C] Ooh [Am] oooh [G] ooh [C] oooh

[F] Es esta mi confe[G]sión de fe se[C]ñor
[Am] Se que habitas en mi [G]cora[C]zón
[F] Me has dado un nombre que [G]marca mi mi[C]sión
[Am] Y quieres que se cumpla en [G]mi tu plan de a[C]mor

[F] Y si pre[G]guntas [C] quién eres tu?
[Am] Quien [G] es Jesús
[F] Es quien me [G] salva, me da [C] vida y paz
[Am] El hijo de dios [G] vivo, mi camino y mi ver[C]dad (x2)

[F] [G] [C] Ooooh [Am] oooh [G] oooh [C] oooh

[F] Es esta mi confe[G]sión de fe se[C]ñor
[Am] Se que habitas en mi [G]cora[C]zón
`
},
  {
  id: 343,
  titulo: "DÉJATE",
  autor: "Pais misión",
  categoria: "adoracion",
  tonoOriginal: "C (capo 1)",
  letra: `(capo 1)
[C] Hace ya tiempo que comprendí
[F] Tú me bus[G] caste en todas [C] partes
[Am] La llama que un día empe[Em] zó a fallar
[F] Tú no de[G] jaste se apa[C] gase

[C] Yo lo contemplo y digo ¿qué será?
[F] Será que es[G] taba equi[C] vocado
[Am] Y he descubierto que este [Em] loco está
[F] De amor mu[G] riendo porque le [C] ame

[C] Yo no he querido saber más
[F] De la lo[G] cura que me [C] late
[Am] Pero la fiebre quiere re[Em] gresar
[F] Y Él no de[G] jó de predi[C] carme

Y Tú me dices…
[C] Déja [G] te, [F] que te con [G] suma este [Am] fuego [Em]
[F] No apa [G] gues ya más esta ho [Am] guera [Em]
[F] Que si no hay fuego no ha [G] brá luz

[C] Créeme que estoy clavado
[F] Porque te [G] amo [C]
[Am] No encontrarás en [Em] otro lado
[F] Quien quiera [G] ya morir por [C] ti

[C] No tengas miedo no te deja [G] ré
[Am] Las veces [Em] que tú me reclames
[C] Yo gozo al ver que quieres re [G] gresar
[Am] Déjame [Em] que Yo te levante

[F] Señor no ves que quiero re [C] gresar
[Dm] Pero me [G] pesa mi pasado
[C] Acaso pides lo que no [G] sé dar
[Am] El tiempo me ha lim [Em] piado el alma

[F] Tanto he besado el suelo ¿no lo [C] ves?
[Dm] Mis manos se han ce [G] rrado tanto
[Am] No te preocupes no te deja [Em] ré
[F] Mi vida [G] cambio por la [C] tuya

Y tú me dices… [C] Déja [G] te… [F] No apa [G] gues ya más esta ho [C] guera
[F] Que Yo en [G] cendí en tu cora [C] zón.
`
},
  {
    id: 344,
    titulo: "DELANTE DEL REY",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "A",
    letra: `
[A]Ven Se[E]ñor Jesús,
[F#m]El corazón ya late fuerte al [C#m]verte a ti,
[D]tu gracia quiero en mi [A]vida recibir,
[Bm]sin tu bendición Señor, no [E]se vivir.

[A]Ven Se[E]ñor Jesús,
[F#m]Mirar el pueblo entorno a ti me [C#m]hace acordar,
[D]la multitud que aguar[A]daba tu llegar,
[Bm]Ven Oh Santo de Israel, pasa también [E]en este lugar.

[D]Es el Rey, y al frente [E]nuestro está, 
es fe[C#m]liz quien le a[D]dora,
[D]Es Jesús el gran ma[E]estro y Rey,
que a[C#m]quí, muy cerca se [D]deja encontrar,
delante [D]del Rey de Reyes, 
las rodi[Bm]llas se [E]han de do[A]blar.

[D]Es el Rey, y al frente [E]nuestro está, 
es fe[C#m]liz quien le a[D]dora,
[D]Es Jesús el gran ma[E]estro y Rey,
que a[C#m]quí, muy cerca se [D]deja encontrar,
delante [D]del Rey de Reyes, 
las rodi[Bm]llas se [E]han de do[A]blar. (x3)
`
  },
  {
    id: 345,
    titulo: "DIGNO DE ALABAR",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "A",
    letra: `
[A]Levanto mis manos, [F#m]Cierro mis ojos,
[D]Para proclamar tu [E]nombre, [A]Dios de poder. (x2)

[D]Digno de ala[E]bar, Señor, [F#m]Gloria y ma[E]jestad, sean [A]a ti,
[D]Rey de la cre[E]ación, [F#m]Por [E]siempre [A]Ameeeen.

[A]Levanto mis manos, [F#m]Cierro mis ojos,
[E]Para proclamar tu nombre, [F#m]Dios [E]de podeeeee[A]er.

[D]Digno de ala[E]bar, Señor, [F#m]Gloria y ma[E]jestad, sean [A]a ti,
[D]Rey de la cre[E]ación, [F#m]Por [E]siempre [A]Ameeeen.
`
  },
   {
    id: 346,
    titulo: "DIME PADRE",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "Bm",
    letra: `
Intro: [Bm]

[Bm]Dime Padre ¿Qué po[Em7]demos hacer? Tus hijos se [A]pierden y no en[F#]tiendo por [Bm]qué, [A] 
[Bm]Dime Padre, cada [Em7]día se alejan más y de ver[A]dad que no he [F#]hecho nada mal,
[Bm]pero curan sus he[A]ridas con lo que no les cu[G]rará.

[G]Les di el Mandamiento del a[Bm]mor me crucificaría mil veces [A]más,
[D]pero ellos [F#]huyen de su cre[G]ador y de su eterna felicidad.
[G]Y es que los hemos hecho [Em]tan libres que a veces me duele pen[A]sar,
[F#]que este don, que este regalo lo utili[Bm]cen para el mal.

[Bm]Dime Padre, ¿Cómo a [Em7]nuestra familia reunir?,
[A]les ofrecemos la eter[F#]nidad, [Bm]pero pre[A]fieren huir.
[Bm]Dime Padre, ¿Cómo ablan[Em7]dar su corazón?
[A]¿Cómo quitar esta co[F#]raza formada por el do[Bm]lor?

[G]Si supieran cuánto les a[Em]mamos, si supieran que todo tiene un por [A]qué
Dime Padre, ¿Cómo sus [D]almas acoger?.
[Em]Si supieran que [F#]ahora somos depen[Bm]dientes [A]de que [G]nuestra creación nos quiera
[Gm]Nuestro único deseo es que sus [A]almas estén llenas. 

[Bm]Dime Padre, ¿Cómo les expli[Em7]camos que son [A]lo que [F#]más a[Bm]mamos? [A] 
[Bm]Dime Padre, ¿Cómo les [Em7]guiamos a a[A]quello que les com[F#]pleta
si es que se [Bm]refugian en [A]falsas metas? 

[G]Y nos destroza [Gm]verles odiarse, verles o[Bm]diarse con tanta fuerza.
[Em]Dime Padre, ¿[F#]Cómo parar este do[Bm]lor?
[Em]Quiero que me [F#]quieran pero no es obli[Bm]gación. [B7] 
[Em]Les mi[A]ro con mis ojos, [D]llenos de compasión
[Em]y te aseguro que a[Em]cepto cualquier tipo de per[D]dón. 

[Em]Solo nos queda espe[Bm]rar a que escuchen nuestra voz
[D]y que vean las puertas a[A]biertas de este cielo acogedor.
[Em]Qué siempre serán bienve[Bm]nidos a los brazos de este corazón
[D]que solo quiere [A]verlos unidos en la [G]tierra con su Salva[Gm]dor. 

[Bm]Y me hago pan, pero no me [Em]ven. Me cuelo en sus pensamientos, pero no me ven
[A]Me meto en sus entrañas una y otra [D]vez. [A/C#]Lloro todos los días pero no me ven
[Bm]Dime Padre qué puedo ha[Em]cer, tus hijos se pierden y se alejan
[F#]y me da miedo que no [Bm]sepan volver. 

(Instrumental: [Em] [F#m] [Bm] - [G] - [A] | [Em] [F#m] [Bm] - [D] - [E] x2)

[G]Pa[A]pá, deja[D]rán de llorar.
[G]Espero que esos ca[A]minos vacíos se [D]puedan solucionar.
[G]Espe[A]raré hasta el [D]último se[A]gundo para [G]volverlo a intentar,
[A]no me rendiré, quiero a tus [Gm]hijos [Em]de ver[A]dad. 

[G]No ven qué bien ya he ven[A]cido a la ser[D]piente que [A/C#]les hace tem[Bm]blar.
[G]Ya la ha pisado mi [A]Madre, solo tienen que [D]mirarme y vivirán. 
`
  },
  {
    id: 347,
    titulo: "EL CIELO EN LA TIERRA",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "G",
    letra: `
Intro: [G] [D] [Em] [C]
[G]En el silencio, [D]Espero respuestas, [Em]Señor háblame, [C]Señor háblame.
[G]Aquí en tu casa, [D]Veo tu belleza, [Em]Y tu corazón, [C]Y tu corazón.

[G]Es el cielo en la tierra, Aquí veo tu gloria,
[D]Regalo de amor, de tu corazón,
[Em]Es el cielo en la tierra, este es mi lu[C]gar. (x2)

[G]Mi alma sedienta, [D]De misericordia, [Em]Necesita de ti, [C]Señor ven a mi.
[G]Pobre te busco, [D]humilde me acerco, [Em]A ti oh Jesús, [C]a tu inmenso amor.

[G]Maestroooo, [D]que bueno, [Em]Que bello, que bello estar a[C]quí (x3)

[G]Es el cielo en la tierra, Aquí veo tu gloria,
[D]Regalo de amor, de tu corazón,
[Em]Es el cielo en la tierra, este es mi lu[C]gar. (x2)
`
  },
  {
  id: 348,
  titulo: "EL QUE MUERE POR MI",
  autor: "Anónimo",
  categoria: "adoracion",
  tonoOriginal: "D",
  letra: `
[D] Todo empezó en una [G] cruz
[Bm] Donde un hombre murió y un [A] Dios se entregó
[D] Silenciosa la muerte lle[G] gó
[Bm] Extinguiendo la luz que en un [A] grito se ahogó

[D] Viendo su faz de do[G] lor
[Dm] Una madre lloró y su [A] amigo calló
[D] Pero siendo una entre[G] ga de amor
[Bm] Su ca[A] mino si[G] guió y en algún otro lado
[A] Una luz se encen[D] dió [A]

[G] Siendo hombre, amigo, es[A] clavo y ma[Bm] estro
[A] Siendo carga pe[G] sada, profesor y aprendiz
[A] Entregó hasta su [A] cuerpo en el pan y en la [D] vid

[Bm] Desde en[G] tonces lo he visto cami[D] nar a mi [A] lado [Bm]
A ese [G] Dios que se hu[D] milla y [A] muere por [Bm] mí
Es la [G] barca en mi [D] playa, el [A] ruido del si[Bm] lencio
Que se [G] acerca a su [D] hijo y me a[A] braza fe[Em] liz
Que se [G] acerca a su [A] hijo y me abraza fe[D] liz

Viendo un humilde calvario
Con un rostro cansado, soporta la cruz
Y al verme rezando a sus pies
Se olvida de Él, me toma en sus brazos
Me acoge otra vez

Siendo fuego, paloma, el agua, y el viento
Siendo un niño inocente, un padre y pastor
Voy a aceptar mi ofrenda que mi vida señor

Desde entonces lo he visto caminar a mi lado
A ese Dios que se humilla y muere por mí
En la barca en mi playa, el ruido del silencio
Que se acerca a su hijo y me abraza feliz
Que se acerca a su hijo y me abraza feliz

[G] Y si ahora yo a[A] cepto esa cruz
[F#m] Fue por esa per[Bm] sona, [A] ese [G] Dios
[A] Fue por Cristo Je[D] sús [A]

Desde entonces lo he visto caminar a mi lado
A ese Dios que se humilla y muere por mí
En la barca en mi playa, el ruido del silencio
Que se acerca a su hijo y me abraza feliz
Que se acerca a su hijo y me abraza feliz
`
},
  {
    id: 349,
    titulo: "ENCONTRÉ MI LUGAR",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "C",
    letra: `
[C]A Tus pies, [Am]Soy feliz, [F]Jesús mi Rey, [G]Vivo por Ti.
[C]Encontré, [Am]Mi lugar, [F]Tu corazón, [Dm]Es mi hogar.
[Am]Bendita la hora en [G]que me acer[Dm]qué,
[Am]Bendito el momento en [G]que Te escu[Dm]ché,
[Am]Que hermoso llamado, que [G]hermosa Tu [Dm]voz,
[Am]Me Llama mi Amado, y [C]yo te [G]digo Señor:

[F]Aquí es[Am]toy, [G]A ofrecerme, [F]Aquí es[Am]toy, [G]A entregarme,
[Dm]Aquí es[Am]toy, [G]A servirte, [F]Aquí es[C]toy, [G]A adorarte.

[Dm]Aquí está mi tiempo, [Am]Aquí está mi his[G]toria,
[Dm]Aquí está mi vida, [Am]A Tú disposi[G]ción. (x2)
[Dm]Mi vida es [Am]tuya Se[G]ñor. [Dm] [Am] [G]
`
  },
  {
  id: 350,
  titulo: "ES EL SEÑOR",
  autor: "Anónimo",
  categoria: "adoracion",
  tonoOriginal: "Dm",
  letra: `
Intro: [Bm] [F] [C] [C]

[Dm] Confiaré y [Bb] no temeré,
[F] Porque él es mi fuerza [C] Y mi protección
[Dm] Aunque oscuros, [Bm] Sean los cielos
[Gm] O fuerte sople el viento, [C] Dios tiene el control

[Bm] Es el señor
[F] Quien conduce mi barca
[C] En medio de tormentas
[Dm] En medio de las aguas
[Bm] Es el señor
[F] De la tierra y los mares
[C] Quien tiene el timón
[Dm] Quien tiene el control
[Bm] Y yo descan[F]saré en su volun[C]tad

Confiaré, En él esperaré
Porque él va conmigo
Mi guardián y salvador
Aunque el futuro
Hoy sea incierto, Y más allá del miedo
Sé que él tiene el control

Es el señor
Quien conduce mi barca
En medio de tormentas
En medio de las aguas
Es el señor
De la tierra y los mares
Quien tiene el timón
Quien tiene el control
Y yo descansaré en su voluntad

Oh-oh
A la otra orilla cruzaré
Aunque hoy no pueda ver
En cada prueba mi señor
Ha sido fiel
Una palabra bastará
Y calmará la tempestad
En cada prueba en Jesús
Yo confiaré

A la otra orilla cruzaré
Aunque hoy no pueda ver
En cada prueba mi señor
Ha sido fiel
Una palabra bastará
Y calmará la tempestad
En cada prueba en Jesús
Yo confiaré

Es el señor
Quien conduce mi barca
En medio de tormentas
En medio de las aguas
Es el señor
De la tierra y los mares
Quien tiene el timón
Quien tiene el control
Y yo descansaré en su voluntad…
`
},
  {
  id: 351,
  titulo: "ESTOY A LA PUERTA Y LLAMO",
  autor: "Anónimo",
  categoria: "adoracion",
  tonoOriginal: "C (capo1)",
  letra: `
Intro: [Am] [G] [Am] [G]

[C]Estoy a la [Em]puerta y [F]llamo
[C]Espera[Em]ndo a que me [F]abras
[Dm]Ábreme que quiero ent[G]rar
[F]Que estoy a la [G]puerta y [F]llamo

El[C]cora[Em]zón que te he [F]dado
[C]Es mo[Em]rada que yo [F]anhelo
[Dm]Pero es tan digno y s[G]agrado
Que esto[F]y a la [G]puerta y [F]llamo

[C]Si me abres entra[G]ré [Dm]
[Am]Y yo ce[G]naré [F]contigo
[G]Si no me abres segui[D]ré [F]
[Dm]Afuera como un men[G]digo [Am] [G]

L[C]laman[Em]do, ll[F]amand[G]o
L[Am]laman[G]do, l[F]lamand[G]o
`
},
  {
  id: 352,
  titulo: "ETERNO VIAJERO",
  autor: "Anónimo",
  categoria: "adoracion",
  tonoOriginal: "D",
  letra: `
[D] Redes al [C] hombre sol [G] bajo, [A] cierto extraño se em [D] barcó, [C] [G] [A]
con su mirada a lo largo, con el viento se alejó,
Después de haber navegado, solitario se encontró,
muy pocos peces quedaron, atrapados en su amor.

[A] Quiero ir con [G] tigo, Espé [A] rame señor,
[G] Aun no ter [A] mino, espera por fa [G] vor,
[A] Escucha el canto que nace de mi voz.

[D] Te quie [G] [A] rooo [G] oooo, [D] señor yo te [G] [A] [G] quiero,
[D] Te quie [G] [A] ooo [G] ooo, [D] eterno via [G] [A] [G] jero.

Con su mirada de niño, izó velas y marchó,
y un ave vino y me dijo, que en su rostro había dolor.
Es noche y duerme cansado, otro día terminó,
tal vez mañana a su lado, pescador me vuelva yo.

Quiero ir contigo, Espérame señor,
Aun no termino, espera por favor,
Escucha el canto que nace de mi voz.

Te quiero, señor yo te quiero,
Te quiero, eterno viajero.

[D] Pienso y no [G] dejo de [A] pensar,
[G] en el ex [D] traño que em [G] [A] [G] barcó,
quiero y no quiero recordar, el recuerdo de su voz.
Te quiero, señor yo te quiero, Te quiero, eterno viajero.
`
},
  {
  id: 354,
  titulo: "HURACÁN",
  autor: "Hakuna",
  categoria: "adoracion",
  tonoOriginal: "G (capo 4)",
  letra: `
Cejilla en 4
Intro: [G] [D] [Em] [C] (x2)

[G]Me he hecho tantas pre[D]guntas
[Em]intentando enten[C]der
[G]Me he lanzado a bus[D]carte
[Em]sin saberte [C]ver
[G]Me he asomado al a[D]bismo
[Em]me he atrevido a sal[C]tar
[G]y ca[D]er [Em]

[G]Y un huracán
[D]romperá
[Em]el cielo desde mi gar[C]ganta
[G]gritándote
[D]¿dónde estás [C]cuando me haces falta?

Me han dado respuestas
pero no se que hacer
He prometido seguirte
sin entender
Y hay un eco en lo hondo
que me empuja hacia ti
y aunque sea sin sentirte
te buscaré

Y un huracán, romperá
el cielo desde mi garganta, gritándote
¿dónde estás cuando me haces falta?

[G]Estoy aqui,soy el si[D]lencio
[Em]Estoy aquí,soy este [C]viento
[G]Estoy aquí,soy este [D]trozo de [C]pan
[G]Estoy aqui,soy tu la[D]mento
[Em]Estoy aquí, soy este [C]eco
[G]Estoy aquí, soy este [D]trozo de [C]pan

Y un huracán, romperá
el cielo desde mi garganta, gritándote
¿dónde estás cuando me haces falta?
Y un huracán
(estoy aquí)
romperá
(estoy aquí)
el cielo desde mi garganta
gritándote
(estoy aquí)
¿dónde estás cuando me haces falta?
(soy este trozo de pan)

[G]Y tú huracán
[D]romperá
[Em]el cielo desde mi gar[C]ganta
[G]gritándome
[D]cuanto me ha[C]ces falta
`
},
  {
  id: 355,
  titulo: "JESÚS CARPINTERO",
  autor: "Anónimo",
  categoria: "adoracion",
  tonoOriginal: "E",
  letra: `
Intro: [A] [E] [A] [B] (x2)

[A]En el bosque per[E]dido de mi corazón,
[A]No hay camino ni sen[E]tido ni una dirección.
[A]Me has amado siempre y [E]yo te di la espalda,
[F#m]Ahora soy un madero en medio de la [B]nada.

[A]Vacío sin forma [E]sólo y sin amor,
[A]Astillado y malhe[E]rido invadido por el temor.
[A]Tú me tomas en tus [E]manos, clavas tu mirada,
[F#m]Me renuevas todo, vuelve la espe[B]ranza.

[E]Tómame, Conviérte[G#m]me
[Am]Como tú me pen[A]saste,
[B]Cómo tu me soñaste.
[E]Tallame, Transfórma[C#m]me
[Am]Vuelve hacer que yo [A]crea,
[E]Con tus manos mol[C#m]dea,
[E]Jesús Carpintero.

Instrumental: [E] [C#m7] [A] [B]

[F#m]Y ahora que estoy con[C#m]tigo
[B]Ya no hay nada que me pueda derrumbar.
[F#m]Ahora eres mi ca[C#m]mino
[B]Encontré un sentido para caminar.
[F#m]Invítame a tu [C#m]barca
[B]Ahora yo ya estoy listo para nave[A]gar, Señor.

[E]Tómame, Conviérte[G#m]me
[Am]Como tú me pen[A]saste,
[B]Cómo tu me soñaste.
[E]Tallame, Transfórma[C#m]me
[Am]Vuelve hacer que yo [A]crea,
[E]Con tus manos mol[C#m]dea,
[E]Jesús Carpintero.
`
},
  {
    id: 356,
    titulo: "LLEGAS TÚ (Pedro)",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "Bb",
    letra: `
Intro: [Bb] [F/A] [Gm] [Bm] [Eb] [Bb/D] [Eb] [F] (x2)

[Bb]Tú me has en[F/A]viado mar a[Gm]dentro [F]
[Eb]Aun sa[Bb/D]biendo mi fragili[F]dad.
[Bb]Yo no sé si [F/A]es el mo[Gm]mento [F]
[Eb]Pero tú co[Bb/D]noces mi ver[F]dad.
[Bb]Y este viaje [F/A]yo lo em[Gm]prendo [F]
[Eb]Confi[Bb/D]ando en que tú me guia[F]rás.

[Gm]Pero azota el [F]viento en [Eb]mí, [Gm]no te en[F]cuentro a[Eb]quí.

[Bb]Llegas [F]Tu, me le[Gm]vantas Se[Dm]ñor,
[Eb]Pues mi poca fe no me [F]deja ver 
[Eb]tu milagro en [F]mí.
[Bb]Ven a [F]Mí [Bb]y no temas más 
[Eb]pues estoy aquí,
[Dm]junto a ti cami[Eb]nando cru[F]cemos el [Bb]mar.

[Bb]Esa voz que [F/A]calma el [Gm]viento [F] 
[Eb]Es la [Bb/D]misma que calma mi [F]mar.
[Bb]Y si clavo la mi[F/A]rada en [Gm]ti [F]
¿[Eb]Cómo puedo [Bb/D]ver la tempes[F]tad?

Y ahora azota el viento  en mí
Sé que tú estás aquí.

[Bb]Llegas [F]Tu, me le[Gm]vantas Se[Dm]ñor,
[Eb]Pues mi poca fe no me [F]deja ver 
[Eb]tu milagro en [F]mí.
[Bb]Ven a [F]Mí [Bb]y no temas más 
[Eb]pues estoy aquí,
[Dm]junto a ti cami[Eb]nando cru[F]cemos el [Bb]mar.

[Db]Tu presencia en [Eb]mi será 
[Db]fuerza para [Eb]a[F]mar. 

[Bb] [F/A] [Gm] Bm] [Eb] [Bb/D] [Eb] [F] (x2)

[Bb]Ven a [F]Mí [Bb]y no temas más 
[Eb]pues estoy aquí,
[Dm]junto a ti cami[Eb]nando cru[F]cemos el [Bb]mar.
`
  },
  {
  id: 357,
  titulo: "LO PEQUEÑO",
  autor: "Verónica Sanfilippo",
  categoria: "adoracion",
  tonoOriginal: "C (capo2)",
  letra: `
Intro: [C] [Am] [F] [G]

[C]Gracias señor, por sem[Am]brar en mi interior
[F]Regalando tu palabra
[G]Que renueva el corazón
[C]Quiero recibir, tu se[Am]milla en mi
Para que crezca, y permanezca

[Am]Y transforme mi ser
[F]En un nuevo amanecer
[C]Dejando atrás
[G]Toda oscuridad

[C] [Am] [F] [G] Mmmh mmmh ooh ooh

Gracias señor por hablar al corazón
Y enseñar que en lo pequeño
Esta la clave de tu reino
Quiero recibir, tu gracia en mi
Para que crezca y permanezca

Esa pequeñez, que encierra inmensidad
Esa pequeñez, que todo puede transformar
Mmmh mmmh ooh ooh

Gracias Señor, por hablar al corazón
Y enseñar que en lo pequeño
Está la clave de tu reino
`
},
  {
  id: 358,
  titulo: "ME RINDO ANTE TI",
  autor: "Anónimo",
  categoria: "adoracion",
  tonoOriginal: "Ab",
  letra: `
[Ab]Cuántas vir[Cm]tudes han [Bb]de ador[Ab]nar
[Cm]Mi cora[Bb]zón al consa[Ab]grarse en el altar
[Fm]Al Dios indefenso que ha na[Bb]cido en un portal
[Fm]Y ha muerto en la cruz para las [Bb]almas salvar 

[Gm]¿Será po[Ab]sible tanto amor para mí?
[Fm]¿Tendré yo el [Fm7]valor para a[Bb]marte solo a ti? 

[G] [Ab] [Bb] Me rindo ante ti, Jesús
[Cm7]Me rindo ante ti
[Ab] [Bb] Me rindo ante ti, Jesús
[Cm]Me rindo ante ti
[Ab]Con todo mi ser
[Bb]Y mi amor
[Eb]Te con[Bb]sagro el [Cm]corazón
[Bb] [Ab] Me rindo ante ti
[Bb]Mi dulce Je[Eb]sús, me rindo ante ti 

¿Será posible tanto amor para mí?
¿Tendré yo el valor para amarte solo a ti?

Me rindo ante ti, Jesús
Me rindo ante ti
Me rindo ante ti, Jesús
Me rindo ante ti
[Ab]Con todo mi ser
[Bb]Y mi amor
[Eb]Te con[Bb]sagro el [Cm]corazón
Mi dulce Jesús, me rindo ante ti 

[Ab]Con todo mi ser
[Bb]Y mi amor
[Eb]Te con[Bb]sagro el [Cm]corazón
[Bb] [Ab] Me rindo ante ti
[Bb]Mi dulce Je[Eb]sús, me rindo ante ti 
`
},
  {
  id: 359,
  titulo: "NECESITO DE TU AMOR",
  autor: "Anónimo",
  categoria: "adoracion",
  tonoOriginal: "G (capo 1)",
  letra: `
Capo 1
Intro: [G] [C] [G] [C]

[G] Una vez más, tu palabra me en[C]seña
[G] Una vez más, en ella te re[C]velas
[G] Una vez más, puedo escuchar tu [C]voz
[G] Que me llama a toda [C]hora
[G] Porque quieres, regalarme tu a[C]mor

[G] [C] [G] [C] 

[G] Siempre estás, buscando mi [C]alma
[G] Sin mirar, cuántas horas tra[C]baja
[G] Porque a ti no te importa el [C]tiempo
[G] Tu bondad supera todo porque [C]quieres
[G] Para mí el [C]cielo

[G] Hoy vuelvo a ti con mi humani[C]dad
[G] Dejo atrás mi justicia y mi ver[C]dad
[Am] Quiero abrir mi cora[G]zón
[F] A esta despropor[C]ción del amor de [G]Dios

[C] Necesito de tu amor, Se[G]ñor
[C] Necesito de tu amor, Se[G]ñor (x2)

[G] Hoy vuelvo a ti con mi humani[C]dad
[G] Dejo atrás mi justicia y mi ver[C]dad
[Am] Quiero abrir mi cora[G]zón
[F] A esta despropor[C]ción del amor de [G]Dios
[Am] Quiero abrir mi cora[G]zón
[F] A esta despropor[C]ción del amor de [G]Dios
`
},
  {
  id: 360,
  titulo: "NOCHE",
  autor: "Anónimo",
  categoria: "adoracion",
  tonoOriginal: "Dm",
  letra: `
Intro: [Dm] [Bb] [F] [Am]

[Dm] Por tu iglesia que te espera a oscuras
[Bb] Por tu pueblo que te reza aguardando la aurora
[F] [Am] Te rogamos, [Dm] [Bb] [F] [Am] te rogamos.

[Dm] Por las naciones paganas, [Bb] que tienen sed de ti sin saberlo
[F] [Am] Ten piedad, [Dm] [Bb] [F] [Am] ten piedad.
[Dm] Por los pueblos oprimidos por el totalitarismo, [Bb] y la opresión de la mentira
[F] [Am] Te rogamos, [Dm] [Bb] [F] [Am] te rogamos.

[Dm] Por aquellos perseguidos por tu nombre [Bb] que se ocultan para orar
[F] [Am] Y aquellos extraídos de su hogar.
[Dm] Por sus perseguidores, cegados por el odio [Bb]
[F] [Am] Perdónales Padre, no saben lo que hacen.

[Dm] Por los que no nos aman, [Bb] por los que no sabemos amar
[F] Por los que sufren y agonizan [Am] y hoy duermen en el hospital.
[Dm] Por los que hoy es su última noche [Bb] y cuyos ojos no verán el nuevo día
[F] [Am] Ten piedad, [Dm] [Bb] [F] [Am] ten piedad.

[Dm] Por todos los que sufren la tentación del suicidio, [Bb]
[F] [Am] Por los dispuestos a dejar ganar al mal.
[Dm] Por aquellos cuyas noches son interminables [Bb]
[F] Y a los que la angustia les ha [Am] quitado la [A7] paz. [A] [Dm]

[Bb] Kyrie [F] Eleison, [Am] Kyrie [A7] Eleison
[Dm] Kyrie [Bb] Eleison, [F] Kyrie [Am] Eleison, [A7] Kyrie Eleison.

[Dm] Por aquellos que trabajan en la prostitución [Bb] y se ven obligados a vender su amor
[F] Por los que caen en la trampa [Am] del vicio y las drogas.
[Dm] Por los que hoy duermen en prisión [Bb] por los que hoy esperan su ejecución
[F] [Am] Por aquellos a los que torturan.
[Dm] Por criminales, por los ladrones, [Bb] por los que erran en soledad
[F] [Am] Por los que sufren la [A7] indiferencia [A] de los [Dm] demás.

[Bb] Kyrie [F] Eleison, [Am] Kyrie [A7] Eleison
[Dm] Kyrie [Bb] Eleison, [F] Kyrie [Am] Eleison, [A7] Kyrie Eleison.

[Dm] Por la ciudad, [Bb] por todos sus habitantes
[F] [Am] Que en sus sueños solo existas tú.
[Dm] Por nuestros difuntos, [Bb] que aún no han visto tu rostro
[F] [Am] Por los alejados entre la multitud.

[Dm] Por los niños que descansan en el seno de su madre, [Bb]
[F] [Am] Por las mujeres que van a dar a luz.
[Dm] Para que reine tu paz en cada hogar, [Bb]
[F] Por los que quieren [Am] saciar su [A7] sed de [A] amar. [Dm]

[Bb] Kyrie [F] Eleison, [Am] Kyrie [A7] Eleison
[Dm] Kyrie [Bb] Eleison, [F] Kyrie [Am] Eleison, [A7] Kyrie Eleison.

[Dm] Ten piedad, ten piedad, ten piedad (x3)
Ten piedad, Señor, ten piedad.
`
},
  {
    id: 361,
    titulo: "NOMBRE SOBRE TODO NOMBRE",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "Am",
    letra: `
Intro: [Dm] [G] [C] [Am] (x4)

[Am] La verdad en la que vi[G]vimos,
[Am] Cristo, a pesar de su condi[G]ción Divina,
[Am] por amor se despren[G]dió de su [C]rango
[D] pasando por uno de [F]tantos [G] y tomó condi[Am]ción de es[E]clavo.
[F] Y así, actuando como un [C]hombre cual[G]quiera,
[Dm] se rebajó hasta so[Em]meterse incluso a la [F]muerte,
[G] y una muerte en la cruz.

[Am] Por eso Dios lo levan[F]tó 
[C7] sobre el mundo en[G]tero.
[Am] Por eso Dios le conce[F]dió 
[C] el nombre sobre todo [G]nombre. (x2)

[Am] Al nombre de Jesús, 
[F] toda lengua pro[G]clame:
[Am] ¡Cristo es el Se[F]ñor! 
[G] para gloria del Padre.
[Am] Toda rodilla se [G]doble en el [C]Cielo,
[D] en el cielo, [F] tierra y abismo, 
[G] que se grite su nombre:

[Dm] Nombre sobre [G]todo nombre 
[C] y Salva[Am]dor.
[Dm] Nombre sobre [G]todo nombre, 
[C] mi Reden[Am]tor.
[Dm] Nombre sobre [G]todo nombre, 
[C] [E7] sobre todo, te levan[Am]tó. 

[Dm] [G] [Am] 
`
  },
  {
    id: 362,
    titulo: "PAJARITO",
    autor: "Hakuna",
    categoria: "adoracion",
    tonoOriginal: "E",
    letra: `
Intro: [C#m] [E] [A] [B] [C#m] [E] [A] [Am]

[E] Pajarito [B] no sabe volar 
[C#m] y se pregunta [A] cuándo podrá despegar.
[E] Él quisiera [B] ser un águila, 
[C#m] pero comprende lo que [A] puede dar.

[E] Dime qué mis[C#m]terio es este, 
[A] que, aunque sea peque[E]ñito, 
te fijas en [B]él.
[C#m] Y aunque sea dis[A]traído, 
[E] no lo moverán de [B] su lugar.

[C#m] Quiere seguir mirando al di[A]vino 
Sol [E] que le brinda su a[B]mor.
[C#m] Nada podrá asus[A]tarlo: ni el viento, ni la [E]lluvia, 
ni nada que sa[B]cuda.

[C#m] Más allá de las nubes os[A]curas, 
sigue bri[E]llando su sol de ve[B]rano.
[C#m] Pajarito sabe muy [A] bien que le cuida 
el mo[E]mento para despe[B]gar.

[C#m] Pajarito se queda mi[A]rando a lo alto, 
[E] a ver si logra algún [B] día volar.
[C#m] Y aunque los buitres [A] vengan, no les temerá; 
[E] sus amigas las águilas [B] lo protege[C#m]rán.
`
  },
  {
    id: 363,
    titulo: "PERDONAR DE CORAZÓN",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "C",
    letra: `
[C] Cuántas veces mi humani[C]dad 
[C] no me deja procla[F]mar tu ver[G]dad.
[C] Cuántas veces no hablé de [C]ti, 
[F] cuando frente a mi her[G]mano no me compade[C]cí.

[C] Hoy me enseñas que hay que perdo[C]nar 
[C] y no importa la can[F]tidad,[G]
[C] sino ser como [C]tú, 
[F] que tanto a[G]maste que te diste en la [C]cruz.

[F] Yo quiero [G]ser como tú,
[F] quiero que mi vida sea un reflejo de tu [G]luz.
[F] Quiero de tu [G]paz en mi inte[Em]rior [Am]
[F] para ver a mi hermano y perdo[G]nar de cora[C]zón. (x2)

[F] Yo quiero [G]ser como tú,
[F] quiero que mi vida sea un reflejo de tu [G]luz.
[F] Quiero de tu [G]paz en mi inte[Em]rior,
[F] para ver a mi hermano y perdo[G]nar de cora[C]zón.
`
  },
  {
    id: 364,
    titulo: "POR EL RESTO DE MIS DÍAS",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "C",
    letra: `
Intro: [F] [G] [C]

[F] A partir de este mo[G]mento una vida comen[C]zamos,
[F] por el resto de mis [G]días estaré junto a tu [C]lado.
[F] Una alianza e[Em]terna de a[Am]mor
[F] que nos une y nos ben[G]dice desde [C]hoy.

[F] Compartiendo día a [G]día eres mi felici[C]dad,
[F] y aunque estés a la dis[G]tancia en mi mente siempre es[C]tás,
[F] hoy de[Em]cido a[Am]marte por la eternidad,
[F] mi amor por [G]ti no perece[C]rá.

[F] Eres mi [G]luz, mi inspira[C]ción,
[F] el re[Em]galo que llega del [Am]cielo
[F] y que llena de ale[G]gría mi cora[C]zón.

[F] Y que todo el mundo [G]sepa que te [C]amo,
[F] y que tu pre[G]sencia es el mejor re[C]galo.
[F] En las [Em]pruebas y ale[Am]grías,
[F] en tris[G]tezas y poe[C]sías, te amaré.
`
  },
  {
    id: 365,
    titulo: "PORQUE TE AMO",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "Bm",
    letra: `
Capo 4
Intro: [Bm] [G] [D] [A]

[Bm] Hoy que te veo a[G]sí,
[D] no puedo más que mirarte con dul[A]zura y sufrir con[Bm]tigo.
[G] Quiero que sepas que [D]siempre he estado a tu lado,
[A] lo que has llorado lo he llo[Bm]rado tam[G]bién, [D]e[A]ee.

[Em] Y date cuenta que tu sole[A]dad, que tu incompre[Bm]nsión,
[G] han [A]sido [Em]mías también; que ningún hombre por más que a[A]mó,
[Bm] se hubiera entre[G]gado al do[A]lor como yo por ti.

[Bm] Porque te a[G]mooo, y fue por a[D]mor que yo te cre[A]é.
[Bm] Mírame en la [G]cruuuz, no hay [D]nada que yo no [A]haga por [Bm]ti.
[Bm] Eeee [G]uuuu [D]uu [A]

[Bm] Déjame entrar en tu [G]vida, [D]quiero ven[A]dar tus heridas,
[Bm] traigo las [G]mías para cu[D]rar las tuya[A]as,
[A] pues vengo a ha[Em]cer mío todo tu dolor.
[Bm] Y vengo a reno[G]varte y darte nueva vida,
[D] quiero que [A]seas e[Em]terno y feliz.

[Bm] No temas que a mi lado no hay [G]viento ni tormenta,
[D] yo te pro[A]tejo con el [Bm]muro de mi amor.
[G] Y es que te a[D]aaamooo y fue por a[A]mor que yo te cre[Bm]é.
[G] Mírame en la [D]cruuuz no hay nada que yo no [A]haga por [Bm]tii.

[G] Y ábreme tu cora[D]zón y déjame en[A]trar, quiero que [Bm]seas feliz.
[G] Y abre tus ojos, ca[D]mina en mi senda y [A]yo te guiaré hasta el fin.
[Bm] Te a[G]mooooo, [D] y es que te a[A]moooooooooo
[Bm] asiii[G]iiiiee [D]oooooo[A]ooooo
`
  },
  {
    id: 366,
    titulo: "QUE BIEN SE ESTÁ AQUÍ (Transfiguración)",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "G",
    letra: `
Intro: [C] [D]

[Am] Que bien se está a[D]quí, Señor,
[G] no hay otro lu[D]gar donde es[Em]tar mejor.
[A] Tus manos nos guían, [C] tu amor nos protege,
[D] confiamos en [G]ti. (x2)

[C] Seremos tus manos [D] para construir un mundo [G]nuevo,
[C] Seremos tu boca [D] para no callar la ver[G]dad.
[C] Seremos tus [Bm]ojos para mi[A]rarnos con ternura,
[Am] y tu miseri[C]cordia [F] para escuchar sin juz[D]gar…
`
  },
  {
    id: 367,
    titulo: "QUE BIEN SE ESTÁ AQUÍ",
    autor: "Athenas",
    categoria: "adoracion",
    tonoOriginal: "A (capo 1)",
    letra: `
Intro: [A] [D] [Bm] [E]

[A] Qué bien se está a[D]quí, en tu pre[Bm]sencia,
[E] glorioso por siempre Se[A]ñor.
[A] Qué bien se está a[D]quí, a tu [Bm]lado,
[E] sintiendo tu paz y tu a[A]mor.

[D] Cuán hermoso [A]eres, Señor,
[D] tú no tienes [A]comparación.
[D] Quiero [E]perma[F#m]necer
[D] por siempre [E]en tu a[A]mor. (da capo ad fine)

[D] Con [A]todo [E]mi cora[F#m]zón
[D] te a[A]doro, Se[E]ñor.
[D] Con [A]todo [E]mi cora[F#m]zón
[D] te a[A]labo, Se[E]ñor.

[D] Cuán hermoso [A]eres, Señor,
[D] tú no tienes [A]comparación.
[D] Quiero [E]perma[F#m]necer
[D] por siempre [E]en tu a[A]mor.

[A] Qué bien se está a[D]quí, en tu pre[Bm]sencia.
`
  },
  {
    id: 368,
    titulo: "QUEBRÁNTAME",
    autor: "Jésed",
    categoria: "adoracion",
    tonoOriginal: "C",
    letra: `
Intro: [Am] [C] [F]

[C] Oh, Señor mi Dios, te he buscado tanto [Am]tiempo y te encuentro hoy.
[F] Y te hablo en oración, pero en mi [Dm]corazón hay heridas sin sa[Fm]nar,
y en mi alma solo hay [G]oscuridad.

[C] Oh, Jesús mi Señor, tú moriste en una [Am]cruz para mi salvación.
[F] Y tu sangre derramaste por mi re[Dm]dención. Solo tú tienes po[Fm]der,
solo en ti mi alma puede [G]renacer.

[C] Quebrántame, toma lo que soy y [Am]renuévame, hazme como tú, Señor.
[F] Transfórmame, [Dm] a tu imagen, [G] quiero renacer en ti.

[C] Oh, Señor mi Dios, me abandono en tus [Am]manos pues de barro soy,
[F] y tú eres el alfarero, vuelve a ha[Dm]cerme oh, Dios.
[Fm] Reconstrúyeme Señor [G] y mi ser proclamará tu salvación.

[F] Toma lo que [G]soy, quiero re[Am]nacer en [G]ti.
`
  },
  {
    id: 369,
    titulo: "QUÉDATE SEÑOR (Oración de los esposos)",
    autor: "Verónica Sanfilippo",
    categoria: "adoracion",
    tonoOriginal: "C",
    letra: `
Intro: [C] [Am] [F] [C] [G]

[C] Hoy venimos a tu casa [Am] a ofrendarte nuestro amor.
[F] Queremos que tu gracia nos inunde [C] y consagre [G] nuestra u[Am]nión.
[C] Te entregamos los que somos, [Am] te abrimos nuestro corazón.
[F] Ven entra a nuestra casa, [C] ven y [G] quédate, Señor.

[G] Y danos [Am] de tu paz, [F] alumbra con tu luz,
[C] bendice nuestro hogar, [G] ven y quédate, Jesús.
[Am] Y enciende en nuestro corazón [F] el fuego de tu amor,
[C] para que esta familia [G] sea un reflejo de tu luz.

[C] Bendice a este esposo, [Am] bendice a esta esposa,
[F] bendice a esta familia que hoy [C] te con[G]sagra su a[Am]mor.

[Am] Ven y quédate, Se[F]ñor, ohh ohh
[C] Ven y quédate, Se[G]ñor, ohh ohh
ven y quédate, Se[C]ñor.
`
  },
  {
    id: 370,
    titulo: "RECIBE MI CORAZÓN",
    autor: "Verónica Sanfilippo",
    categoria: "comunion, adoracion",
    tonoOriginal: "D",
    letra: `
[D] En la intimidad de tu pre[G]sencia,
[D] te rindo hoy mi ser y mi cora[G]zón.
[Bm] No hay [A] lugar mejor [G] que a tus [D] pies Señor,
[D] en ti encuentro [A] paz, encuentro amor.

[Bm] Recibe mi [G] corazón, [D] Jesús mi buen pas[A]tor,
[Bm] recibe mi o[G]ración, te [D] entrego hoy mi [A] corazón.

[D] En la intimidad de tu pre[G]sencia.
`
  },// --- revisado até aqui ---
  {
    id: 371,
    titulo: "SENCILLAMENTE",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "Em",
    letra: `
[Em]Creo sencilla[C]mente
[G]Quiero disfrutar de la sere[B7]nidad del cre[Em]er,
desligar el cre[C]er del sentir, [G]creo, mi Dios [B7]¡y basta!

[Em]Te creo en tus misterios [C]sin entenderlos.
[G]Te creo en mí y en el [B7]Pan Blanco,
[Em]en el prójimo [C]y en la creación [G]sin verte en [B7]ningún lado.

[Em]Creo, Señor, sencilla[C]mente [G]porque creer es con[B7]fiar.
¡Y cómo me gusta cre[Em]erte [C]sintiendo [G]dudas! [B7] (x3)

[Em]Digo que eres amor, [C]escucho que soy tu amado,
[G]no siento y ¡qué más da! [B7]¡Te quiero y eso basta!
`
  },
  {
    id: 372,
    titulo: "SI TIENES FE",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "Bm",
    letra: `
[Bm]Cada noche o[A]ré, [F#m]no sé si alguien me escu[Bm]cho
[Bm/A]En el alma una can[G]ción [Em]que nunca enten[F#m]dí
No hay miedo en mi interior, aunque haya tanto que temer
Moverás montañas porque en ti está el poder.

[D]Habrá milagros [A]hoy si tienes [Bm]fe [F#m]
[G]La ilusión [D]no ha de mo[A]rir
[D]Un gran milagro [A]hoy al fin ve[Bm]ré [F#m]
[G]Si tienes fe [Em]lo logra[A]rás, [Bm]podrás si tienes fe.

[Em]Malos tiempos [A]son, [F#m]ni la oración ayu[Bm]da ya
[Em/A]La esperanza puede [G#7]huir [Em]cual pájaro y vo[F#m]lar
Mas hoy yo sigo aquí creciendo en gozo y en amor
Con la fe y la devoción que nunca imagine.
`
  },
  {
    id: 373,
    titulo: "SIEMPRE",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "A",
    letra: `
[A]Siempre, te he bus[D]cado a ti, [A]siempre, he so[D]ñado en ti
[F#m]Y aunque mi con[E]ciencia, no enten[D]día cual era tu melo[A]día
[F#m]Y mi igno[E]rancia me impe[D]día conocerte de verdad.

[A]Tu fideli[E]dad me com[D]pleta mas
[F#m]No quiero se[E]guir perdido en el [D]ruido del afán
[A]Y no tendré [E]miedo aunque a [D]veces nos sepa hablar
[F#m]Pues tu no me [E]hablas tú me [D]cantas [Dm]y me enseñas a bailar.

[A]Nunca me sepa[D]raré de ti, [A]nunca mori[D]rá el amor por ti.
`
  },
  {
    id: 374,
    titulo: "SIEMPRE TE AMARÉ",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "G",
    letra: `
[G]Te conozco desde [D]antes que nacieras
[Em]se tu historia, co[C]nozco tus problemas
[G]vi tus llantos y [D]tus alegrías, [Am]y aún así te [C]amo.

[G]Te amo, no importa [D]lo que hagas
[Em]Te amo, no importa [C]donde vayas
[G]Te amo, no importa [D]lo que digas
[Am]por siempre te [C]amo, y siempre te ama[G]ré.

[Em]Nunca temas, [D]siempre esta[C]ré [D]
[Em]y en mi mano [D]yo te sosten[C]dré.
`
  },
  {
    id: 375,
    titulo: "SIENTO",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "C#m",
    letra: `
[C#m]Cuántas veces me hablaron de felicidad
[A]Que podía encontrarla en la fiesta, en el bar
[E]Al principio lo disfrutaba, y pensaba que me sa[G#]ciaba
[C#m]Pero en mí encontraba jamás la razón
[A]Porque fue más profunda la desilusión y el [E]miedo de no ser un hombre [B]nuevo.

[A]Ahora siento que eres más que un senti[B]miento
[E]Tu plenitud más que un momento [B]porque no había nadie [C#m]más
[A]Contigo yo descanso y [B]siento que tú te mueves en el [E]viento
Tanta sole[B]dad clamaba un a[C#m]brazo que fal[B]taba y que siempre lo so[F#m]ñé
[A]Estaba muerto, [B]pero en ti, volví a na[C#m]cer.
`
  },
  {
    id: 376,
    titulo: "TEMPLO DE ALABANZA",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "C",
    letra: `
[C]Señor, puedes conver[G]tir mi cora[Am]zón
[F]En un templo de ala[C]banza [F]y continua ado[G]ración.

[F]He pasado por la [G]puerta que es Je[Em]sús [Am]
[F]He tomado el sacri[G]ficio de la [Em]cruz [Am]
[F]Caminaré [G]hacia tu [C]luz. [G]

[C]Mírame y que[G]brántame, [Am]hazme humilde y pe[Em]queño
[F]Aquí estoy señor, [C]hazlo hoy, [F]esta es mi vida, te la o[G]frezco.
`
  },
  {
    id: 377,
    titulo: "TODA TUYA",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "Em",
    letra: `
[Em]Tengo ya desde hace [G]tiempo mi mi[Bm]rada en el [A]cielo
[Em]Más tu amor voy cono[G]ciendo, más miseri[Bm]cordia en[A]cuentro.
[Em]Oh Jesús, tu dime a [A]quién i[D]remos [Bm]si en ti, todo lo en[A]cuentro
[Em]Quiero estar, con[A]tigo cada [D]día [Bm]hoy y toda mi [A]vida.

[G]Yo, toda [Em]tuya, [Bm]Tú, todo [A]mío
[G]Eternamente [Em]tuya, [Bm]Eternamente, eterna[A]mente.

Tanto amor me ha conquistado Cristo rey Eucaristía
De la fuente de este amor brota el fruto de mi vida.
Por amor, tú por mí diste la vida, por amor te doy yo la mía.
`
  },
  {
    id: 378,
    titulo: "TÓMAME",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "C",
    letra: `
[C]Cuanto espe[G]ré [Am]encontrarme con[F]tigo otra vez
[C]Alumbras mi [G]fe [Am]y contigo yo [F]siempre estaré
[C]Vienes, me buscas, aunque huya de [G]ti
[Am]Conquistas mi alma, y me vuelvo hacia [F]ti

[F]Tu mi Se[G]ñor [Em]has venido para que[Am]darte [G]por a[F]mor
[F]Hoy vengo a pe[Fm]dirte:
[C]Tómame todo como soy, [G]transforma mi vida y mi interior
[Am]Enséñame a amarte [F]como sólo tu amaste Señor.
`
  },
  {
    id: 379,
    titulo: "TRANQUILO",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "D",
    letra: `
[D]Miras al frente y no sabes [G]dónde vas
[D]Propones planes que no logras reali[G]zar
[A]Será el miedo el que te nuble la razón, te para[A]liza y congela el corazón.
[D]No te [F#m]rindas hay [G]mucho más por conocer
[A]En la pa[D]ciencia tu [F#m]corazón [G]vuelve a [A]ver.

[Bm]¡Tranquilo! [G]Que no estás solo siempre hay alguien con[D]tigo
[A]Y que en sus brazos te carga ren[Bm]dido
[G]Te vuelves más ligero si te aban[D]donas en [A]mí.
[Bm]No te agites, [G]cierra los ojos, abre el alma y ven con[D]migo
[A]Soy tu refugio, tu resguardo, y tu a[Bm]migo
[G]En mi palabra sabrás donde es[D]tá el ca[A]mino.
`
  },
  {
    id: 380,
    titulo: "TRES CORAZONES",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "Eb",
    letra: `
[Eb]Su corazón acep[Gm]taba vivir la ale[Bb]gría ligada al do[F]lor
[Eb]En sueños le confir[Gm]maban y aún con te[Bb]mor aceptó la mi[F]sión
[Eb]Dos corazones u[Gm]nidos entrela[Bb]zados rogaban a [F]Dios
[Eb]Cuidar del tesoro más [Gm]grande, ofrenda di[Eb]vina, el Hijo de [F]Dios. [27]

[Bb]Son los cora[Eb]zones [Gm]que le dan vida a lo que [F]soy
[Bb]Jesús, José y Ma[Eb]ría, Tres Cora[Gm]zones, en un solo A[F]mor.

[Eb]Dónde cabe tanto a[Gm]mor, que un [Bb]único Dios quiso un Cora[F]zón.
[Eb]Un Corazón prisio[Gm]nero, se que[Bb]dó en la tierra ex[F]puesto al do[Eb]lor. [28]

[Eb]Dos corazones u[Gm]nidos entrela[Bb]zados ro[F]gaban a Dios.
[Eb]Cuidar del tesoro más [Gm]grande, ofrenda di[Eb]vina, el Hijo de [F]Dios. [29]

[Eb]Entrega[Bb]ré [Gm]Confia[F]ré [Eb]Descansa[Bb]ré [Gm]Unido a [F]ellos. (x2)
`
  },
  {
    id: 381,
    titulo: "TÚ EN MÍ, YO EN TI",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "C",
    letra: `
[C]Me amas tanto que te [Em]das para [D]mí
[C]Te haces pequeño para ha[Em]bitar en [D]mí
[C]Tú en [Em]mí, [D]Yo en Ti.

Me amas tanto que quisiste quedarte
Vives verdaderamente en cuerpo y sangre
Tú en mí, Yo en Ti.

[Am]No soy [G]digno de que [C]entres en mi [D]casa
Pero una pa[Am]labra basta[G]rá para sa[C]narme.
`
  },
  {
    id: 382,
    titulo: "UNA LUZ",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "C",
    letra: `
[C]Hay una [F]luz que ilu[C]mina mis ca[F]mi[C]nos
[C]Que me acom[F]paña en la oscuri[G]dad
[F]Aunque ca[G]mine por de[Am]siertos y mon[G]ta[C]ñas
[F]Es esa [G]luz la que siempre esta[C]rá.

[F]Él es Je[G]sús mi amigo incompa[C]rable
[F]Y de su [G]mano aprendo a cami[C]nar
[F]Cuando me [E7]caigo él es quien me le[Am]van[D9]ta
[F]Él va con[G]tigo, me cubre con su [C]paz.

[F]Luz que ilu[G]mina, luz que da [C]vida, [G]luz que [Am]llena [G]mi exis[F]tir
[F]Luz que me a[G]lumbra, [C]luz [G]de mi [Am]vi[G]da.
`
  },
  {
   id: 383,
  titulo: "VIDA EN ABUNDANCIA",
  autor: "Anónimo",
  categoria: "adoracion",
  tonoOriginal: "G (capo 1)",
  letra: `
[G]Los lirios del [C]campo y las [D]aves del cielo
[G]No se preo[C]cupan por que es[D]tán en mis manos
[Em]Tené con[C]fianza en mí, [G]acá estoy [D]junto a vos.

[G]Amá lo que [C]sos y tus circuns[D]tancias
[G]Estoy con [C]vos, con tu [D]cruz en mi espalda
[Em]Todo termi[C]nará bien, [G]yo hago nuevas [D]todas las cosas.

[Em]Yo vengo a tra[C]erte vida, [G]vida en abun[D]dancia.
[Em]Vida en abun[C]dancia, [D]en abundancia.
[Em]Yo soy el ca[C]mino, [G]la verdad y la [D]vida.
[Em]Vida en abun[C]dancia, [D]en abundancia.

[G]No hice al [C]hombre para que es[D]té solo
[G]Caminen [C]juntos como [D]hermanos
[Em]Sopórtense [C]mutuamente, [G]ámense [D]unos a otros.

[G]La felici[C]dad de la vida [D]eterna
[G]Empie..[C]za con[D]migo en la tierra
[Em]Senti..[C]te vivo, [G]la fiesta del [D]reino comienza acá.

[Em]Yo vengo a tra[C]erte vida, [G]vida en abun[D]dancia.
[Em]Vida en abun[C]dancia, [D]en abundancia.
[Em]Yo soy el ca[C]mino, [G]la verdad y la [D]vida.
[Em]Vida en abun[C]dancia, [D]en abundancia.
`
},
   {
    id: 384,
    titulo: "YO TE MIRO (Pan del cielo)",
    autor: "Anónimo",
    categoria: "adoracion",
    tonoOriginal: "Am(capo3)",
    letra: `
Intro: [Am] [F] [C] [G]

[Am]Ahí estas yo te [F]miro
Tú me [C]miras a mí, nos mi[G]ramos así

Una con[Am]quista, un a[F]mor
Que por las [C]grietas tu en[G]tras
A lo [Am]más pro[F]fundo [D]de mi cora[G]zón.

[F]Pan del [G]cielo, [Am]Pan de amor, alimento de mi [C]vida
[F]Pan del [G]cielo, [Am]pan de amor, Sangre y Cuerpo del [C]Señor.
[F]Ooh[G][Am] 

No hay a[Am]mor, más [F]grande
[C]que el que has Dado por [G]mí
Te de[Am]jaste, tu [F]cuerpo
[D]para poderte mirar [G]así.

[F]Pan del [G]cielo, [Am]Pan de amor, alimento de mi [C]vida
[F]Pan del [G]cielo, [Am]pan de amor, Sangre y Cuerpo del [C]Señor.
[F]Ooh[G][Am] 

[(Am] [F] [C] [G)]

[Am]Yo te miro,[F]tú me miras, 
nos [C]miramos así, e[G]stás ahí.

[F]Pan del [G]cielo, [Am]Pan de amor, alimento de mi [C]vida
[F]Pan del [G]cielo, [Am]pan de amor, Sangre y Cuerpo del [C]Señor. [(x2)]

[F]Pan del [G]cielo, [Am]Pan de amor, alimento de mi [C]vida
[F]Pan del [G]cielo, [Am]pan de amor, hasta que se apague mi [C]voz. [F] [G] [Am] 

[Am]Ahí estas yo te [F]miro
Tú me [C]miras a mí, nos mi[G]ramos así
`
  },
  {
  id: 387,
  titulo: "Derrama tu gracia",
  autor: "Verónica Sanfilippo",
  tonoOriginal: "Em",
  categoria: "adoracion",
  letra: `[Intro] Em - C - D (x2)

[C] Tu pre[D]sencia es [Em] como un [D] manan[C]tial de agua [G] viva que fluye sobre mí.
[Em] Un fuego ar[D]diente que re[C]aviva y quema mi exis[Em]tir.

[C] Oh [Em] oh [D] oh (x2)

[C] Derrama tu [D] gracia, [Em] bendita pre[D]sencia,
[C] resguardo de mi [G] alma, [D] quiero ala[Em]barte por la eternidad.

[C] Oh [Em] oh [D] oh (x2)

[Em] Como jar[D]dín en [C] prima[G]vera florece en mi interior,
[Em] como el in[D]cienso que se [C] quema, eleva mi ora[Em]ción.

[C] Oh [Em] oh [D] oh (x2)

[C] Derrama tu [D] gracia, [Em] bendita pre[D]sencia,
[C] resguardo de mi [G] alma, [D] quiero ala[Em]barte.
[C] Derrama tu [D] gracia, [Em] bendita pre[D]sencia,
[C] resguardo de mi [G] alma, [D] quiero ala[Em]barte por la eternidad.

[C] Oh [G] oh [D] (x2)

[C] Rey de [G] reyes; Se[D]ñor de se[Em]ñores,
[C] Rey de la cre[G]ación; [D] Todopode[Em]roso [D].
[C] Cristo [G] Rey; Cor[D]dero de [Em] Dios,
[C] Vida de ver[G]dad; [D] Príncipe de [Em] paz.`
},
{
  id: 388,
  titulo: "Instrumento de tu amor",
  autor: "Verónica Sanfilippo",
  tonoOriginal: "A",
  categoria: "adoracion",
  letra: `[A] Así como el [E] ave vuela y la [F#m] flor crece
[Bm] todo porque tu amor lo [E] quiere.
[A] Así como el [E] árbol es re[F#m]fugio cuando llueve
[D] porque tu amor todo lo [Bm] puede.

[D] [E] Puedo [F#m] oír tu voz [D] [E] llamán[F#m]dome al desierto
[D] [E] no puedo de[F#m]cir no, [D] te [Bm] sigo aún sin [E] verlo.

Porque [Bm] sé que [A] tus [D] brazos me le[Bm]vantan [A] si me [E] caigo
[Bm] [A] quiero [D] ir contigo cami[E]nando.

[F#m] Aquí [E] está mi [D] voz [E] úsala y [F#m] hazla un [E] instru[D]mento de tu [E] amor.
[F#m] Contigo [E] yo [D] voy, [E] tu gracia [F#m] me sos[E]tiene y [D] forta[E]lece el corazón.

[D] [E] A todo lu[F#m]gar [D] [E] donde [F#m] quieras llegar
[D] [E] mi vida es [F#m] para ti, [Bm] te quiero se[E]guir.`
},
  {
    id: 389,
    titulo: "Sopla",
    autor: "Veronica Sanfilippo",
    categoria: "adoracion, espiritusanto",
    tonoOriginal: "F",
    letra: `
[Dm] Sopla, como [Bb] suave brisa [C] siempre [Dm] sopla
[Bb] Como viento [C] que renueva [F] sopla,
[Gm] y cambia [Dm] todo de lugar.

[Dm] Inunda, cada [Bb] espacio de mi [C] ser [Dm] inunda
[Bb] Con su fuego [C] abrazador [F] inunda,
[Gm] y llena [C] todo de su paz.

[F] Es el Espíritu de [C] Dios
[Dm] Luz que penetra el [Bb] corazón
[F] Y toca mi [C] alma
[Dm] Y toca mi [Bb] alma

[F] Ven a morar en [C] mí
[Dm] Inúndame y cambia
[Bb] Todo mi existir
[F] Ven a morar en [C] mí
[Dm] Inúndame y cambia
[Bb] Todo mi existir

[F] Sopla sobre [C] mí
[Gm] Llena [F] mi exis[C]tir
[Gm] Toca mi [F] alma; toca, Se[C]ñor
[Bb] Toca mi [C] alma

[F] Ven a morar en [C] mí
[Dm] Inúndame y cambia
[Bb] Todo mi existir
[F] Ven a morar en [C] mí
[Dm] Inúndame y cambia
[Bb] Todo mi existir

[C] Espíritu de [F] Dios [C] 
[Dm] Espíritu [Bb] Santo
[F] Espíritu de [C] Dios
[Dm] Espíritu [Bb] Santo

[F] Toca mi [C] alma
[Dm] Toca mi [Bb] alma
[F] Toca mi [C] alma
[Dm] Toca mi [Bb] alma
[F] Espíritu de Dios
`
  },
  {
  id: 390,
  titulo: "EN TI PERFECTO",
  autor: "Trigo 13",
  tonoOriginal: "G (capo 3)",
  categoria: "adoracion",
  letra: `
(capo 3)
[C] Cuantas veces le he pre[D]guntado la ra[G]zón de mi exis[Em]tir,
[C] cuantas veces he du[D]dado de por [G] qué me hizo a[C]sí.
[G] Tan desnudo, tan he[D]rido,
[G] incapaz de dar a[C]mor,
[D] hoy te pido de ro[G]dillas un por [C] qué Se[D]ñor.

[Em] Pues Yo te hice a[C]sí per[G]fecto, de ver[D]dad,
[Em] pensé en cada [C] uno de tus [G] gestos para a[D]mar,
[Em] pues en ti están mis [C] huellas
[G] para que otros puedan [D] ver
[C] a través de alguien pre[G]cioso
[D] maravillas que cre[C]é. (x2)

[D] Que tú eres mi re[C]flejo... [D] aquí tienes tu por[C]qué.`
},
{
  id: 404,
  titulo: "(Tú) El único Rey",
  autor: "Tuyo",
  categoria: "adoracion",
  tonoOriginal: "A (capo 1)",
  letra: `
[estribillo]
T[A]ú, el Único R[F#m7]ey
Que tiene que rein[D2]ar
El Único Señ[E]or al que voy a 
alaba[A]r
Hoy levanto el c[E/G#]ora__z[F#m7]ón
Al que lo conquist[D2]ó
Simplem[E4]ente porque Tú eres Di[A]os
[A2]Quiero ponerte
Por encima de t[D2(6)]odo
En cada mom[F#m7(11)]ento
Sentarte en el tr[E11]ono
Que tu alab[A2]anza

[estribillo]

T[A]ú, el Único R[F#m7]ey
Que tiene que rein[D2]ar
El Único Señ[E]or al que voy a 
alaba[A]r
Hoy levanto el c[E/G#]ora__z[F#m7]ón
Al que lo conquist[D2]ó
Simplem[E4]ente porque Tú eres Di[A]os

[A2]Quiero ponerte
Por encima de t[D2(6)]odo
En cada mom[F#m7(11)]ento
Sentarte en el tr[E11]ono

Que tu alab[A2]anza
Continúa después del anuncioEliminar anuncios
Esté siempre en mi b[D2(6)]oca
Y reconoc[F#m7(11)]er que Tú eres Di[E11]os

[Pre-estribillo]

Que alab[D]arte a Ti, Señ[E11]or
Sea si[A]empre l[E/G#]o prim[F#m7(11)]ero
[A/C#]

F[D]ijo mi mirada en el ci[E]elo

[estribillo]

T[A]ú, el [E/G#]Único R[F#m]ey que tiene 
que re[D]inar
El Único Señ[E4]or al que voy a 
alaba[A2]r
Hoy lev[E/G#]anto el coraz[F#m]ón
Al que lo conquist[D]ó
Simplem[E4]ente porque Tú eres Di[A]os

[Interlúdio 2] A  D  A/C#  

[Bm7] [E]

[Segunda Parte]

Y a T[D]i, toda la alab[C#m]anza
Todo el pod[Bm7]er y el honor
Toda la gl[E]oria al Señor

Y a T[D]i, toda la alab[C#m]anza
Todo el pod[Bm7]er y el honor
Toda la gl[E]oria al Señor

Y a T[D]i, toda la alab[C#m]anza
Todo el pod[Bm7]er y el honor
Toda la gl[E]oria al Señor

Y a T[D]i, toda la alab[C#m]anza
Todo el pod[Bm7]er y el honor
Toda la gl[E]oria al Señor

[Estribillo Final]

T[A]ú, el Únic[E/G#]o    R[F#m]ey que tiene
 que r[E]ein[D]ar
El Único Señ[E]or al que voy a 
alaba[A]r
Hoy levanto el c[E/G#]ora__z[F#m]ón
Al que lo conqu[E]ist[D]ó
Simplem[E]ente porque Tú eres

T[A]ú, el Único R[F#m]ey que tiene que
 r[E]ein[D]ar
El Único Señ[E]or al que voy a 
alaba[A]r
Hoy levanto el c[E/G#]ora__z[F#m]ón
Al qu[E]e lo conquist[D]ó
Simplem[E]ente porque Tú eres Di[A]os

[Final] D  A  D  A
`
},
    // --- SECCIÓN: CANTOS DEL Espíritu Santo status:terminado ---
     {
    id: 255,
    titulo: "EL ROCK DEL ESPÍRITU",
    autor: "Anónimo",
    categoria: "alabanza, espiritusanto",
    tonoOriginal: "D",
    letra: `
[D]Es como un río, es la [G]lluvia,
[A]Es un soplo, es el [D]fuego... ¿Qué es?,
[A]Es el Espíritu de Dios que quiere ac[D]tuar. (x2)

[D]Ay va bajando, va cayendo,
[G]Va soplando, va ardiendo,
[A]Es el Espíritu de Dios que quiere ac[D]tuar.

[D]Bajando en ti, [G]Cayendo en ti,
[A]Soplando en ti, [D]Ardiendo en mí. (x2)
`
  },
   {
    id: 266,
    titulo: "YA LLEGÓ, YA LLEGÓ",
    autor: "Anónimo",
    categoria: "alabanza, espiritusanto",
    tonoOriginal: "G",
    letra: `
[G]Ya llegó, ya llegó, El [D7]Espíritu Santo ya lle[G]gó. (x2)
[D7]Lo siento en las manos, lo siento en los pies,
[G]Lo siento en el alma y en todo mi ser. (x2)

[D7]Aquél que caminó sobre las [G]aguas. (x2)
[D7]Está aquí, está a mi [G]lado. (x2)
[D7]Como un rayo, cayendo sobre [G]mí. (x2)
[D7]Me quema, me quema, me quema, [G]me quema, me quema, me quema. (x2)
`
  },
   {
    id: 263,
    titulo: "PENTECOSTÉS DÍA DE FIESTA",
    autor: "Anónimo",
    categoria: "alabanza, espiritusanto",
    tonoOriginal: "G",
    letra: `
[G]Pentecostés día de fiesta, Pentecostés día de [G7]gozo.
[C]Pentecostés día de la [G]Iglesia, [D7]De la Iglesia del Se[G]ñor. (x2)

[D7]Ya se derrama, ya se derrama,
[G]Ya se derrama el Espíritu de Dios. (x2)

[D7]Ya se siente, ya se siente...
[G]Aleluya, aleluya, Aleluya al Espíritu de Dios.
`
  },
   {
    id: 270,
    titulo: "ENCIÉNDEME",
    autor: "Hakuna",
    categoria: "adoracion, espiritusanto",
    tonoOriginal: "E",
    letra: `
[E]Hoy quiero, Señor, ponerlo todo en tu pre[A]sencia
[C#m]Darme hasta gastarme conti[B]go y por Ti.
[E]Hoy quiero, Señor, ponerlo todo ante tu [A]puerta
[C#m]Para en todo a[B]marte y ser[E]vir.

[E]Enciéndeme y déjame arder donde haga [A]falta,
[E]Enciéndeme y déjame ser tu [A]luz,
[E]Y así poder llevarte hasta todas las [A]almas,
[E]Saciar la sed que [B]tienes Tú desde la [E]cruz.

[E]Hoy quisiera madre, poner todo en tu pre[A]sencia,
[C#m]Darme hasta gastarme, de[B]cirle que sí,
[E]Hoy te pido madre, que dejes mi puerta a[A]bierta,
[C#m]Para en todo a[B]marle y ser[E]vir.
`
  },
  {
    id: 271,
    titulo: "EL ESPÍRITU DE DIOS",
    autor: "Anónimo",
    categoria: "espiritusanto",
    tonoOriginal: "D",
    letra: `
[D]El Espíritu de [G]Dios está en este lu[D]gar, [G]
[D]El Espíritu de [G]Dios se mueve en este lu[A]gar,
[D]Está aquí para con[G]solar, [D]está aquí para libe[G]rar,
[D]Está aquí para guiar,
[G]El Espíritu de [A]Dios está a[D]quí. (x2)

[D7]Muévete en [G]mi[A]í, Muévete en [D]mí, [Bm]
[G]Toca mi mente, mi [A]corazón,
[F#m]Llena mi vida de [Bm]tu Amor,
[G]Muévete en mi [A]Dios Espí[D]ritu muévete en [Bm]mi.
[G]Muévete en mi [A]Dios Espí[G]ritu [Gm]muévete en [D]mi.
`
  },
  {
    id: 272,
    titulo: "VEN ESPÍRITU SANTO",
    autor: "P. Cristóbal Fones",
    categoria: "espiritusanto",
    tonoOriginal: "D",
    letra: `
[D]Ven, Espíritu [Am7]Santo Crea[G]dor
[Bm]Ven, Fuego que a[A]lienta la vida
[F]Ven, [Cm]Agua que [Dm]limpia y nos fe[C]cunda
[Bb]Soplo [Gm]que nos hace an[F]dar.

[Bb]Empujas la his[Gm7]toria hacia la liber[F]tad
[C]Deshaces los [Dm]miedos que atan
[Bb]Derribas los yugos que o[A7]primen la voz
Sacudes las cobardías.

[F]Más dentro de [Cm7]mí que yo [Bb]mismo
Me [A]habitas, Es[Gm7]píritu de amor
[F]Me mueves por [Cm7]dentro, me [Bb]lanzas a amar
Me [A]llenas de [Gm7]gracia y ternura.

[F]Me alzas del [Cm7]polvo, me [Bb]pones de pie
Me [A]abres de [Gm7]nuevo el camino
[F]Me imprimes a [Cm7]fuego en el [Bb]corazón
El [A]rostro de [Gm7]Cristo el Se[F]ñor.
`
  },
  {
    id: 273,
    titulo: "ESPÍRITU DE DIOS",
    autor: "Anónimo",
    categoria: "espiritusanto",
    tonoOriginal: "Em",
    letra: `
[Em]Espíritu de Dios,
[D]Llena mi vida,
[C]Llena mi alma,
[B7]Llena mi ser.

[Em]Lléname, lléname,
[D]Con tu presencia, lléname,
[C]Lléname con tu poder, lléname,
[B7]Lléname con tu bondad.

[Em]Si Dios no vive en mí,
[D]Vivo sin rumbo,
[C]Vivo sin calma,
[B7]Vivo sin luz.
`
  },
  {
    id: 274,
    titulo: "ESPÍRITU SANTO (Athenas)",
    autor: "Athenas",
    categoria: "espiritusanto",
    tonoOriginal: "G",
    letra: `
Intro: [Em] [G] [D]

[D] Espí[Em]ritu de [G]Dios, espí[D]ritu santo
[Em] Mi alma tiene [G]sed de ti, [A]mi alma tiene sed
[Em] Espí[G]ritu de [D]Dios, espí[D]ritu santo
[Em] Mi alma tiene [G]sed de ti, [A]mi alma tiene sed

[D/F#] Espí[G]ritu santo ven a ar[A]der
[Bm] Derrama tu [G]fuego y tu po[A]der
[G] Actúa en [Bm]mí, actúa en [A]mí, actúa en mí

[Em] Estás derra[Bm]mando la un[A]ción aquí (x4)
`
  },
  {
    id: 275,
    titulo: "INUNDA ESTE LUGAR",
    autor: "Anónimo",
    categoria: "espiritusanto",
    tonoOriginal: "G",
    letra: `
Intro: [Am] [C] [G] [D]

[G] Tú eres la fuente de [D]vida que brota sin cesar
[Am] Inunda este lu[C]gar, Espíritu Santo
[G] Tú eres el río que [D]corre llevando vida donde no hay
[Am] Inunda este lu[C]gar, Espíritu Santo

[Em] Ven sobre nos[D]otros, llenar este lu[C]gar
Con lluvia de [Am]gracia, Oh, oh [G]ven

[G] Espí[D]ritu Santo, yo quiero can[Am]tar
[C] Libre de todo y lleno de tu un[G]ción (x2)

[Am] Derrama tu glo[C]ria, Derrama tu fuer[G]za
Derrama tu po[D]der, Señor. (x3)
`
  },
  {
    id: 276,
    titulo: "LENGUAS DE FUEGO",
    autor: "Anónimo",
    categoria: "espiritusanto",
    tonoOriginal: "G",
    letra: `
Intro: [C9] [G/B] [D]

[C9] Como en Pentecos[G]tés estamos aquí
[C9] Todos ren[G/B]didos a tu a[D]mor
[C9] Ven sobre nos[G/B]otros, Espíritu Santo
[Am] Derrama tu [D]gloria aquí

[C9] [G] [Em] [D]
Ven, Santo Espíritu
[C9] [G] [Em] [D]
Derrama tus dones aquí
[C9] Con lenguas de [D/F#]fuego
[G] Reposa tu [C] glo[G/B]ria [Am]
[D] ¡Oh ven!

[Am] Llénanos con tu po[G/B]der, [D] Llénanos con tu unción
[Am] Llénanos con tu a[G/B]mor, [D] Hasta desbor[C]dar [G/B] [D]
`
  },
  {
    id: 277,
    titulo: "MIX DEL ESPÍRITU SANTO",
    autor: "Anónimo",
    categoria: "espiritusanto",
    tonoOriginal: "E",
    letra: `
[E]Manda el fuego, Señor, [A] Manda el [Am]fuego, Señor
[E]Y bautí[B7]zanos con tu po[E]der. (x2)

[E]Señor libéranos, [A] Señor libéranos
[B7]Señor libéranos con tu po[E]der. (x2)

Yo tengo un gozo en el alma (donde?)
gozo en el alma (donde?)
gozo en el alma y en mi ser (aleluya gloria a Dios)
son como rios de agua viva 
rios de agua viva, rios de agua viva en mi ser 

[E]El amor de Dios es maravi[B7]lloso. (x3)
¡Grande es el amor de [E]Dios!

[E]Tan alto que no puedo estar más [B7]alto que el
[E]Tan bajo que no puedo estar más [B7]bajo que el
[E7]Tan ancho que no puedo estar a[A]fuera de el
[B7]¡Grande es el amor de [E]Dios!
`
  },
  {
    id: 278,
    titulo: "SECUENCIA DEL ESPÍRITU SANTO",
    autor: "Anónimo",
    categoria: "espiritusanto",
    tonoOriginal: "Am",
    letra: `
[Am]Ven, dulce [C]huésped del [Am]alma,
[C]Descanso de [Am]nuestro esfuerzo.
[C]Tregua en el [Am]duro trabajo,
[C]Brisa en las [Am]horas de fuego,
[C]Gozo que en[Am]juga las lágrimas,
[C]Y recon[E]forta en los duelos.

[Am]Ven, Espíritu [C]Santo de Dios,
[Am]Mándanos tu luz.
[F]Padre amoroso del [C]pobre,
[Dm]Don, en tus dones es[E]pléndidos.
[Am]Luz que penetra en las [C]almas:
[Am]Te necesitamos.
[F]Fuente del mayor con[C]suelo. Ven
[Dm]Espíritu Di[E]vino.

[Am]Entra hasta el [C]fondo del [Am]alma,
[C]Divina [Am]luz y enriquécenos.
[C]Mira el va[Am]cío del hombre
[C]Si tú le [Am]faltas por dentro;
[C]Mira el po[Am]der del pecado
[C]Cuando no en[E]vías tu aliento.
`
  },
  {
    id: 279,
    titulo: "SANTO ESPÍRITU",
    autor: "Anónimo",
    categoria: "espiritusanto",
    tonoOriginal: "C",
    letra: `
Intro: [C] [F] [C] / [G] [C] [Am] [F] [C]

[C]Santo espíritu ven, [G]santo espíritu ven a [C]mi
[Am]Santo espíritu [F]ven a mi. (x2)

[C]Ven espíritu santo, ven a lle[G]nar mi cora[C]zón
[Am]Y enciende en el [F]fuego de tu amor.
[C]Envía hoy tu espíritu. [G]Tu espíritu crea[C]dor
[Am]Y renueva hoy la [F]tierra y tu cre[C]ación.

[C]Oh dios que ilumi[G]naste mi cora[C]zón
[Am]Conduce tu espí[F]ritu consola[C]dor.
[C]Hazme más dócil [G]a tu inspira[C]ción
[Am]Quiero gozar [F]siempre de bien y de tu con[C]suelo.

[D]Santo espíritu ven, [A]santo espíritu ven a [D]mi
[Bm]Santo espíritu [G]ven a mi. (x2)
`
  },
    // --- SECCIÓN: CANTOS DE Salida ---
  {
    id: 230,
    titulo: "ÁNGELES DE DIOS",
    autor: "Anónimo",
    categoria: "salida",
    tonoOriginal: "E",
    letra: `
[E]Si sentí su murmullo muy cerca de ti,
[B]Un ángel llegando para recibir,
[A]Todas tus oraciones y llevarlas al cielo.
[E]Así abre el corazón y comienza alabar
[B]el gozo del cielo todo sobre el altar
[A]hay un ángel llegando y bendiciones en sus [B]manos.

[E]Hay ángeles volando en este lugar
[B]En medio del pueblo y junto al altar
[A]Subiendo y bajando en todas las direcciones
[E]No sé si la iglesia subió o si el cielo bajo
[B]Si sé que está lleno de ángeles de Dios
[A]Porque el [B]mismo Dios está a[E]quí.

[E]Cuando los Ángeles pasan la iglesia se alegra,
[B]Ella canta ella llora ella ríe y congrega,
[A]Enfrenta el infierno disipa el mal.
[E]Siente la brisa del vuelo de tu ángel ahora,
[B]Confía hermano pues esta es tu hora,
[A]La bendición llegó y [B]te la vas a lle[E]var.
`
  },
  {
    id: 231,
    titulo: "DEMOS GRACIAS AL SEÑOR",
    autor: "Anónimo",
    categoria: "salida",
    tonoOriginal: "A",
    letra: `
[A]Demos gracias al Señor, [D]demos gra[A]cias;
[D]Demos [E]gracias al Se[A]ñor. (x2)

[D]Por las mañanas las [A]aves cantan,
[E]Las alabanzas a [A]Cristo Salvador;
[D]Y tú, hermano, ¿por [A]qué no cantas
[E]Las alabanzas a [A]Cristo Salvador?

[D]Y por las tardes las [A]flores cantan,
[E]Las alabanzas a [A]Cristo Salvador:
[D]Y tú, hermano, ¿por [A]qué no cantas
[E]Las alabanzas a [A]Cristo Salvador?

[D]Y por las noches los [A]cielos cantan,
[E]Las alabanzas a [A]Cristo Salvador;
[D]Y tú, hermano, ¿por [A]qué no cantas
[E]Las alabanzas a [A]Cristo Salvador?
`
  },
  {
    id: 232,
    titulo: "ÉXODO Y LIBERACIÓN",
    autor: "Anónimo",
    categoria: "salida",
    tonoOriginal: "Dm",
    letra: `
[Dm]Peregrino a [F]dónde vas, [Gm]Sino sabes a [A7]donde ir,
[Dm]Peregrino por un ca[C]mino, Que va mo[Dm]rir.
[Dm]Si el desierto [F]es un arenal, [Gm]El desierto de [A7]tu vivir
[Dm]Quien te guía y te a[C]compaña, En tu sole[Dm]dad.

[Gm]Solo Él mi [Dm]Dios, que me [F]dio a liber[A7]tad
[Gm]Solo Él mi [Dm]Dios, [C]me guia[Dm]ra.

[Dm]Peregrino que a [F]veces vas, [Gm]Sin un rumbo en tu [A7]caminar,
[Dm]Peregrino que vas, [C]Cansado de tanto an[Dm]dar.
[B7]Busca [Em]fuentes para [G]tu sed [Am]Y un rincón donde [B7]descansar,
[Em]Vuelve amigo que a[D]quí en mi casa [Em]Lo encontraras.

[Am]Solo Él mi [Em]Dios, que me [G]dio a liber[B7]tad
[Am]Solo Él mi [Em]Dios, [D]me guia[Em]ra.
`
  },
  {
    id: 233,
    titulo: "HAY PRISA EN EL AIRE (Himno JMJ)",
    autor: "Anónimo",
    categoria: "salida",
    tonoOriginal: "E",
    letra: `
Intro: [E] [Eadd9/G#] [C#m7] [Bsus4] [Asus2]

[F#m11]De todo el mundo hacia [Eadd9/G#]este lugar
[Asus2]partimos, vo[Bsus4]lamos, lle[C#m7]gamos a[Bsus4/D#]quí.
[F#m11]Con María aprende[Emaj9]mos un sí.
[F#m11]Queremos ser[Esus9/G#]vir a la volun[Asus2]tad del Se[Bsus4]ñor, [C#m7]Padre [G#/C#]Dios.

[F#m11]Llamados a [Eadd9/G#]ser con [Asus2]Cristo Je[Bsus4]sús.
[C#m7]Para [G#/C#]dar, para es[F#m11]tar dispos[Eadd9/G#]tos al [Asus2]sí, como hizo Ma[Bsus4]ría.

[E]TODOS VAN A ESCUCHAR NUESTRA [Bsus4]VOZ
[Asus2]LEVANTEMOS LOS [Bsus4]BRAZOS, HAY [C#m7]PRISA EN EL [Bsus4/D#]AIRE
[E]JESÚS VIVE, NO TE ABANDO[Eadd9/G#]NARÁ
[C#m7]NUNCA DEJA[Bsus4]REMOS DE A[Asus2]MAR.

[E]Tú que siempre [Bsus4]estás buscándote,
[Asus2]ven a descu[Bsus4]brir, [C#m7]ver lo que yo [Bsus4/D#]vi.
[E]Con nosotros ven a [Eadd9/G#]ver más allá
[C#m7]de aquello que [Bsus4]haces, y no te deja son[Asus2]reír y amar.
[F#m11]No mires a[Eadd9/G#]trás, no [Asus2]digas que [Bsus4]no.
[C#m7]Oye tu cora[G#/C#]zón y sal sin [F#m11]miedo a [Eadd9/G#]esta mi[Asus2]sión. [Bsus4]
`
  },
  {
    id: 234,
    titulo: "OH PECADOR",
    autor: "Anónimo",
    categoria: "salida",
    tonoOriginal: "Em",
    letra: `
[Em]Oh! pecador ¿dónde vas errante?,
[D]Oh! pecador ¿dónde vas errante?,
[Em]Oh! pecador ¿dónde vas errante?,
[C]¿A [B7]dónde i[Em]rás?

[Em]De tu ambición el amor se esconde,
[D]De tu ambición el amor se esconde,
[Em]De tu ambición el amor se esconde,
[C]¿A [B7]dónde i[Em]rás?

[Em]Busca la paz el mal te esta asechando,
[D]Busca la paz el mal te esta asechando,
[Em]Busca la paz el mal te esta asechando,
[C]¿A [B7]dónde i[Em]rás?
`
  },
  {
    id: 235,
    titulo: "QUIERO ALABARTE",
    autor: "Anónimo",
    categoria: "salida",
    tonoOriginal: "E",
    letra: `
[E]Quiero alabarte más y más aún,
[C#m]Quiero alabarte más y más aún,
[A]Buscar tu volun[F#m]tad, tu [F#]gracia conocer,
[B]Quiero alabarte.

[E]Quiero servirte más y más aún,
[C#m]Quiero servirte más y más aún,
[A]Buscar tu volun[F#m]tad, tu [F#]gracia conocer,
[B]Quiero servirte.

[E]Las aves del cielo cantan para ti,
[C#m]Las bestias del campo reflejan su poder,
[A]Quiero can[F#m]tar, quiero le[F#]vantar mis manos a [B]ti. (x2)

[E]Gloria a Dios Aleluya,
[C#m]Gloria a Dios Aleluya,
[A]Gloria a Dios Aleluya,
[B]Gloria a Dios Alelu[E]ya.
`
  },
  {
    id: 236,
    titulo: "TE DOY GRACIAS JESÚS",
    autor: "Anónimo",
    categoria: "salida",
    tonoOriginal: "D",
    letra: `
[D]Te doy gracias Jesús,
[Bm]Por haberme encontrado,
[G]Por haberme sal[A]vado,
[D]Te doy gracias Jesús. (x2)

[D]Hoy ya se el camino,
[Bm]Y hacia él me dirijo,
[G]Por la senda bendita,
[A]Que representa al hijo.

[D]Mi amor era pequeño,
[Bm]Ya lo he encontrado,
[G]Y ese pequeño amor,
[A]Ya se ha agigan[D]tado.
`
  },
  {
    id: 237,
    titulo: "TUS MARAVILLAS",
    autor: "Anónimo",
    categoria: "salida",
    tonoOriginal: "Am",
    letra: `
Intro: [Am] [Em] [F] [C] [Dm] [Am] [F] [G] (x2) [Am]

[F]Ahora puedes de[G]jarme
[Em]Ir en paz, oh, Se[Am]ñor,
[Dm]Porque he [C]visto tus [Bb]maravi[G]llas
[F]Y tu pueblo en [G]fiesta
[Em]Por las calles mar[Am]chará
[Dm]Cantará [C]todas tus [Bb]maravi[G]llas.

[Am]En tu pre[Em]sencia que [F]llena de a[C]mor
[Am]Toda la [Em]vida y [F]cada jor[C]nada
[Bb]Contigo un alma [F/A]sola
[Gm]Somos un solo [F]corazón
[Bb]La luz que ti re[F/A]splandece
[Gm]Por siempre ilumi[C]nará.
`
  },
  {
    id: 238,
    titulo: "TOMADO DE LA MANO",
    autor: "Anónimo",
    categoria: "salida",
    tonoOriginal: "C",
    letra: `
[C]Tomado de la [F]mano con Jesús yo [G]voy,
[Em]Le sigo como oveja que encon[Am]tró al pastor.
[F]Tomado de la [G]mano con Jesús yo [C]voy,
A donde Él va. (x2)

[C]Si Jesús me [F]dice a[G]migo,
[Em]Deja todo y [Am]ven conmigo,
[F]Donde todo es [G]más hermoso y más fe[C]liz.

[C]Si Jesús me [F]dice a[G]migo,
[Em]Deja todo y [Am]ven conmigo,
[F]Yo mi mano pon[G]dré en la suya e i[C]ré con Él.

[C]Yo te lle[F]varé a[G]migo,
[Em]A un lugar [Am]junto conmigo,
[F]Donde el sol ya [G]las estrellas, aún bri[C]llan más.
`
  },
  {
    id: 239,
    titulo: "UNO",
    autor: "Anónimo",
    categoria: "salida",
    tonoOriginal: "G(capo3)",
    letra: `
[Intro] G C Em D

[G]En un [C]mundo que no [Em]gira en mi [D]dirección,
[G]sobre ca[C]minos que no of[Em]recen una [D]solución.
[G]No [C]voy pues [Em]sé que hay [D]algo mejor,
[G]y en [C]mi inte[Em]rior es[D]cucho tu voz.

[G]Y al est[C]ar yo camin[Em]ando en contra [D]del reloj,
[G]fui un i[C]luso al pen[Em]sar que estaba [D]solo yo.
[G]Tu f[C]uego en [Em]mí lo es[D]tá pidiendo:
[G]un[C]irme en [Em]ti, ser [D]uno solo.[Am]

[Am]Ven a nuest[Em]ra presen[G]cia,
danos [C]esa fuerza de gri[D]tar a una voz.

[G]Danos[C] un [Em]solo cora[D]zón 
[G]y[C] una [Em]sola [D]alma Señor,
[G]que [C]tu amo[Em]r sea [D]de nosotros,
uno [D]solo y el mismo 
[G]Dios. [C]EOoh [C]eooo [D]eooo

[G]Y ahora u[C]nidos con el [Em]fuego de tu Es[D]píritu,
[G]ya no hay [C]miedo de tor[Em]mentas pues a[D]quí estás Tú.
[G]¿Quién [C]contra [Em]mí?, si es[D]tás conmigo,
[G]tu ha[C]blar en [Em]mí es [D]mi destino.

[Am]Ven a nuest[Em]ra presen[G]cia,
danos [C]esa fuerza de gri[D]tar a una voz.

[G]Danos[C] un [Em]solo cora[D]zón 
[G]y[C] una [Em]sola [D]alma Señor,
[G]que [C]tu amo[Em]r sea [D]de nosotros,
uno [D]solo el reino de
[G]Dios. [C]EOoh [C]eooo [D]eooo

[G]Uno solo [C]y el mismo [Em]Dios, [D]
[G]Uno solo [C]y el mismo [Em]Dios. [D]
([Am]Ven a nuestra pre[Em]sencia, [G]ven a [C]mí) [D]
[G]Uno solo [C]y el mismo [Em]Dios. (x5) [D]`
},
  {
    id: 240,
    titulo: "VEN Y SÍGUEME",
    autor: "Anónimo",
    categoria: "salida",
    tonoOriginal: "G",
    letra: `
[G]Ven y [D]sígueme, no [C]mires atrás
[D]Que de[G]lante está el [C]reino, mi [D]reino de paz. (x2)

[G]Desde antes de for[C]marte, aún
[G]En mi mente te te[D]nía ya
[Em]Ya te[Bm]nía asig[D]nado para [C]ti, [G] [Am] un lla[D]mado.

[G]Y ahora, a ti te [C]toca actuar
[G]Da el paso que [D]tienes que dar
[Em]Deja [Bm]todo, [D]Toma [C]tu cruz [G] [Am] Y [D]sígueme.

[G]Es tan grande mi a[C]mor por ti
[G]Que para que pu[D]dieras tú vivir
[Em]Mi [Bm]sangre, cla[D]vado en la [C]cruz [G] [Am] Yo ver[D]tí.
`
  },
  {
    id: 174,
    titulo: "ALMA MISIONERA",
    autor: "Anónimo",
    categoria: "salida",
    tonoOriginal: "G",
    letra: `
[G]Señor, toma mi [C]vida nueva
[G]antes de que la espera
[D]desgaste [C]años en [D]mi
[G]Estoy dispuesto a lo que [C]quieras
[G]no importa lo que sea
[D]tu llámame a ser[G]vir. [D]

[G]Llévame donde los [D]hombres
[Em]necesiten tus pa[C]labras
[G]necesiten mis [D]ganas de vivir
[G]donde falte la es[D]peranza
[Em]donde falte la ale[C]gría
[G]simplemente [D]por no saber de [G]ti. [C] [D]

[G]Te doy, mi cora[C]zón sincero
[G]para gritar sin miedo,
[D]tu gran[C]deza, Se[D]ñor.
[G]Tendré, mis manos [C]sin cansancio,
[G]tu historia entre mis labios,
[D]y fuerza en la ora[G]ción. [D]

[G]Y así, en marcha [C]iré cantando,
[G]por calles predicando.
[D]Lo be[C]llo que es tu [D]amor.
[G]Señor, tengo alma [C]misionera,
[G]condúceme a la tierra,
[D]que tenga sed de [G]Dios.
`
  },
  {
    id: 155,
    titulo: "Resucitó",
    autor: "Comunidad Católica Shalom",
    tonoOriginal: "G",
    categoria: "pascua, salida",
    letra: 
`[G] [D/F#] [Em] [D] [C] [G/B] [Am7] [D4] (Intro)
[G] [D/F#] [Em] [D] [Am] [G/B] [C] [A/C#] [D4] [D]

[G]Nuevo día sur[D]gió 
Y el [Em]pueblo que en las ti[C]nieblas vió
Una in[G]tensa luz, tu [D]brillo
Y Tu [C]gloria [Am] a resplande[D]cer

[G]Todos a cami[D]nar
Un ca[Em]mino abierto por [C]tus manos
Nueva [G]obra al fin ya po[D]demos ver,
[C]nueva cre[G/B]ación

[Am]Nosotros somos los al[Em]canzados por tu [G]luz [D]
[Am]Fruto de [C]tu [Em]obra en la [D4]cruz [D]

El Se[G]ñor, [D/F#]nuestro Dios
Quien me[Em]rece el loor, todo [C]nuestro amor
Es el [G]Rey que ven[D/F#]ció 
Al Cor[Em]dero, Vic[C]toria, po[D]der, honor, gloria (x2)
Resuci[G]tó! [D/F#] [Em] [C]

[G]Solo un pueblo, un [D/F#]cuerpo, un [Em]canto a Tu lo[C]or
[G]Tu Iglesia, tu es[Am]posa ce[Em]lebra Tu a[C]mor

[G]Soberano / [D]Majestuoso / [Em]Glorioso / [C]Ven[G/B]-[Am]ce-[D]dor!
[G]Todos juntos / [D]Y en fiesta
[Em]Un banquete que [C]no ce[D4]sa[D]rá. (Repite Coro)

[E4]¡Que no ce[E]sará!

El Se[A]ñor, [E/G#]nuestro Dios
Quien me[F#m]rece el loor, todo [D]nuestro amor
Es el [A]Rey que ven[E/G#]ció 
Al Cor[F#m]dero, Vic[D]toria, po[E]der, honor, gloria.

El Se[A]ñor, [E/G#]nuestro Dios
Quien me[F#m]rece el loor, todo [D]nuestro amor
Es el [A]Rey que ven[E/G#]ció 
Al Cor[F#m]dero, Vic[D]toria, po[Bm]der, [F#m]honor, [E]gloria 

Resuci[A]tó! [E/G#] [F#m] [D]
Resuci[A]tó! [E/G#] [F#m] [D]
Resuci[A]tó!`
},
{
    id: 398,
    titulo: "Corazón de Padre (San José)",
    autor: "Anónimo",
    tonoOriginal: "C (capo 1)",
    categoria: "reflexion, salida",
    letra:` (capo 1)
[C]Venimos a ti San [G]José, 
con [Am]un corazón de [Em]madera,
para que [F]talles en tu [C]taller,
Humil[F]dad, [C]ternura, pu[G]reza.

[C]Queremos de ti [G]aprender 
a soñar sin dar [Am]paso a la[Em]duda,
a ser [F]fiel sin dejarse [C]vencer por el
[F]camino, la fa[C]tiga, la [G]lucha.

    [F]Escucha nuestra ora[C]ción,
    [G]Fiel custodio de Ma[C]ría,
    [F]Modela en nuestros cora[C]zones
    [F]El Rostro del Me[G]sías.

[C]Enséñanos, Buen Jo[G]sé,
[Dm]cómo hacer frente a tanta desesper[Am]anza,
[F]cómo se sirve sin mirar a [C]quién,
[F]cómo en silencio se vive, se a[G]vanza.

[C]Enséñanos cómo a[G]mar
[Dm]con libertad y ternura de [Am]madre,
[F]Cómo se puede ser luz sin bri[C]llar,
[F]cómo tener como [G]tú,
un corazón de [C]padre.

[C]Venimos a ti, San [G]José,
[Am]para escucharte hablar con tu [Em]vida,
[F]porque tú sabes obe[C]decer,
[F]sin protestar, sin [C]que haya he[G]ridas.

[C]Queremos de ti apren[G]der
[Am]a morir en dulce aban[Em]dono
[F]Y en los brazos de la Buena [C]Madre,
[F]como tú, ce[C]rrar los [G]ojos.

[F]Escucha nuestra ora[C]ción,
[G]Fiel custodio de Ma[C]ría,
[F]Modela en nuestros cora[C]zones
[F]El Rostro del Me[G]sías.

[(Sube un tono)]
[G]Escucha nuestra ora[D]ción,
[A]Fiel custodio de Ma[D]ría,
[G]Modela en nuestros cora[D]zones
[G]El Rostro del Me[A]sías. [D] 
`},
{
id: 399,
titulo: "El profeta",
autor: "Anónimo",
categoria: "salida",
tonoOriginal: "Am",
letra: `
[Intro]
[Am] [C] [G] [C] [Dm] [Am] [E7] [Am]
 
[Verse]
[Am]Antes que te [C]formaras dentro del 
[G]vientre de tu [C]madre
[Dm]Antes que tú [Am]nacieras te 
[E7]conocía y te [Am]consagré
[Am]Para ser mi [C]profeta de las 
[G]naciones yo te [C]escogí:
[Dm]Irás donde te [Am]envíe lo que te 
[E7]mande [Am]proclamarás.
 
[Coro]
[Am]Tengo que gritar, [C]tengo que arriesgar. 
[G]¡Ay de mí si no lo [C]hago!
[G]¿Cómo [Am]escapar de tí?, 
[G]¿cómo no [Am]hablar?, 
[E7]¡si tu voz me quema [Am]dentro! [(bis)]

[Verse]
[Am]No temas [C]arriesgarte porque 
[G]contigo yo [C]estaré.
[Dm]No temas [Am]anunciarme porque en tu 
[E7]boca yo [Am]hablaré.
[Am]Te encargo hoy mi [C]pueblo para 
[G]arrancar y [C]derribar.
[Dm]Para [Am]edificar 
[E7]destruirás y [Am]plantarás.

[Coro]
[Am]Tengo que gritar, [C]tengo que arriesgar. 
[G]¡Ay de mí si no lo [C]hago!
[G]¿Cómo [Am]escapar de tí?,
[G]¿cómo no[Am]hablar?, 
[E7]¡si tu voz me quema [Am]dentro! [(bis)]

[verso]
[Am]Deja a tus [C]hermanos, deja a tu 
[G]padre y a tu [C]madre,
[Dm]Abandona tu [Am]casa porque la 
[E7]tierra gritando [Am]está.
[Am]Nada traigas [C]contigo porque a tu 
[G]lado yo [C]estaré.
[Dm]Es hora de [Am]luchar porque mi 
[E7]pueblo sufriendo [Am]está.

[Coro]
[Am]Tengo que gritar, [C]tengo que arriesgar. 
[G]¡Ay de mí si no lo [C]hago!
[G]¿Cómo [Am]escapar de tí?, 
[G]¿cómo no[Am]hablar?, 
[E7]¡si tu voz me quema [Am]dentro! [(bis)]
`
},
    // --- SECCIÓN: CANTOS DE La Pasión ---
     {
    id: 156,
    titulo: "¿QUÉ VISTE EN MI? (“I” ESTACIÓN)",
    autor: "Anónimo",
    categoria: "pasion",
    tonoOriginal: "F",
    letra: `
[F]Ahí estás Tú, esperando la sentencia en silencio
[Am]Se alza un grito entre la gente,
[A#]que prefiere a un criminal [C]antes que a ti.

[F]Y allí estás Tú, tan llagado que cuesta reconocerte,
[Am]entre burlas e insultos, [A#]sin amor sin amigos,
[A#]hemos huido [C]todos de la cruz.

[A#]Pues yo también he [C]sido uno de ellos
[F]he prefe[C]rido cualquier [Dm]cosa antes que, a ti,
[A#]te he dado la [C]espalda un sinfín de veces,
[F]no he de[C]jado que te [Dm]muevas en mí
[A#]y aun así [C]dices que me amas, [F]no sé qué viste en mí.

[F]¿Qué viste en mí? Sabes que yo no merezco tanto,
[Am]pero yo nece[A#]sito, tu amor infinito
[A#]Por favor, [C]no me dejes sin ti.

[A#]Ayúdame a que [C]valga la pena,
[F]me he dado [C]cuenta que no [Dm]puedo estar sin ti.
[A#]Que valga la pena: [C]que viva tu condena,
[F]junto a Ma[C]ría de ro[Dm]dillas ante ti.
[A#]Perdóname, [C]ahora aquí me tienes, [F]derramado a tus pies.
`
  },
  {
    id: 157,
    titulo: "MI PESO EN TUS HOMBROS (“II” ESTACIÓN)",
    autor: "Anónimo",
    categoria: "pasion",
    tonoOriginal: "G",
    letra: `
[G]¡Pero qué hace tirado,
[D]dejando que le aten un ma[Em]dero a las espa[D]las!
[C]Si es [Am]Dios... [Dsus2]¿Qué hace a[D]hí? [G]¿Por qué está ahí?

[G]Él quiso morir [D]atado a nuestro [Em]peso en sus es[D]paldas.
[C]Y [Am]Tú [Dsus2]te a[D]taste a [G]mí, te ataste a mí.

[G]Hoy quiero decirte, Señor, [Dsus2]Que te doy las gracias,
[Em]que recuerdo mi peso en tus [C]hombros,
[G]pues lo único que te [Dsus2]ata al leño es [Em]tu a[C]mor.

[G]No puedes dejar de atarte, [D]ni de tomarte tan en [Em]serio mi pe[D]cado:
[C]¡sólo [Am]quieres [Dsus2]verme [D]libe[G]rada!

[G]No es un "amor de quita y pon"; [D]Me quieres como un [Em]ciego apa[D]sionado.
[C]Se[Am]ñor, [Dsus2]contá[D]giame de [G]tu pasión.
`
  },
  {
    id: 158,
    titulo: "PARAÍSO SIN TU ROSTRO (“III” ESTACIÓN)",
    autor: "Anónimo",
    categoria: "pasion",
    tonoOriginal: "C",
    letra: `
Intro: [C] [Dm] [F] [G]

[C]Busqué paraísos sin tu [Am]Rostro,
[Dm]Horizontes sin tu [G]Luz.
[C]Pinté de colores mis pe[Am]cados;
[Dm]Pero el cielo no era [G]azul.

[Dm]Caí, resba[Am]lé en la noche y vi
[Em]Un abismo [F]grande en [G]mí.
[C]Regálame la [Am]vida, [Em]otro Cielo más;
[F]Un fu[G]turo junto a [C]Ti.

[C]Seguiré tus [Am]pasos, se[Em]guro,
[F]Me le[G]vanto siempre en [C]Ti.

[C]Soñé que me alzabas con tu [Am]mano,
[Dm]Me librabas del te[G]mor.
[C]Sentí mi camino más li[Am]gero,
[Dm]Llevadero mi do[G]lor.
`
  },
  {
    id: 159,
    titulo: "UN DIOS DÉBIL (“VI” ESTACIÓN)",
    autor: "Anónimo",
    categoria: "pasion",
    tonoOriginal: "C",
    letra: `
[C]Esto sí que lo entiendo, y [F]como me gusta
[C]ver un Dios débil, niño des[F]nudo en tus brazos
[C]Y rehén aplastado por la [F]cruz y en agonía
[C]Pero siempre necesi[F]tado de ti María.

[C]Como cambia el espíritu de un [F]niño
una noche de miedo cuando se [C]arropa
Bajo las [F]sábanas, de su madre.

[Am]Estás ahí, [G]te necesito
[F]No te vayas, [G]no te vayas
[F]Tu calor tacto [G]vista, tu cercanía
[C]No cambian [Em]nada [Am]y lo cambias [G]todo.
`
  },
  {
    id: 160,
    titulo: "CIRINEO (“V” ESTACIÓN)",
    autor: "Anónimo",
    categoria: "pasion",
    tonoOriginal: "G",
    letra: `
[G]¿Quién a[D]yu-da a [Em]quién?
[Am]¿Quién me a[C]brió los ojos a la eter[D]nidad?
[C]¿Quién lavó con [D]sangre mi fragili[G]dad? [D] [Em]
[Am]¿Quién me ama hasta la [C]muerte de ver[D]dad?

[G]¿Quién a[D]braza a [Em]quién?
[Am]Qué li[C]gero el peso si lo [D]llevas Tú.
[C]¿Cuánto suman [D]dos miradas y una [G]Cruz? [D] [Em]
[Am]Quiero ser un Ci[C]rineo de Je[D]sús,
[C]Quiero ser tu Ci[D]rineo, mi Je[G]sús. [C] [D]

[G]Dame tu [Em]vida, Se[Bm]ñor, [D]
[G]Dame tus [Em]brazos, tu [Bm]voz. [D]
[C]Sobre la [D]Cruz, mi corazón
[G]se hace [D]grande en [Em]tu dolor,
[Am]por a[C]mor, por a[D]mor.
`
  },
  {
    id: 161,
    titulo: "VERÓNICA (“VI” ESTACIÓN)",
    autor: "Anónimo",
    categoria: "pasion",
    tonoOriginal: "F",
    letra: `
[Bb]No hay en Él parecer, [F]No hay en Él hermosura,
[Gm]No hay belleza alguna [F]Capaz de atraer nuestra mirada.
[Bb]No hay un rostro que agrade, [F]Desfigurada la cara,
[Gm7]Conocedor de quebrantos, [F]Menospreciado, estimado en nada.

[Dm]Éste es el Hijo de [F]Dios, Que carga con nuestras [Dm]culpas.
Misericordia en[F]carnada, ¡limpia mi pobre inte[Gm]rior!
Yo sólo quiero vi[Bb]virte, Amar y dejarme a[F]mar...

[F]Que enjugue cada [Gm]gota de sangre [Bb]Que acari[C]cia tu frente.
[F]Ínfima y pe[Gm]queña, entrega consu[Bb]mada,
Amor de [C]sangre: ¡Mi a[Dm]mante!

[Dm]Transfórmame en tu [C]paño, Tatúame tu [Bb]rostro,
Empápalo sin [Gm]miedo, ahógalo en tu [F]sangre.
`
  },
  {
    id: 162,
    titulo: "Y TE CAES (“VII” ESTACIÓN)",
    autor: "Anónimo",
    categoria: "pasion",
    tonoOriginal: "C#m",
    letra: `
[C#m]Me vuelvo a caer, me in[B]vade el fracaso,
[A]y no en[B]cuentro una ra[C#m]zón para seguir.
[C#m]Pero eres tan cercano que [B]vienes a mi encuentro
[A]Porque [B]sabes que yo [C#m]solo no podré.

[A]Y [B]te caes para [C#m]levantarme,
[A]Y [B]limpias mis he[C#m]ridas con tu sangre.

[C#m]Vuelvo a tropezar con la [B]misma piedra,
[A]y me [B]cuesta hasta pe[C#m]dirte perdón.
[C#m]Me dices al oído que [B]tú no me desprecias,
[A]Que tu a[B]mor no sabe [C#m]lo que es el rencor.
`
  },
  {
    id: 163,
    titulo: "JERUSALÉN (“VIII” ESTACIÓN)",
    autor: "Anónimo",
    categoria: "pasion",
    tonoOriginal: "C#m",
    letra: `
[C#m]Busqué sen[A]tido en cada [E]piedra,
[C#m]Con ló[A]gica quise enten[E]der
[C#m]Por qué tu celes[A]tial Al[E]teza
[C#m]Se [G#m]rompió en Jerusa[Amaj7]lén.

[G#m]Ojalá algún día pu[C#m]diera [Amaj7]Enten[B]der tu deci[E]sión,
[G#m]De abrazarte a esa ma[C#m]dera [Amaj7]Y ha[B]cerla trono de tu A[Amaj7]mor.

[F#]¿Por qué a[A]brazas tu do[E]lor?
[C#m]¿Por qué te de[A]jaste lle[E]var?
[A]¿Por qué al mo[B]rir en una [E]cruz
[C#m]com[G#m]praste mi liber[A]tad? [B]¿Por qué lo hiciste Je[E]sús?
`
  },
  {
    id: 164,
    titulo: "¿POR QUÉ? (“IX” ESTACIÓN)",
    autor: "Anónimo",
    categoria: "pasion",
    tonoOriginal: "C",
    letra: `
[C]Qué fácil es ca[G]er una, [D]dos y tres [Em]veces
[C]Llevando una gran [G]cruz sobre [D]ti.
[C]En el punto más os[G]curo te levan[B7]taste y cami[Em]naste:
[C]¿Qué pen[G]saste para se[D]guir hasta el final?

[C]¿Por qué, mi [G]Cristo roto, [D]sigues?
[Am]¿Por qué cuando te des[B7]precian tú a[Em]precias?
[C]¿Por qué cuando no se [D]puede, [B7]Tú si [Em]puedes?
[C]¿Por [G]qué? ¿Por [D]qué? ¿Por qué?

[C]Yo quiero lle[G]var tu cruz. [D]Yo quiero lle[Em]var tu cruz.
`
  },
  {
    id: 165,
    titulo: "DESPOJADO (“X” ESTACIÓN)",
    autor: "Anónimo",
    categoria: "pasion",
    tonoOriginal: "D",
    letra: `
[D]Déjame Señor po[Bm]der estar a[Em]brazado al madero de tu [A]cruz
[G]no hay prueba de [A]amor que [D]pueda supe[Bm]rar [G]lo que por [A]mí hiciste tú.

[D]Déjame señor po[Bm]der sentir [Em]hace tiempo que no con[A]sigo llorar
[G]mis pecados despo[A]jaron tu ves[D]tir [Bm]dejando a [G]trozos tu digni[A]dad.

[D]Y [A]ahora [Bm]quiero su[B]bir [Em]hasta la [A]cruz que tú me das
[D]gas[F#]tar mi [Bm]vida para ti [G]yo [Em]tengo sed de eterni[A]dad.
[D]Y [A]ahora [Bm]quiero gri[B]tar [Em]hasta per[A]der la razón
[D]mi [F#]alma en[Bm]tera despojar [G]y [A]como tú morir de [D]amor.
`
  },
  {
    id: 166,
    titulo: "LA MEDIDA DEL AMOR (“XI” ESTACIÓN)",
    autor: "Anónimo",
    categoria: "pasion",
    tonoOriginal: "Gm",
    letra: `
[Gm]¿Cuál es la medida del a[Dm]mor?
[A]¿Cuánto al[Dm]canzan los latidos del do[D]lor?
[Gm]"Padre mío, dales tu per[Dm]dón.
[A]Aún no saben que esas manos son de Dios”.

[D]Se conmueve el uni[Bm]verso en cada golpe
[A]y el silencio deja ha[D]blar al corazón.
[Bm]Un madero y unos [Em]clavos empapados
[A]de la sangre del más [D]bello Redentor.

[D]Tu dolor me vuelve loco, [Gm]me da vida, y sin ha[D]blar me enseña todo
[Bm]lo que puede un cora[Em]zón, [G]la medida sin me[A]dida del A[D]mor.
`
  },
  {
    id: 167,
    titulo: "EXPIRÓ (“XII” ESTACIÓN)",
    autor: "Anónimo",
    categoria: "pasion",
    tonoOriginal: "N/A",
    letra: `
(Pieza Instrumental)
`
  },
  {
    id: 168,
    titulo: "MADRE (“XIII” ESTACIÓN)",
    autor: "Anónimo",
    categoria: "pasion",
    tonoOriginal: "C",
    letra: `
[C]Madre, ¿qué [G]vale todo el universo y el po[Am]der [G6]Frente a una sola [F]llaga de tu [G]Hijo?
[C]Madre, ¿qué [G]ven tus ojos cuando lloras junto a [Am]Él, [G6]Cuando le [F]besas todas las heridas?
[Fm]Madre, quiero ver lo que tú [G]ves.

[Am]Mécele en tus [Em]brazos esta [F]noche como [C]ayer,
[F]Bajo el [Am]frío y el mis[G]terio de Belén.
[Am]Sólo con su [Em]sangre volve[F]remos a na[C]cer,
[A#]Con la sangre de Jesús de Naza[G]ret.

[D]Madre, yo ba[F#m]jaré temblando a Cristo de la [Bm]Cruz, [A] [G]Lo cubriremos [A]juntos de caricias.
[D]Madre, me aso[F#m]maré al costado abierto de su a[Bm]mor, [A] [G]Y miraré lo cielos nuevos
[Gm]Donde adoran a tu [A]Hijo vencedor.
`
  },
  {
    id: 169,
    titulo: "DONDE ESTÁS TU (“XIV” ESTACIÓN)",
    autor: "Anónimo",
    categoria: "pasion",
    tonoOriginal: "Am",
    letra: `
[Am]Sin nada vi[Em]niste al mundo, [F]sin nada te [C]vas,
[Dm]Ni tan [G]solo donde re[C]posar. [Em]
[Dm]En hora de sole[G]dad, de aban[C]dono to[Em]tal, [Am]
[F]Yo quiero dar la [G]cara por [C]ti.

[F]Quiero es[G]taaaar donde es[C]tás Tú,
[F]Descla[G]vaaaarte de la [C]cruz.
[Dm]Con todo e[G]el amor que me [C]das Tú,
[F]Envol[G]veeerte con mi [C]vida,
[F]Enterra[G]aaarte dentro [C]de mi [Em]cora[Am]zón,
[Dm]De donde [G]nadie te pueda sa[C]car,
[F]Para que [G]así puedas descan[Am]sar.
`
  },
  {
    id: 170,
    titulo: "SOY LIBRE (“XV” ESTACIÓN)",
    autor: "Anónimo",
    categoria: "pasion",
    tonoOriginal: "G (capo2)",
    letra: `
[G]Mi mejor a[Em]migo de[C]cidió morir por [D]mí
[G]Cargó con mi cas[Em]tigo para [C]que yo pudiera vi[D]vir
[G]No viniste a juz[Em]garme, me vi[C]niste a sal[D]var
[G]Y ahora lo que [Em]más quieres [C]es que yo me [D]deje amar.

[C]A[D]bráza[Em]me, [C]hoy me [D]dejo que[G]rer
[G]Todos mis pecados [C]arden [Em]En el fuego de tu a[C]mor
[G]Y siempre que yo me [C]caiga [Em]Tú me levan[D]tarás.

[G]Coronado con es[Em]pinas, [C]vestido de dolor[D] 
[G]En tu último suspi[Em]ro [C]mi mundo se apa[D]gó
[G]Pero al tercer [Em]día, un gran [C]ruido se escu[D]chó
[G]Fueron ángeles can[Em]tando: [C]¡Jesús resuci[D]tó!

[C]A[D]bráza[Em]me, [C]hoy me [D]dejo que[G]rer
[G]Todos mis pecados [C]arden [Em]En el fuego de tu a[C]mor
[G]Y siempre que yo me [C]caiga [Em]Tú me levan[D]tarás.

[G] Quiero volver a nacer en [C]ti
Quiero volver a nacer en [Em]ti
Quiero volver a nacer en [D]ti

[G]Uohh ¡Ahora soy [C]libre!
Uohh ¡Ahora soy [Em]libre!
¡Porque tú me haces [D]libre!
`
  },
  {
    id: 171,
    titulo: "VIA CRUCIS",
    autor: "Verónica Sanfilippo",
    categoria: "pasion",
    tonoOriginal: "Bm",
    letra: `
[Bm]Oh, mi buen Jesús, la [A]culpa asumiste [G]Inclinando tu cabeza [D]Aceptaste la sen[A]tencia.
[Bm]Oh, que amor tan grande el [A]tuyo Jesús [G]Que aceptaste la cruz [D]Para cumplir la pro[A]mesa.

[G]Te adoramos Je[A]sús, te [D]bendeci[A]mos Je[Bm]sús
[G]Porque por tu santa [A]cruz redimiste al [D]mundo.

[Bm]Con la cruz en los [A]hombros rumbo al calvario
[G]Cargaste al pecado, de los [D]hombres de este [A]mundo
[Bm]Aunque estabas ex[A]hausto besaste esa cruz
[G]Abrazaste esa cruz, y la lle[D]vaste con ter[A]nura.
`
  },
    // --- SECCIÓN: CANTOS Marianos ---
  {
    id: 280,
    titulo: "¿ACASO NO ESTOY YO AQUÍ?",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "G",
    letra: `
Intro: [G] [Em] [C] [G]

[G]Hijo mío, lo que te aflige y asusta
[Em]Se encuentra en las manos de Dios
[C]Se encuentra en las manos de Dios [G]
Hijo mío, no temas ninguna angustia.
No se turbe tu corazón,
No se turbe tu corazón

[C]Acaso no estoy yo aquí [G]que soy tu madre?
[Am]Bajo mi manto y en mi regazo [Em]Te cuidaré [D]
Acaso no estoy yo aquí que soy tu madre?
Toma mi mano y hacia mi Hijo Te llevaré

[G]Hijo mío, lo que te aflige y asusta
[Em]Se encuentra en las manos de Dios
[C]Nada es imposible para nuestro Dios [G]
Hijo mío, no temas ninguna angustia.
No se turbe tu corazón [Em]
No se turbe tu corazón

[C]Déjame consolarte [Em]Déjame a Jesús llevarte
[C]Déjame ser tu [D]madre [Em] [G] (x2)
`
  },
  {
    id: 281,
    titulo: "ACASO NO ESTOY YO AQUÍ QUE SOY TU MADRE",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "C",
    letra: `
[C]Hijo mío el más pe[G]queño de mis [D]hijos
[C]No te angusties [G]nada tienes que te[D]mer
[C]Ninguna pena te aflija yo te vengo a soco[G]rrer

[C]Tu estas bajo mi [G]mando yo te [D]cuido
[C]En el hueco de mis [G]manos siempre es[D]tás
[C]Te encuentras bajo mi sombra no te falta [G]mas

[C]¿Acaso no estoy yo a[G]quí que soy tu [D]madre?
[C]¿Acaso no soy tu ale[G]gría y tu protec[D]ción?
[C]¿Acaso no estoy yo a[G]quí que soy tu [D]madre?
[C]¿Acaso no soy la ale[G]gría de tu cora[D]zón?

[C]Niña mía la más pe[G]queña de mis [D]hijas
[C]Madre mía virgen[G]cita aquí es[D]toy yo
[C]Son tantos tus emisarios y me escoges por tu [G]amor
`
  },
  {
    id: 282,
    titulo: "ADIÓS REINA DEL CIELO",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "C",
    letra: `
[C]Adiós, [C7]reina del [F]cielo Madre del salvador,
[Dm]Adiós, ¡OH madre [G7]mía!, adiós, adiós, a[C]diós.

[C]De tu di[C7]vino [F]rostro, la belleza al dejar,
[Dm]Permíteme que [G7]vuelva Tus plantas a be[C]sar.

[C]A de[C7]jarte ¡OH Ma[F]ria! No acierta El corazón,
[Dm]Te lo en[G7]trego, señora, dame tu bendi[C]ción.

[C]Adiós [C7]hija del [F]Padre, madre del hijo Adiós,
[Dm]Del Es[G7]píritu Santo, ¡OH casta esposa! A[C]diós.

[C]Adiós, ¡OH [C7]madre [F]virgen!, mas pura Que la luz,
[Dm]Jamás, ja[G7]más me olvides delante De Je[C]sús.
`
  },
  {
    id: 283,
    titulo: "ALABEMOS A MARÍA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "D",
    letra: `
[D]Alabemos a Ma[G]ría, la [A]Madre de [D]Dios,
[D]Ensalcemos a Ma[G]ría, la [A]Madre de [D]Dios,
[D]Glorifiquemos a Ma[G]ría, la [A]Madre de [D]Dios.[D7]

[G]Alabé[A]mosla, [D]Ensal[Bm]cémosla, [G]Glorifi[A]quémosla,
[A]Eterna[D]mente Amén. (x2)
`
  },
  {
    id: 284,
    titulo: "AVE MARÍA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "D",
    letra: `
Intro: [D] [A] [Bm] [G] [D] [A] [Em] [G]

[D] A [A] v e [Bm] M a [G] r í [D] a, [A] A [Em] v [G] e
[D] A [A] v e [Bm] M a [G] r í [D] a, [A] A [D] v e

[D]Madre de las espera y [Bm]mujer de esperanza
[A]Ora por [G]nobis
[D]Madre de sonrisa y [Bm]mujer de los silencios
[A]Ora por [G]nobis

[D]Madre de fron[A]tera y mujer apasionada
[A]Ora por [G]nobis
[D]Madre de des[A]canso y mujer de los cambios
[A]Ora por [G]nobis

[D]Madre del re[Bm]spiro y mujer de los desiertos
[A]Ora por [G]nobis
[D]Madre del o[Bm]caso y mujer de los recuerdos
[A]Ora por [G]nobis
`
  },
  {
    id: 285,
    titulo: "BENDITA MARÍA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "C",
    letra: `
[C]Oh madre [Em]mía, bendita seas [F]tú,
Por habernos [G]dado a tu hijo Jesús,
[C]Yo tu e[Em]jemplo quisiera se[F]guir,
Siendo hu[G]milde como lo fuiste tú.

[C]Oh se[Em]ñora que [F]Linda eres [G]tú,
[C]Madre [Em]mía que [F]buena eres [G]tú.

[C]Ma[Em]ría, ma[F]ría, tú que nos [G]llenas de todo tu amor,
[C]Ma[Em]ría, ma[F]ría, con tu dul[G]zura nos llevas a Dios.

[C] [Em] [F] [G] (Oh bendita)
`
  },
  {
    id: 286,
    titulo: "CONTIGO MARÍA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "D",
    letra: `
[Intro:] [D] [G] [D] [G]

[D]Quiero caminar con[G]tigo María
[D]Pues tu eres mi Madre [G]eres mi guía
[A]Tu eres para mí el mas [G]grande ejemplo
de santi[D]dad, de humil[A]dad.

[D]Quiero caminar con[G]tigo María
[D]No solo un momento, todos los [G]días
[A]Necesito tu amor de [G]Madre
Tu interce[D]sión ante el [A]Señor.

Guía mis [D]pasos [G]Llévame al [D]cielo [(A)]
Bajo tu [Bm]manto [G]No tengo [A]miedo
Llena de [D]gracia [G]Ave Ma[D]ría [(A)]
Hoy yo te o[Bm]frezco [A]toda mi [D]vida
[D] [G] [D] [G] 

[D]Quiero caminar contigo [G]María
[D]Madre en el dolor y en la [G]alegría
[A]Tu que que fuiste fiel hasta el [G]extremo
Fiel en la la [D]cruz, fiel a [A]Jesús.

Guía mis [D]pasos [G]Llévame al [D]cielo [(A)]
Bajo tu [Bm]manto [G]No tengo [A]miedo
Llena de [D]gracia [G]Ave Ma[D]ría [(A)]
Hoy yo te o[Bm]frezco [A]toda mi [D]vida

[Em]Celestial prin[Bm]cesa, mírame con compa[A]sión
[G]Hoy te doy mi alma, vida y [A]corazón

Guía mis [D]pasos [G]Llévame al [D]cielo [(A)]
Bajo tu [Bm]manto [G]No tengo [A]miedo
Llena de [D]gracia [G]Ave Ma[D]ría [(A)]
Hoy yo te o[Bm]frezco [A]toda mi [D]vida [(x2)] 
`
  },
  {
    id: 287,
    titulo: "DE PIEL MORENA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "Am",
    letra: `
[Am]Camino a [G]Tlatelolco [Em]iba Juan [Am]Diego
[Em]su fe inquebrantable su mo[Am]tor
[F]el viento trajo [G]música del [C]cielo [Am]
[F]visión maravillosa anun[G]cio del amor.

[C]De piel mo[Am]rena apareció
[Em]amor materno de rosas y de color
[F]camino del Ce[G]rrito María se mos[C]tró [Am]
[F]Tzenzontles de mi tierra en ora[G]ción

[C]De piel mo[Am]rena; su corazón
[Em]preñada del mesías, de mi Redentor
[F]revuelo de Cam[G]panas en el cora[C]zón [Am]
[F]presencia majestuosa: la madre del Se[G]ñor.
`
  },
  {
    id: 288,
    titulo: "DIOS TE SALVE (Novena)",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "G",
    letra: `
[G]Dios te salve ma[C]ría, maría,
[D]Llena eres de [G]gracia de gracia,
[G]El señor es con[C]tigo es con[Am]tigo,
[D]Y bendita, bendita tú eres.

[C]Entre todas las mu[G]jeres,
[C]Y bendito es el [G]fruto,
[Am]De tu [D7]vientre Je[G]sús.

[G]Santa ma[C]ría [D]madre de [G]Dios,
[C]Ruega por no[D]sotros los peca[G]dores.
[C]Ahora y en la [G]hora de nuestra [C]muerte, [G]
[D7]Amen Je[G]sús, [D7]Amen Je[G]sús.
`
  },
  {
    id: 289,
    titulo: "DIOS TE SALVE MARÍA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "D",
    letra: `
[D]Dios te [A]salve, [A#/D] Ma[Bm]ría,
[G]llena [E]eres de [A]gracia,
[G]el Se[A]ñor es con[D]tigo, [Bm]
[Em]el Se[A]ñor es con[D]tigo.

[D]Bendita [A]eres, [A#/D] Ma[Bm]ría,
[G]entre [E]todas las [A]mujeres,
[G]y ben[A]dito es el [D]fruto, [Bm]
[Em]de tu [A]vientre, Je[D]sús.

[D]Santa [A]Madre [A#/D] de [Bm]Dios,
[G]por no[E]sotros, peca[A]dores,
[G]ruega a[A]hora y en la [D]hora, [Bm]
[Em]de nues[A]tra muerte, a[D]mén.
`
  },
  {
    id: 290,
    titulo: "DULCE MADRE",
    autor: "Jeséd",
    categoria: "marianos",
    tonoOriginal: "C",
    letra: `
[C]Dulce Madre,
[Em]No te a[F]lejes, tu [G]vista de mi no a[C]partes,
Ven con[Em]migo a [F]todas partes, y [G]solo nunca me [C]dejes.

[Am]Y ya que me pro[Em]teges tanto,
[F]Como verda[G]dera [C]Madre,
[F]Haz que me ben[Em]diga el [Am]Padre,
[F]El Hijo y el Es[G]píritu [C]Santo.
`
  },
  {
    id: 291,
    titulo: "ELLA ES",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "A",
    letra: `
[A]Ella es, [C#m]Ella es, [D]Ella es [E]María.
[A]Ella es, [F#m]Ella es, [D]Ella es [E]Marí[A]iiia.

[A]Aquella que en sus [C#m]brazos a [D]Dios lo acari[E]ciaba
[A]Ese Sol que al mi[C#m]rarla en sus [D]brazos se dor[E]mía.

[A]Luego de su[F#m]frir la [D]muerte de ese [E]Hijo que ella a[A]maba
Llevó en si[F#m]lencio al [D]mundo la ver[E]dad de sus pa[A]labras.

[A]Dame tus [C#m]fuerzas Ma[D]ría para que [E]pueda encon[A]trar,
El ca[F#m]mino que en su [D]vida [E]Dios nos quiso seña[A]lar.
`
  },
  {
    id: 292,
    titulo: "HIMNO A LA GUADALUPANA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "G",
    letra: `
[G]Desde el cielo una hermosa mañana. (x2)
[C]La Guadalu[D]pana, la Guadalu[G]pana,
[Em]La Guadalu[C]pana ba[D]jó al Tepe[G]yac.

[G]Suplicante juntaba sus manos, (x2)
Y eran mexi[C]canos, (x3) [D]Su porte y su [G]faz.

[G]Juan Dieguito, la virgen le dijo, (x2)
Este cerro e[C]lijo, (x3) [D]Para hacer mi al[G]tar.

[G]Y en la tilma entre rosas pintadas, (x2)
Su imagen a[C]mada, (x3) [D]Se dignó de[G]jar.

[G]Desde entonces para el mexicano, (x2)
Ser guadalu[C]pano, (x3) [D]Es algo esen[G]cial.
`
  },
  {
    id: 293,
    titulo: "HIMNO DE NUESTRA SEÑORA DEL SAGRADO CORAZÓN",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "D",
    letra: `
[D]Que tu amable protección
Nos asista a cada hora
[A]Soberana señora
[G]Del sagrado cora[D]zón

[D]La reina la dulce madre
Desde su trono amorosa
Se [A]muestra hoy bondadosa
[G]Cual celesta apari[D]ción

[D]Aurora pura y risueña
Que al sol divino sustentas
Y en tus [A]manos nos presentas
[G]Su sagrado cora[D]zón
`
  },
  {
    id: 294,
    titulo: "JUNTO A TI MARÍA",
    autor: "Kairoi",
    categoria: "marianos",
    tonoOriginal: "G",
    letra: `
[G]Junto a ti ma[D]ría,
[Em]Como niño quiero es[Bm]tar,
[C]Tómame en tus [G]brazos,
[Am]Guíame en mí cami[D7]nar.

[G]Quiero que me e[D]duques,
[Em]Que me enseñes a re[Bm]zar,
[C]Hazme transpa[G]rente,
[D]Lléname de [G]paz.

[G]Ma[D]dre, [Em]ma[Bm]dre, [C]Ma[G]dre, [Am]ma[D7]dre. (x2)

[G]Gracias madre [D]mía, por lle[Em]varnos a Je[Bm]sús,
[C]Haznos más hu[G]mildes, tan sen[Am]cillos como [D7]tú.
`
  },
  {
    id: 295,
    titulo: "EL DIARIO DE MARÍA",
    autor: "Martín Valverde",
    categoria: "marianos",
    tonoOriginal: "Am",
    letra: `
[Am]Te miro a los ojos y [A7]entre tanto [Dm]llanto
[G]Parece men[G7]tira que te [C]hallan cla[C7]vado
[F]Que seas el pe[G]queño al que [Em]he acu[Am]nado.
[Dm]Y que se dor[G]mía tan [C]pronto en mis [C7]brazos,
[Em]El que se re[Am]ía al mi[F]rar el [G]cielo,
[Dm]y cuando re[G]zaba se po[C]nía se[E7]rio.

[Am]Sobre ese ma[A7]dero, veo al pe[Dm]queño
[G]Que entre los doc[G7]tores ha[C]blaba en el [C7]templo
[F]Que cuando pregun[G]té, respon[Em]dió con [Am]calma
[Dm]Que de los a[G]suntos de [C]Dios se en[C7]cargaba,
[Em]Ese mismo [Am]niño, el que [F]está en la [G]cruz
[Dm]El Rey de los [G]hombres se [C]llama Je[E7]sús.

[Am]Ese mismo [A7]hombre, ya no [Dm]era un niño,
[G]Y en aquella [G7]boda le pe[C]dí más [C7]vino,
[F]Que dio de co[G]mer a un mi[Em]llar de [Am]gente,
[Dm]Y a pobres y en[G]fermos los mi[C]ró de [C7]frente,
[Em]rió con a[Am]quellos a [F]quienes más [G]quiso,
[Dm]Y lloro en si[G]lencio al mo[C]rir su a[E7]migo.

[Am]Ya cae la [A7]tarde, se [Dm]nublan los cielos
[G]Pronto volve[G7]rás a tu [C]padre e[C7]terno.
[F]Duérmete pe[G]queño, quérme[Em]te mi [Am]niño
[Dm]Que yo te he en[G]tregado [C]todo mi ca[C7]riño
[Em]Como en Naza[Am]ret a[F]quella ma[G]ñana
[Dm]He aquí tu [G]sierva, he a[C]quí tu es[E7]clava.
`
  },
  {
    id: 296,
    titulo: "LA FE DE MARÍA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "Dm",
    letra: `
Intro: [Dm] [C] [Bb]

[Dm]Que hubiese pa[Bb]sado si ella [C]hubiese dicho que [F]no, [C]o igno[Dm]rado
[Bb]O dila[Gm]tado, el a[C]nuncio de tu ángel de [F]amor.
[C]En cambio cre[Dm]yó, en tu pa[Dmmaj7]labra [Dm7]
[Dm6]Y se hizo tu es[Bb]clava, en un [Gm]acto per[Bb]fecto y de [C]fe. [A7]

[Dm]Y hoy, quiero [Dmmaj7]ser como [Dm7]ella
[Dm6]Y amarte aunque [Bb]duelan, las es[Gm]pinas y el ca[C]mino de la [F]cruz.

[Bb]Dame la fe se[C]ñor, La fe de Ma[F]ría [C] [Dm]
[Bb]Para de[C]cirte sí, oh [F]sí, un [C]sí sin me[Dm]didas.
[Bb]Dame la fe se[C]ñor, la fe de Ma[F]ría [C] [Dm]
[Bb]Para renun[Cadd2]ciar a [C]mí y entre[F]garte mi [Bb]vida. [C]

[Dm]Aunque traspa[Bb]saron con una es[C]pada su cora[F]zón
[C]Y su [Dm]alma lloro, el do[Bb]lor de tus heridas
[Gm]A los [C]pies del ma[F]dero se quedó.
[C]Y hoy ella [Dm]es nuestra [Dmmaj7]reina y se[Dm7]ñora
[Dm6]Y tú nos incor[Bb]poras a tu e[Gm]terna fami[Bb]lia de a[C]mor. [A7]

[Dm]Y yo en tu a[Dmmaj7]mor quiero perma[Dm7]necer [Dm6]Postrado a tus [Bb]pies
[Gm]Es lo [C]único que un [F]día llevaré.
`
  },
  {
    id: 297,
    titulo: "LETANIAS A LA VIRGEN",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "Dm",
    letra: `
[Dm]Hoy te digo, cosas bo[A7]nitas,
Cosas bonitas te digo [Dm]hoy, [D7]
[Gm]Y te digo con ale[Dm]gría santa maría,
[A7]Te digo hoy. [Dm] [D7]

[Gm]Eres María de do[Dm]lores,
[A7]María de las flores,
[Dm]Nos diste el a[D7]mor,
[Gm]Eres Arca de la A[Dm]lianza
[A7]Y eres esperanza para el peca[Dm]dor.

[Gm]Eres la puerta del [Dm]cielo,
[A7]Salud del enfermo,
[Dm]Estrella del [D7]mar,
[Gm]Eres María Inmacu[Dm]lada
[A7]Por Dios preservada, eres sole[Dm]dad.

[Gm]Eres Virgen pode[Dm]rosa,
[A7]Misericordiosa,
[Dm]Eres Virgen [D7]Fiel,
[Gm]Eres la Madre admi[Dm]rable,
[A7]Solo comparable con el mismo E[Dm]dén.

[Gm]Eres la casa de [Dm]oro,
[A7]Eres un tesoro
[Dm]Torre de mar[D7]fil,
[Gm]Eres la Reina del [Dm]Cielo,
[A7]Y eres el Consuelo torre de Da[Dm]vid.
`
  },
  {
    id: 298,
    titulo: "LLENA DE GRACIA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "C",
    letra: `
Intro: [C] [Am] [F] [G]

[C]No existe un cora[Am]zón que ame más
[C]que aquel que dijo [Am]sí hasta el final,
[F]no descan[G]só, nunca du[Dm]dó,
lo hizo todo con [G]fe y con amor.

[C]Desde el princi[Am]pio reci[F]bió [G]
[C]la gracia que [Am]viene solo de [G]Dios.
[C]Con su peque[Am]ñez y su humil[F]dad
[G]nos muestra el camino a la santi[C]dad.

[F]Madre de [Am]Dios, llena de gracia,
[Dm]Reina de [G]paz, Consuelo del alma,
[F]María cuí[C]dame, con tu manto cúbreme,
[Dm]sé mi puente al cielo, llévame a [G]Dios.

[F]y así como [C]Tú quiero llenarme de su gracia
[Dm]que se refleje en mi alma
[G]la alegría de su amor,
[F]De su a[Am]mor, de su a[Dm]mor. [G]

[C]María cuí[Am]dame, con tu manto cúbreme
[C]Trasforma mi [Am]corazón, sé mi compa[G]ñía.
`
  },
  {
    id: 299,
    titulo: "MADRE ERES TERNURA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "G",
    letra: `
[G]Madre eres ter[Am]nura,
[D7]Eres una [G]flor,
[Em]Blanca y pre[Am]ciosa,
[D7]Llena de a[G]mor. [C] [D7]

[G]Si, señora [Am]ven a mí,
[D7]Ven, ven a [G]mí,
[Em]Cúbreme con tu [Am]manto,
[D7]Lleno de a[G]mor. [C] [D7] [G]

[G]Madre eres ter[Am]nura,
[D7]Eres una [G]flor,
[Em]Blanca y pre[Am]ciosa,
[D7]Llena de a[G]mor.
`
  },
  {
    id: 300,
    titulo: "MAGNIFICAT",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "E",
    letra: `
[E]Proclama mi alma la grandeza de Dios
[B]Se alegra mi espíritu en Dios mi Salva[C#m]dor
[A]Porque ha mirado mi humillación.

[E]Desde ahora me felicita[B]rán todas las generaciones
[C#m]Porque el Poderoso ha hecho [A]obras grandes por mí
[E]Su nombre es [B]santo y su misericordia llega
[C#m]A sus fieles de gene[A]ración en generación.

[E]Él hace proezas con su [B]brazo,
[C#m]Dispersa a los soberbios de [A]corazón,
[E]Derriba del trono a los pode[B]rosos,
[C#m]Y enaltece a los hu[A]mildes.

[E]A los hambrientos los colma de [B]bienes,
[C#m]A los ricos des[A]pide vacíos
[E]Auxilia a Israel acordándose de [B]Su Misericordia
[C#m]Según lo había prometido a [A]nuestros padres.
`
  },
  {
    id: 301,
    titulo: "MARÍA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "C",
    letra: `
Intro: [C] [G] [C] [Dm] [F]

[C]Ella co[G]noce mis fla[Dm]quezas y mi pobre cora[F]zón y aun así me llama
[C]Estrella...que [G]guía en la tor[Dm]menta y apaga el te[F]mor
lo llena de su Gracia

[Am]sólo un [Dm]paso debo dar
[Am]si con [Dm]ella quiero estar
[Am]no me solta[Dm]ré jamás
[F]con ella al cielo [G]quiero llegar..

[C]de su mano [G]voy hasta la [Dm]puesta de sol Ma[F]ria...
[C]ella es fiel es[G]trella que guía [Dm]hacia Dios Ma[F]ria...
[C]su pro[G]mesa regala en [Dm]nombre del Amor Ma[F]ría...
[Am]que ja[G]más perece[F]rá un hijo de Ma[C]ría...

[C]ella es la [G]luz que [Dm]guía mi ca[F]mino
[C]segura es[G]toy que [Dm]siempre está con[F]migo
[C]siento su a[G]mor pues [Dm]Ella es madre de la Crea[F]ción
[C]transforma mi [G]corazón cuida de sus [Dm]hijos los [G]vuelve hacia [C]Dios..
`
  },
  {
    id: 302,
    titulo: "MARIA MIRAME",
    autor: "Betsaida",
    categoria: "marianos",
    tonoOriginal: "C",
    letra: `
[C]María míra[G]me,
[Am]María míra[G]me,
[C]Si tú me miras [F]Él también me mira[G]ra.
[Am]Madre mía míra[F]me,
[C]De la mano lléva[F]me,
[C]Muy cerca de [G]Él que Ahí me quiero que[C]dar.

[Am]María [Dm]cúbreme con tu [Am]manto,
[F]Que tengo [G]miedo, no se re[C]zar. [C7]
[F]Que por tus [G]ojos miseri[C]cordi[Am]osos,
[F]Tendré la [G]fuerza tendré la [C]paz.

[Am]Madre con[Dm]suélame de mis [Am]penas,
[F]Es que no [G]quiero ofen[C]derle [C7]más,
[F]Que por tus [G]ojos miseri[C]cordi[Am]osos,
[F]Quiero ir al [G]cielo y verlos [C]ya.
`
  },
  {
    id: 303,
    titulo: "MÁS CERCA DE JESÚS",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "F",
    letra: `
[F]Tu lo tuviste más [C]cerca que nadie
[Am]Llevaste en tu vientre al [G]mismo Jesús
[F]Con Él compar[C]tiste hasta tu sangre
[Am]que años más tarde derra[G]mó en la Cruz.

[F]Un sólo cora[C]zón, [G]un solo la[F]tido
[C]Entre Tú y el Se[G]ñor.

[F]Escuchar tus pa[C]labras [G]es hacer lo que [Am]Él nos diga
[F]Caminar a tu [C]lado [G]es caminar junto al Señor
[F]Estar cerca [C]tuyo, [G]Madre [Am]mía [Em]
[F]Es estar más [C]cerca... [G]más cerca de Je[F]sús.
`
  },
  {
    id: 304,
    titulo: "MI ALMA GLORIFICA AL SEÑOR",
    autor: "Alejandro Mejía",
    categoria: "marianos",
    tonoOriginal: "E",
    letra: `
[E]Mi alma glori[C#m]fica al Se[B7]ñor, mi Dios,
[C#m]Gozase mi es[G#m]píritu en mi Salva[A]dor.
[B7]El es mi ale[E]gría, es mi [C#m]plenitud,
[F#7]El es [B7]todo para [E]mí.

[G#7]Ha mi[C#m]rado la bajeza de su esclava,
[B7]Muy dichosa me di[E]rán todos los pueblos
[C#7]Porque en mí ha hecho [F#m]grandes maravillas
[C#m]El que todo [B7]puede, [G#7]cuyo nombre es [C#m]Santo. [B7]

[G#7]Su cle[C#m]mencia se derrama por los siglos,
[B7]Sobre aquellos que le [E]temen y le aman,
[C#7]Desplegó el gran po[F#m]der de su derecha,
[C#m]Dispersó a los [B7]que [G#7]piensan que son [C#m]algo. [B7]

[G#7]Derri[C#m]bó a los potentados de sus tronos,
[B7]Elevó a los hu[E]mildes y a los pobres,
[C#7]Los hambrientos se sa[F#m]ciaron con sus bienes,
[C#m]Y ale[B7]jó de [G#7]sí, vacíos a los [C#m]ricos. [B7]
`
  },
  {
    id: 305,
    titulo: "MI VIRGEN BELLA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "D",
    letra: `
[D]Tú eres la Espe[D7]ranza que a nos[Em]otros,
[A7]En forma de mujer, man[D]dó el Señor,
[D7]Le pides con pa[Em]ciencia que su enojo,
[A7]No caiga sobre el mundo peca[D]dor.

[D]Tan puro es tu a[D7]mor y tan her[Em]moso,
[A7]que, humildes, nos pos[D]tramos a tus pies.
[D7]No me atrevo a mi[Em]rarte a los ojos,
[A7]indigna que me siento ante tu [D]ser.

[D7]Como qui[Em]siera, ¡ayy!, mi Virgen [A7]Bella,
[D7]Que mi ca[Em]riño se convir[G]tiera en una o[A7]frenda,
[D]y así entre[A7]garte lo [D]mejor de [Bm]mí.

[D7]Tú eres la espe[Em]ranza de mi [A7]pueblo,
[D]pues México esco[D7]giste para [Em]ser,
[A7]Lugar en que los pobre tú pu[D]dieras
[A7]Tu amor y bendi[D]ciones conce[Bm]der.
`
  },
  {
    id: 306,
    titulo: "OH MARÍA MADRE MÍA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "D",
    letra: `
[D]¡OH Ma[G]ría, Madre mía!
[D]¡OH con[A]suelo del mor[D]tal!
[A]Amparadme y guiadme,
[G]A la [D]patria celestial,
[A]Amparadme y guiadme,
[G]A la [D]patria celestial.

[D]Con el [G]ángel de Ma[D]ría,
[A]Las gran[D]dezas cele[A]brad,
Transportados de ale[G]gría,
[D]Sus fi[A]nezas publi[D]cad.

[D]Salve [G]júbilo del [D]cielo,
[A]Un ex[D]celso dulce i[A]mán,
Salve hechizo de este [G]suelo,
[D]Triunfa[A]dora de sa[D]tán.

[D]Quien en [G]ti ferviente [D]clama,
[A]Halla [D]gloria en el pe[A]nar,
Pues tu nombre luz de[G]rrama,
[D]Gozo [A]bálsamo sin [D]par.
`
  },
  {
    id: 307,
    titulo: "PADRE AMERINDIA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "G",
    letra: `
[G]Quiero decirte Padre en Ai[E]mara
[C]Quiero can[A]tarte Padre en Arau[C]cano [A]
[G]Quiero mostrarte Padre mi Ota[E]valo
[C]Quiero darte las gracias por mi amer[D]india

[G]Quiero decirte fuerte que te amo en [E]Quechua
[C]Quiero sem[A]brar tu reino con trigo [C]Maya [A]
[G]Quiero darte mi vida como Az[E]teca
[C]Quiero adornar tu frente con oro [D]Inca

[G]Mi Padre en tu cora[Em7]zón en[E]cuentro
[C]mi sinto[A]nía, mi sinto[D]nía
[G]Y puedo consa[Em7]grar ahora a mi [E]pueblo
[C]Todo a Ma[A]ría, [G]todo [D]a Ma[G]ría
`
  },
  {
    id: 308,
    titulo: "QUIÉN SERÁ LA MUJER",
    autor: "Cesáreo Gabaráin",
    categoria: "marianos",
    tonoOriginal: "G",
    letra: `
[G]Quién se[G7]rá la mu[C]jer que a tantos inspi[G]ró,
[C]Poemas [A7]bellos de a[D7]mor.
[C]Le rinden ho[B7]nor la [Em]música, la [G]luz,
[C]El mármol, la pa[A7]labra y el co[D7]lor.

[G]Quién se[G7]rá la mu[C]jer que el rey y el labra[G]dor,
[C]Invocan [A7]en su do[D7]lor;
[C]El sabio, el igno[B7]rante, el [Em]pobre y el se[G]ñor,
[C]El santo al i[A7]gual que el peca[D7]dor.

[G]Ma[G7]ría es esa mu[C]jer,
[D7]Que desde siempre el Señor se prepa[G]ró,
[G]Para na[G7]cer como una [C]flor,
[D7]En el jardín que a Dios enamo[G]ró. (x2)

[G]Quién se[G7]rá la mu[C]jer radiante como el [G]sol,
[C]Vestida [A7]de resplan[D7]dor,
[C]La luna a sus [B7]pies, el [Em]cielo en derre[G]dor,
[C]Y angeles can[A7]tándole su a[D7]mor.
`
  },
  {
    id: 309,
    titulo: "SALUTACIÓN",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "D",
    letra: `
[D]Buenas noches paloma blanca,
[A]Hoy te vengo a salu[D]dar,
[D]Contem[G]plando la belleza de tu
[A]Rostro celes[D]tial.

[D]Dulce amor de mis a[A]mores,
No des[D]precie mi cantar,
[D]Y mira [G]desde tu trono,
[A]Mi aflicción me hace llo[D]rar.

[D]Si me siento atribu[A]lado,
Si me a[D]gobia algún pesar,
[D]A tus [G]plantas, Madre mía,
[A]Vengo cantos a ento[D]rar.

[D]Tierra Madre del im[A]perio,
Madre de [D]Dios inmortal,
[D]No me [G]dejes padeciendo,
[A]Un tormento sin i[D]gual.
`
  },
   {
    id: 310,
    titulo: "SALVE REGINA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "G",
    letra: `
[G]Saaaaal[D]ve Re[C]gina, [Bm]Madre de [Am]miseri[G]cordia
[D]Vida y dul[C]zura, esperanza [G]nuestra, Salve. (x2)

[D]Salve Regina.
[G]A ti lla[Am]mamos los deste[D]rrados hijos de [G]Eva
[Bm]A ti suspi[C]ramos y lloramos
[Am]En este valle de [D]lagrimas.

[G]Abogada [Am]nuestra vuelve a no[D]sotros tus [G]ojos
[Bm]Muéstranos tras [C]este destierro el [Bm]fruto
[Am]De tu [D]vientre Jesús.

[G]Saaaaal[D]ve Re[C]gina, [Bm]Madre, [A7]de miseri[G]cordia
[D]Oh cle[C]mente, oh [G]pía, oh dulce Virgen María.

[D]Salve Regina.
[G]Salve Re[D]gina, [C]Saaa[Bm]aaaa[Am]aaaaaa[G]lve.
`
  },
  {
    id: 311,
    titulo: "SANTA GEMMA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "Bm",
    letra: `
Intro: [Bm] [A] [D] [G]

[Bm]Parecía que cada ma[A]ñana
[D]Su corazón se prepa[G]raba
[Bm]A recibirte en la eucaris[A]tía
[D]Con un amor que no se aca[G]baba.

[G]Muéstra[A]me a Jesús
[D]Oh prin[A]cesa, santa [G]Gemma
[G]Como [A]puedo supor[D]tar
[D]Cada sufri[A]miento, en cada [G]día
[A]Para poderlo conso[Bm]lar.

[Bm]Y mientras ella se humi[A]llaba
[D]Tu amor en ella se desbor[G]daba
[Bm]Unida siempre a la [A]Cruz
[D]Su alma entera te entre[G]gaba.
`
  },
  {
    id: 312,
    titulo: "SANTA MARÍA DEL CAMINO",
    autor: "Juan Antonio Espinosa",
    categoria: "marianos",
    tonoOriginal: "D",
    letra: `
[D]Mientras re[G]corres la [D]vi-da,
[G]Tú nunca [A]solo es[D]tás,
[G]Contigo por el ca[D]mi-[Bm]no,
[G]Santa Ma[A]ría [D]va.

[G]Ven con no[D]sotros a [Bm]cami-nar,
[A]Santa Ma[D]ría ven. (x2)

[D]Aunque te [G]digan al[D]gunos,
[G]Que nada [A]puedes cam[D]biar,
[G]Lucha por un mundo [D]nue[Bm]vo,
[G]Lucha [A]por la ver[D]dad.

[D]Si por el [G]mundo los [D]hombres,
[G]Sin cono[A]cerse [D]van,
[G]No niegues nunca tu [D]ma[Bm]no,
[G]Al que con[A]tigo es[D]tá.
`
  },
  {
    id: 313,
    titulo: "SEA BENDITO Y ALABADO",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "G",
    letra: `
[G]Sea ben[C]dito y ala[G]bado por [D]toda la eter[Em]nidad, [D] [G]
Del di[C]vino sacra[G]mento, sacrosan[D]to del al[Em]tar. [D] [G]

[G]Y ma[C]ría conce[G]bida sin pe[D]cado origi[Em]nal, [D] [G]
Desde a[C]quel primer ins[G]tante de su [D]ser natu[Em]ral. [D] [G]

[G]Amén Je[C]sús y Ma[G]ría, Je[D]sús, María y Jo[Em]sé, [D] [G]
Así [C]sea por los [G]siglos y de los [D]siglos A[Em]mén. [D] [G]
`
  },
  {
    id: 314,
    titulo: "TRAIGO UNA ROSA BLANCA",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "Db",
    letra: `
Intro: [Db] [Gb] [Db] [Gb]

[Db]Traigo una rosa [Db/F]blanca para Ma[Gb]ría,
[Ab]para Ma[Db]ría, para Ma[Ab7]ría.
[Db]Es una rosa [Db/F]suave y sin es[Gb]pinas,
[Ab]y sin es[Db]pinas y sin es[Ab7]pinas

[Gb]porque el pe[Ab]cado no ha cono[Fm7]cido, [Bbm]
[Gb]porque sin [Ab]mancha ella ha vi[Db]vido, [Db7]
[Gb]por su pu[Ab]reza, su ser mater[Fm7]nal, [Bbm]
[Gb]por su dul[Ab]zura y su santi[Db]dad. (x2)

[Db]Traigo una rosa [Db/F]roja para Ma[Gb]ría,
[Ab]para Ma[Db]ría, para Ma[Ab7]ría.
Como ella [Db/F]quiero darle [Gb]toda mi vida,
[Ab]toda mi [Db]vida, toda mi [Ab7]vida.

[Gb]porque al mi[Ab]rar a su hijo en la [Fm7]Cruz [Bbm]
[Gb]su cora[Ab]zón traspa[Db]sado quedó [Db7]
[Gb]y aquella he[Ab]rida se transfor[Fm7]mó [Bbm]
[Gb]en el ca[Ab]mino más grande de [Db]amor. (x2)
`
  },
  {
    id: 315,
    titulo: "UNA VEZ MÁS",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "Em",
    letra: `
[Em]Quizás no soy, [D]quien quise ser,
[G]pero ahora soy, [Em]quien tú dejas de ser.
[Am]Las gracias te doy, madre por tanto amor,
[B7]por lo que soy, [Em]y por lo que seré.

[Em]Madre te pido hoy, por toda la niñez,
[D]por la juventud, [G]y por la vejez.
[Em]Y una vez más [C]madre te voy a pedir,
[D]que por favor tú [G]nunca nos desampares,
[Em]y nos cubras de [C]amor con tu manto por favor,
[D]y ruegues por no[G]sotros a nuestro padre.
[B7]Oh gracias [Em]madre.

[Em]Te dedico hoy, una dulce oración,
[D]de mi cantar, [G]y mi corazón.
[Em]Oh madre de bon[D]dad, sé que me escucharas,
[G]y a la inmensi[B7]dad, te apia[Em]daras.
`
  },
  {
    id: 316,
    titulo: "YO LE QUIERO CANTAR",
    autor: "Anónimo",
    categoria: "marianos",
    tonoOriginal: "A",
    letra: `
[A]Yo le quiero can[D]tar,
[A]A la Virgen Ma[E]ría, una canción. (x2)

[D]Canta, canta, [A]canta, canta,
[E]Cántale una can[A]ción, a Ma[A7]ría. (x2)

[A]Tú le quieres can[D]tar...
[A]Todos le quieren can[E]tar...
`
  },
   {
    id: 1000,
    titulo: "Mi alma glorifica",
    autor: "Misionario Shalom",
    categoria: "marianos",
    tonoOriginal: "Am",
    letra: `
[Am] [G] [F] [E7] 
Estoy aquí
Porque sobreviví a la tempestad
Que cayó sobre mí
Los poderosos no mi dieron la victoria
Fue mi confianza puesta en Rey de la gloria

Voy a alabar y el desierto atravesar
Voy a danzar, hasta que se abre el mar
Voy a cantar, nada me abalará
Derribó los poderosos, y exaltó a los humildes
El poder de su brazo nos liberó

Oh, oh, oh, mi alma glorifica al señor
Oh, oh, oh, mi espíritu se alegra en Dios, mi salvador
Oh, oh, oh, mi alma glorifica al señor
Oh, oh, oh, mi espíritu se alegra en Dios, mi salvador.
`
  },
    // --- SECCIÓN: CANTOS DE Adviento, Navidad y Villancicos ---
{
  id: 393,
  titulo: "Vamos a ver al Rey",
  autor: "Comunidade Catótica Shalom",
  tonoOriginal: "A",
  categoria: "entrada, navidad",
  letra: `
[A]Vamos a ver al [C#m]rey
[D]Vamos a ver al [E]rey
[A]Vamos a ver al [C#m]rey
[D]Vamos a ver al [E]rey
[Bm]Tanto tiempo esperamos llegar este [C#m]dia
[D]Ver la esperanza na[C#m]cer
[Bm]Tanto tiempo esperamos llegar este [C#m]dia
[G]Vamos a ver al [E]rey

[A]Ya podemos sen[C#m]tir
[D]Una nueva mañana lle[E]gando
[A]Una nueva luz clarea el cora[C#m]zón
[D]Que en la sombra estaba cami[E]nando
[Bm]Nuestros ojos por fin pueden
[C#m]Contempla[D#m]aar
[D]el niñito rey con nosotros vino a
[E]Habitar

  [A]Vamos a ver al [C#m]rey
  [D]Vamos a ver al [E]rey
  [A]Vamos a ver al [C#m]rey
  [D]Vamos a ver al [E]rey
  [Bm]Tanto tiempo esperamos llegar este [C#m]dia
  [D]Ver la esperanza na[C#m]cer
  [Bm]Tanto tiempo esperamos llegar este [C#m]dia
  [G]Vamos a ver al [E]rey

[D]¿Como puede haber tanta gran[C#]deza
[F#]en tan pequeñito y frágil be[D#]bé?
[Bm]Paradoja de amor, nuestro [C#m]Dios se encarnó
[D]Vamos a ver al [E]rey

[A]Vamos a ver al [C#m]rey
[D]Vamos a ver al [E]rey
[A]Vamos a ver al [C#m]rey
[D]Vamos a ver al [E]rey
[Bm]Tanto tiempo esperamos llegar este [C#m]dia
[D]Ver la esperanza na[C#m]cer
[Bm]Tanto tiempo esperamos llegar este [C#m]dia
[G]Vamos a ver al [E]rey`
},
    {
    id: 107,
    titulo: "Piel de porcelana",
    autor: "Arturo Estrella",
    categoria: "navidad, villancico",
    tonoOriginal: "G",
    letra: `
[C] [D] [Em] [C] [D]\n
[C]Piel de porce[D]lana, o[Em]jitos de [C]miel[D]
[C]Vámonos via[D]jeros a [Em]ver a Emma[C]nuel[D]
Para es[C]tar [D]con [G]él.\n
[G]Vamos aparceros vamos a Belén
[C]Vamos sin du[D]dar
[G]Por el caminito que está iluminado
[C]Por el Sirio es[D]telar
[B4]Vamos pere[Em]grinos
[C]Tocando el tam[D]bor
[B4]Llevemos bai[Em]lando y chiflando
[C]Una bella can[D]ción
Para el [C]salva[D]dor[G]\n
[C]Piel de porce[D]lana, o[Em]jitos de [C]miel[D]
[C]Toma lo que [D]tengo para ofre[Em]cer[C] [D]
[C]Piel de porce[D]lana o[Em]jitos de [C]miel[D]
[C]Vámonos via[D]jeros a [Em]ver a Emma[C]nuel[D]
Para es[C]tar [D]con [G]él.\n
[G]Llegamos al portalito
Para encon[C]trar[D]
Que [G]todos se inclinan al ver al niñito
Que llo[C]rando es[D]tá
La [B4]luna le [Em]canta 
Un a[C]rrullo al be[D]bé
A mi [B4]niñito del [Em]alma 
Al [C]niño Emma[D]nuel 
Le can[C]taré [D]a [G]Él\n
[G]Traemos de ofrendas 
[C]Pan, atolito y [D]mucho amor 
Y [G]aunque somos pobres niño hermoso 
[C]Te entrego el cora[D]zón
Pues lle[B4]gaste al [Em]mundo
Para ilu[C]mi[D]nar
Con tu [B4]dulce mi[Em]rada
Nuestra humani[C]dad[D]
Nuestra eterni[C]dad[G]\n
[G]Que tu llegada [D]traiga [Em]esperanza al cora[Bm]zón
[C]Descansa mi [D]niño, des[Em]cansa mi [Bm]Dios
[C]Gracias por tu son[D]risa, [Em]Nuestro reden[Bm]tor.
[C]Gracias por tu a[D]mor.[G]
    `
},
{
    id: 317,
    titulo: "AGUINALDO INDÍGENA",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "C",
    letra: `
[C]DUM-DU-RU-DUM, [G]DUM-DU-RU-DUM
[C]DUM-DU-RU-DUM, DUM-DU-RU-DUM

[C]Corra[G]mos, corramos la [C]música suena,
[C]Corra[G]mos, corramos la [C]música suena.
[F]A Can[G]tar al [C]Niño en La Nochebuena,
[F]A Can[G]tar al [C]Niño en La Nochebuena.

[G]Venid, venid, pas[C]tores Venid a adorar,
[G]Venid, venid, pas[C]tores Venid a adorar.
[F]Que el [G]Rey de los [C]cielos ha nacido ya,
[F]Que el [G]Rey de los [C]cielos ha nacido ya.

[G7]Hace mucho [C]frío el Niño tirita,
[G7]Hace mucho [C]frío el Niño tirita.
[F]Y no [G]hay quién le [C]dé una cobijita,
[F]Y no [G]hay quién le [C]dé una cobijita.
`
  },
  {
    id: 318,
    titulo: "ALÉGRENSE DE CORAZÓN",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "G",
    letra: `
[G]Alegres de cora[D]zón,
[G]Llenos de espe[D]ranza,
[Em]Venimos hasta Be[D]lén [A7]para ver a Je[D]sús.

[G]Sue[D7]nen cam[G]pa[D7]nas, [G]
[D]Que ya es[G]tá a[Em]quí el [A]niño [D]Dios,
[G]Los [D]án[G]ge[D7]les [G]del [D]cie-lo,
[G]Can[D]tan [G]de [D7]con[G]ten[D]tos,
[C]Que sepa el mundo en[D]tero,
[C]Que [D]Dios, [G]Llegó.
`
  },
  {
    id: 319,
    titulo: "ARRE BORREQUITO",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "G",
    letra: `
[G]Tengo puesto un nacimiento, [D]en un rincón de mi [G]casa,
con pastores y pastoras [C]y un palacio en la mon[G]taña.
[C]Allí vive el rey He[G]rodes, [D]allí viven sus sol[G]dados,
[C]todos están espe[G]rando [D]que lleguen los Reyes [G]Magos.

[C]Arre borriquito, arre burro arre,
[F]anda más de [G]prisa, [F]que [G]llega[C]mos tarde.
[C]Arre borriquito, vamos a Belén,
[F]que mañana es [G]fiesta [C]y al otro también.

[G]En el cielo hay una estrella [D]que a los Reyes Magos [G]guía,
hacia Belén para ver [C]a Dios hijo de Ma[G]ría.
[C]Cuando pasan los mo[G]narcas [D]sale la gente al ca[G]mino,
[C]y alegres se van con [G]ellos [D]para ver al tierno [G]niño.
`
  },
  {
    id: 320,
    titulo: "BIENVENIDO A CASA NIÑO",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "D",
    letra: `
[D]Bienve[A7]nido a casa [D]Niño,
[A7]Te queremos desde hoy,
[D]Ya están abiertas las puertas,
[A7]Ven, ven a mi cora[D]zón.

[G]Al coro de los [D]ángeles,
[A7]Quiero unir mi [D]voz,
[E]Y can[A7]tarle a Dios muy fuerte,
[D]Gra[A7]cias por tu gran a[D]mor.

[D]Llevo [A7]junto a Ma[D]ría,
[A7]Mi gran ilusión,
[D]Es decirte despacito,
[A7]Mamá tu hijo [D]soy.
`
  },
  {
    id: 321,
    titulo: "CAMPANA SOBRE CAMPANA",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "D",
    letra: `
[D]Campana sobre cam[A]pana, [D]y sobre campana [A]una,
asómate a la ven[D]tana, veras al niño en la [A]cuna. [D]

[D]Be[G]lén, cam[D]panas de Belén,
[G]que los [D]ángeles tocan, [A]que nuevas nos [D]traes.

[D]Recogido tu re[A]baño, [D]¿a dónde vas pastor[A]cillo?
[D]Voy a llevar al por[A]tal [D]requesón, manteca y [A]vino. [D]

[D]Campana sobre cam[A]pana, [D]y sobre campana [A]dos,
asómate a la ven[D]tana, veras al Niño [A]Dios. [D]
`
  },
  {
    id: 322,
    titulo: "CHOCOLATE CON PAN BUENO",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "D",
    letra: `
[D]Chocolate con pan [A]bueno le vengo a tra[Bm]er [F#m]
[G]Al por[Em]tal donde ha na[A]cido.
[D]Vengo de un pueblo le[A]jano y le quiero ofre[Bm]cer [F#m]
[G]Mi ca[A]riño y mi can[D]ción.

[D]Una es[Bm]trella guio [G]a ese gran Mo[A]loch de gente
[D]Que al [Bm]niño llevo [G]regalos del [A]mundo que no ima[F#m]ginó. [Bm]
[G]Unos dieron cosas [Em]raras, [A]otros solo amor.

[D]Ciricote para [A]dulces y arepas con [Bm]miel [F#m]
[G]Arepas a mi [A]niño que ha na[D]cido.
[D]Él es muy chiqui[A]to y tal vez no pueda co[Bm]mer, [F#m]
[G]A su [A]madre le ira [D]bien.
`
  },
  {
    id: 323,
    titulo: "EL BURRITO SABANERO",
    autor: "Hugo Blanco",
    categoria: "navidad",
    tonoOriginal: "E",
    letra: `
[E]Con mi burrito saba[A]nero voy ca[B7]mino de Be[E]lén,
[E]Con mi burrito saba[A]nero voy ca[B7]mino de Be[E]lén.
[A]Si me ven, [E]si me ven, [B7]voy camino de Be[E]lén,
[A]Si me ven, [E]si me ven, [B7]voy camino de Be[E]lén.

[E]El lucerito maña[A]nero ilu[B7]mina mi sen[E]dero,
[E]El lucerito maña[A]nero ilu[B7]mina mi sen[E]dero.
[A]Si me ven, [E]si me ven, [B7]voy camino de Be[E]lén.

[G#]Tuqui tuqui tuqui [C#]tuqui, [G#]tuqui tuqui tuqui [C#]ta,
[F#]Apúrate mi bu[F#]rrito que ya [B7]vamos a llegar.
[G#]Tuqui tuqui tuqui [C#]tuqui, [G#]tuqui tuqui tuqui [C#]ta,
[A]Apúrate mi bu[E]rrito vamos a [B7]ver a Je[E]sús.
`
  },
  {
    id: 324,
    titulo: "EL ESPÍRITU Y LA NOVIA",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "Gm",
    letra: `
[Gm]Mira el río de [Cm]agua de vida, [F]brillante como el cris[Bb]tal, [D7]
[Gm]mira que brota del [Cm]trono de Dios [F]y del cor[Bb]dero.
[Cm]Y a cada lado del [Gm]río [Eb]crecen árboles llenos de [D7]vida.
[Gm]Ven Señor, [Bb]ven Señor, [Cm]ven Se[D7]ñor Je[Gm]sús.

[Gm]Ven pronto, ven Señor, [Eb]ven Se[F]ñor, ven Señor Je[Bb]sús.
[D]Ven [Bb]pronto, [D]ven [Gm]pronto.
[Bb]El Espíritu y la [F]Novia dicen [Bb]ven,
[Eb]Y que todo el que es[F]cuche diga [Gm]ven.

[Cm]Y si alguno tiene [Gm]sed que beba [F]del agua de la [Eb]vida,
[Cm]Que el Se[Dm]ñor gratuita[Gm]mente le dará.
`
  },
  {
    id: 325,
    titulo: "EL REY VENDRÁ",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "D",
    letra: `
[D]El Rey ven[A]drá al ama[G]necer [A]y [Bm]luz triun[F#m]fante bri[G]lla[A]rá,
[Bm]Su glo[F#m]ria cu[G]bri[A]rá el pa[D]ís [G]y el [A]gozo abunda[D]rá.

[D]Ven, oh [A]ven, oh [G]Rey Je[A]sús. [Bm]Ven Em[F#m]manu[G]el. [A]
[Bm]La Igle[F#m]sia te es[G]pera, [A]pronto [D]ven.
[Bm]Oh ven Emma[A]nuel, [G]ven Emma[A]nu[D]el.

[D]No como un [A]niño como a[G]yer, [A]ya [Bm]no ven[F#m]drá a lu[G]char; [A]
[Bm]Vendrá coro[F#m]nado de [G]esplen[A]dor: [D]Su [G]luz re[A]fulgi[D]rá.
`
  },
  {
    id: 326,
    titulo: "EL SILENCIO DE MEDIANOCHE",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "F",
    letra: `
[F]En el silencio de la oscuridad el nacimiento del Rey proclamad.
[C]Id pastores, que ha nacido, [F]salvación nos ha tra[C]ído,
[Dm]Cristo [C]nuestro [F]Rey. [A#]Cristo [C]nuestro [F]Rey. (x2)

[G]En el silencio de la oscuridad el nacimiento del Rey proclamad.
[D]Id pastores, que ha nacido, [G]salvación nos ha tra[D]ído,
[Em]Cristo [D]nuestro [G]Rey. [C]Cristo [D]nuestro [G]Rey.

[A]Regocijados fueron a Belén donde encontraron al niñito Rey.
[E]Los pastores le ado[A]raron con a[E]mor, [D] [E]
[F#m]Con amor, con fer[A]viente a[E]mor, [F#m]
[D]A [E]Cristo el sal[F#m]vador, [D]Cristo [E]salva[A]dor.
`
  },
  {
    id: 327,
    titulo: "ENTRE SANTOS PREREGRINOS",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "D",
    letra: `
[D]En nombre del [A7]cielo, os pido po[D]sada,
[D7]Pues no puede [G]andar, [D]mi es[A7]posa a-ma[D]-da.
(Aquí no es mesón, sigan adelante, yo no puedo abrir, no sea algún tunante)

[D]No seas inhu[A7]mano, tennos cari[D]dad,
[D7]Que el Dios de los [G]cielos, [D]te [A7]lo premia[D]rá.
(Ya se pueden ir, y no molestar, porque si me enfado, los voy a apalear)

[D]Venimos ren[A7]didos, desde Naza[D]ret,
[D7]Yo soy carpin[G]tero, [D]de [A7]nombre Jo[D]sé.
(No me importa el nombre, déjenme dormir, pues que ya les digo, que no hemos de abrir)

[D]Entren Santos Pere[A7]grinos, [D]reciban este rincón,
[D]Que aunque es pobre la mo[A7]rada, se las doy de cora[D]zón.
`
  },
  {
    id: 328,
    titulo: "GLORIA CANTA LOS QUERUBINES",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "E",
    letra: `
[E]Gloria canta [A]los queru[E]bes, [A]en los campos [E]en Belén.
[A]Vieron que[E]rubes que entonaban, [A]cantares [E]a nuestro rey.

[E]Glo-oo-oo-oo-oo-[C#m]ria, [F#m]in e-[B7]xelce-[E]sis [C#m]De-[F#m]o, [B7]
[E]Glo-oo-oo-oo-oo-[C#m]ria, [F#m]in e-[B7]xelce-[E]sis [C#m]De-[F#m]e [B7]o. [E]

[E]Unos pas[A]tores que ve[E]laban, [A]en los campos [E]de belén.
[A]Y el e[E]co de valle en valle, [A]repite [E]una y otra vez.
`
  },
  {
    id: 329,
    titulo: "HA TRAÍDO LA ESPERANZA",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "Dm",
    letra: `
[Dm]Desde el cielo a ba[C]jado la pro[Gm]mesa celestial
[Bb]es el hijo de ma[C]ría que la ben[Dm]dición traerá.
[Dm]A un rey han espe[C]rado coro[Gm]nado de esplendor
[Bb]pero Dios se ha presen[C]tado pobre hu[Dm]milde y redentor. [C]

[F]Hoy la humani[C]dad celebra y los [Gm]ángeles aclaman
[Bb]que el señor se hizo pre[C]sente ha tra[F]ído la esperanza.
[C]Este niño inde[Gm]fenso acostado en el pesebre
[Bb]es el salvador del [C]mundo y nos [Dm]da vida perenne.

[Dm]Él nos da la euca[C]ristía ali[Gm]mento celestial
[Bb]se ha quedado con no[C]sotros en un [Dm]pedazo de pan.
`
  },
  {
    id: 330,
    titulo: "LA MARIMORENA",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "A",
    letra: `
[A]Ande, ande, ande, la Mari[E7]morena
[D]Ande, ande, [E7]ande que es la Noche[A]buena. (x2)

[A]En el Portal de Be[D]lén, hay es[A]trellas, Sol y Luna,
la [E7]Virgen y San José, y el [A]Niño que está en la cuna.

[A]En el Portal de Be[D]lén, hacen [A]fuego los pastores,
para [E7]calentar al niño, que ha na[A]cido entre las flores.

[A]Una estrella se ha per[D]dido, y en el [A]cielo no aparece,
se ha me[E7]tido en el Portal, y en Su [A]rostro resplandece.
`
  },
  {
    id: 331,
    titulo: "LOS PECES EN EL RÍO",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "Am",
    letra: `
[Am]La virgen se está pei[E7]nando, [Am]entre cortina y cortina.
[E7]Los cabellos son de oro, [Am]y el peine de plata fina.

[E7]Pero mira como beben los peces en el río,
[Am]pero mira como beben por ver al Dios nacido.
[E7]Beben y beben y vuelven a beber,
[Am]los peces en el río por ver a Dios nacer.

[Am]La virgen está la[E7]vando, [Am]y tendiendo en el romero,
[E7]los pajarillos cantando, [Am]y el romero ofreciendo.
`
  },
   {
    id: 332,
    titulo: "NO ME DIRÉIS MARÍA",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "Dm",
    letra: `
Intro: [Dm] [Gm] [A7] [Dm]

[Dm]¿No me di[Gm]réis María
[A#]Quien fue el primer mor[A7]tal
[Dm]Quien ala[Gm]bó a tu hijito
[A7]En el pobre por[Dm]tal?

[D7]Un pobre pas[A#]torcito
[C]Que acaso ya lle[F]gó
[Dm]Con cuanto a[Gm]mor mi niño
[A7]Le dio su bendi[Dm]ción.

[Dm]No me di[Gm]réis María
Si a[A#]caso ya lle[A7]gó
[Dm]También lle[Gm]vo al establo
[A7]Sus dones ofre[Dm]cer.

[Dm]Tres reyes [Gm]del desierto
[A#]Llegaron a Be[A7]lén
[Dm]Ellos tra[Gm]jeron dones
[A7]Jesús les dio su [Dm]fe.
`
  },
  {
    id: 333,
    titulo: "NOCHE DE PAZ",
    autor: "Joseph Mohr",
    categoria: "navidad",
    tonoOriginal: "A",
    letra: `
[A]Noche de paz, noche de amor,
[E7]Todo duerme en derre[A]dor,
[D]Entre los astros que es[A]parcen su luz,
[D]Bella anun[A]ciando al niñito Jesús,
[E7]Brilla la estrella de pa[A]az,
[A]Brilla la es[E7]trella de [A]paz.

[A]Noche de paz, noche de amor,
Todo duerme en derre[A]dor,
Sólo velan mi[D]rando la [A]faz,
De su [D]niño angélica [A]paz,
[E7]José y Ma[A]ría en Belén,
[A]José y Ma[E7]ría en Be[A]lén.

[A]Noche de paz, noche de amor,
Ven, Je[E7]sús, ven Se[A]ñor.
[D]Danos a [A]todos tu divinidad,
[D]En esta [A]noche de felicidad.
[E7]Danos a todos tu a[A]mor,
[A]Danos a [E7]todos tu a[A]mor.
`
  },
  {
    id: 334,
    titulo: "TU PUEBLO TE ESPERA",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "F",
    letra: `
[F]Ven, Se[C]ñor, tu [Bb]pueblo te es[F]pera.
[F]Ven, Se[C]ñor, de [Bb]vida y ver[C]dad.
[Dm]Llega[Am]rá tu [Bb]paz a la [F]tie[A]rra;
[G#m]por [C]siempre Tú reina[F]rás. (Bis)

[Dm]Una voz clama en el de[G]sierto:
[G#m]¡prepa[A]ren la senda al Se[Dm]ñor,
[Dm]tracen caminos claros y [G]rectos,
[C#m]que va a pa[A]sar nuestro [Dm]Dios!

[Bb]Que se allanen colinas y [F]montes,
[Bb]se rellenen valles y ba[C]rrancas,
[Bb]que se anuncie al Señor y su [F]nombre,
[Bb]que a los pueblos su amor salva[C]rá.

[Dm]El Señor reinará con jus[G]ticia
[G#m]y con [A]fuego los bauti[Dm]zará.
`
  },
  {
    id: 335,
    titulo: "VEN A CANTAR",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "E",
    letra: `
[E]Otro año que queda a[A]trás, [E]
[B7]Mil momentos que recor[E]dar.
[A]Otro año mil sueños más,
[E]Hechos reali[B7]dad. [E]

[E]Los problemas vienen y [A]van, [E]
Y al fi[B7]nal todo sigue i[E]gual.
[A]No hay montaña que pueda más,
[E]Que la volun[B7]tad. [E]

[E]Navidad feliz navi[A]dad,
[E]Vuelva a casa vuelve al ho[B7]gar.
Navidad dulce navi[E]dad,
[A]El ca[E]lor de ho[B7]gar.

[E]Ven a cantar, ven a can[A]tar,
[E]Que ya lle[C]gó la navi[B]dad.
[A]Ven a cantar, ven a cantar,
[B]Que ya es[F]tá aquí la navidad.

[A#]Ven a cantar, ven a can[C]tar,
[F]Que ya llegó la navidad.
[A#]Ven a cantar, ven a can[C]tar,
[F]Que ya está aquí la navidad.
`
  },
  {
    id: 336,
    titulo: "VEN Y ADOREMOS",
    autor: "Anónimo",
    categoria: "navidad",
    tonoOriginal: "A",
    letra: `
Intro: [A] [D] [A] [D]

[A]Si esta noche te encon[D]traras
Con la estrella de [F#m]paz
Dejarías que su [E]luz
Guíe tu cami[A]nar
Sin saber a dónde [D]lleva
Su perfecto resplan[F#m]dor
El camino que re[E]gala
A Jesús, el salva[A]dor.

[A]Si supieras que los [D]pasos
De este gran peregri[F#m]nar
Dan respuesta a lo que [E]buscas
Y es un niño que ado[A]rar
Dejarías que se en[D]cienda
En lo más hondo de tu [F#m]ser
El anhelo fervo[E]roso
De encontrarte con el rey.

[D]Ven y adoremos, el nos trae la [A]paz
[D]Dios con nosotros, para siempre esta[A]rá
[F#m]Que resuene la tierra, este canto de a[E]mor
[D]Ha nacido el mesías, la promesa cum[E]plió.
[A] (La promesa cum[D]plió)

[A]Si esta noche pregun[D]taras
¿Qué regalo puedes [F#m]dar?
Una ofrenda que sea [E]digna
De aquel que es la ver[A]dad
No hace falta grandes [D]cosas
Solo entrega el cora[F#m]zón
El prefiere lo pe[E]queño
Para derramar su a[A]mor.

[F#m] (Gloria) Los [E]ángeles cantan
[D] (Gloria) Y la [E]tierra proclama
[F#m] (Gloria) Ha na[E]cido el salva[D]dor [E]
`
  },
{
  id: 394,
  titulo: "Emmanuel",
  autor: "Verónica Sanfilippo",
  tonoOriginal: "G",
  categoria: "Reflexión",
  letra: `(Capo 6)
[G]Cuando miro al [D]cielo [Em]
[C]Siento que [G]puedo imagi[D]nar
[G]Esos ojitos [D]tier[Em]nos
[C]Y tu son[G]risa al desper[D]tar

[G]Traerás la [D]luz, la espe[Em]ranza
[C]Y la ale[G]gría a mi ho[D]gar
[G]Aquí te [D]espero, aquí te [Em]sueño
[C]Mientras pre[G]paro tu lu[D]gar

[Em]Mi Niño Jesús
[G]Pequeño Emmanuel
[C]Eres la promesa [G]de un Dios que es [D]fiel

[Em]Mi Niño Jesús
[G]Que pronto vendrá
[C]A sanar corazones y al [D]mundo traer la [G]paz

[G]Quiero contarte [D]mil his[Em]torias
[C]De tu [G]mano cami[D]nar
[G]Aunque no es [D]mucho lo que [Em]tengo
[C]Todo te [G]quiero entre[D]gar

[G]Tu amor suavi[D]zará he[Em]ridas
[C]Tu luz disi[G]pará el [D]mal
[G]Tu voz procla[D]mará gran[Em]dezas
[C]Tu nombre a [G]Dios nos lleva[D]rá

[Em]Mi Niño Jesús
[G]Pequeño Emmanuel
[C]Eres la promesa [G]de un Dios que es [D]fiel

[Em]Mi Niño Jesús
[G]Que pronto vendrá
[C]A sanar corazones y al [D]mundo traer la [G]paz
Traerás la paz

[G]EMMANU[D]EL, Dios con no[Em]sotros
[C]EMMANU[G]EL, no te tardes [D]quiero ver tu rostro
[G]EMMANU[D]EL, la promesa [Em]que se vuelve vida
[C]EMMANU[G]EL, reinarás, sana[D]rás toda herida
[G]EMMANU[D]EL, para siempre [Em]Dios con nosotros
[C]EMMANU[G]EL, no te tardes [D]quiero ver tu rostro
[G]EMMANU[D]EL, la promesa [Em]que se vuelve vida
[C]EMMANU[G]EL, reinarás, sana[D]rás toda herida

[Em]Mi Niño Jesús
[G]Pequeño Emmanuel
[C]Eres la promesa [G]de un Dios que es [D]fiel

[Em]Mi Niño Jesús
[G]Que pronto vendrá
[C]A sanar corazones y al [D]mundo traer la [G]paz

Traerás la paz
Vendrás y reinarás
EMMANUEL`
},
{
  id: 395,
  titulo: "Nace en tu corazón",
  autor: "Arturo Estrella (Coro Juntos por María)",
  tonoOriginal: "G",
  categoria: "reflexion, navidad",
  letra: `
Que suene el pandero que suene el tambor
Por qué hoy ha nacido nuestro salvador
Vámonos Pastores demos gloria a Dios
Que el pesebre sea tu corazón

José y María no encuentran lugar
El día se acaba dónde quedarán. 
Solo encuentran un triste portal 
Y el rey al mundo llegará 

Coro

En aquel sendero vienen los pastores 
Todos retumbando sus finos tambores
Con regocijo cantan gloria a Dios 
Hoy ha nacido el señor

Coro

❤️Entre animalitos Pastores y angelitos 
Se encuentra entre pañales envuelto el pequeñito
María lo abraza y le da calor 
San José los cuida con mucho amor. 

Coro

❤️Llegan los reyes y traen regalos
Oro a la realeza, Incienso a nuestro Dios, y la mirra que preparara al hombre que sufrirá

Que suene el pandero que suene el tambor
Por qué hoy ha nacido nuestro salvador
Vamonos pastores demos gloria a Dios
Que el pesebre sea tu corazón (2)

Porque hoy nace en tu corazón`
},
    // --- SECCIÓN: CANTOS DE Alabanza status:terminado---
    {
    id: 246,
    titulo: "ALABARÉ",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "E",
    letra: `
[E]Alabare, [C#m]alabare, [F#m]alabare, [B7]alabare,
[E]Alabare a mi Señor. (x2)

[E]Juan vio el número de los redimidos,
[B7]Y todos alababan al Señor,
[F#m]Unos cantaban [B7]otros oraban,
[F#m]Y todos ala[B7]baban al Seño[E]r.

[E]Todos unidos, alegres cantamos.
[B7]Glorias y alabanzas al Señor,
[F#m]Gloria al Padre, [B7]Gloria al hijo,
[F#m]Y Gloria al Es[B7]píritu de amo[E]r.

[E]Somos Tus hijos Dios Padre eterno,
[B7]Tú nos has creado con amor.
[F#m]Te bendecimos, [B7]te adoramos,
[F#m]Y todos te ala[B7]bamos con a[E]mor.
`
  },
  {
    id: 247,
    titulo: "BAJA EL RIO",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "G",
    letra: `
[G]Baja al rio, oooh, [C]baja al rio, oooh,
[G]Baja al rio, oooh, [D7]Baja al Jor[G]dán. (x2)

[G]Te voy a decir lo que va a pasar,
Si tú y tu hermano bajan al Jordán,
[C]Está Jesús y también está Juan,
[G]Y uno de ellos te va a salvar,
[D7]Y uno de ellos te va a sal[G]var.

[G]Si estas abajo y estas ahí,
Y uno de ellos te va a redimir,
[C]Está Jesús y también está Juan,
[G]Y uno de ellos te va a salvar,
[D7]Y uno de ellos te va a sal[G]var.
`
  },
  {
    id: 248,
    titulo: "CUANDO UN CRISTIANO BAILA",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "E",
    letra: `
[E]Cuando un cristiano baila, baila, baila, baila. (x2)
[A]Así baila el cris[B7]tiano, [E]Así baila el cris[B7]tiano.

[E]Dedo, dedo, dedo, dedo, dedo, dedo... (x2)
[A]Así baila el cris[B7]tiano, [E]Así baila el cris[B7]tiano.

[E]Mano... [A]Codo... [B7]Hombro... [E]Cabeza...
`
  },
  {
    id: 249,
    titulo: "DAVID, DAVID",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "Am",
    letra: `
[Am]David, David, David, David, David, oraba,
David, David, David, David, David, o[E7]raba. (x2)

[A7]Y su esposa se eno[Dm]jaba... ¿Porque?
[Am]Porque, porque, porque, porque, porque, oraba,
[E7]Porque, porque, porque, porque, porque, o[Am]raba.

[Am]David, David, David, David, David, BAILABA.
[Am]David, David, David, David, David, APLAUDIA.
`
  },
  {
    id: 250,
    titulo: "DEMOS GRACIAS AL SEÑOR",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "A",
    letra: `
[A]Demos gracias al Señor, [D]demos gra[A]cias;
[D]Demos [E]gracias al Se[A]ñor. (x2)

[D]Por las mañanas las [A]aves cantan,
[E]Las alabanzas a [A]Cristo Salvador;
[D]Y tú, hermano, ¿por [A]qué no cantas
[E]Las alabanzas a [A]Cristo Salvador?

[D]Y por las tardes las [A]flores cantan,
[E]Las alabanzas a [A]Cristo Salvador:
[D]Y tú, hermano, ¿por [A]qué no cantas
[E]Las alabanzas a [A]Cristo Salvador?

[D]Y por las noches los [A]cielos cantan,
[E]Las alabanzas a [A]Cristo Salvador;
[D]Y tú, hermano, ¿por [A]qué no cantas
[E]Las alabanzas a [A]Cristo Salvador?
`
  },
  {
    id: 251,
    titulo: "DIOS ESTÁ AQUÍ (Que hermoso es)",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "G",
    letra: `
[G]Dios está aquí, que her[C]moso es,
[D7]Él lo prometió, donde hay [G]dos o tres.

[C]Quédate Señor, [G]quédate Señor,
[D7]Quédate Señor, en cada cora[G]zón. (x2)

[D7]Oh! Cristo mío haz de mi [G]alma un altar,
[D7]Para adorarte con devo[G]ción,
[D7]Para beber el agua [G]de la vida,
[C]Y así cal[D7]mar mi pobre Cora[G]zón.

[G]El Espíritu de [D7]Dios se mueve,
Se mueve, se [G]mueve,
[G]El espíritu de [D7]Dios se mueve,
Dentro de mi Cora[G]zón.

[G]Oh! hermano deja [D7]que se mueva,
Se mueva, se [G]mueve,
[G]Oh! hermano deja [D7]que se mueva,
Dentro de tu cora[G]zón.
`
  },
  {
    id: 252,
    titulo: "EL AMOR DE DIOS",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "E",
    letra: `
[E]El amor de Dios es maravi[B7]lloso.
[E]El amor de Dios es maravi[B7]lloso.
[E7]El amor de Dios es maravi[A]lloso.
[B7]¡Grande es el amor de [E]Dios!

[E]Tan alto que no puedo estar más [B7]alto que El.
[E]Tan bajo que no puedo estar más [B7]bajo que El.
[E7]Tan ancho que no puedo estar a[A]fuera de Él.
[B7]¡Grande es el amor de [E]Dios!
`
  },
  {
    id: 253,
    titulo: "EL DIABLO ESTA ENOJADO",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "D",
    letra: `
[D]El diablo está enojado, hay una razón,
[A7]El diablo está enojado, hay una ra[D]zón. (x2)

[D7]El diablo está eno[G]jado, [Gm]hay una razón,
[D]Cristo [Bm]vive en mi corazón
[A]Y mis pe[G]cados, [A]son perdo[D]nados.

[D]Yo amo a mi hermano... [A7]Yo amo a maría... [D]Yo amo a la iglesia...
`
  },
  {
    id: 254,
    titulo: "EL PADRE ABRAHAM",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "E",
    letra: `
[E]Padre Abraham tenía muchos hijos,
[B7]Muchos hijos tenía Padre Abraham,
Yo soy uno, tu tam[E]bién
Por eso vamos a alabar a nuestro Dios.

[E]Mano derecha... [B7]Mano izquierda...
Pie derecho... Pie izquierdo...
La cabeza... La cadera...
Dando vueltas... [E]SE ACABÓ.
`
  },
  {
    id: 256,
    titulo: "ESTAMOS DE FIESTA CON JESÚS",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "C",
    letra: `
[C]Estamos de fiesta con [G7]Jesús.
[C]Al cielo queremos [F]ir. [G]
[G]Estamos reunidos en la [G7]mesa
Y es Cristo quien va a ser[C]vir.

[G]Poderoso es nuestro [C]Dios,
[G]Poderoso es nuestro [C]Dios. (x2)

[C]Él sana, Él salva: [F]pode[G]roso es nuestro [C]Dios.
[C]Bautiza y limpia: [F]pode[G]roso es nuestro [C]Dios.

[G]Poderoso es nuestro [C]Dios,
[G]Poderoso es nuestro [C]Dios. (x2)

[C]El padre, el hijo, pode[G]roso es nuestro [C]Dios,
[C]Espíritu Santo, pode[G]roso es nuestro [C]Dios.
`
  },
  {
    id: 257,
    titulo: "GRANITO DE MOSTAZA",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "Am",
    letra: `
[Am]Si tuvieras Fe como un granito de mos[E7]taza,
¿Quién Dice? [Am]Esto dice el Señor, (x2)

[A7]Tú le di[Dm]rías a las mon[Am]tañas,
[E7]Muévanse, Muévanse, Mu[Am]évanse. (x2)

[E7]Y las montañas se moverán, (uh uh)
Se Moverán (Uh Uh) [Am]Se Moverán. (x2)

[Am]Y los enfermos sanaran... [Am]Y los hermanos se amarán...
`
  },
  {
    id: 258,
    titulo: "HABIA UN SAPO",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "E",
    letra: `
[E]Había un sapo, sapo, sapo,
[F#m]Que nadaba en el río, río, río,
[B7]Con su traje verde, verde, verde,
[E]Que se moría de frío, frío, frío.

[E]La señora sapa, sapa, sapa,
[F#m]Me conto, contó, Contó, contó,
[B7]Que tenía un amigo, amigo, amigo.
[E]Que se [B7]llama Je[E]sús.
`
  },
  {
    id: 259,
    titulo: "HAY UNA PROMESA EN LA BIBLIA",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "A",
    letra: `
[A]Hay una promesa en la [E7]biblia,
[A]Que es para ti y para mí, (x2)
[E7]Cielo nuevo y tierra nueva,
[A]Donde vamos a vivir. (x2)

[E7]Saltando hermano saltando,
[A]Saltando hermano saltando,
[E7]Saltando hermano saltando,
[A]Como cordero en la manada.

[E7]Así, así, así, así se alaba a [A]Dios,
[E7]Pero que lindo se ve el pueblo de [A]Dios,
[E7]Maravilloso se ve, el pueblo de [A]Dios,
[E7]Pero que chévere se ve, el pueblo de [A]Dios.

Y dando media vueltita... la vuelta de la victoria.
Y dando una vuelta entera... la vuelta de la victoria.
`
  },
  {
    id: 260,
    titulo: "LA ALABANZA AL PATO",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "G",
    letra: `
[G]Hoy soy feliz (hoy soy feliz)
[C]Porque sé (porque sé)
[D]Que alguien me ama (que alguien me ama)
[G]Y ese es Jesús (x2)

[G]Cua, cua, cua ushucu, ushucu, ushucu shu
[C]Cua, cua, cua ushucu, ushucu, ushucu shu
[G]Cua, cua, cua ushucu, ushucu, ushucu shu
[D]Cua, cua, [C]cua, cua, [D]cua, cua. (x2)

[G]Puedo cantar (puedo cantar)
[C]Puedo reír (puedo reír)
[D]Pues por sus llagas (pues por sus llagas)
[G]Soy libre al fin (x2)
`
  },
  {
    id: 261,
    titulo: "MI MANO ESTA LLENA",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "D",
    letra: `
[D]Mi mano está llena [A7]De su bendición.
Mi mano está llena [D]De su [D7]bendición.

[G]Al hermano que toque bendito será,
[D]Al hermano que toque bendito será,
[A7]Mi mano está llena [D]De su bendición.

[D]Mi brazo esta lleno... [D]Mi pie está lleno...

[D]Porque Cristo ha tomado mi vida,
[A7]Y no la quiere soltar, (x2)
[D7]Estaba yo muy [G]triste, mas [Gm]ahora soy feliz,
[D]Porque Cristo ha to[A7]mado mi vida, [D]Y no la quiere soltar.

[D]Yo me sigo enamorando, me sigo enamorando,
[A7]Me sigo enamorando de Dios. (x2)
[A7]Que viva Cristo, que viva que viva [D]Cristo,
[A7]Que viva, que viva Cristo, que viva el [D]Rey.
`
  },
  {
    id: 262,
    titulo: "NO HAY DIOS TAN GRANDE COMO TU",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "G",
    letra: `
[G]No hay Dios tan grande como tú,
[D7]No lo hay, no lo [G]hay. (x2)
[G7]No hay Dios que [C]haga maravi[G]llas,
[D7]Como las que haces [G]tú. (x2)

[G]No con espadas, ni con ejércitos,
[Am]Más con tu [D7]santo Espíri[G]tu. (x2)
[G7]Y esos [C]montes se move[G]rán,
[D7]Y esos montes se move[G]rán,
[G7]Y esos [C]montes se move[G]rán,
[Am]Más con tu [D7]santo Espíri[G]tu.
`
  },
  {
    id: 264,
    titulo: "SI EN VERDAD ERES SALVO",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "G",
    letra: `
[G]Si En Verdad Eres Salvo di A[D]mén, -Amén-
Si En Verdad Eres Salvo di A[G]mén, -Amén-
[C]Si En Verdad Eres Salvo, [G]Testifica Con Tu Vida,
[D7]Si En Verdad Eres Salvo di A[G]mén.

[G]Gloria a Dios... [G]Aplaudir... [G]Con los pies... [G]Con los cuatro... [G]Al revés...
`
  },
  {
    id: 265,
    titulo: "UN JOVEN DE GALILEA",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "E",
    letra: `
[E]Por aquí va pasando un joven de gali[B7]lea. (x4)
[A]Y me dijo [E]como ala[B7]bar a [E]Dios. (x2)

[B7]Las manos arriba, las manos a[E]bajo,
[B7]Las manos arriba, las manos a[E]bajo, Y alabando a Dios.

[E]La cabeza a un lado... [E]La cadera a un lado...
`
  },
  {
    id: 267,
    titulo: "YO LE QUIERO CANTAR",
    autor: "Anónimo",
    categoria: "alabanza, marianos",
    tonoOriginal: "A",
    letra: `
[A]YO LE QUIERO CAN[D]TAR,
[A]A LA VIRGEN MA[E]RÍA, UNA CANCIÓN. (x2)

[D]CANTA, CANTA, CANTA, [A]CANTA,
[E]CÁNTALE UNA CANCIÓN, A MA[A]RÍA. (x2) [A7]

[A]Tú le quieres cantar... [A]Todos le quieren cantar...
`
  },
  {
    id: 268,
    titulo: "YO TENGO UN AMIGO QUE ME AMA",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "D",
    letra: `
[D]Yo tengo un amigo que me ama,
[A]Me ama, [D]me ama,
Yo tengo un amigo que me ama,
[G]Su nom[A]bre es Je[D]sús. [D7]

[G]Que me ama, que me [D]ama,
[A]Que me ama, con su tierno a[D]mor. (x2) [D7]

[D]Tú tienes un amigo... [D]Tenemos un amigo...
`
  },
  {
    id: 269,
    titulo: "YO TENGO UN GOZO EN EL ALMA",
    autor: "Anónimo",
    categoria: "alabanza",
    tonoOriginal: "G",
    letra: `
[G]Yo tengo un gozo en el alma, gozo en el alma,
[D]Gozo en el alma y en mi ser. ¡Aleluya! iGloria a Dios!
[G]Es como ríos de agua viva, Ríos de agua viva.
[Am]Ríos de agua [D7]viva en mí [G]ser.

[G]No te avergüences y alaba a tu Se[D]ñor,
No te avergüences y alaba a tu Se[G]ñor,
[G7]Da gloria a [C]Dios, gloria [Cm]Dios, gloria a [D]Él,
[G]No te avergüences y alaba a tu Señor.

[G]Alza tus brazos... [G]Cierra los ojos... [G]Abre la boca...
`
  },
  {
    id: 353,
    titulo: "FORÓFOS", //necesita revisión de acordes
    autor: "Hakuna",
    categoria: "alabanza",
    tonoOriginal: "D",
    letra: `
[D]Que seamos todos uno como el Padre y tú sois [G]uno
[D]Todos forofos de todos, [G]Que nos queramos siempre más.
[Em]Por los que viven para mi[A]rarte y nada [D]más, [A] [Bm]
[Em]Fuerza de todos, [A]Adelantando el [D]cielo. [13]

[D]Hermanas de Belén, Benedictinos, Cister, [G]Iesu Communio, Clarisas,
[Bm]Concepcionistas, Carmelitas y tantos [A]más. (Y tantos más)

[D]Que seamos todos uno como el Padre y tú sois [G]uno
[D]Todos forofos de todos, [G]Que nos queramos siempre más.
[Em]Por los que son tu prima[A]vera pentecos[D]tal, [A] [Bm]
[Em]Llenos de vida, [A]Movidos por el es[D]píritu. [14]

[D]Cursillos, Comunión y Liberación, Renovación Carismática, [G]Schöenstatt,
[Bm]Opus Dei, Focolares, Hakuna, Camino, Effetá [A]Y tantos más.

[D]Que seamos todos uno como el Padre y tú sois [G]uno
[D]Todos forofos de todos, [G]Que nos queramos siempre más.
[Em]Por los que son con[A]suelo tuyo en el do[D]lor, [A] [Bm]
[Em]Besando heridas, [A]En tu pobreza y margina[D]ción. [15]

[D]Hijas y Misioneras de la Caridad, Mercedarios, [G]Trinitarios,
[Bm]Hospitalarios, Hermanitas y tantos [A]más. (Y tantos más)

[D]Que seamos todos uno como el Padre y tú sois [G]uno
[D]Todos forofos de todos, [G]Que nos queramos siempre más.
[Em]Por los que te es[A]tudian y predican, [D]Inconfor[A]mistas sin [Bm]límites
[Em]Siempre mar a[A]dentro.

[D]Maristas, Salesianos, Escolapios, Agustinos, [G]Franciscanos
[Bm]Mercenarios, Jesuitas, Dominicos y tantos [A]más.

[D]Que seamos todos uno como el Padre y tú sois [G]uno
[D]Todos forofos de todos, [D]Que nos queramos siempre más.
[Em]Por los que sos[A]tienen tu fa[D]milia día a [A]día, [Bm]Siervos de todos.

[Em]Sacerdotes dioce[A]sanos, parroquias, semi[D]naristas, [A]misio[Bm]neros
[Em]Obispos junto a [A]Pedro, el [E]Papa.

[A]Que seamos todos uno como el Padre y tú sois [E]uno
[A]Somos forofos de todos, que nos queramos siempre [E]más. (x2)
`
  },
  {
  id: 385,
  titulo: "CON UN PASO DE FE",
  autor: "Jeséd",
  categoria: "alabanzas",
  tonoOriginal: "G",
  letra: `
Intro: [G] [D] [Em] [C] [D] (x2)

[C] [D] [C] MOVERÁS LAS MONTAÑAS
[D] [C] CAMINAR SOBRE AGUA (x2)
[C] [D] [C] CAMINAR SOBRE FUEGO
[D] [C] PROCLAMAR SU PALABRA (x2)

[G] [C] [D] [C] CON UN PASO DE FE A CRISTO VERÁS (x4)

MOVERÁS LAS MONTAÑAS CAMINAR SOBRE AGUA (x2)

CON UN PASO DE FE A CRISTO VERÁS (x4)

CAMINAR SOBRE FUEGO PROCLAMAR SU PALABRA (x2)

[G] [C] [D] [C] Baja el rio, baja el rio
[G] [C] [D] [C] baja el rio hacia el jordan

CON UN PASO DE FE A CRISTO VERÁS (x4)

MOVERÁS LAS MONTAÑAS
CAMINAR SOBRE AGUA
CAMINAR SOBRE FUEGO
PROCLAMAR SU PALABRA

Baja el rio…
Con un paso de fe
`
},
{
    id: 386,
    titulo: "Nadie como Dios",
    autor: "Comunidad Católica Shalom",
    tonoOriginal: "G",
    categoria: "alabanzas",
    letra: 
`[Intro] Em  C  Am  G/B  C  Em

[Em] Somos tu pueblo, [G] pueblo consagrado
[Am] Susten[G/B]tados [C] por Tu amor.
[Em] Somos tu pueblo, [G] pueblo escogido
[Am] Traemos en el corazón la brasa del lo[B7]vor.

[C] Palmas en las [D] manos, [Em] y gritos de vic[G]toria
[C] Cielos y tierra se [Am] unen para procla[B7]mar:

¡¿[Em] Quién como Dios?! ¡[G] Nadie como Dios!
[Am] Solo Él es santo y [B7] digno de honor.
¡¿[Em] Quién como Dios?! ¡[G] Nadie como Dios!
[Am] Solo Él es santo y [B7] digno de honor.

Es [Em] poderoso el Señor,
Mara[G]villoso el Señor,
Victo[Am]rioso [G/B] el Se[C]ñor.`
},
    // --- SECCIÓN: CANTOS Angeli status: terminado ---
  {
    id: 102,
    titulo: "Oración de Santo Agustín",
    autor: "Walace Aguiar",
    categoria: "angelichristi, reflexion",
    tonoOriginal: "C",
    letra:  `
Intro: [C7M] [F7M] [Bm7(5b)] [Em7] [Am7] [Dm7] [G7] [Dm7] [Em7]\n 
[C7M]¡Mi Cristo Jesús!,\n[F7M]amable Señor,\n[Bm7(5b)]¿por qué amé\n[Em7]Otra cosa que no Tú?\n[Am7]¿Dónde estaba yo\n[Dm7]cuando no pensaba en ti?\n[G7]!Qué ahora seas Tú\n[Bm7(5b)]Quién vivas en [Em7]mí!\n
[C7M]Qué arda en mi alma\n[F7M]Llama viva de tu amor\n[Bm7(5b)]Y qué se vuelva fuego,\n[Em7]Incendio divinal.\n[Am7]A quemar en el altar\n[Dm7]De mi corazón\n[G7]Qué inflame mi ser\n[Bm7(5b)]Eternamente[Em7].\n 
[C7M]Que abrase mi alma\n[F7M]Y todo lo que soy.\n[Bm7(5b)]Qué en Ti mi corazón\n[Em7]Desfalezca.\n[Am7]Y en el día de mi muerte\n[Dm7]Delante de Ti esté\n[G7]Totalmente consumido\n[Bm7(5b)]en tu a[Em7]mor.\n
Amén.
    `
},
{
    id: 103,
    titulo: "Magnificat",
    autor: "Walace Aguiar",
    categoria: "angelichristi, reflexion",
    tonoOriginal: "G",
    letra: `
[G]Ave, llena de gracias, el Señor con[Em]tigo es[G]tá\n 
[G]Proclama mi alma la gran[Em]deza del Señor,
se alegra mi es[C]píritu en Dios, mi sal[Am]vador;
[G]porque ha mirado la humilla[Em]ción de la esclava Suya
Y ben[Am]dita [Bm]me procla[C]ma[D]rán.\n
[G]El Poderoso hizo [Em]cosas maravillosas por mí:
[C]Santo es su [Am]nombre.
[G]y llega a sus [Em]fieles su misericordia
[Am]de gene[Bm]ración en [C]gene[D]ración.\n
[Bm7]Él hace pro[Am7]ezas con su brazo:
[Bm7]Soberbios de cora[Am7]zón dispersa
[Em7]derriba a pode[Am7]rosos de sus tronos
[Em7]y enaltece [Am7]a los humildes,
[Bm7]a los ham[Em7]brientos los colma de bienes
[Am7]y a los ricos los des[D7]pide de manos vacíos.\n
[G]El Poderoso hizo [Em]cosas maravillosas por mí:
[C]Santo es su [Am]nombre.
[G]y llega a sus [Em]fieles su misericordia
[Am]de gene[Bm]ración en [C]gene[D]ración.\n
[G]Socorrió a Isra[Em]el, su siervo,
[C]Se a[Am]cordó de la misericordia
[G]—como lo ha[Em]bía prometido a nuestros padres—
[Am]en fa[Bm]vor de Abra[C]hán y su descen[D]dencia 
por [E7]siempre.\n
(Sube a tono de A)
[A]Ave, llena de gracias, el Señor con[F#m]tigo es[A]tá\n 
    `
},
{
    id: 104,
    titulo: "Esta es mi fe",
    autor: "Jessica Loredo",
    categoria: "angelichristi, reflexion",
    tonoOriginal: "B",
    letra: `
[B]Me acerco entre la multi[D#m]tud,
[C#m]Mi alma rota busca tu [E]luz.[F#]
[B]Me siento indigna al pe[D#m]dir,
[C#m]pero mi corazón me pide se[E]guir.[F#]
[C#m7]Mi fe es frágil y vuelvo a fa[C#m7/B]llar,
llena de [D#m/B]dudas, ¿podré avan[F#]zar?
Pero tu [C#m7]alivias mi que[C#m7/B]branto
[E]con solo tocar tu [F#]manto.\n
Y aunque me [G#m7]siento invi[B/F#]sible,
como una [C#m9]sombra al pa[B]sar,
tu mi[G#m7]rada, llena de a[B]mor,
me en[C#m9]seña la reali[B]dad.
Me co[G#m7]noces por mi [B/F#]nombre,
mi do[C#m9]lor puedes sa[B]nar,
al to[G#m7]carte hallé mi [B/F#]vida,
soy tu [C#m9]hija, y nada [B]más.\n
[B]El rostro oculto al cargar mi [D#m]cruz,
[C#m]tan lejos me fui, perdí mi vir[E]tud.[F#]
[B]Pero una chispa me impulsa a se[D#m]guir,
[C#m]tu gracia es la fuerza que me hace vi[E]vir.[F#]
[C#m7]Quiero decirte: esta es mi [C#m7/B]fe,
aunque pe[D#m/B]queña, aunque inma[F#]dura.
Se a[C#m7]ferra al hilo de tu po[C#m7/B]der,
[E]porque tu amor todo lo [F#]cura.\n
Y aunque me [G#m7]siento invi[B/F#]sible,
como una [C#m9]sombra al pa[B]sar,
tu mi[G#m7]rada, llena de a[B]mor,
me en[C#m9]seña la reali[B]dad.
Me co[G#m7]noces por mi [B/F#]nombre,
mi do[C#m9]lor puedes sa[B]nar,
al to[G#m7]carte hallé mi [B/F#]vida,
soy tu [C#m9]hija, y nada [B]más.\n
[E]"Tu fe te ha sal[D#m]va[C#m]do", [D#m]escucho tu [C#m]voz,
y [E]caigo ren[C#m]dida a tus pies, mi [D#m]Dios.
Mi [E/C#]alma [E/B]cansa-da en[F#/D#]cuentra con[E]suelo,
en este [G#m7]momen[B/F#]to me [E]llenas de [F#]cielo.\n
Y aunque me [G#m7]siento invi[B/F#]sible,
como una [C#m9]sombra al pa[B]sar,
tu mi[G#m7]rada, llena de a[B]mor,
me en[C#m9]seña la reali[B]dad.
Me co[G#m7]noces por mi [B/F#]nombre,
mi do[C#m9]lor puedes sa[B]nar,
al to[G#m7]carte hallé mi [B/F#]vida,
soy tu [C#m9]hija, y nada [B]más.\n
Quiero decirte: esta es mi fe.
Soy tu hija, en tu amor hallé mi vida.
    `
},
{
    id: 105,
    titulo: "Agnus Dei (Miserere)",
    autor: "Walace Aguiar",
    categoria: "cordero, angelichristi",
    tonoOriginal: "G",
    letra: `
[C7M] [Bm] [Am7] [D#dim] [F#dim]\n
[C7M]A[Bm]gnus [Am7]De[D#dim]i,[F#dim]
[G/B]Qui tollis pec[Am]cata mundi, ([A4] [B4/A])
[Am]Mise[D]rere [G]no[Am]bis. ([Em7])\n
[C7M]A[Bm]gnus [Am7]De[D#dim]i,[F#dim]
[G/B]Qui tollis pec[Am]cata mundi, ([A4] [B4/A])
[Am]Mise[D]rere [G]no[Am]bis. ([Em7])\n
[C7M]A[Bm]gnus [Am7]De[D#dim]i,[F#dim]
[G/B]Qui tollis pec[Am]cata mundi, ([A4] [B4/A])
[Am]Dona [D]nobis [G]pa[Am]cem.
    `
},
{
    id: 106,
    titulo: "Dó sostenido menor / El Señor es mi pastor (Salmo 23)",
    autor: "Walace Aguiar",
    categoria: "angelichristi",
    tonoOriginal: "C#m",
    letra: `
[C#m B E A D#m7(5b) G#m7]\n 
[C#m]El Se[B]ñor es [E]mi pas[A]tor
Y [D#m7(5b)]nada me fal[G#m7]tará 
A las [C#m]aguas tran[B]quilas [E]me con[A]duce 
Y en [D#m7(5b)]verdes pastos me hace re[G#m7]posar.\n 
[C#m]Pero soy débil,
[B]Incrédulo.
[F#m7]Confío en mí 
[G#m7]Y dudo de Ti Señor.
[C#m]Fortalece
[B]Mi esperanza
[F#m7]E inflama
[A]Mi a[Am]mor\n
[C#m]El Se[B]ñor es [E]mi pas[A]tor
Y [D#m7(5b)]nada me fal[G#m7]tará 
A las [C#m]aguas tran[B]quilas [E]me con[A]duce 
Y en [D#m7(5b)]verdes pastos me hace re[G#m7]posar.\n
[C#m]Haz más grande
[B]Mi fe en ti 
[F#m7]Mi orgullo
[G#m7]Solo escucha mi razón 
[C#m]Soy pequeño
[B]Mi gran Rey
[F#m7]solo Tú eres
[A]Mi Se[Am]ñor.
    `
},
{
    id: 109,
    titulo: "Funk del Señor",
    autor: "Walace Aguiar",
    categoria: "alabanza, angelichristi",
    tonoOriginal: "Dm",
    letra: `
[Dm] [D7(4/9)]\n
[Dm]Mamá me ense[D7(4/9)]ñó 
A por[Dm]tarme [D7(4/9)]bien 
A re[Dm]zar a [D7(4/9)]Dios
Y a la [Dm]Virgen tam[D7(4/9)]bién.\n
[Dm]Laiá laiá laiá [A]uh
[Dm]Laiá [D7(4/9)] [A]\n
[Dm]Cantaré a [D7(4/9)]Cristo
A [Dm]Él mi ala[D7(4/9)]banza
[Dm]Él es mi Se[D7(4/9)]ñor
Y [Dm]mi espe[D7(4/9)]ranza\n
[Dm]Para el in[D7(4/9)]fierno 
Yo [Dm]no quiero [D7(4/9)]ir
El [Dm]Diablo es [D7(4/9)]feo 
[Dm]Huele a pi[D7(4/9)]pí \n
[Dm]Hoy yo estoy [D7(4/9)]vivo
Ma[Dm]ñana no [D7(4/9)]sé 
Pero [Dm]estoy con [D7(4/9)]Cristo
En el [Dm]cielo esta[D7(4/9)]ré\n
[Dm]Dios está en el [D7(4/9)]cielo 
Y [Dm]en mi cora[D7(4/9)]zón 
En el [Dm]infierno el [D7(4/9)]Diablo
Con [Dm]su mosta[D7(4/9)]chón\n
[Dm]Levanto mis [D7(4/9)]ojos
Con [Dm]senti[D7(4/9)]miento
[Dm]Usame mi [D7(4/9)]Dios
Como [Dm]tu instru[D7(4/9)]mento\n
La [Dm]palabra de [D7(4/9)]Dios
[Dm]Sabe a [D7(4/9)]miel
Mi [Dm]sol es [D7(4/9)]Cristo
Y [Dm]no Luis Mi[D7(4/9)]guel.\n
Es[Dm]tar en el [D7(4/9)]cielo
Se[Dm]rá una mara[D7(4/9)]villa
A[Dm]llá está la [D7(4/9)]Virgen
Y [Dm]Santa Ce[D7(4/9)]cilia.\n
Es[Dm]tar en el [D7(4/9)]cielo
Se[Dm]rá muy bo[D7(4/9)]nito
A[Dm]llá está la [D7(4/9)]Virgen
Y [Dm]mi San Be[D7(4/9)]nito \n
De [Dm]mañana [D7(4/9)]rezo
De [Dm]tarde tam[D7(4/9)]bién 
Por la [Dm]noche i[D7(4/9)]gual.
[Dm]Glória a [D7(4/9)]Dios. A[Dm]mén.
    `
},
{
    id: 110,
    titulo: "Estoy Cansado de Gritar (Salmo 69)",
    autor: "Hiiro",
    categoria: "reflexion, angelichristi",
    tonoOriginal: "C (Capo 4)",
    letra: `
Capo 4\n
(Verso 1-Walace) 
[C] [G] [Em] [D] 
Estoy con el agua al cuello,
me hundo en un mar sin fin.
No hay suelo bajo mis pies cansados,
y la corriente va tras de mí.
(Andrea) 
Estoy cansado de gritar,
mi garganta se partió,
mis ojos se apagan lentamente,
esperando un sí de Dios.\n
(Verso 2-lissie)
Son más que mis cabellos
los que me quieren ver caer.
Me odian sin razón,
y yo no sé porqué 
(gerry-oliver) 
¿Devolver lo que no robé?
¿Callaré lo que no hice?
Tú conoces mi necedad,
tú has visto lo que escondí.\n
(Pre-Coro, Jessica) [Am] [C] [G] 
Y si caigo, no dejes que tro[C]piecen por mi error,
no dejes que se aver[G]güencen los que esperan tu amor.\n
(Coro, apoyo todos) [Em] [C] [G] [D] 
Estoy cansado de gritar,
y mi alma se desgasta en soledad.
Pero sigo aquí, hablando con el cielo gris,
esperando que me vengas a salvar.
Por tu amor inmenso, por tu fidelidad…
¡Respóndeme ya!\n
(Coro Final Todos)
Estoy cansado de gritar,
pero no me vas a abandonar.
Sé que tú me ves, aunque nadie más lo haga,
tú sabes cuánto duele esperar.
(Kike) 
Por tu amor inmenso, por tu fidelidad…
Oh Dios… sálvame ya.
    `
},
{
    id: 111,
    titulo: "Todo es tuyo Señor",
    autor: "Jessica Loredo",
    categoria: "angelichristi",
    tonoOriginal: "D",
    letra: `
[D Bm G A]\n
Te miro aqui frente a mi
Te intento escuchar 
Que quieres de mi?
Señor ¿como he de amar?\n
Quiero estar cerca de ti
Quiero demostrar 
Que seguirte a ti 
Todo mal ha de arreglar\n
[Coro: F#m Bm G A]
Mis manos, mi voz, mi ser 
Quieren obrar con amor 
Haz conmigo tu reino crecer
Todo es tuyo Señor 
Todo es tuyo Señor\n
Tómalo todo señor 
Yo solo quiero servir
Ser instrumento de amor
Para ti yo quiero vivir\n
Mis manos, mi voz, mi ser 
Quieren obrar con amor 
Haz conmigo tu reino crecer
Todo es tuyo Señor 
Todo es tuyo Señor\n
Hazme llegar a quien necesite tu amor
Que la esperanza siempre esté en ti señor\n
Mis manos, mi voz, mi ser 
Quieren obrar con amor 
Haz conmigo tu reino crecer
Todo es tuyo Señor 
Todo es tuyo Señor
Todo es tuyo Señor`
},
];
// último id:405
