<template>
    <div id="aboutme">
        <h4>Olá, eu sou o</h4>
        <h1>Daniel Gonçalves</h1>
        <p>
            Tenho 35 anos. Sou de Lamego, vivo em Lisboa, mas sou uma pessoa do mundo.
            Frequentei a Licenciatura em Engenharia de Telecomunicações, Electrónica e Ciência dos Computadores no ISEL, estou a trabalhar há mais de 15 anos na área do Broadcast televisivo e 17 anos como software developer.
            Sou neste momento Head of Software Development e Director do departamento de Inovação, Parcerias e Transferência Tecnológica da wTVision. Se vêm televisão, provavelmente já viram o meu trabalho!
            <br/>
            O <strong>Mestrado em Engenharia Informática e Tecnologia Web</strong> é exactamente aquilo que procuro e estou confiante que me irá dar boas ferramentas quer para a minha actividade profissional quer para os
            próximos passos que procuro dar, pois pretendo prosseguir para Doutoramento.
        </p>
    </div>
</template>

<script lang="js">
    export default {
    }
</script>

<style>

#aboutme{
    position: absolute;
    right: 0;
    width: 35vw;
    height: 70vh;
    padding-right: 5vw;
    padding-top: 5vh;
    overflow: auto;
}

#aboutme h1, #about h4 {
    text-transform: uppercase;
    margin: 0;
    padding: 0;
}

#aboutme h1{
    font-weight: 700;
    font-style: normal;
    font-size: 3rem;
}

#aboutme h4 {
    font-weight: 400;
    font-style: italic;
    font-size: 1.4rem;
}

#aboutme p{
    padding-top: 5vh;
    text-align: justify;
    font-weight: 400;
    line-height: 1.5rem;
}
</style>