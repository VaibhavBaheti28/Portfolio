import { fakeMenu, fakeMinimize, fakeButtons, fakeZoom, term} from "../../styles";

const Terminal = ({ children }: any) => {
    return (
        <div className={`${term}`}>
            <div className={`${fakeMenu}`}>
                <div className="fakeButtons fakeClose"></div>
                <div className={`${fakeMinimize} ${fakeButtons}`}></div>
                <div className={`${fakeZoom} ${fakeButtons}`}></div>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};
export default Terminal;