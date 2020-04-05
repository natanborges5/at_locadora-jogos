const state = {
    jogos: [
     {"response":"success","id":"1","Categoria":"RPG","name":"The Witcher 3","dadosjogo":{"sumario":"Ambientado em um gigantesco cenário medieval que dá liberdade total ao jogador, o game, que possui uma jogabilidade não linear e é jogado através de uma perspectiva em terceira pessoa, tem o lendário bruxo Geralt de Rívia como seu protagonista, o qual inicia uma longa jornada pelos Reinos do Norte.","categoria":1 ,"data":"2016"},"image":{"url":"https://s1.1zoom.me/b5246/198/The_Witcher_3_Wild_Hunt_Geralt_of_Rivia_Warriors_515805_600x800.jpg"}},
     {"response":"success","id":"2","Categoria":"FPS","name":"Metro Exodus","dadosjogo":{"sumario":"Metro Exodus é um jogo eletrônico de tiro em primeira pessoa com elementos de survival horror e stealth. Situado no terreno baldio pós-apocalíptico da antiga Federação Russa, o jogador deve lidar com os novos perigos e se envolver em combate contra criaturas mutantes, assim como contra humanos hostis.","categoria":"FPS","data":"2019"},"image":{"url":"https://media.playstation.com/is/image/SCEA/metro-exodus-box-art-01-ps4-us-25jan18?$native_nt$"}},
     {"response":"success","id":"3","Categoria":"RPG","name":"God of War","dadosjogo":{"sumario":"Kratos, o antigo deus grego da guerra que é acompanhado por seu jovem filho Atreus. Após a morte da segunda esposa de Kratos e mãe de Atreus, eles viajam para cumprir sua promessa de espalhar suas cinzas no pico mais alto dos nove reinos. Kratos mantém seu passado conturbado em segredo de Atreus, que não tem consciência de sua natureza divina. Ao longo da jornada, eles encontram monstros e deuses do mundo nórdico.","categoria":"RPG","data":"2019"},"image":{"url":"https://static-cdn.jtvnw.net/ttv-boxart/God%20of%20War.jpg"}},
     {"response":"success","id":"4","Categoria":"RPG","name":"Sekiro","dadosjogo":{"sumario":"O jogo se passa em uma versão mágica e fictícia do período Sengoku no Japão, e segue um shinobi que tenta se vingar de um clã samurai que o atacou e sequestrou seu lorde.","categoria":"RPG","data":"2016"},"image":{"url":"https://static-cdn.jtvnw.net/ttv-boxart/Sekiro%3A%20Shadows%20Die%20Twice.jpg"}},
     {"response":"success","id":"5","Categoria":"AÇÃO","name":"Red Dead Redemption 2","dadosjogo":{"sumario":"A história se passa em 1899 em uma representação ficcional do oeste, meio-oeste e sul dos Estados Unidos e acompanha o fora da lei Arthur Morgan, que precisa lidar com o declínio do Velho Oeste e sobreviver à perseguição de forças governamentais, gangues rivais e outros adversários.","categoria":"Ação","data":"2018"},"image":{"url":"https://static-cdn.jtvnw.net/ttv-boxart/Red%20Dead%20Redemption%202.jpg"}},
     {"response":"success","id":"6","Categoria":"RPG","name":"The Outer Worlds","dadosjogo":{"sumario":"O jogo se passa em um futuro alternativo que divergiu em 1901, quando o presidente dos EUA William McKinley não é assassinado por Leon Czolgosz na Exposição Pan-Americana. Como resultado, Theodore Roosevelt nunca o sucedeu, permitindo que grandes organizações de negócios dominassem a sociedade no futuro, onde megacorporações começaram a colonizar e a terraformar planetas alienígenas.","categoria":"RPG","data":"2019"},"image":{"url":"https://static-cdn.jtvnw.net/ttv-boxart/The%20Outer%20Worlds.jpg"}},
     {"response":"success","id":"7","Categoria":"AÇÃO","name":"Resident Evil 2","dadosjogo":{"sumario":"O jogo se passa em uma versão mágica e fictícia do período Sengoku no Japão, e segue um shinobi que tenta se vingar de um clã samurai que o atacou e sequestrou seu lorde.","categoria":"RPG","data":"2016"},"image":{"url":"https://static-cdn.jtvnw.net/ttv-boxart/Resident%20Evil%202.jpg"}},
   ]
   };
   const getters = {
     allJogos: state => state.jogos,
     jogoById: (state) => (id) => (state.jogos.filter(t => t.id == id))[0],

   };
   const actions = {
     fetchJogos({ commit }) {
         commit("setJogos");
     },
     deleteJogo({ commit }, id) {
      commit("removeJogo", id);
    },
    addJogo({ commit }, jogo_add) {
      const new_index =  state.jogos.length +1
      const response =  {
              "id": new_index ,
              "title": jogo_add.title,
              "completed": false,
            }
      commit("newJogo",response);
    },
     
   };
   
   const mutations = {
     setJogos: (state) => state.jogos ,
     getJogo: (state, jogo) => (state.jogos = jogo),
     newJogo: (state, jogo) => state.jogos.push(jogo),
     removeJogo: (state, id) => (state.todos = state.todos.filter(t => t.id !== id)),
     
   };
   
   export default {
     state,
     actions,
     getters,
     mutations
   };
