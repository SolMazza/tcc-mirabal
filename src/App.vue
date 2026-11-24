<template>
  <header>

    <nav  style="background-color: #fff2f6; border-bottom: 2pix solid #ac3458;" class="navbar sm:navbar-expand bg-1 fg-2">

      <div class="container-fluid">
        <div><img src="../public/imagens/logo/logo-mirabal.png" class="img-fluid" alt="..."></div>
        <div><button class="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" aria-hidden="true"></span>
          </button>
          <dialog class="drawer drawer-end" id="navbarNav" aria-labelledby="navbarNavLabel">
            <div class="drawer-header">
              <h5 class="drawer-title" id="navbarNavLabel">Menu</h5>
              <button type="button" class="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
            </div>
            <div class="drawer-body">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page">
                    <router-link to="/">Home</router-link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <router-link to="/historia">História</router-link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <router-link to="/apoie">Apoie</router-link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page">
                    <router-link to="/acoes">Ações</router-link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <router-link to="/festival-mirabal">Festival Mirabal</router-link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <router-link to="/contato">Contato</router-link>
                  </a>
                </li>
              </ul>
            </div>
          </dialog>
        </div>
      </div>
    </nav>

  </header>
  <footer></footer>

  <router-view />
</template>

<script setup></script>
<style scoped>

@layer custom {
  .bd-example-resizable {
    padding: 0.375rem;
    position: relative;
  }

  .bd-resizable-container {
    resize: horizontal;
    background-color: var(--bs-bg-body);
    border-radius: var(--bs-radius-4);
    max-width: 100%;
    padding: 1rem;
    position: relative;
    overflow: hidden;
  }

  .container-fluid {
    justify-content: space-between;
  }
  header{
      background-color: #fff2f6;

  }
}
</style>
