import { Rectangle } from "pixi.js";

export interface IHitbox {
    getHitbox():Rectangle
}

export function checkCollision(objA: IHitbox, objB: IHitbox):Rectangle | null
{
    const rA = objA.getHitbox();
    const rB = objB.getHitbox();

    const righmostLeft = rA.left < rB.left ? rB.left: rA.left;
    const leftmostRight = rA.right > rB.right ? rB.right: rA.right;

    const bottommostTop = rA.top < rB.top ? rB.top: rA.top;
    const topmostBottom = rA.bottom > rB.bottom ? rB.bottom: rA.bottom;

    const makesSenseHorizontal = righmostLeft < leftmostRight;
    const makessenseVertical = bottommostTop < topmostBottom;
    if (makesSenseHorizontal && makessenseVertical)
    {

        const retval = new Rectangle(); 
        retval.x = righmostLeft;
        retval.y = bottommostTop;
        retval.width = leftmostRight - righmostLeft;
        retval.height = topmostBottom - bottommostTop;
        return retval;

    } else{

        return null;
        
    }

}