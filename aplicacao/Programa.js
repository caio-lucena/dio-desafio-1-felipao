let nomeDoChar = "Mistivam"
let classe = "Nightblade"
let raca = "Dark Elf"
let xp = 0
let hp = 100
let mana = 100
let stamina = 100
let pocaoDeCura = 3
let pocaoDeMana = 2
let pocaoDeStamina = 2
let preparadoParaOCombate = false
let goblinsInimigos = 6
let hpDoBoss = 150
let pontosDeEspecial = 0
let nivel = "Ferro"

function atacarMobComMagia (){
    if(mana < 20 && pocaoDeMana >= 1){
        usarPocaoDeMana()
    }
    mana -= 10
    xp += 600
    goblinsInimigos--
    hpDoBoss -= 10
}

function atacarMobComEspada(){
    if(stamina < 20 && pocaoDeStamina >= 1){
        usarPocaoDeStamina()
    }
    stamina -= 10
    xp += 600
    goblinsInimigos--
}

function usarUltimate(){
    hpDoBoss = 0    
}

function usarPocaoDeCura(){
    pocaoDeCura--
    hp +=50
}

function usarPocaoDeMana(){
    mana += 40
    pocaoDeMana--
}

function usarPocaoDeStamina(){
    stamina += 40
    pocaoDeStamina--
}

function sofrerDano(){
    hp -= 5
}

function sofrerAtaqueFurtivo(){
    hp -= 20
}

function sofrerAtaqueDoBoss(){
    hp -= 15
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
            " Um casal de irmãos, ambos muito jovens...Buscavam se tornar aventureiros para dar uma vida melhor " +
            "aos seus pais, fazendeiros de idade avançada e sem o vigor para continuar sua lavoura nas terras ao norte de Whiterun.")

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
            " Um silêncio interminável precede urros carregados de ódio! Tambores podem ser ouvidos ao longe. A tribo goblin marcha para se vingar...")

desenharLinhaFalaNarrador()

console.log("Por Azura! A adaga estava envenenada! A sua visão fica turva e vc sente o veneno percorrer seu corpo")

for(let i = 1; i <= 10; i++){
    hp -= i
}

desenharLinhaFalaNarrador()

console.log("Pontos de vida atuais: " + hp)

desenharLinhaFalaNarrador()

console.log("Felizmente, você tem poções de cura consigo. Afinal de contas, você é um HERÓI!")
usarPocaoDeCura()

desenharLinhaFalaNarrador()

console.log("Pontos de vida atuais: " + hp)
console.log("Poções de cura disponíveis: " + pocaoDeCura)

desenharLinhaFalaNarrador()

console.log("Em pouco tempo, os goblins formam um semicírculo à sua volta. Seu líder, um temível Hobgoblin com uma aparência" +
            " assustadora, observa seus lacaios o atacarem enquanto bebe uma odiosa bebida bárbara de um crânio humano recém" +
            " arrancado que faz às vezes de taça em uma cena dantesca.")

desenharLinhaFalaNarrador()

console.log("Como sempre, você ataca primeiro! Os malditos goblins não fazem ideia de quem estão enfrentando...Espada e Magia" +
            " em perfeita sincronia. Um espetáculo de fogo e aço eliminando seus inimigos um a um")

desenharLinhaFalaNarrador()

while(hp > 0 && goblinsInimigos > 0){
    atacarMobComEspada()
    atacarMobComMagia()

    for (let i = 1; i <= goblinsInimigos; i++){
        sofrerDano()
    }
    
}

console.log("Pontos de vida atuais: " + hp)
console.log("Mana atual: " + mana)
console.log("Stamina atual: " + stamina)
console.log("XP atual: " + xp)

desenharLinhaFalaNarrador()

console.log("'O líder parece irritado...' É o que você pensa enquanto limpa o sangue do seu rosto e avança rumo ao BOSS!")
console.log("Força contra agilidade! Uma luta em que ambos os lados buscam, com todas as forças derrotar inimigo")

desenharLinhaFalaNarrador()

while(hpDoBoss > 0 && hp > 0){

    if(mana > 0){
        atacarMobComMagia()
    }
    if(stamina > 0){
        atacarMobComEspada()
    }
        
    sofrerAtaqueDoBoss()
    pontosDeEspecial++

    if(hp <= 20 && pocaoDeCura >= 1){
        console.log("Você avista uma abertura nos ataques do seu oponetente e aproveita! Uma  poção de cura é consumida")
        usarPocaoDeCura()
        console.log("Pontos de vida atuais: " + hp)
        console.log("Mana atual: " + mana)
        console.log("Stamina atual: " + stamina)
        desenharLinhaFalaNarrador()
    }

    if(pontosDeEspecial >= 10){
        console.log("Após uma luta feroz, com ambos os lados causando quantidades assustadoras de dano" + 
        ", você concentra sua fúria arcana em um único ponto, formando uma flecha espectral, feita das almas dos inimigos caídos" +
        " e dispara! Acertando o peito do hobgoblin. Um ataque que não deixa vestígios! Digno de um Nightblade como você ")
        usarUltimate()
    }   

}

desenharLinhaFalaNarrador()

console.log("Pontos de vida atuais: " + hp)
console.log("Mana atual: " + mana)
console.log("Stamina atual: " + stamina)
console.log("XP atual: " + xp)


desenharLinhaFalaNarrador()


console.log("Retornando à guilda de aventureitos como único sobrevivente você é celebrado como um verdadeiro herói!" +
            " Não obstante, você faz questão de enviar suas condolências e parte do ouro ganho para um velho casal de Nords que" +
            " perdera seus preciosos filhos...")

if (xp < 100){
    nivel = "Ferro"
}
else if (xp < 2000){
    nivel = "Bronze"
}
else if (xp < 5000){
    nivel = "Prata"
}
else if (xp < 7000){
    nivel = "Ouro"
}
else if (xp < 8000){
    nivel = "Platina"
}
else if (xp < 9000){
    nivel = "Ascendente"
}
else if (xp < 10000){
    nivel = "Imortal"
}
else{
    nivel = "Radiante"
}

desenharLinhaFalaNarrador()
console.log("O herói " + nomeDoChar + " está no nível: " + nivel)








