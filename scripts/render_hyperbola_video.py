"""Render assets/videos/hyperbola_constant_difference_1080p.mp4 and its preview (Figure: constant |r1 - r2|).

Usage: python3 scripts/render_hyperbola_video.py assets/videos/hyperbola_constant_difference_1080p.mp4 \\
    assets/videos/previews/hyperbola_constant_difference_1080p.jpg
Needs matplotlib, numpy, Pillow and ffmpeg. Extra arguments (times in seconds) write PNG stills instead.

Layout (data units, window x in [-10, 10], y in [-5.625, 5.625], 16:9):
  title           top centre, above the y-axis arrow
  equation        upper-left pocket between the left branch and the y-axis
  readout         upper-right pocket between the y-axis and the right asymptote
  P               stays on the right branch with |y| <= 4.2, always inside the frame
"""
import subprocess
import sys

import numpy as np
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyArrowPatch

OUT = sys.argv[1]
PREVIEW = sys.argv[2]

W, H, FPS = 1920, 1080, 60
A, B = 4.0, 3.0
C = np.sqrt(A * A + B * B)  # 5
XMAX, YMAX = 10.0, 5.625
YCLIP = 5.3   # branches are drawn to this |y|
PY = 3.5      # P never goes beyond this |y|

BLUE = "#58C4DD"   # manim BLUE
RED = "#FC6255"    # manim RED
GREEN = "#83C167"  # manim GREEN
YELLOW = "#FFFF00"
GREY = "#888888"
WHITE = "#FFFFFF"

plt.rcParams.update({
    "mathtext.fontset": "cm",
    "font.family": "serif",
    "font.serif": ["DejaVu Serif"],
})

fig = plt.figure(figsize=(W / 100, H / 100), dpi=100, facecolor="black")
ax = fig.add_axes([0, 0, 1, 1])
ax.set_facecolor("black")
ax.set_xlim(-XMAX, XMAX)
ax.set_ylim(-YMAX, YMAX)
ax.set_aspect("equal")
ax.axis("off")

# ---------- static scene ----------------------------------------------------
# axes with arrows
x_axis = FancyArrowPatch((-8.6, 0), (8.6, 0), arrowstyle="-|>", mutation_scale=28,
                         color=WHITE, lw=1.6, zorder=2)
y_axis = FancyArrowPatch((0, -4.9), (0, 4.3), arrowstyle="-|>", mutation_scale=28,
                         color=WHITE, lw=1.6, zorder=2)
ax.add_patch(x_axis)
ax.add_patch(y_axis)
ticks = []
for k in range(-8, 9):
    if k:
        ticks.append(ax.plot([k, k], [-0.12, 0.12], color=WHITE, lw=1.2, zorder=2)[0])
for k in range(-4, 5):
    if k:
        ticks.append(ax.plot([-0.12, 0.12], [k, k], color=WHITE, lw=1.2, zorder=2)[0])

title = ax.text(0, 5.2, "Hyperbola: difference of focal radii is constant",
                ha="center", va="center", color=WHITE, fontsize=30, zorder=5)

# branches, parametrised by y so they draw outward from the vertices
t = np.linspace(0, YCLIP, 400)
xr = A * np.sqrt(1 + t * t / (B * B))
right_up, = ax.plot([], [], color=BLUE, lw=3, zorder=3)
right_dn, = ax.plot([], [], color=BLUE, lw=3, zorder=3)
left_up, = ax.plot([], [], color=BLUE, lw=3, zorder=3)
left_dn, = ax.plot([], [], color=BLUE, lw=3, zorder=3)

# asymptotes y = +- (b/a) x, dashed
xs = np.array([-XMAX, XMAX])
asym1, = ax.plot(xs, B / A * xs, color=GREY, lw=1.3, ls=(0, (4, 4)), zorder=1)
asym2, = ax.plot(xs, -B / A * xs, color=GREY, lw=1.3, ls=(0, (4, 4)), zorder=1)

equation = ax.text(-3.0, 4.1, r"$\dfrac{x^2}{16} - \dfrac{y^2}{9} = 1$",
                   ha="center", va="center", color=BLUE, fontsize=34, zorder=5)

# foci and vertices
f1_dot, = ax.plot([C], [0], "o", color=YELLOW, ms=9, zorder=6)
f2_dot, = ax.plot([-C], [0], "o", color=YELLOW, ms=9, zorder=6)
f1_lab = ax.text(C, -0.45, r"$F_1(5,0)$", ha="center", va="top", color=WHITE,
                 fontsize=24, zorder=5)
f2_lab = ax.text(-C, -0.45, r"$F_2(-5,0)$", ha="center", va="top", color=WHITE,
                 fontsize=24, zorder=5)
v1_lab = ax.text(A - 0.12, -0.45, r"$V_1$", ha="right", va="top", color=BLUE, fontsize=22, zorder=5)
v2_lab = ax.text(-A + 0.12, -0.45, r"$V_2$", ha="left", va="top", color=BLUE, fontsize=22, zorder=5)

# moving parts
seg1, = ax.plot([], [], color=GREEN, lw=3, zorder=4)   # P F1  (r1)
seg2, = ax.plot([], [], color=RED, lw=3, zorder=4)     # P F2  (r2)
p_dot, = ax.plot([], [], "o", color=WHITE, ms=10, zorder=7)
p_lab = ax.text(0, 0, r"$P$", color=WHITE, fontsize=24, zorder=7, ha="left", va="bottom")
r1_lab = ax.text(0, 0, r"$r_1$", color=GREEN, fontsize=24, zorder=7, ha="center", va="center")
r2_lab = ax.text(0, 0, r"$r_2$", color=RED, fontsize=24, zorder=7, ha="center", va="center")

