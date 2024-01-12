import { createSlice } from "@reduxjs/toolkit";


const initialState ={

    Email: null,//login.js tarafında string olarak düşünülmüştü fakat daha önceden örneğin bu kısım için mail adresi girilmediyse null döndürürüz.
    Password:null,
    isLoading: false,
    isAuth:false,//deneme için
    users:{//deneme için

        userEmail: "test@test.com",//deneme için
        userPassword:"123456"//deneme için
    }
}



export const userSlice = createSlice({

    name:'user',
    initialState,
    reducers:{

        setEmail:(state,action)=>{
            //gelen veri önce küçük harflere dönüştürülüp daha sonra setemail olsun.
            const lowerCaseEmail=action.payload.toLowerCase()
            // state.Email=action.payload //bu kısmıda şu şekilde değiştirmemiz gereklidir.
            state.Email=lowerCaseEmail
        },//bu setEmail bir reducer yapısını ifade eder.
        
        setPassword:(state,action)=>{

            state.Password=action.payload

        },

        setisLoading:(state,action)=>{

            state.isLoading=action.payload

        },

        setLog:(state)=>{

                if((state.Email===state.users.userEmail) 
                    && (state.Password===state.users.userPassword)) {

                    console.log(true)
                    state.isAuth=true//bunu yapabilmek için önce rootnavigation içine gidelim.
                    //rootnavigation içinde useSelectoru import edeceğiz.yukarıdaki isAuth:false olarak tanımladığımız yapıyı çekmek için.
                    //rootnavigation içine const {isAuth}=useSelector((store)=>state.user)
                    //((store)=>state.user) bu kısım için '.user' dediğimiz kısım için  '(store)' store.js yani gemimize gidip oradan userSlice.js içine yani konteynır içine gideriz.
                    //slice yani konteynırımızda {isAuth} a ulaşırız.not aldığın deftere bak.

                }
                else {

                    console.log(false)

                }


        }


    }




})



export const {setEmail, setPassword,setisLoading,setLog } = userSlice.actions//yukarıdaki reducers içinde kullanacağımız fuction yapılarını bu kısımda const{} içinde export etmemiz gerek.
//deneme için setlog export edildi.
export default userSlice.reducer;//userSlice ı çekiyoruz reducer olarak çıktı veriyoruz.