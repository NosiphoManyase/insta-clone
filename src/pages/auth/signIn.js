import { getProviders, signIn } from "next-auth/react"
import Header from "../../../components/Header"

export default function signin({providers}) {
    
  return (
   <>
    <Header />
    <div className="flex justify-center space-x-7 mt-20">
        <img src='https://superviral.ca/wp-content/uploads/2023/02/Buy-Instagram-followers-and-likes-Canada.png' 
        alt="instagram-image"
        className="hidden object-cover rotate-6 md:inline-flex md:w-48"/>
        <div className="">
            {Object.values(providers).map(provider => (
                <div className="flex flex-col items-center" key={provider.name}>
                    <img src="https://1000logos.net/wp-content/uploads/2017/02/ig-logo.png" 
                    alt="instagram-logo"
                    className="w-72 object-cover"/>
                    <p className="text-sm italic my-10 text-center">This app is created for educational purposes</p>
                    <button onClick={() => signIn(provider.id, {callbackUrl: '/'})}
                    className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    </div>
   </>
  )
}

export async function getServerSideProps(context){
    const providers = await getProviders()
    return {
        props: {
            providers
        }
    }
}