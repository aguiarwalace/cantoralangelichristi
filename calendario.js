const datosLiturgicos = {
    "Ciclo A": [
        // ADVIENTO
        /*{ id: "a_adv_1", nombre: "1º Domingo de Adviento", cantos: [134,2,3,4,5] },
        { id: "a_adv_2", nombre: "2º Domingo de Adviento", cantos: [1,2,3,4,5] },
        { id: "a_adv_3", nombre: "3º Domingo de Adviento", cantos: [1,2,3,4,5] },
        { id: "a_adv_4", nombre: "4º Domingo de Adviento", cantos: [1,2,3,4,5] },

        // NAVIDAD
        { id: "a_sagrada_familia", nombre: "Sagrada Familia", cantos: [1,2,3,4,5] },
        { id: "a_bautismo", nombre: "Bautismo del Señor", cantos: [1,2,3,4,5] },

        // TIEMPO ORDINARIO (1–8 antes de cuaresma aprox.)
        { id: "a_to_1", nombre: "1º Domingo del Tiempo Ordinario", cantos: [1,2,3,4,5] },
        { id: "a_to_2", nombre: "2º Domingo del Tiempo Ordinario", cantos: [1,2,3,4,5] },
        { id: "a_to_3", nombre: "3º Domingo del Tiempo Ordinario", cantos: [1,2,3,4,5] },
        { id: "a_to_4", nombre: "4º Domingo del Tiempo Ordinario", cantos: [1,2,3,4,5] },
        { id: "a_to_5", nombre: "5º Domingo del Tiempo Ordinario", cantos: [1,2,3,4,5] },
        { id: "a_to_6", nombre: "6º Domingo del Tiempo Ordinario", cantos: [1,2,3,4,5] },
        { id: "a_to_7", nombre: "7º Domingo del Tiempo Ordinario", cantos: [1,2,3,4,5] },
        { id: "a_to_8", nombre: "8º Domingo del Tiempo Ordinario", cantos: [1,2,3,4,5] },

        // CUARESMA
        { id: "a_cenizas", nombre: "Miércoles de Cenizas", cantos: [1,2,3,4,5] },
        { id: "a_cua_1", nombre: "1º Domingo de Cuaresma", cantos: [1,2,3,4,5] },
        { id: "a_cua_2", nombre: "2º Domingo de Cuaresma", cantos: [1,2,3,4,5] },
        { id: "a_cua_3", nombre: "3º Domingo de Cuaresma", cantos: [1,2,3,4,5] },
        { id: "a_cua_4", nombre: "4º Domingo de Cuaresma", cantos: [1,2,3,4,5] },
        { id: "a_cua_5", nombre: "5º Domingo de Cuaresma", cantos: [1,2,3,4,5] },

        // SEMANA SANTA / PASCUA
        { id: "a_ramos", nombre: "Domingo de Ramos", cantos: [1,2,3,4,5] },
        { id: "a_jueves", nombre: "Jueves Santo", cantos: [1,2,3,4,5] },
        { id: "a_viernes", nombre: "Viernes Santo", cantos: [1,2,3,4,5] },
        { id: "a_sabado", nombre: "Sábado de Gloria", cantos: [1,2,3,4,5] },
        { id: "a_pascua", nombre: "Domingo de Pascua", cantos: [10,113,112,64,79,90,114,128,172,170,155] },

        // TIEMPO PASCUAL
        { id: "a_pascua_2", nombre: "2º Domingo de Pascua - Domingo de la Misericordia", cantos: [10,113,112,64,79,90,114,128,172,170,155] },
        { id: "a_pascua_3", nombre: "3º Domingo de Pascua", cantos: [10,173,112,64,79,90,114,128,172,170, 155] },
        { id: "a_pascua_4", nombre: "4º Domingo de Pascua", cantos: [10,173,112,64,79,90,114,128,191,172,170,155] },
        { id: "a_pascua_5", nombre: "5º Domingo de Pascua", cantos: [10,173,112,64,79,90,114,128,383,172,170,155] },
        { id: "a_pascua_6", nombre: "6º Domingo de Pascua", cantos: [10,173,112,64,79,90,114,128,172,170,155] },
        { id: "a_pascua_7", nombre: "7º Domingo de Pascua - Ascensión del Señor", cantos: [10,173,112,64,79,90,114,128,172,170,155] },
        { id: "a_pentecostes", nombre: "Pentecostés", cantos: [263,173,112,64,79,90,114,128,276,270,277] },*/

        // TIEMPO ORDINARIO (9–34)
        /*...Array.from({length: 26}, (_,i) => ({
            id: `a_to_${i+9}`,
            nombre: `${i+9}º Domingo del Tiempo Ordinario`,
            cantos: [1,2,3,4,5]
        }))*/
        { id: "a_to_9", nombre: "9º Domingo del Tiempo Ordinario", cantos: [1,2,3,4,5] },
        { id: "a_to_10", nombre: "10º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,397,391,100,122,144,133,239] },
        { id: "a_to_11", nombre: "11º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,397,391,100,122,151,339,239] },    
        { id: "a_to_12", nombre: "12º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,397,391,100,122,191,370,398,239] },
        { id: "a_to_13", nombre: "13º Domingo del Tiempo Ordinario", cantos: [4,399,25,243,402,397,391,100,122,151,401,338,239,339] },
        { id: "a_to_14", nombre: "14º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,397,391,100,122,144,133,239] },
        { id: "a_to_15", nombre: "15º Domingo del Tiempo Ordinario", cantos: [4,25,243,402,397,391,100,122,357,403,239] },
        { id: "a_to_16", nombre: "16º Domingo del Tiempo Ordinario", cantos: [19,25,243,402,397,77,405,122,351,133,399] },
        { id: "a_to_17", nombre: "17º Domingo del Tiempo Ordinario", 
            cantos: [/*e*/19,/*pd*/25,/*gl*/243,/*al*/402,/*cre*/397,/*of*/77,/*st*/405,/*cor*/122,/*com*/147,/*ref*/142,/*f*/399] },
        { id: "a_to_18", nombre: "18º Domingo del Tiempo Ordinario", 
            cantos: [/*e*/16,/*pd*/25,/*gl*/243,/*al*/244,/*cre*/397,/*of*/75,/*st*/405,/*cor*/121,/*com*/135,/*ref*/383,/*f*/399] },
        { id: "a_to_19", nombre: "19º Domingo del Tiempo Ordinario", 
         cantos: [/*e*/16,/*pd*/25,/*gl*/243,/*al*/402,/*cre*/397,/*of*/75,/*st*/405,/*cor*/121,/*com*/151,/*ref*/110,/*f*/399] },
        { id: "a_to_20", nombre: "20º Domingo del Tiempo Ordinario", 
            cantos: [/*e*/16,/*pd*/25,/*gl*/243,/*al*/402,/*cre*/397,/*of*/75,/*st*/405,/*cor*/121,/*com*/151,/*ref*/133,/*f*/399] },
        { id: "a_to_21", nombre: "21º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,397,391,100,122,144,133,239] },
        { id: "a_to_22", nombre: "22º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,397,391,100,122,144,133,239] },
        { id: "a_to_23", nombre: "23º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,397,391,100,122,144,133,239] },
        { id: "a_to_24", nombre: "24º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,397,391,100,122,144,133,239] },
        { id: "a_to_25", nombre: "25º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,397,391,100,122,144,133,239] },
        { id: "a_to_26", nombre: "26º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,397,391,100,122,144,133,239] },
        { id: "a_to_27", nombre: "27º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,397,391,100,122,144,133,239] },
        { id: "a_to_28", nombre: "28º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,391,100,122,144,133,239] },
        { id: "a_to_29", nombre: "29º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,391,100,122,144,133,239] },
        { id: "a_to_30", nombre: "30º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,391,100,122,144,133,239] },
        { id: "a_to_31", nombre: "31º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,391,100,122,144,133,239] },
        { id: "a_to_32", nombre: "32º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,391,100,122,144,133,239] },
        { id: "a_to_33", nombre: "33º Domingo del Tiempo Ordinario", cantos: [4,25,243,60,391,100,122,144,133,239] },
        { id: "a_to_34", nombre: "34º Domingo del Tiempo Ordinario - Cristo Rey", cantos: [4,25,243,60,391,100,122,144,133,239] },
    ],

    "Ciclo B": [
        { id: "b_adv_1", nombre: "1º Domingo de Adviento", cantos: [1,2,3,4,5] },
        { id: "b_adv_2", nombre: "2º Domingo de Adviento", cantos: [1,2,3,4,5] },
        { id: "b_adv_3", nombre: "3º Domingo de Adviento", cantos: [1,2,3,4,5] },
        { id: "b_adv_4", nombre: "4º Domingo de Adviento", cantos: [1,2,3,4,5] },

        ...Array.from({length: 34}, (_,i) => ({
            id: `b_to_${i+1}`,
            nombre: `${i+1}º Domingo del Tiempo Ordinario`,
            cantos: [1,2,3,4,5]
        })),

        { id: "b_cua_1", nombre: "1º Domingo de Cuaresma", cantos: [1,2,3,4,5] },
        { id: "b_cua_2", nombre: "2º Domingo de Cuaresma", cantos: [1,2,3,4,5] },
        { id: "b_cua_3", nombre: "3º Domingo de Cuaresma", cantos: [1,2,3,4,5] },
        { id: "b_cua_4", nombre: "4º Domingo de Cuaresma", cantos: [1,2,3,4,5] },
        { id: "b_cua_5", nombre: "5º Domingo de Cuaresma", cantos: [1,2,3,4,5] },

        { id: "b_ramos", nombre: "Domingo de Ramos", cantos: [1,2,3,4,5] },
        { id: "b_pascua", nombre: "Domingo de Pascua", cantos: [1,2,3,4,5] }
    ],

    "Ciclo C": [
        { id: "c_adv_1", nombre: "1º Domingo de Adviento", cantos: [1,2,3,4,5] },
        { id: "c_adv_2", nombre: "2º Domingo de Adviento", cantos: [1,2,3,4,5] },
        { id: "c_adv_3", nombre: "3º Domingo de Adviento", cantos: [1,2,3,4,5] },
        { id: "c_adv_4", nombre: "4º Domingo de Adviento", cantos: [1,2,3,4,5] },

        ...Array.from({length: 34}, (_,i) => ({
            id: `c_to_${i+1}`,
            nombre: `${i+1}º Domingo del Tiempo Ordinario`,
            cantos: [1,2,3,4,5]
        })),

        { id: "c_cua_1", nombre: "1º Domingo de Cuaresma", cantos: [1,2,3,4,5] },
        { id: "c_cua_2", nombre: "2º Domingo de Cuaresma", cantos: [1,2,3,4,5] },
        { id: "c_cua_3", nombre: "3º Domingo de Cuaresma", cantos: [1,2,3,4,5] },
        { id: "c_cua_4", nombre: "4º Domingo de Cuaresma", cantos: [1,2,3,4,5] },
        { id: "c_cua_5", nombre: "5º Domingo de Cuaresma", cantos: [1,2,3,4,5] },

        { id: "c_ramos", nombre: "Domingo de Ramos", cantos: [1,2,3,4,5] },
        { id: "c_pascua", nombre: "Domingo de Pascua", cantos: [1,2,3,4,5] }
    ],

    "Solemnidades": [
        { id: "sol_inmaculada", nombre: "Inmaculada Concepción", cantos: [19,2,5,4,20] },
        { id: "sol_guadalupe", nombre: "Nuestra Señora de Guadalupe", cantos: [1,2,3,4,5] },
        { id: "sol_navid_noche", nombre: "Navidad del Señor - Noche", cantos: [393,25,112,65,322,97,128,318,394,336,395,107] },
        { id: "sol_navid_dia", nombre: "Navidad del Señor - Día", cantos: [393,25,112,65,322,97,128,318,394,336,395,107] },
        { id: "sol_maria_madre", nombre: "Santa María Madre de Dios", cantos: [1,2,3,4,5] },
        { id: "sol_epifania", nombre: "Epifanía del Señor", cantos: [1,2,3,4,5] },
        { id: "sol_san_jose", nombre: "San José", cantos: [1,2,3,4,5] },
        { id: "sol_anunciacion", nombre: "Anunciación del Señor", cantos: [1,2,3,4,5] },
        { id: "sol_sstrinidad", nombre: "Santísima Trinidad", cantos: [2,9] },
        { id: "sol_corpus", nombre: "Corpus Christi", cantos: [1,2,3,4,5] },
        { id: "sol_sagrado_corazon", nombre: "Sagrado Corazón de Jesús", cantos: [1,2,3,4,5] },
        { id: "sol_nacim_juanbautista", nombre: "Nacimiento de San Juan Bautista", cantos: [1,2,3,4,5] },
        { id: "sol_pedro_pablo", nombre: "San Pedro y San Pablo", cantos: [1,2,3,4,5] },
        { id: "sol_asuncion", nombre: "Asunción de la Virgen María", cantos: [1,2,3,4,5] },
        { id: "sol_todos_santos", nombre: "Todos los Santos", cantos: [1,2,3,4,5] },
        { id: "commem_fieles_difuntos", nombre: "Conmemoración de todos los Fieles Difuntos", cantos: [1,2,3,4,5] },
        { id: "sol_cristo_rey", nombre: "Nuestro Señor Jesucristo, Rey del Universo", cantos: [1,2,3,4,5] },
    ],
     "Eventos": [
        // EVENTOS
        /*{ id: "vocafest_semi_concierto", nombre: "VocaFest - Seminario mayor (16/05/2026)", cantos: [270,275,106,110,385,277,109,155,386] },
        { id: "vocafest_semi_adoracion", nombre: "Adoración - Seminario mayor (16/05/2026)", cantos: [344,387,383,339,388,367,379,136,270] },
        { id: "vig_pentecostes_hsanta", nombre: "Vigilia de Pentecostés - Motul - H.Santa (23/05/2026)", cantos: [137,389,390,343,339,136] },
        { id: "vig_pentecostes_anima", nombre: "Vigilia de Pentecostés - Motul - Animación (23/05/2026)", cantos: [270,275,106,1000,385,277,109] },
        {id: "fies_patronal_nssc", nombre: "Fiesta patronal NSSC", cantos: [293,173,112,65,64,82,90,128,183,303,316,312] },
        {id: "seminario_entrega_ministerios", nombre: "Seminario - Entrega de Ministerios (20/06/2026)", cantos: [4,25,60,179,391,100,122,143,383,133,198] },*/
        { id: "toma_pe_rolando", nombre: "Toma de Padre Rolando (19/08/2026)", 
            cantos: [/*e*/14,/*pd*/25,/*gl*/243,/*al*/244,/*of*/75,/*st*/405,/*cor*/121,/*com*/151,139,/*ref*/198,133,/*f*/135] },
        { id: "adoracion_asem_dio", nombre: "Adoración - Asamblea dioscesana de adolescentes (23/08/2026)", 
            cantos: [384,339,133] },
        { id: "misa_asem_dio", nombre: "Misa - Asamblea dioscesana de adolescentes (23/08/2026)", 
            cantos: [/*com*/151,/*ref*/342,/*f*/408] },
        { id: "set_animacion", nombre: "Set de animación", 
            cantos: [1000,239,386,410,411,106,109,111] },
        //{ id: "chichimila_concierto", nombre: "Pastoral Juvenil Chichimila - Concierto (25/07/2026)", cantos: [270,275,106,110,385,277,109,155,386] },        
     ],
};
