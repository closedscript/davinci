import 'bootstrap/dist/css/bootstrap.min.css';
import Uhr from "@/app/components/Uhr";

export default function Home() {
    return (
        <div className="container">
            <h1 className="display-4 text-center my-5">Mr. Informius</h1>
            <Uhr></Uhr>
        </div>
    );
}
