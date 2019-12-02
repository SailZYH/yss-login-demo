import lugiax from "@lugia/lugiax";

const model = "login";
const state = {
    userName:null,
    password:null,
    remember:false,
    keeponline:false
};

export default lugiax.register ({
    model,
    state,
    mutation:{
        sync:{},
        async:{}
    }
})