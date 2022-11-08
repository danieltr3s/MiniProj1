<template>
    <div id="myhobbies">
        <div class="hobby">
            <img src="../assets/micromouses.jpg" alt="Micromouse" />
            <p>
                Desde 2011 que construo robots micromouse tendo participado em todas as edições Micromouse Portuguese Contest.
                Em 2015 fui campeão nacional neste evento tendo resolvido o labirinto em 8 segundos.
            </p>
        </div>
        
        <div class="hobby">
            <img src="../assets/quadcopter.jpg" alt="Quadcopter" />
            <p>
                Gosto muito de robótica miniaturizada e controlo. Há alguns anos comecei a desenvolver as minhas próprias placas de quadcopter. 
                O meu objectivo é desenvolver uma plataforma para Quadcopters Swarms de baixo custo.
            </p>
        </div>
        
        <div class="hobby">
            <img src="../assets/dobson.jpg" alt="Astronomia" />
            <p>
                Sempre me fascinei pelo céu. Em noites de céu limpo gosto de pegar no meu telescópio e observar os vários corpos celestes do nosso sistema solar e algumas nublosas.
            </p>
        </div>
    </div>
</template>

<script lang="js">
    export default {
    }
</script>

<style>

#myhobbies{
    position: absolute;
    right: 0;
    width: 35vw;
    height: 70vh;
    padding-right: 5vw;
    padding-top: 5vh;
    overflow: auto;
}

.hobby {
    display: flex;
    align-items: center;
    padding-top: 5vh;
}

.hobby p{
    font-size: 0.9rem;
    text-align: justify;
    line-height: 1.2rem;
    padding-left: 5vh;
}

.hobby img{
    width: 15vw;
}

</style>