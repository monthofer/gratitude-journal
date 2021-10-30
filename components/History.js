import Card from "../Components/Card"

export default function History({ gratitudes, onDelete }) {
    return (
        <p className="text-white text-2xl">
            Previously, you were grateful for 
            <span className="font-bold">
                {gratitudes.map(g=> ' ' +g.entry).toString()}
            </span>
            <style jsxk></style>
        </p>
    )
}
    