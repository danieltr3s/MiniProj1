<template>
    <div id="myskills">
        <div class="skill left">
            <img src="../assets/wtvision.png" alt="wTVision" />
            <p>
                Neste momento sou Head of Development do departamento de desenvolvimento de produtos para Master Control Room
                na <a href="https://www.wtvision.com/products/products-mcr" target="_blank" rel="noopener noreferrer">wTVision</a>
                estando a fazer a transição para Director do departamento de Inovação, Parcerias e Transferência Tecnológica na mesma empresa.
                <br/>
                Aqui, trabalho com uma série tecnologias das quais destaco as seguintes:
            </p>
        </div>
        
        <div class="skill right">
            <img src="../assets/csharp.png" alt="C Sharp .Net" />
            <p>
                Tenho 15 anos de experiência em desenvolvimento de aplicações (back-end e front-end) em C# com as frameworks .Net
                <br/>
                Ao longo da minha carreira desenvolvi vários tipos de aplicações com recurso a várias tecnologias como WPF, WinForms, ASP, WCF, entre outras.
            </p>
        </div>
        
        <div class="skill left">
            <img src="../assets/isocpp.png" alt="C++" />
            <p>
                Aprendi a programar em C/C++ e nunca o deixei de fazer. Ao longo do meu percurso profissional e pessoal, desenvolvi inumeras 
                soluções nestas linguagens. Seja no desenvolvimento de aplicações desktop de alta performance, serviços ou sistemas embebidos, C++ é uma linguagem
                onde sinto gosto a trabalhar.
            </p>
        </div>
        
        <div class="skill right">
            <img src="../assets/python.png" alt="Python" />
            <p>
                Em 2009 descobri o Python. Fiquei fascinado com a curva de aprendizagem e dei por mim a programar em Python como se estivesse a escrever um texto em Inglês.
                Desde então nunca mais larguei a linguagem. Para desenvolver rápidos protótipos de software, provas de conceito ou pequenas ferramentas, é a linguagem a que recorro.
            </p>
        </div>
    </div>
</template>

<script lang="js">
    export default {
    }
</script>

<style>

#myskills{
    position: absolute;
    right: 0;
    width: 35vw;
    height: 70vh;
    padding-right: 5vw;
    padding-top: 5vh;
    overflow: auto;
}

#myskills a{
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    font-style: italic;
}

.skill {
    display: flex;
    align-items: center;
}

.skill p{
    font-size: 0.9rem;
    text-align: justify;
    line-height: 1.2rem;
}

.skill.right{
    flex-direction: row-reverse;
}

.skill img{
    width: 15vw;
}

</style>