document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('tv-static');
    const ctx = canvas.getContext('2d');

    let width, height;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    resize();
    window.addEventListener('resize', resize);

    function drawNoise() {
        const w = canvas.width;
        const h = canvas.height;
        const idata = ctx.createImageData(w, h);
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
            if (Math.random() < 0.5) {
                buffer32[i] = 0xff000000 | (Math.random() * 0xffffff);
            } else {
                buffer32[i] = 0xff000000;
            }
        }

        ctx.putImageData(idata, 0, 0);
        requestAnimationFrame(drawNoise);
    }

    drawNoise();
});