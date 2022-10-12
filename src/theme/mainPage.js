import { useContext } from "react";
import { ThemeContext } from "../../context/context";
import '../css/Popup.css'



export const MainPage = () => {
    const { className, setClassName } = useContext(ThemeContext);
    //A sor fölötti className jelenleg egy váltózó ami a context.js fileban lett meghatározva '' ként.
    //Ugyanitt a setClassName egy funkció ami megváltoztatja a className változót.
    //Olyan mintha ezt csinálnád: className='valami'
   
	const Board = () => {
	    setClassName(updated)
// a returnnél sima html-t adsz vissza. Berakod a képeket szöveget stb. css-ben .className alatt csinálsz mindent.
//Ez csak egy példa, ha különboző elemeket máshogy akarsz animálni, nyilván másik className kell, de akkor már csak copy/paste.
        return(
            <div className={className}>

            {/* Ide jönnek a képek stb htmlként */}

            </div>
        )
    }

    return(
        <>
            <div className={`default ${className !== '' ? '' : 'updated'}`}>  {/* Ez egy ha fügvény. Ha a className nem egyenlő az üres stringgel, 
            akkor adja vissza az üres stringet, különben azt, hogy 'updated'.
            Tehát className='default ' vagy className='default updated'.
            */}                 

                <button onClick={() =>{
                    return(
                        Board() //amikor rányomsz a gombra, meghívja a DefaultBoard funkciót.
                    )
                }}>
                    Change Board
                </button>
            </div>

{/*Szerintem mind a kettő működik. Az első fix, a másodikat nem próbáltam ki.*/}
        
            <div className={className}>                   

                <button onClick={() =>{
                    return(
                        Board()
                    )
                }}>
                    Change Board
                </button>
            </div>
        </>
    )
}