
//createAsyncThunk import edicez.(bir function çağırdığımızda cevap gelme süresince beklememizi sağlar.)
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//firebase auth sitesinden authentication kullanımından mevcut kullanıcılarda oturum açma bölümündeki kodlardan gerekli yapıları çektik.
import{getAuth, signInWithEmailAndPassword} from "firebase/auth"


//şimdi AsyncThunk'ın kullanımını görmek için fucntion oluşturacağız.
//bu kısımda oluşturmamızın sebebi aşağıda export create slice ile oluşturduğumuz reducersların içine ekstra reducers eklemeyi göstereceğiz.


// import ettiğimiz createAsyncThunk'ı aşağıdaki gibi çağırdık ve bir yol tanımlamamız gerek. bunun içinde örneğin user da login işlemini yapacağım. bu yolu da  createAsyncThunk('user/login',...) şeklinde tanımladım.
//  daha sonra async yapısını koyuyoruz. bekle anlamında kullanıyoruz. parantez açıyoruz yani bir işlem var. yani login işlemi bir fonksiyon olarak çalışır. bu functiona obje olrak veri gelecek. bu objeleri de süslü parantez içinde username ve password olrak tanımladık.
//username , password bize kalmış isimlendirmedir. yani bir props yapısıdır. dilersek bir value olarakta tanımlayabiliriz. yani şu şekilde; async(value)
export const login = createAsyncThunk('user/login', async({username,password})=>{
        try {

            //öncelikle uygulamamız authenticationı sağlıyor mu ? 
            //getAuth() işlemimizi çalıştırıyoruz ve bizim authentication ımızın olup olmadığını firebaseConfig dosyamızla kontrol ederek cevaplıyor.
            const auth=getAuth();

            // signInWithEmailAndPassword ile içerisine yapıları koyacağız. bu kısımda signin yap ama öncelikle authentication umuzu doğrula(doğru uygulamaya gittiğimizden emin ol) sonra username ve passwoed u kontrol et demek istiyorum.

            const userCredential = await signInWithEmailAndPassword(auth, username,password)

            //authentication kontrolüyle birlikte ulaşmak istediğimiz veriler var.
            //bundan dolayı aşağıdaki gibi bir yapı kuracağız.
            //user diyoruz ve bu kısımda user ın bilgilerini alacağız.
            //userCredential içerisinde gelen veriler içerisinde .user verisi var. bunu tanımladığımız user içerisine atama yap diyoruz.
            
            
            const user=userCredential.user;
            
            //daha sonra gelecek veriler arasında tokenimiz var. 
            //token tanımladık ve üstte tanımladığımız user yani (userCredential.user) dan veri çekiceğiz. bu işlemler uzamasın diye aslında user tanımladık.
            // şu şekilde çekeceğimiz veri aslında userCredential.user.stsTokenManager.accessToken içindedir.
            // fakat bunu aşağıdaki şekilde kısaltmış olacağız.
            const token=user.stsTokenManager.accessToken;
            //artık token a erişmiz durumdayız.
            //son olarak bu işlemimizi de bir objeye atayacağız.burdan çıkartacağız.
            //bu iki veriyi user ve tokeni obje olarak çıktı alabiliriz.

            //userdata olarak ikisin bir şekilde genelledik.
            const userData={
                token,
                
                //user niye böyle diye sorarsak: user ı çağırdığızda değişebileceği için sadece bu user olmadığı için ve kullanımı genelde bu şekilde olduğu içindir.
                user:user,
            
            } 
            
            // return dan sonra ne dersek örneğin bu kısımda userdata dersek bu fonksiyondan çıkış yapmış oluruz. 
            //eğer başarılı bir try yaptıysak return userdatayı bize çıktı olarak vericektir.
            return userData
               
                
            //eğer hata ile karşılaşırsak throw error kullanacağız.
        }
            catch (error) {
        
                //uygulama ekranında aşağı kısımda hata bildirimi gözükür.
                //bu hata mesajını console.log ile de yapabiliriz.
                console.log("userSlice 21 line: ", error)
                throw error
            }
})

