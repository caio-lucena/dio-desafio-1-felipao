let nomeDoChar = "Mistivam"
let classe = "Nightblade"
let raca = "Dark Elf"
let xp = 0
let hp = 100
let mana = 100
let stamina = 100
let pocaoDeCura = 3
let preparadoParaOCombate = false

function atacarMobComMagia (){
    mana -= 10
    xp += 600
}

function atacarMobComEspada(){
    stamina -= 10
    xp += 600
}

function usarPocaoDeCura(){
    pocaoDeCura--
    hp +=50
}

function sofrerDano(){
    hp -= 5
}

function sofrerAtaqueFurtivo(){
    hp -= 20
}

function desenharLinhaFalaNarrador(){
    console.log()
    console.log("--------------------------------------------------------------------------------------")
    console.log()
}

console.log("Sua cabeça está zonza, a caravana à qual você havia sido contratado para escoltar com a ajuda " +
    "de outros heróis foi completamente saqueada. 'Malditos goblins'! Esse é o primeiro pensamento " +
    "que passa na sua cabeça...E como poderia ser diferente ? Você é um dark elf, de uma das 5 Grandes Casas" +
    ", mais precisamente, da casa Telvanni. Pensar na sua linhagem lhe causa desconforto, como sempre...")

desenharLinhaFalaNarrador()

console.log("Você olha ao seu redor, e vê os corpos de jovens guerreiros recém alistados na Fighters Guild cravejados de flechas rústicas." +
            "Um casal de irmãos, ambos muito jovens..Buscavam se tornar aventureiros para dar uma vida melhor " +
            "aos seus pais, ambos de idade já avançada e sem o vigor para continuar sua lavoura nas terras ao norte de Whiterun.")

desenharLinhaFalaNarrador()

console.log("....Ahahwwaa! Droga! Sem você perceber um verme goblin sorrateiramente crava sua adaga feita de ossos " +
                "na altura da sua costela...O ferimento é profundo")

desenharLinhaFalaNarrador()

if(!preparadoParaOCombate){
    sofrerAtaqueFurtivo()
    preparadoParaOCombate = true
}

console.log("Pontos de vida atuais: " + hp)

desenharLinhaFalaNarrador()

console.log("Você se contorce de dor, vociferando maldições em um élfico ancestral conhecido somente pelos estudantes de magia" +
            ". Labaredas saem de suas mãos enviando o verme goblin para Oblivion")

desenharLinhaFalaNarrador()

atacarMobComMagia()
console.log("XP ganha: " + xp +", XP atual: " + xp)
console.log("Mana atual: " + mana)

desenharLinhaFalaNarrador()

console.log("O grito de desespero do goblin que fora carbonizado vivo pôde ser ouvido a muitos metros do que à pouco fora uma caravana mercante." +
            " Um silêncio interminável precede urros de carregados de ódio! Tambores podem ser ouvidos ao longe. A tribo goblin marcha para se vingar...")

desenharLinhaFalaNarrador()

console.log("Por Azura! A adaga estava envenenada! A sua visão fica turva e vc sente o veneno percorrer seu corpo")

for(let i = 1; i <= 10; i++){
    hp -= i
}

desenharLinhaFalaNarrador()

console.log("Pontos de vida atuais: " + hp)

desenharLinhaFalaNarrador()

console.log("Felizmente, você tem uma poção de cura consigo. Afinal de contas, você é um HERÓI!")
usarPocaoDeCura()

desenharLinhaFalaNarrador()

console.log("Pontos de vida atuais: " + hp)
console.log("Poções de cura disponíveis: " + pocaoDeCura)





