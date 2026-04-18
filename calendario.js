const datosLiturgicos = {
    "Ciclo A": [
        // ADVIENTO
        { id: "a_adv_1", nombre: "1º Domingo de Adviento", cantos: [1,2,3,4,5] },
        { id: "a_adv_2", nombre: "2º Domingo de Adviento", cantos: [1,2,3,4,5] },
        { id: "a_adv_3", nombre: "3º Domingo de Adviento", cantos: [1,2,3,4,5] },
        { id: "a_adv_4", nombre: "4º Domingo de Adviento", cantos: [1,2,3,4,5] },

        // NAVIDAD
        { id: "a_navidad", nombre: "Navidad del Señor", cantos: [1,2,3,4,5] },
        { id: "a_sagrada_familia", nombre: "Sagrada Familia", cantos: [1,2,3,4,5] },
        { id: "a_maria_madre", nombre: "Santa María Madre de Dios", cantos: [1,2,3,4,5] },

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
        { id: "a_cua_1", nombre: "1º Domingo de Cuaresma", cantos: [1,2,3,4,5] },
        { id: "a_cua_2", nombre: "2º Domingo de Cuaresma", cantos: [1,2,3,4,5] },
        { id: "a_cua_3", nombre: "3º Domingo de Cuaresma", cantos: [1,2,3,4,5] },
        { id: "a_cua_4", nombre: "4º Domingo de Cuaresma", cantos: [1,2,3,4,5] },
        { id: "a_cua_5", nombre: "5º Domingo de Cuaresma", cantos: [1,2,3,4,5] },

        // SEMANA SANTA / PASCUA
        { id: "a_ramos", nombre: "Domingo de Ramos", cantos: [1,2,3,4,5] },
        { id: "a_pascua", nombre: "Domingo de Pascua", cantos: [10,113,112,64,79,90,114,128,172,170,155] },

        // TIEMPO PASCUAL
        { id: "a_pascua_2", nombre: "2º Domingo de Pascua", cantos: [10,113,112,64,79,90,114,128,172,170,155] },
        { id: "a_pascua_3", nombre: "3º Domingo de Pascua", cantos: [10,113,112,64,79,90,114,128,172, 173,170, 155] },
        { id: "a_pascua_4", nombre: "4º Domingo de Pascua", cantos: [10,113,112,64,79,90,114,128,172,170,155] },
        { id: "a_pascua_5", nombre: "5º Domingo de Pascua", cantos: [10,113,112,64,79,90,114,128,172,170,155] },
        { id: "a_pascua_6", nombre: "6º Domingo de Pascua", cantos: [10,113,112,64,79,90,114,128,172,170,155] },

        // TIEMPO ORDINARIO (9–34)
        ...Array.from({length: 26}, (_,i) => ({
            id: `a_to_${i+9}`,
            nombre: `${i+9}º Domingo del Tiempo Ordinario`,
            cantos: [1,2,3,4,5]
        }))
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
        { id: "sol_maria_madre", nombre: "Santa María Madre de Dios", cantos: [1,2,3,4,5] },
        { id: "sol_epifania", nombre: "Epifanía del Señor", cantos: [1,2,3,4,5] },
        { id: "sol_san_jose", nombre: "San José", cantos: [1,2,3,4,5] },
        { id: "sol_anunciacion", nombre: "Anunciación del Señor", cantos: [1,2,3,4,5] },
        { id: "sol_trinidad", nombre: "Santísima Trinidad", cantos: [1,2,3,4,5] },
        { id: "sol_corpus", nombre: "Corpus Christi", cantos: [1,2,3,4,5] },
        { id: "sol_sagrado_corazon", nombre: "Sagrado Corazón de Jesús", cantos: [1,2,3,4,5] },
        { id: "sol_pedro_pablo", nombre: "San Pedro y San Pablo", cantos: [1,2,3,4,5] },
        { id: "sol_asuncion", nombre: "Asunción de la Virgen María", cantos: [1,2,3,4,5] },
        { id: "sol_todos_santos", nombre: "Todos los Santos", cantos: [1,2,3,4,5] },
        { id: "sol_cristo_rey", nombre: "Cristo Rey", cantos: [1,2,3,4,5] },
        { id: "sol_inmaculada", nombre: "Inmaculada Concepción", cantos: [19,2,5,4,20] },
        { id: "sol_navidad", nombre: "Navidad del Señor", cantos: [1,2,3,4,5] }
    ]
};