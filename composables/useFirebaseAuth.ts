import { createUserWithEmailAndPassword, User, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, getAuth, Auth } from 'firebase/auth'


export default function () {


    const user = useState<User | null>("fb_user", () => null)

    const registerUser = async (email: string, password: string): Promise<boolean> => {
        try {
            const userCreds = await createUserWithEmailAndPassword(getAuth(), email, password)


            if (userCreds) {
                user.value = userCreds.user
                return true
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                // handle error
            }
            return false
        }
        return false
    }

    const googleSignIn = async (): Promise<boolean> => {
        try {
            const provider = new GoogleAuthProvider();
            const userCreds = await signInWithPopup(getAuth(), provider)
            console.log(userCreds);
            if (userCreds) {
                user.value = userCreds.user
                return true
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                // handle error
            }
            return false
        }
        return false
    }

    const facebookSignIn = async (): Promise<boolean> => {
        try {
            const provider = new FacebookAuthProvider();
            const userCreds = await signInWithPopup(getAuth(), provider)
            if (userCreds) {
                user.value = userCreds.user
                return true
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                // handle error
            }
            return false
        }
        return false
    }

    return {
        user,
        registerUser,
        googleSignIn,
        facebookSignIn
    }
}