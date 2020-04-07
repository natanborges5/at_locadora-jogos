const state = {
    jogos: [
     {"response":"success","id": "1","name":"The Witcher 3","dadosjogo":{"sumario":"Ambientado em um gigantesco cenário medieval que dá liberdade total ao jogador, o game, que possui uma jogabilidade não linear e é jogado através de uma perspectiva em terceira pessoa, tem o lendário bruxo Geralt de Rívia como seu protagonista, o qual inicia uma longa jornada pelos Reinos do Norte.","data":"2016","categoria":"RPG","nota":"92"},"image":{"url":"https://s1.1zoom.me/b5246/198/The_Witcher_3_Wild_Hunt_Geralt_of_Rivia_Warriors_515805_600x800.jpg"}},
     {"response":"success","id":"2","name":"Metro Exodus","dadosjogo":{"sumario":"Metro Exodus é um jogo eletrônico de tiro em primeira pessoa com elementos de survival horror e stealth. Situado no terreno baldio pós-apocalíptico da antiga Federação Russa, o jogador deve lidar com os novos perigos e se envolver em combate contra criaturas mutantes, assim como contra humanos hostis.","data":"2019","categoria":"Ação","nota":"80"},"image":{"url":"https://media.playstation.com/is/image/SCEA/metro-exodus-box-art-01-ps4-us-25jan18?$native_nt$"}},
     {"response":"success","id":"3","name":"God of War","dadosjogo":{"sumario":"Kratos, o antigo deus grego da guerra que é acompanhado por seu jovem filho Atreus. Após a morte da segunda esposa de Kratos e mãe de Atreus, eles viajam para cumprir sua promessa de espalhar suas cinzas no pico mais alto dos nove reinos. Kratos mantém seu passado conturbado em segredo de Atreus, que não tem consciência de sua natureza divina. Ao longo da jornada, eles encontram monstros e deuses do mundo nórdico.","data":"2019","categoria":"RPG","nota":"94"},"image":{"url":"https://static-cdn.jtvnw.net/ttv-boxart/God%20of%20War.jpg"}},
     {"response":"success","id":"4","name":"Sekiro","dadosjogo":{"sumario":"O jogo se passa em uma versão mágica e fictícia do período Sengoku no Japão, e segue um shinobi que tenta se vingar de um clã samurai que o atacou e sequestrou seu lorde.","data":"2016","categoria":"RPG","nota":"90"},"image":{"url":"https://static-cdn.jtvnw.net/ttv-boxart/Sekiro%3A%20Shadows%20Die%20Twice.jpg"}},
     {"response":"success","id":"5","name":"Spider Man","dadosjogo":{"sumario":"Na história, o criminoso super-humano Senhor Negativo organiza um plano para se vingar do prefeito Norman Osborn e assumir o controle do submundo criminal de Nova Iorque. O Homem-Aranha precisa proteger a cidade assim que o Senhor Negativo ameaça lançar um vírus mortal por toda a área, ao mesmo tempo que é forçado a lidar com seus problemas pessoais como Peter Parker.","data":"2018","categoria":"Ação","nota":"87"},"image":{"url":"https://static-cdn.jtvnw.net/ttv-boxart/Marvel%27s%20Spider-Man.jpg"}},
     {"response":"success","id":"6","name":"Forza Horizon ","dadosjogo":{"sumario":"Forza Horizon 4 foi oficialmente apresentado na conferência do Xbox na E3 2018. Com um mapa fictício do Reino Unido, Forza Horizon 4 é um dos primeiros jogos a apresentar um sistema dinâmico das quatro estações do ano; Verão, Primavera, Outono e Inverno.[3] Cada estação dentro do jogo durará um semana do nosso calendário real, ou seja a cada uma semana a estação é alterada subsequente.","data":"2018","categoria":"Corrida","nota":"92"},"image":{"url":"https://www.gamerview.com.br/wp-content/uploads/2018/10/Forza-Horizon-4_cover.jpg"}},
     {"response":"success","id":"7","name":"Resident Evil 2","dadosjogo":{"sumario":"A história se passa na fictícia Raccoon City em Setembro de 1998, onde a Corporação Umbrella causa um surto de um vírus conhecido como G Vírus na cidade e transformou toda a cidade em zumbis. O jogador pode escolher entre Leon S. Kennedy, um policial novato da polícia de Raccoon City que chega para o seu primeiro dia mas se depara com o surto, ou com Claire Redfield, uma universitária que vai até a cidade atrás de seu irmão, Chris Redfield, um dos protagonistas do primeiro jogo.","data":"2019","categoria":"Terror","nota":"93"},"image":{"url":"https://static-cdn.jtvnw.net/ttv-boxart/Resident%20Evil%202.jpg"}},
     {"response":"success","id":"8","name":"Prey","dadosjogo":{"sumario":"A história se passa no futuro em uma história alternativa e acompanha Morgan Yu, um pesquisador na estação espacial Talos 1 que precisa combater os alienígenas hostis Typhoon depois deles escaparem de seu confinamento. O jogador tem a sua disposição várias armas, itens e habilidades que lhe permitem combater os alienígenas e explorar o mundo aberto da estação espacial.","data":"2017","categoria":"Terror","nota":"84"},"image":{"url":"https://static-cdn.jtvnw.net/ttv-boxart/Prey.jpg"}},
    ]
   };
   const getters = {
     allJogos: state => state.jogos,
     jogoById: (state) => (id) => (state.jogos.filter(t => t.id == id))[0],

   };
   const actions = {
    addJogos({commit}, add_jogo){
      const new_ind = state.jogos.length + 1;
      const resp = {
        "id":new_ind,
        "name":add_jogo.name,
        "dadosjogo":{
          "sumario":add_jogo.dadosjogo.sumario,
          "data":add_jogo.dadosjogo.data,
          "categoria":add_jogo.dadosjogo.categoria,
          "nota":add_jogo.dadosjogo.nota
        },
        "image":{
          "url":add_jogo.image.url
        }
      }
      commit("newGame",resp)
    },
     deleteJogo({ commit }, id) {
      commit("removeJogo", id);
    },
     
   };
   
   const mutations = {
     newGame: (state, n_jogo) => state.jogos.push(n_jogo),
     removeJogo: (state, id) => (state.jogos = state.jogos.filter(t => t.id !== id)),
     
   };
   
   export default {
     state,
     actions,
     getters,
     mutations
   };
