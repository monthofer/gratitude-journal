export default function History({ gratitudes }) {
    return (
        <p className="text-white text-2xl">
            Previously, you were grateful for 
            <span className="font-bold">
                {gratitudes.map(g=> ' ' +g).toString()}
            </span>
            <style jsxk></style>
        </p>
    )
}
    