# readout: a row of coloured pieces laid out left to right
READ_X, READ_Y1, READ_Y2 = 0.45, 4.55, 3.95
FS = 25
pieces = [
    ("$|\\,r_1 - r_2\\,| = |\\,$", WHITE),
    ("$0.00$", GREEN),
    ("$-$", WHITE),
    ("$0.00$", RED),
    ("$\\,| = 8.00$", WHITE),
]
read_texts = [ax.text(READ_X, READ_Y1, s, color=c, fontsize=FS, ha="left", va="center", zorder=5)
              for s, c in pieces]
read_line2 = ax.text(READ_X, READ_Y2, "$= 2a = 8$  (constant)", color=WHITE, fontsize=FS,
                     ha="left", va="center", zorder=5)

fig.canvas.draw()
renderer = fig.canvas.get_renderer()


def layout_readout():
    x = READ_X
    gap = 0.06
    for txt in read_texts:
        txt.set_x(x)
        bb = txt.get_window_extent(renderer)
        w_data = bb.width / W * (2 * XMAX)
        x += w_data + gap


static = [x_axis, y_axis, title, *ticks]
curve = [right_up, right_dn, left_up, left_dn]
asym = [asym1, asym2, equation]
foci = [f1_dot, f2_dot, f1_lab, f2_lab, v1_lab, v2_lab]
moving = [seg1, seg2, p_dot, p_lab, r1_lab, r2_lab, *read_texts, read_line2]

for art in curve + asym + foci + moving:
    art.set_alpha(0)


def smooth(u):
    u = np.clip(u, 0, 1)
    return u * u * (3 - 2 * u)


def set_alpha(arts, a):
    for art in arts:
        art.set_alpha(a)


def place_point(y):
    x = A * np.sqrt(1 + y * y / (B * B))
    r1 = np.hypot(x - C, y)
    r2 = np.hypot(x + C, y)
    p_dot.set_data([x], [y])
    seg1.set_data([x, C], [y, 0])
    seg2.set_data([x, -C], [y, 0])
    # P label: outside the branch, away from the segments
    p_lab.set_position((x + 0.3, y - 0.2 if y >= 0 else y + 0.2))
    p_lab.set_va("top" if y >= 0 else "bottom")
    # r1 label: beside the green segment, on the outer side
    m1 = np.array([(x + C) / 2, y / 2])
    d1 = np.array([x - C, y]); d1 /= np.linalg.norm(d1)
    n1 = np.array([d1[1], -d1[0]])        # points to the right/outward
    if y < 0:
        n1 = -n1
    r1_lab.set_position(m1 + 0.45 * n1)
    # r2 label: along the red segment, 30 percent from F2, on the side away from the x-axis
    m2 = np.array([-C + 0.22 * (x + C), 0.22 * y])
    d2 = np.array([x + C, y]); d2 /= np.linalg.norm(d2)
    n2 = np.array([-d2[1], d2[0]])
    if y < 0:
        n2 = -n2
    r2_lab.set_position(m2 + 0.45 * n2)
    read_texts[1].set_text(f"${r1:.2f}$")
    read_texts[3].set_text(f"${r2:.2f}$")
    layout_readout()


# ---------- timeline (seconds) ------------------------------------------------
T_AXES = 0.0, 0.8
T_CURVE = 0.8, 2.6
T_ASYM = 2.4, 3.2
T_FOCI = 3.2, 3.9
T_P = 3.9, 4.5
T_MOVE = 4.5, 13.5
T_END = 14.5


def frac(t, span):
    a, b = span
    return smooth((t - a) / (b - a))


def draw_frame_fixed(tsec):
    set_alpha(static, frac(tsec, T_AXES))
    u = frac(tsec, T_CURVE)
    n = max(1, int(u * len(t)))
    right_up.set_data(xr[:n], t[:n])
    right_dn.set_data(xr[:n], -t[:n])
    left_up.set_data(-xr[:n], t[:n])
    left_dn.set_data(-xr[:n], -t[:n])
    set_alpha(curve, 1 if u > 0 else 0)
    set_alpha(asym, frac(tsec, T_ASYM))
    set_alpha(foci, frac(tsec, T_FOCI))
    set_alpha(moving, frac(tsec, T_P))
    if tsec < T_MOVE[0]:
        place_point(0.0)
    else:
        s = min(1.0, (tsec - T_MOVE[0]) / (T_MOVE[1] - T_MOVE[0]))
        place_point(PY * np.sin(2 * np.pi * s))


if len(sys.argv) > 3:          # stills only, for checking the layout
    for i, tsec in enumerate([float(v) for v in sys.argv[3:]]):
        draw_frame_fixed(tsec)
        fig.savefig(f"{OUT}_{i:02d}.png", dpi=100, facecolor="black")
    sys.exit(0)

nframes = int(T_END * FPS)
cmd = ["ffmpeg", "-y", "-v", "error", "-f", "rawvideo", "-pix_fmt", "rgb24",
       "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
       "-c:v", "libx264", "-profile:v", "high", "-pix_fmt", "yuv420p",
       "-crf", "20", "-preset", "medium", "-movflags", "+faststart", OUT]
proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
preview_frame = int(7.0 * FPS)
for i in range(nframes):
    draw_frame_fixed(i / FPS)
    fig.canvas.draw()
    buf = np.asarray(fig.canvas.buffer_rgba())[:, :, :3]
    proc.stdin.write(buf.tobytes())
    if i == preview_frame:
        from PIL import Image
        Image.fromarray(buf).resize((960, 540), Image.LANCZOS).save(PREVIEW, quality=88)
proc.stdin.close()
proc.wait()
print("done", nframes, "frames")
