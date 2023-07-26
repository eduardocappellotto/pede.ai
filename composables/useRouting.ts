
export default function useRouting() {
    const $router = useRouter()

    const push = (route: string) => $router.push(route)

    const replace = (route: string) => $router.replace(route)

    const back = () => $router.back()

    const forward = () => $router.forward()

    return {
        push,
        replace,
        back,
        forward
    }
}
