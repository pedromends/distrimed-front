<template>
    <div class="flex flex-center login-container" style="padding-top: 8rem;">
        <q-card class="auth-card">
            <q-card-section>
                <div class="text-h5 text-center">{{ isLogin ? 'Login' : 'Cadastro' }}</div>
            </q-card-section>

            <q-card-section>
                <q-form class="q-gutter-md">
                    <q-input v-if="!isLogin" v-model="name" label="Nome Completo" outlined dense lazy-rules
                        :rules="[val => !!val || 'O nome é obrigatório']" />

                    <q-input v-model="email" label="E-mail" type="email" outlined dense lazy-rules :rules="[
              val => !!val || 'O e-mail é obrigatório',
              val => /.+@.+\..+/.test(val) || 'E-mail inválido'
            ]" />
                    <q-input v-model="password" :type="isPwd ? 'password' : 'text'" label="Senha" outlined dense
                        lazy-rules :rules="[val => val.length >= 6 || 'A senha deve ter no mínimo 6 caracteres']">
                        <template v-slot:append>
                            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                @click="isPwd = !isPwd" />
                        </template>
                    </q-input>

                    <q-btn type="submit" color="primary" :label="isLogin ? 'Entrar' : 'Cadastrar'" class="full-width"
                        @click="isLogin ? authenticate() : createNewUser()" :loading="loading" />

                    <div class="text-center q-mt-md">
                        <q-btn flat color="grey-8" @click="isLogin = !isLogin"
                            :label="isLogin ? 'Criar uma conta' : 'Já tem uma conta? Faça login'" />
                    </div>
                </q-form>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
    import { authUser, createUser } from '../services/UserService.js'

    export default {
        data() {
            return {
                isLogin: true,
                isPwd: true,
                loading: false,
                name: "",
                email: "",
                password: ""
            };
        },
        methods: {
            authenticate() {
                authUser({ email: this.email, password: this.password }).then((response) => {
                    console.log(response)
                }).catch(error => {
                    console.error("Erro ao logar:", error);
                    alert('Erro ao logar')
                    window.location.reload()
                });
            },
            createNewUser() {
                createUser({ name: this.name, email: this.email, password: this.password }).then((response) => {
                    if(response.status == 200){
                        alert('Usuário cadastrado com sucesso')
                        window.location.reload()
                    }
                }).catch(error => {
                    console.error("Erro ao criar usuário:", error);
                    alert('Erro ao criar usuário')
                    window.location.reload()
                });
            }
        }
    };
</script>

<style scoped>
    .auth-card {
        width: 100%;
        max-width: 360px;
        padding: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }
</style>
