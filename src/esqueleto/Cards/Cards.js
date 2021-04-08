import './Cards.css';
import PillButton from './PillButton';
function Cards() {
    return (
        <section className="Cards">
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis tellus sapien, a volutpat justo scelerisque ac. Maecenas fermentum condimentum nunc id tristique. Vestibulum sed efficitur quam, sit amet mollis augue. Proin at imperdiet sapien. Praesent vel sapien imperdiet, viverra arcu quis, cursus purus. Nullam fringilla erat at nunc rutrum pretium. Donec dapibus id nisl id molestie. Integer posuere nibh ac augue imperdiet imperdiet. Vestibulum vel consectetur ipsum, non rutrum ex. Donec rhoncus, nisi id egestas venenatis, tellus sapien tristique lectus, varius ultrices velit massa id elit. Mauris quis est eleifend, maximus tortor quis, tristique ligula. In a leo nisi. Proin porta diam vitae libero pretium interdum a sed purus. Nunc sit amet ante ligula. Mauris ut accumsan eros. Nam et tortor gravida, gravida arcu vel, condimentum mi.</p>
            <div>
                <PillButton text="Acción A" type="submit" click={(e) => { alert("Click A"); }}></PillButton>
                <PillButton text="Acción B" type="submit" click={(e) => { alert("Click B"); }}></PillButton>
            </div>
        </section>
    );
}
export default Cards;