<!-- created by Aaron Meche -->
<script>
    import { resolve } from "$app/paths";

</script>

<!--  -->

<div class="wrapper">
    <div class="name">
        <img class="pfp" src="pfp.png" alt="Aaron Meche">
        Aaron Meche
    </div>
</div>

<div class="buttons">
    <a class="button" href={resolve("/")}>Home</a>
    <a class="button" href={resolve("/")}>About</a>
    <a class="button" href={resolve("/")}>Education</a>
    <a class="button" href={resolve("/")}>Projects</a>
</div>

<!--  -->

<style>
    .wrapper{
        display: grid;
        grid-template-columns: auto min-content;
        align-items: center;
        padding: 0 0.75rem;
        /* background: rgb(255,255,255,0.2); */
    }

    .name{
        display: grid;
        align-items: center;
        grid-template-columns: min-content auto;
        gap: 0.75rem;
        padding: 1.5rem;
        font-size: 2rem;
        /* background: rgb(255,255,255,0.2); */
    }

    .name img{
        height: 3rem;
        width: 3rem;
        object-fit: cover;
        border-radius: 100rem;
    }

    .buttons{
        user-select: none;
        font-size: 0;
        /* background: rgb(255,255,255,0.2); */
    }

    .buttons .button{
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        opacity: 0.8;
        cursor: pointer;
        /* background: rgb(255,255,255,0.2); */
    }
    
    .buttons .button:hover{
        opacity: 1;
    }
</style>