//şimdi asyncThunk ı yaptık ve extra reducer olarak kullanma kısmı için user tarafına reducers içerise gidiyoruz.



const initialState ={

    Email: null,//login.js tarafında string olarak düşünülmüştü fakat daha önceden örneğin bu kısım için mail adresi girilmediyse null döndürürüz.
    Password:null,
    isLoading: false,
    isAuth:false,//deneme için
    // users:{//deneme için

    //     userEmail: "test@test.com",//deneme için
    //     userPassword:"123456"//deneme için
    // }
    user:null,
    token:null,
    error:null
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


    },

    //asyncThunk yapımızı ekleme kısmına geldik.
    // farklı olarak iki nokta üst üste ile birlikte arrow func ınaçtık. bunu içinde bir sistem döndüreceğiz.
    //bu yüzden parantez içine builder dedik.
    //bu yapı artık aşağıda kullanılarak durmadanfarklı seçenekleri değerlendirmemizi sağlıyor.

    extraReducers:(builder)=>{
        //builder.addCase() ten istediğmiz kadar yapabiliyoruz.
        //case olayı her bir durum için ayrıdır.
        //örneğin biz login işlemi veya signup yaptık bı kısımda ayrı ayrı kontrol edebileceğiz.
        //aslında her bir createasyncThunk için 3 tane builder.adddCase() gereklidir.
        //bunun nedeni yukarıda login işlemimizi alıp koyalım.
        builder
        //pending: yükleniyor yani karşı taraftan cevap bekliyoruz.
        //bir func oluştur ve içerisinde bunu dinlediğimize dair yani bu case yürütülünce yağılacak işlemleri yazalım.
        
        //parantez içi statelar yukarıdaki daha önceden kurulu const initialstate yapsı altındaki değerleri değiştirmek içindir.
        //ayrıca initialstate kısmındaki users bölümüne de ihtiyaç yoktur. çünkü biz user ı backend tarafında işlem yapacağız.  o tarafta da login işlemine tabi tutacağız.

        .addCase(login.pending, (state)=>{
            //şuan karşı tarafa firebase a istek gönderdik ve cevap bekliyoruz.
            state.isLoading = true;
            state.isAuth = false
            //zaten false tu yani hala giriş yapmadık anlamındadır.     
            
            
        }) 
        //fullfilled: başarıyla sonuçlandı.
        .addCase(login.fulfilled, (state,action)=>{
            //sonuç aldık diyelim.öyleyse isLoading i durduruz.
            state.isLoading = false;
            state.isAuth = true;
            //ancak burada işlem bitmiyor. çünkü bı kısımda bilgileri girmemiz gerekiyor.
            //yani kullanıcıdan aldığımız user ve token bilgilerini initialstate içine çıktı alıyoruz.
            //başarıyla sonulandığı için action.payload yapsını yapıcaz.ilk olarak (state,action) 
            //action.payload yukarıdaki userdata olarak tanımladığımız user ve tokeni obje yapan yapıdır.
            //ve state.user = action.payload.user
            //ve state.token = action.payload.token tanımlarız.
            state.user = action.payload.user;
            state.token = action.payload.token





        })
        //rejected: karşı taraftan hata mesajı geldi. login işlemi olmadı.
        .addCase(login.rejected, (state,action)=>{

            state.isLoading = false;
            state.isAuth = false;
            state.error = action.error.message
            //neden action.payload değil dersek payload eğer başarılı olursa dönen sonuçtu.
            //throw error yapmıştık. action dan direk error dönmüş oldu. 




        })

    }




})



export const {setEmail, setPassword,setisLoading,setLog } = userSlice.actions//yukarıdaki reducers içinde kullanacağımız fuction yapılarını bu kısımda const{} içinde export etmemiz gerek.
//deneme için setlog export edildi.
export default userSlice.reducer;//userSlice ı çekiyoruz reducer olarak çıktı veriyoruz.