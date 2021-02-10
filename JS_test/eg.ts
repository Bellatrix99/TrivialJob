interface TaskDOMRet {
    $playground: HTMLDivElement,
    $football: HTMLImageElement,
}

const prepareDOM = (): Promise<TaskDOMRet> => {
    return new Promise(((resolve, reject) => {
        const $playground = document.createElement('div');
        $playground.className = 'playground';
        $playground.setAttribute(
            'style',
            'position: relative; border: 10px solid black; width: 200px; height: 200px; background: green;'
        );
        const $football = document.createElement('img');
        $football.src = 'https://en.js.cx/clipart/ball.svg';
        $football.setAttribute('style', 'position: relative; transition: all .3s; left: 0; top: 0;');
        $playground.append($football);
        document.body.append($playground);
        $football.addEventListener('load', () => {
            resolve({
                $playground,
                $football
            })
        });
        setTimeout(() => {
            reject(new Error('Connection Timeout'));
        });
    }))
}

const getLegalPosValue = (val: number, min: number, max: number) => {
    if (val < min) return min;
    if (val > max) return max;
    return val;
}

const attachEvent = (ret: TaskDOMRet) => {
    ret.$playground.addEventListener('click', (event) => {
        if (event.target === ret.$playground) {
            const {clientWidth: fw, clientHeight: fh} = ret.$football;
            const {clientWidth: pw, clientHeight: ph} = ret.$playground;
            const [x, y] = [
                getLegalPosValue(event.offsetX - fw / 2, 0, pw - fw),
                getLegalPosValue(event.offsetY - fh / 2, 0, ph - fh),
            ];
            ret.$football.style.left = `${x}px`;
            ret.$football.style.top = `${y}px`;
        }
    })
}

prepareDOM().then(ret => {
    attachEvent(ret);
})

export {};
Array.prototype.map


const el = document.createElement('div');
console.log(el.addEventListener);
if(el instanceof HTMLDivElement) {
    el.addEventListener('click', () => {
        alert('el');
    })
}


// function print(fn) {
//     if(fn instanceof HTMLElement){
//         return fn;
//     }
   
// }


// /**
//  * 
//  * @param fn { Function }
//  * @return {String}
//  */
// function print(fn) {
//     return fn.bind();
// }


/**
 * asdf
 * @param fn { Function } fn 是一个函数
 * @return { number } 返回一个数字
 */
function print(fn) {
    return 1
}



let num = print(() => {});