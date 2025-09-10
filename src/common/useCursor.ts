/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect } from 'react';

const useCanvasCursor = () => {
    function n(e) {
        this.init(e || {});
    }
    n.prototype = {
        init: function (e) {
            this.phase = e.phase || 0;
            this.offset = e.offset || 0;
            this.frequency = e.frequency || 0.001;
            this.amplitude = e.amplitude || 1;
        },
        update: function () {
            return (
                (this.phase += this.frequency),
                (e = this.offset + Math.sin(this.phase) * this.amplitude)
            );
        },
        value: function () {
            return e;
        },
    };

    function Line(e) {
        this.init(e || {});
    }

    Line.prototype = {
        init: function (e) {
            this.spring = e.spring + 0.1 * Math.random() - 0.02;
            this.friction = E.friction + 0.01 * Math.random() - 0.002;
            this.nodes = [];
            for (let t, n = 0; n < E.size; n++) {
                t = new Node();
                t.x = pos.x;
                t.y = pos.y;
                this.nodes.push(t);
            }
        },
        update: function () {
            const e = this.spring;
            let t = this.nodes[0];
            t.vx += (pos.x - t.x) * e;
            t.vy += (pos.y - t.y) * e;
            for (let n, i = 0, a = this.nodes.length; i < a; i++) {
                t = this.nodes[i];
                if (0 < i) {
                    n = this.nodes[i - 1];
                    t.vx += (n.x - t.x) * e;
                    t.vy += (n.y - t.y) * e;
                    t.vx += n.vx * E.dampening;
                    t.vy += n.vy * E.dampening;
                }
                t.vx *= this.friction;
                t.vy *= this.friction;
                t.x += t.vx;
                t.y += t.vy;
                e *= E.tension;
            }
        },
        draw: function () {
            let e,
                t,
                n = this.nodes[0].x,
                i = this.nodes[0].y;
            ctx.beginPath();
            ctx.moveTo(n, i);
            for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
                e = this.nodes[a];
                t = this.nodes[a + 1];
                n = 0.5 * (e.x + t.x);
                i = 0.5 * (e.y + t.y);
                ctx.quadraticCurveTo(e.x, e.y, n, i);
            }
            e = this.nodes[a];
            t = this.nodes[a + 1];
            ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
            ctx.stroke();
            ctx.closePath();
        },
    };

    function onMousemove(e) {
        function o() {
            lines = [];
            for (let e = 0; e < E.trails; e++)
                lines.push(new Line({ spring: 0.4 + (e / E.trails) * 0.025 }));
        }
        function c(e) {
            if (e.touches) {
                pos.x = e.touches[0].pageX;
                pos.y = e.touches[0].pageY;
            } else {
                pos.x = e.clientX;
                pos.y = e.clientY;
            }
            e.preventDefault();
        }
        function l(e) {
            if (1 == e.touches.length) {
                pos.x = e.touches[0].pageX;
                pos.y = e.touches[0].pageY;
            }
        }
        document.removeEventListener('mousemove', onMousemove);
        document.removeEventListener('touchstart', onMousemove);
        document.addEventListener('mousemove', c);
        document.addEventListener('touchmove', c);
        document.addEventListener('touchstart', l);
        c(e);
        o();
        render();
    }

    function render() {
        if (ctx.running) {
            ctx.globalCompositeOperation = 'source-over';
            // Enhanced blur: More subtle clearing for trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Very transparent black overlay
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            ctx.globalCompositeOperation = 'lighter';
            // Enhanced blur: Higher opacity and wider line
            ctx.strokeStyle = 'hsla(' + Math.round(f.update()) + ',45%,45%,0.25)';
            ctx.lineWidth = 2.5;

            // Add shadow blur effect
            ctx.shadowBlur = 15;
            ctx.shadowColor = 'hsla(' + Math.round(f.update()) + ',45%,45%,0.3)';

            for (let e, t = 0; t < E.trails; t++) {
                (e = lines[t]).update();
                e.draw();
            }

            // Reset shadow for next frame
            ctx.shadowBlur = 0;
            ctx.frame++;
            window.requestAnimationFrame(render);
        }
    }

    function resizeCanvas() {
        ctx.canvas.width = window.innerWidth - 20;
        ctx.canvas.height = window.innerHeight;
    }

    let ctx,
        f,
        e = 0;
    const pos = { x: 0, y: 0 } as { x: number; y: number };
    let lines: unknown[] = [];
    const E = {
        debug: true,
        friction: 0.45,      // Reduced friction for more fluid movement
        trails: 18,          // Increased trails for more blur effect
        size: 45,            // Increased size for longer trails
        dampening: 0.35,     // Increased dampening for smoother motion
        tension: 0.96,       // Slightly reduced tension for more fluid trails
    };
    function Node() {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
    }

    type CanvasCtx = CanvasRenderingContext2D & { running: boolean; frame: number };

    const renderCanvas = function () {
        const canvasEl = document.getElementById('canvas') as HTMLCanvasElement | null;
        if (!canvasEl) return;
        const context = canvasEl.getContext('2d');
        if (!context) return;
        ctx = Object.assign(context, { running: true, frame: 1 }) as CanvasCtx;
        // Enhanced blur: More color variation for dynamic effect
        f = new n({
            phase: Math.random() * 2 * Math.PI,
            amplitude: 25,       // Increased amplitude for more color variation
            frequency: 0.003,    // Faster color change
            offset: 130,         // Green hue (120-140 range)
        });
        document.addEventListener('mousemove', onMousemove);
        document.addEventListener('touchstart', onMousemove);
        document.body.addEventListener('orientationchange', resizeCanvas);
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('focus', () => {
            if (!ctx.running) {
                ctx.running = true;
                render();
            }
        });
        window.addEventListener('blur', () => {
            ctx.running = true;
        });
        resizeCanvas();
    };

    useEffect(() => {
        renderCanvas();

        return () => {
            ctx.running = false;
            document.removeEventListener('mousemove', onMousemove);
            document.removeEventListener('touchstart', onMousemove);
            document.body.removeEventListener('orientationchange', resizeCanvas);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('focus', () => {
                if (!ctx.running) {
                    ctx.running = true;
                    render();
                }
            });
            window.removeEventListener('blur', () => {
                ctx.running = true;
            });
        };
    }, [renderCanvas, onMousemove, resizeCanvas]);
};

export default useCanvasCursor;