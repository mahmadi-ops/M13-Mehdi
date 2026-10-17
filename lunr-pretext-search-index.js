var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "intro",
  "level": "1",
  "url": "intro.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  This book covers the same mathematics as a traditional printed text for the third quarter of calculus hyperbolic functions, sequences, series and Taylor approximation, vectors and the geometry of three-dimensional space, and the differential calculus of functions of several variables up to Lagrange multipliers but it was written from the start as an interactive, accessible web book rather than a printed page. It grew out of a project at Santa Clara University with two aims: to strengthen conceptual understanding of these ideas through explicit connections to physical phenomena, and to build materials that support diverse learners, including readers who use screen readers or tactile graphics. This preface points out what that makes possible, and what you will find here that a conventional textbook cannot offer.   Special features of this book      Mathematics tied to the physical world. The ideas are introduced through the things they describe: the catenary of a hanging chain and the Gateway Arch, whispering galleries, the LORAN navigation system and the orbit of an interstellar comet, parabolic antennas and the Hubble mirror, cooling towers, projectile motion and collisions, the torque on a wrench, the electric field of a dipole, the isobars around a low-pressure system, the drainage of a field. The applications are not decoration at the end of a section; they are where the mathematics is worked out.     Figures you can move. More than thirty figures are live, three-dimensional interactives: you can slice a quadric surface with your own hands and watch the cross-sections change, swing a vertical plane through a surface to see a directional derivative appear as a slope, tilt a tangent plane against its surface, or walk a point along a level curve while a barometer or a voltmeter reads out what the function is doing instead of staring at one frozen perspective drawing.     Ideas that move. Nearly sixty short animations run through the book: a curve tracing itself out as its parameter runs, Taylor polynomials converging on a function, a plane slicing a cone into every conic section, a saddle surface being cut along two directions, a marble finding stable and unstable equilibria. Each shows a construction the way an instructor would build it up at the board.     A Socratic tutor that will not tell you the answer. Every assignment page carries a tutor button in the corner. It knows the problems on that page and coaches you the way a good office hour does with questions and small hints, never with the answer handed over. It stays docked as you scroll, so you can read a problem and talk about it at the same time. See Using the AI Tutor , at the top of the Assignments and Review Problems chapter, for how to set it up. The review sets deliberately do not have it: those are rehearsal for exams, where you are on your own.     Solutions that arrive where you need them. The ten assignments and the four review problem sets are gathered in the Assignments and Review Problems chapter. After an assignment's due date, a complete worked solution appears directly beneath every one of its problems on the same page where you worked them rather than in a separate solutions manual. The review problem sets get their solutions the same way, and several of their problems check your answer the moment you enter it.     Nothing is a page-flip away. Every reference to a definition, theorem, equation, or figure opens where you are standing, so checking what a symbol meant never costs you your place. A search box on every page finds any word in the book.     Free, current, and everywhere. The book costs nothing, opens on a phone, a tablet, or a laptop, and can be corrected and improved continuously a fixed typo or a clearer example reaches every reader the same day, with no second edition to buy.       Accessibility  Accessibility is a design goal of this book, not an afterthought. The book is built with PreTeXt, which produces web pages designed to support diverse learners, including readers who use assistive technology:      Mathematics a screen reader can speak. Every formula is real mathematical notation, not a picture of one. Screen readers can read expressions aloud piece by piece, and readers can magnify or explore any formula without it turning into a blur.     Figures built to be described, explored, and touched. Most diagrams are generated from descriptions of their mathematical content, so the same figure carries a spoken description of each of its parts, can be explored piece by piece from the keyboard, and can be produced as tactile graphics for readers who are blind or have low vision. A number of graphs can also be heard, their curves traced out as sound.     Navigation without a mouse. The book has a consistent structure chapters, sections, and a table of contents on every page that can be traversed entirely from the keyboard.     Type and layout that adapt to the reader. Text reflows to fit any screen and any zoom level, so enlarging the type never forces sideways scrolling, and the reading experience is the same on a phone as on a desktop monitor.     If any part of this book does not work well with the tools you use to read it, please let the author know, so it can be fixed for you and for every reader after you.   "
},
{
  "id": "sec-hyp-definitions",
  "level": "1",
  "url": "sec-hyp-definitions.html",
  "type": "Section",
  "number": "1.1",
  "title": "Definitions and Derivatives",
  "body": " Definitions and Derivatives  The hyperbolic cosine is defined as   and the hyperbolic sine is defined as   The derivatives are given as follows.   Both formulas follow directly from the definitions, since and .  "
},
{
  "id": "sec-hyp-definitions-2",
  "level": "2",
  "url": "sec-hyp-definitions.html#sec-hyp-definitions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic cosine "
},
{
  "id": "sec-hyp-definitions-3",
  "level": "2",
  "url": "sec-hyp-definitions.html#sec-hyp-definitions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic sine "
},
{
  "id": "sec-hyp-graphs",
  "level": "1",
  "url": "sec-hyp-graphs.html",
  "type": "Section",
  "number": "1.2",
  "title": "Graph, Domain, and Range of <span class=\"process-math\">\\(\\cosh x\\)<\/span> and <span class=\"process-math\">\\(\\sinh x\\)<\/span>",
  "body": " Graph, Domain, and Range of and  Since and are built from the two exponentials and , their graphs are easiest to understand by sketching those exponentials first. See and .   The graph of . The curve is squeezed between the two exponentials and , approaching the first as and the second as .     s(t) = (t, (exp(t) - exp(-t))\/2)  ep(t) = (t, exp(t)\/2)  em(t) = (t, -exp(-t)\/2)        y=\\sinh x    y=\\frac12 e^{x}    y=-\\frac12 e^{-x}                The graph of . The curve is the sum of the two exponentials and , so it lies above both and has its minimum value at .     c(t) = (t, (exp(t) + exp(-t))\/2)  ep(t) = (t, exp(t)\/2)  em(t) = (t, exp(-t)\/2)         y=\\cosh x    y=\\frac12 e^{x}    y=\\frac12 e^{-x}    1                From the graphs we can read off the following facts.     The domain of and is .    The range of is , whereas the range of is .    Notice that is an odd function, i.e. , whereas is an even function, i.e. .     "
},
{
  "id": "fig-hyp-sinh-graph",
  "level": "2",
  "url": "sec-hyp-graphs.html#fig-hyp-sinh-graph",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " The graph of . The curve is squeezed between the two exponentials and , approaching the first as and the second as .     s(t) = (t, (exp(t) - exp(-t))\/2)  ep(t) = (t, exp(t)\/2)  em(t) = (t, -exp(-t)\/2)        y=\\sinh x    y=\\frac12 e^{x}    y=-\\frac12 e^{-x}              "
},
{
  "id": "fig-hyp-cosh-graph",
  "level": "2",
  "url": "sec-hyp-graphs.html#fig-hyp-cosh-graph",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " The graph of . The curve is the sum of the two exponentials and , so it lies above both and has its minimum value at .     c(t) = (t, (exp(t) + exp(-t))\/2)  ep(t) = (t, exp(t)\/2)  em(t) = (t, exp(-t)\/2)         y=\\cosh x    y=\\frac12 e^{x}    y=\\frac12 e^{-x}    1               "
},
{
  "id": "sec-hyp-identities",
  "level": "1",
  "url": "sec-hyp-identities.html",
  "type": "Section",
  "number": "1.3",
  "title": "Identities and Other Hyperbolic Functions",
  "body": " Identities and Other Hyperbolic Functions  A similar identity to the trigonometric identity holds for the hyperbolic functions:   As you already know, any point on the circumference of the unit circle can be described in terms of sine and cosine of an angle , i.e. and , which results in the trigonometric identity . See .   Any point on the unit circle can be written as .     circ(t) = (cos(t), sin(t))           P(\\cos t, \\sin t)    x    y    1    O    x^2+y^2=1               Similarly, any point on the right branch of the hyperbola can be represented as and , where . This follows directly from identity , i.e. . See .   Any point on the right branch of the hyperbola can be written as .     hr(t) = ((exp(t) + exp(-t))\/2, (exp(t) - exp(-t))\/2)  hl(t) = (-(exp(t) + exp(-t))\/2, (exp(t) - exp(-t))\/2)          P(\\cosh t, \\sinh t)    0    x^2-y^2=1               Parametrizing the Left Branch   Both branches of are drawn in , but the parametrization traces only the right one, since for every . How would you parametrize the left branch, where ?    The identity is unaffected if you change the sign of the first coordinate.     for .    Every point of the hyperbola satisfies , so ; the left branch is the part where .  Start with a point on that branch. Since is one-to-one and onto, there is exactly one with . For that , so , and forces . Hence every point of the left branch has the form .  Conversely, each such point does lie on the left branch: and . Therefore parametrizes the left branch exactly once, and geometrically it is the mirror image across the -axis of the parametrization of the right branch.     True or False   The parametrization , , , also traces the left branch of .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    Every such point lies on the hyperbola, since and on its left branch, since . As runs over , so does , so the whole branch is covered. It sweeps out the same branch as , only downward instead of upward as increases.    As you might have guessed, the rest of the hyperbolic functions are defined as follows.   "
},
{
  "id": "fig-hyp-circle",
  "level": "2",
  "url": "sec-hyp-identities.html#fig-hyp-circle",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " Any point on the unit circle can be written as .     circ(t) = (cos(t), sin(t))           P(\\cos t, \\sin t)    x    y    1    O    x^2+y^2=1              "
},
{
  "id": "fig-hyp-hyperbola",
  "level": "2",
  "url": "sec-hyp-identities.html#fig-hyp-hyperbola",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " Any point on the right branch of the hyperbola can be written as .     hr(t) = ((exp(t) + exp(-t))\/2, (exp(t) - exp(-t))\/2)  hl(t) = (-(exp(t) + exp(-t))\/2, (exp(t) - exp(-t))\/2)          P(\\cosh t, \\sinh t)    0    x^2-y^2=1             "
},
{
  "id": "checkpoint-hyp-left-branch",
  "level": "2",
  "url": "sec-hyp-identities.html#checkpoint-hyp-left-branch",
  "type": "Checkpoint",
  "number": "1.3.3",
  "title": "Parametrizing the Left Branch.",
  "body": " Parametrizing the Left Branch   Both branches of are drawn in , but the parametrization traces only the right one, since for every . How would you parametrize the left branch, where ?    The identity is unaffected if you change the sign of the first coordinate.     for .    Every point of the hyperbola satisfies , so ; the left branch is the part where .  Start with a point on that branch. Since is one-to-one and onto, there is exactly one with . For that , so , and forces . Hence every point of the left branch has the form .  Conversely, each such point does lie on the left branch: and . Therefore parametrizes the left branch exactly once, and geometrically it is the mirror image across the -axis of the parametrization of the right branch.   "
},
{
  "id": "checkpoint-hyp-left-branch-downward",
  "level": "2",
  "url": "sec-hyp-identities.html#checkpoint-hyp-left-branch-downward",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "True or False.",
  "body": " True or False   The parametrization , , , also traces the left branch of .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    Every such point lies on the hyperbola, since and on its left branch, since . As runs over , so does , so the whole branch is covered. It sweeps out the same branch as , only downward instead of upward as increases.   "
},
{
  "id": "sec-hyp-identity-list",
  "level": "1",
  "url": "sec-hyp-identity-list.html",
  "type": "Section",
  "number": "1.4",
  "title": "Hyperbolic Identities",
  "body": " Hyperbolic Identities  Below are some identities that you may find useful in some problems, however, you are not expected to memorize them. We will prove some of them as an exercise later. Each hyperbolic identity is listed next to the trigonometric identity it resembles.   Hyperbolic identities and their trigonometric counterparts.    Hyperbolic  Trigonometric                             Notice the pattern: each hyperbolic identity is its trigonometric counterpart with the sign changed wherever two sines (or two tangents) are multiplied together.   Computing   Show that the inverse hyperbolic cosine can be written in terms of the natural logarithm as     Since is even, it becomes one-to-one only after we restrict it to , where it increases from to . Set and solve for . Multiplying the numerator and the denominator by gives   Clearing the denominator gives , and the substitution turns this into a quadratic equation in :   By the quadratic formula, that is, . Interchanging the names of the two variables, so that is the inverse function, we get   It remains to decide which sign to take, and the convention is to choose , matching the restriction made above. Note that so the minus sign would give . Since we are looking for , we choose the plus sign:      An integral via a hyperbolic substitution   Use hyperbolic functions to calculate the integral  Hint: Similar to , we have .    We substitute , :   The last line uses from , which lets us state the answer without any inverse hyperbolic function.  Along the way, we have also used the following:     "
},
{
  "id": "table-hyp-trig-identities",
  "level": "2",
  "url": "sec-hyp-identity-list.html#table-hyp-trig-identities",
  "type": "Table",
  "number": "1.4.1",
  "title": "Hyperbolic identities and their trigonometric counterparts.",
  "body": " Hyperbolic identities and their trigonometric counterparts.    Hyperbolic  Trigonometric                            "
},
{
  "id": "example-hyp-arccosh",
  "level": "2",
  "url": "sec-hyp-identity-list.html#example-hyp-arccosh",
  "type": "Example",
  "number": "1.4.2",
  "title": "Computing <span class=\"process-math\">\\(\\cosh^{-1}(x)\\)<\/span>.",
  "body": " Computing   Show that the inverse hyperbolic cosine can be written in terms of the natural logarithm as     Since is even, it becomes one-to-one only after we restrict it to , where it increases from to . Set and solve for . Multiplying the numerator and the denominator by gives   Clearing the denominator gives , and the substitution turns this into a quadratic equation in :   By the quadratic formula, that is, . Interchanging the names of the two variables, so that is the inverse function, we get   It remains to decide which sign to take, and the convention is to choose , matching the restriction made above. Note that so the minus sign would give . Since we are looking for , we choose the plus sign:    "
},
{
  "id": "example-hyp-integral",
  "level": "2",
  "url": "sec-hyp-identity-list.html#example-hyp-integral",
  "type": "Example",
  "number": "1.4.3",
  "title": "An integral via a hyperbolic substitution.",
  "body": " An integral via a hyperbolic substitution   Use hyperbolic functions to calculate the integral  Hint: Similar to , we have .    We substitute , :   The last line uses from , which lets us state the answer without any inverse hyperbolic function.  Along the way, we have also used the following:    "
},
{
  "id": "subsec-hyp-catenary",
  "level": "1",
  "url": "subsec-hyp-catenary.html",
  "type": "Subsection",
  "number": "1.5.1",
  "title": "*Hanging Cables and the Catenary",
  "body": " *Hanging Cables and the Catenary   Starred section. This one is for the interested reader. It will not be examined.  If a heavy flexible cable (such as a telephone line, a power line, or a chain) hangs freely from two supports, it settles into a curve called a catenary . Contrary to a common guess, this curve is not a parabola; it is the graph of a hyperbolic cosine, where is measured horizontally from the lowest point of the cable, so that the -axis is the axis of symmetry and the lowest point sits at height . Sliding the curve up or down, as in , only changes where we draw the -axis.  The shape comes out of a balance of forces. Look at the piece of cable running from the lowest point to a point where the cable makes an angle with the horizontal, and let be the arc length of that piece. Three forces act on it: the tension at the lowest point, which is horizontal; the tension along the cable at the other end; and the weight of the piece, where is the mass per unit length; see . Balancing the horizontal and the vertical components gives    The three forces on the piece of cable of arc length running from the lowest point of the cable to a point where the cable makes an angle with the horizontal. The lowest point sits at height , and the supports are a distance apart. (After Fig. 1 of Behroozi, cited below.)     c(x) = (exp(x) + exp(-x))\/2  P = (1.1, 1.6685)        \\theta   T  \\lambda g s  T_0     a   s    b                 The quantity has units of length, and dividing the second equation by the first eliminates and leaves . Since the cable makes the angle with the horizontal, is its slope, so Now use the arc length element and separate the variables: where the constant of integration vanishes because at .  Solving for gives , and therefore One last integration, together with , produces the catenary equation .  Two things are worth noticing. First, is a pure scale factor: written as , the equation shows that every catenary is a scaled copy of the single curve , in exactly the same way that every circle is a scaled copy of the unit circle; shows four of them. Second, is fixed by the cable itself. If the cable has half-length and its two supports are a distance apart, then putting at in gives which determines (numerically) from the two lengths. Since , a cable pulled tight has a large and hangs almost flat, while a slack one has a small and sags sharply.   The catenaries for . Each curve meets the -axis at its own value of , and all four are scaled copies of the single curve . (After Fig. 2 of Behroozi, cited below.)     ca(x) = 0.5*(exp(x\/0.5) + exp(-x\/0.5))\/2  cb(x) = (exp(x) + exp(-x))\/2  cc(x) = 2*(exp(x\/2) + exp(-x\/2))\/2  cd(x) = 4*(exp(x\/4) + exp(-x\/4))\/2             a=0.5    a=1    a=2    a=4                A worked example of a hanging cable, in which we find the slope of the cable and the angle at which it meets its pole, appears in .  The derivation above follows F. Behroozi, In Praise of the Catenary , The Physics Teacher  56 , 214 217 (2018), which also discusses the sense in which all catenaries are similar to one another and suggests simple classroom demonstrations.  "
},
{
  "id": "subsec-hyp-catenary-3",
  "level": "2",
  "url": "subsec-hyp-catenary.html#subsec-hyp-catenary-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "catenary "
},
{
  "id": "fig-hyp-catenary-forces",
  "level": "2",
  "url": "subsec-hyp-catenary.html#fig-hyp-catenary-forces",
  "type": "Figure",
  "number": "1.5.1",
  "title": "",
  "body": " The three forces on the piece of cable of arc length running from the lowest point of the cable to a point where the cable makes an angle with the horizontal. The lowest point sits at height , and the supports are a distance apart. (After Fig. 1 of Behroozi, cited below.)     c(x) = (exp(x) + exp(-x))\/2  P = (1.1, 1.6685)        \\theta   T  \\lambda g s  T_0     a   s    b                "
},
{
  "id": "fig-hyp-catenary-family",
  "level": "2",
  "url": "subsec-hyp-catenary.html#fig-hyp-catenary-family",
  "type": "Figure",
  "number": "1.5.2",
  "title": "",
  "body": " The catenaries for . Each curve meets the -axis at its own value of , and all four are scaled copies of the single curve . (After Fig. 2 of Behroozi, cited below.)     ca(x) = 0.5*(exp(x\/0.5) + exp(-x\/0.5))\/2  cb(x) = (exp(x) + exp(-x))\/2  cc(x) = 2*(exp(x\/2) + exp(-x\/2))\/2  cd(x) = 4*(exp(x\/4) + exp(-x\/4))\/2             a=0.5    a=1    a=2    a=4               "
},
{
  "id": "subsec-hyp-catenary-11",
  "level": "2",
  "url": "subsec-hyp-catenary.html#subsec-hyp-catenary-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "56 "
},
{
  "id": "subsec-hyp-celestial",
  "level": "1",
  "url": "subsec-hyp-celestial.html",
  "type": "Subsection",
  "number": "1.5.2",
  "title": "Celestial Mechanics",
  "body": " Celestial Mechanics  If a comet has enough speed, it can escape the gravitational pull of the sun, in which case one possible trajectory is a hyperbolic trajectory. The comet 2I\/Borisov , discovered in 2019, is the first comet known to have come from outside our solar system. It was moving too fast for the sun to capture it, so its path is a hyperbola rather than an ellipse: it swung around the sun once and is now on its way back out. See .   The interstellar comet 2I\/Borisov, photographed by the Hubble Space Telescope in 2019. Because its speed exceeds the escape speed of the sun, its trajectory is a hyperbola and it passes through the solar system only once. (Image: NASA, ESA and D. Jewitt (UCLA).)   A fuzzy blue comet with a bright core and a broad tail sweeping to the upper right, against a black background.    "
},
{
  "id": "fig-hyp-comet-borisov",
  "level": "2",
  "url": "subsec-hyp-celestial.html#fig-hyp-comet-borisov",
  "type": "Figure",
  "number": "1.5.3",
  "title": "",
  "body": " The interstellar comet 2I\/Borisov, photographed by the Hubble Space Telescope in 2019. Because its speed exceeds the escape speed of the sun, its trajectory is a hyperbola and it passes through the solar system only once. (Image: NASA, ESA and D. Jewitt (UCLA).)   A fuzzy blue comet with a bright core and a broad tail sweeping to the upper right, against a black background.   "
},
{
  "id": "subsec-hyp-gateway-arch",
  "level": "1",
  "url": "subsec-hyp-gateway-arch.html",
  "type": "Subsection",
  "number": "1.5.3",
  "title": "The Gateway Arch",
  "body": " The Gateway Arch   The Gateway Arch in St. Louis, Missouri (designed in 1963 and completed in 1965) is a catenary turned upside down: flipping the curve converts the tension carried by a hanging chain into pure compression, which is what masonry and steel carry best. The geometric form of the gateway was set by Hannskari Bandel (structural engineer) and was expressed in the blueprints by the equation where , , and are constants. The arch is slightly flattened compared with a uniform hanging chain, because it is thicker at the base than at the top. It stands 630 feet tall and 630 feet wide at the base; the National Park Service describes its construction and its geometry at Gateway Arch National Park . See .   The Gateway Arch in St. Louis, Missouri. Its centerline follows the curve , an upside-down catenary. (Photograph by John Margolies, 1988; John Margolies Roadside America photograph archive, Library of Congress, Prints and Photographs Division.)   The stainless steel Gateway Arch rising from a line of trees against a clear blue sky, curving up to a rounded peak and back down.    "
},
{
  "id": "subsec-hyp-gateway-arch-2",
  "level": "2",
  "url": "subsec-hyp-gateway-arch.html#subsec-hyp-gateway-arch-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Gateway Arch in St. Louis, Missouri "
},
{
  "id": "fig-hyp-gateway-arch",
  "level": "2",
  "url": "subsec-hyp-gateway-arch.html#fig-hyp-gateway-arch",
  "type": "Figure",
  "number": "1.5.4",
  "title": "",
  "body": " The Gateway Arch in St. Louis, Missouri. Its centerline follows the curve , an upside-down catenary. (Photograph by John Margolies, 1988; John Margolies Roadside America photograph archive, Library of Congress, Prints and Photographs Division.)   The stainless steel Gateway Arch rising from a line of trees against a clear blue sky, curving up to a rounded peak and back down.   "
},
{
  "id": "sec-hyp-more-examples",
  "level": "1",
  "url": "sec-hyp-more-examples.html",
  "type": "Section",
  "number": "1.6",
  "title": "Further Examples",
  "body": " Further Examples   A hanging telephone line   A telephone line hangs between two poles m apart in the shape of the catenary , where and are measured in meters.   Find the slope of this curve where it meets the right pole.    Find the angle between the line and the pole.          The function is plotted in . To find the slope at the right pole, we differentiate the function with respect to and evaluate it at :     We know that and hence radians.      The telephone line between the two poles at and . The angle is measured between the line and the right pole.     cat(t) = (t, 20*(exp(t\/20) + exp(-t\/20))\/2 - 15)         \\theta    5    -7    7                  Rewriting   Consider the function .   Express as a fraction of two polynomials.    Calculate .          We note that and and hence      First Method: We can use the fraction derived in part A together with the quotient rule as follows.    Second Method: We can use the chain rule as follows.         A double-angle identity   Prove that .    Starting from the definition,   For the last equality, we have used and .     Solving a hyperbolic equation   Consider the equation and solve for .    We begin by substituting the definitions of hyperbolic functions. so that or .  Since the exponential function can only be positive, the only solution is     "
},
{
  "id": "example-hyp-catenary",
  "level": "2",
  "url": "sec-hyp-more-examples.html#example-hyp-catenary",
  "type": "Example",
  "number": "1.6.1",
  "title": "A hanging telephone line.",
  "body": " A hanging telephone line   A telephone line hangs between two poles m apart in the shape of the catenary , where and are measured in meters.   Find the slope of this curve where it meets the right pole.    Find the angle between the line and the pole.          The function is plotted in . To find the slope at the right pole, we differentiate the function with respect to and evaluate it at :     We know that and hence radians.      The telephone line between the two poles at and . The angle is measured between the line and the right pole.     cat(t) = (t, 20*(exp(t\/20) + exp(-t\/20))\/2 - 15)         \\theta    5    -7    7                "
},
{
  "id": "example-hyp-sinh-ln",
  "level": "2",
  "url": "sec-hyp-more-examples.html#example-hyp-sinh-ln",
  "type": "Example",
  "number": "1.6.3",
  "title": "Rewriting <span class=\"process-math\">\\(\\sinh(\\ln(x))\\)<\/span>.",
  "body": " Rewriting   Consider the function .   Express as a fraction of two polynomials.    Calculate .          We note that and and hence      First Method: We can use the fraction derived in part A together with the quotient rule as follows.    Second Method: We can use the chain rule as follows.       "
},
{
  "id": "example-hyp-double-angle",
  "level": "2",
  "url": "sec-hyp-more-examples.html#example-hyp-double-angle",
  "type": "Example",
  "number": "1.6.4",
  "title": "A double-angle identity.",
  "body": " A double-angle identity   Prove that .    Starting from the definition,   For the last equality, we have used and .   "
},
{
  "id": "example-hyp-equation",
  "level": "2",
  "url": "sec-hyp-more-examples.html#example-hyp-equation",
  "type": "Example",
  "number": "1.6.5",
  "title": "Solving a hyperbolic equation.",
  "body": " Solving a hyperbolic equation   Consider the equation and solve for .    We begin by substituting the definitions of hyperbolic functions. so that or .  Since the exponential function can only be positive, the only solution is    "
},
{
  "id": "sec-series-definitions",
  "level": "1",
  "url": "sec-series-definitions.html",
  "type": "Subsection",
  "number": "2.1.1",
  "title": "Definitions",
  "body": " Definitions   Sequence   A sequence is a list of numbers, . An infinite sequence of numbers is a function whose domain is the set of positive integers.     A Sequence of Halves   The numbers form an infinite sequence; its th term is .     Infinite Series   The sum of the numbers in an infinite sequence , i.e. , is called an infinite series . Here is the th term of the series.     An Infinite Series with a Finite Sum   Infinite sequences can have finite sums. Consider the sum of the sequence from , i.e. .  It is most convenient to evaluate the result of this sum geometrically. The above sum corresponds to the area of a square of side one. See .     The sum fills up a square of side one, so the sum is .               1\/2    1\/4    1\/8    1\/16                "
},
{
  "id": "def-sequence",
  "level": "2",
  "url": "sec-series-definitions.html#def-sequence",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Sequence.",
  "body": " Sequence   A sequence is a list of numbers, . An infinite sequence of numbers is a function whose domain is the set of positive integers.   "
},
{
  "id": "ex-halving-sequence",
  "level": "2",
  "url": "sec-series-definitions.html#ex-halving-sequence",
  "type": "Example",
  "number": "2.1.2",
  "title": "A Sequence of Halves.",
  "body": " A Sequence of Halves   The numbers form an infinite sequence; its th term is .   "
},
{
  "id": "def-infinite-series",
  "level": "2",
  "url": "sec-series-definitions.html#def-infinite-series",
  "type": "Definition",
  "number": "2.1.3",
  "title": "Infinite Series.",
  "body": " Infinite Series   The sum of the numbers in an infinite sequence , i.e. , is called an infinite series . Here is the th term of the series.   "
},
{
  "id": "ex-halving-series",
  "level": "2",
  "url": "sec-series-definitions.html#ex-halving-series",
  "type": "Example",
  "number": "2.1.4",
  "title": "An Infinite Series with a Finite Sum.",
  "body": " An Infinite Series with a Finite Sum   Infinite sequences can have finite sums. Consider the sum of the sequence from , i.e. .  It is most convenient to evaluate the result of this sum geometrically. The above sum corresponds to the area of a square of side one. See .   "
},
{
  "id": "fig-series-square",
  "level": "2",
  "url": "sec-series-definitions.html#fig-series-square",
  "type": "Figure",
  "number": "2.1.5",
  "title": "",
  "body": " The sum fills up a square of side one, so the sum is .               1\/2    1\/4    1\/8    1\/16               "
},
{
  "id": "sec-series-partial-sums",
  "level": "1",
  "url": "sec-series-partial-sums.html",
  "type": "Subsection",
  "number": "2.1.2",
  "title": "Partial Sums",
  "body": " Partial Sums  Consider the infinite sequence . Let us denote the sum of the first terms in this sequence by , which are known as partial sums . Can we find a pattern in the sequence of partial sums?   From the pattern in , we can compute the result of the infinite series by taking the limit of the partial sum as .   Note that this is the same answer that we found using our geometric analysis (using the square).  Note that in the above example, the sequence of the partial sums converged to . In general, if the sequence of the partial sums converges to a number, we say that the series converges , otherwise we say that the series diverges .  "
},
{
  "id": "sec-series-partial-sums-2",
  "level": "2",
  "url": "sec-series-partial-sums.html#sec-series-partial-sums-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial sums "
},
{
  "id": "sec-series-partial-sums-5",
  "level": "2",
  "url": "sec-series-partial-sums.html#sec-series-partial-sums-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converges diverges "
},
{
  "id": "sec-series-geometric",
  "level": "1",
  "url": "sec-series-geometric.html",
  "type": "Subsection",
  "number": "2.1.3",
  "title": "Geometric Series",
  "body": " Geometric Series  An important example of infinite series is the geometric series. The geometric series is of the form where are real numbers and . Note that we can re-write the series as .  Let us compute the partial sum for the geometric series. The partial sum is   If we multiply equation by , we get a similar expression.   Then deducting from we get   Next, to compute the result of the geometric series, we take the limit of the partial sum as in the previous example.   Note that if , we have and hence , whereas if , diverges and therefore the geometric series diverges. That leaves the two cases with . When , the partial sum is   limit of which diverges.   What Happens When ?   We have now handled , , and , but one case is still missing: . Write out the partial sums of the series for . Does the sequence of partial sums approach a single number as ? What does that tell you about the series?    The partial sums do not grow without bound here, the way they do when . Look instead at whether they settle down to one value.    Putting all of the cases together, we can say that if , the geometric series is divergent.   Summary  The geometric series converges to if , i.e. and diverges if .   Next, as an application of the geometric series, we will go through the following example, which is from our textbook.   A bouncing ball   You drop a ball from meters above a flat surface. Each time the ball hits the surface after falling a distance , it rebounds a distance , where is positive but less than 1. Find the total distance the ball travels up and down.    As can be seen in , the total vertical distance travelled by the ball can be written as the infinite series   which can be re-written and then summed with , since here.    The ball falls a distance , then rises and falls a distance , then , and so on, so the total distance travelled is .     b0(t) = (0.55 + 0.55*t, 4.0*(1 - t^2))  b1(t) = (1.10 + 0.9*t, 2.4*(4*t*(1 - t)))  b2(t) = (2.00 + 0.7*t, 1.44*(4*t*(1 - t)))  b3(t) = (2.70 + 0.55*t, 0.864*(4*t*(1 - t)))  b4(t) = (3.25 + 0.42*t, 0.5184*(4*t*(1 - t)))               a    ar    ar^2    ar^3                  "
},
{
  "id": "sec-series-geometric-2",
  "level": "2",
  "url": "sec-series-geometric.html#sec-series-geometric-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric series "
},
{
  "id": "exercise-geometric-r-negative-one",
  "level": "2",
  "url": "sec-series-geometric.html#exercise-geometric-r-negative-one",
  "type": "Checkpoint",
  "number": "2.1.6",
  "title": "What Happens When <span class=\"process-math\">\\(r = -1\\text{?}\\)<\/span>",
  "body": " What Happens When ?   We have now handled , , and , but one case is still missing: . Write out the partial sums of the series for . Does the sequence of partial sums approach a single number as ? What does that tell you about the series?    The partial sums do not grow without bound here, the way they do when . Look instead at whether they settle down to one value.   "
},
{
  "id": "example-series-ball",
  "level": "2",
  "url": "sec-series-geometric.html#example-series-ball",
  "type": "Example",
  "number": "2.1.7",
  "title": "A bouncing ball.",
  "body": " A bouncing ball   You drop a ball from meters above a flat surface. Each time the ball hits the surface after falling a distance , it rebounds a distance , where is positive but less than 1. Find the total distance the ball travels up and down.    As can be seen in , the total vertical distance travelled by the ball can be written as the infinite series   which can be re-written and then summed with , since here.    The ball falls a distance , then rises and falls a distance , then , and so on, so the total distance travelled is .     b0(t) = (0.55 + 0.55*t, 4.0*(1 - t^2))  b1(t) = (1.10 + 0.9*t, 2.4*(4*t*(1 - t)))  b2(t) = (2.00 + 0.7*t, 1.44*(4*t*(1 - t)))  b3(t) = (2.70 + 0.55*t, 0.864*(4*t*(1 - t)))  b4(t) = (3.25 + 0.42*t, 0.5184*(4*t*(1 - t)))               a    ar    ar^2    ar^3                 "
},
{
  "id": "sec-series-nth-term",
  "level": "1",
  "url": "sec-series-nth-term.html",
  "type": "Subsection",
  "number": "2.1.4",
  "title": "The <span class=\"process-math\">\\(n\\)<\/span>th Term Test",
  "body": " The th Term Test    If converges, then .     Important note: If , we cannot conclude that converges. See parts D and E in the example below. Also see .  The following test is a consequence of the above theorem.   The th Term Test  If does not exist or , then diverges.    Testing series for convergence   Determine whether the series is convergent or divergent. If it is convergent, find its sum.                                   , so by the th Term Test, is divergent.     does not exist, so by the th Term Test, is divergent.     , so by the th Term Test, is divergent.    Note that in this case , which means we cannot use the th term test . Instead let us write the partial sum.      We begin by writing the infinite series in the sigma notation. Note that the th Term Test is not conclusive for this one, since . However, this is a geometric series with and , so and applies.        "
},
{
  "id": "thm-series-nth-term",
  "level": "2",
  "url": "sec-series-nth-term.html#thm-series-nth-term",
  "type": "Theorem",
  "number": "2.1.9",
  "title": "",
  "body": "  If converges, then .   "
},
{
  "id": "sec-series-nth-term-3",
  "level": "2",
  "url": "sec-series-nth-term.html#sec-series-nth-term-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Important note: "
},
{
  "id": "example-series-convergence",
  "level": "2",
  "url": "sec-series-nth-term.html#example-series-convergence",
  "type": "Example",
  "number": "2.1.10",
  "title": "Testing series for convergence.",
  "body": " Testing series for convergence   Determine whether the series is convergent or divergent. If it is convergent, find its sum.                                   , so by the th Term Test, is divergent.     does not exist, so by the th Term Test, is divergent.     , so by the th Term Test, is divergent.    Note that in this case , which means we cannot use the th term test . Instead let us write the partial sum.      We begin by writing the infinite series in the sigma notation. Note that the th Term Test is not conclusive for this one, since . However, this is a geometric series with and , so and applies.       "
},
{
  "id": "sec-series-combining",
  "level": "1",
  "url": "sec-series-combining.html",
  "type": "Subsection",
  "number": "2.1.5",
  "title": "Combining Series",
  "body": " Combining Series    If and are convergent series, then    Sum Rule:       Difference Rule:       Constant Multiple Rule:  (Any number ).        Using the difference rule   Evaluate .    Note that in and we already found that   Hence, we can simply use the difference rule to conclude that      A telescoping series with logarithms   Evaluate , if it converges and if it diverges, show that it does.    We begin by writing the partial sum .   Note that , and hence the series diverges.    "
},
{
  "id": "thm-series-combining",
  "level": "2",
  "url": "sec-series-combining.html#thm-series-combining",
  "type": "Theorem",
  "number": "2.1.11",
  "title": "",
  "body": "  If and are convergent series, then    Sum Rule:       Difference Rule:       Constant Multiple Rule:  (Any number ).      "
},
{
  "id": "example-series-difference",
  "level": "2",
  "url": "sec-series-combining.html#example-series-difference",
  "type": "Example",
  "number": "2.1.12",
  "title": "Using the difference rule.",
  "body": " Using the difference rule   Evaluate .    Note that in and we already found that   Hence, we can simply use the difference rule to conclude that    "
},
{
  "id": "example-series-telescoping-ln",
  "level": "2",
  "url": "sec-series-combining.html#example-series-telescoping-ln",
  "type": "Example",
  "number": "2.1.13",
  "title": "A telescoping series with logarithms.",
  "body": " A telescoping series with logarithms   Evaluate , if it converges and if it diverges, show that it does.    We begin by writing the partial sum .   Note that , and hence the series diverges.   "
},
{
  "id": "sec-taylor-definitions",
  "level": "1",
  "url": "sec-taylor-definitions.html",
  "type": "Subsection",
  "number": "2.2.1",
  "title": "Definitions of Taylor Series, Maclaurin Series, and Taylor Polynomials",
  "body": " Definitions of Taylor Series, Maclaurin Series, and Taylor Polynomials  In this section we will answer the following question:    If all we know about a function is information at , i.e. , how can we approximate with a polynomial ?    Throughout, let be a function with derivatives of all orders throughout some interval containing as an interior point.  Before stating the definitions, let us see where the coefficients of such a polynomial have to come from. Suppose the only things we know about are its readings at : the value , the slope , the second derivative , and so on. We look for a polynomial written in terms of , and we pin down the unknown coefficients by requiring to agree with at in as many derivatives as it has coefficients. Writing it in terms of rather than is what makes this manageable: every term after the first vanishes at .   Start with a line. Take . It has two coefficients, so we may impose two conditions: that it pass through the right point and leave it with the right slope. Differentiating and evaluating at , which gives , the tangent line to at .   Then a parabola. Allow one more coefficient, , and impose one more condition: that the second derivative match too. Differentiating twice, and evaluating each line at gives , , and , so that .  Notice what did not happen: and came out exactly as before. Each new condition is the first one in which the next coefficient appears, so it determines that coefficient and leaves the earlier ones untouched. That is why is the tangent line with a single new term added to it, rather than a fresh approximation built from scratch.   Then a cubic. With , the third derivative is the constant , so matching it against gives . The pattern in the denominators is now visible:   One computation settles every coefficient at once. Differentiate exactly times and evaluate at . Each term of degree below has been differentiated away to zero; each term of degree above still carries a factor of and so vanishes at ; and the one surviving term has become the constant . Hence and requiring forces   So there is nothing to choose. Once we ask a polynomial to match and its first derivatives at , its coefficients are determined, and they are the numbers . Reading as and as , the first coefficient fits the same formula. Letting grow without bound leads to the following definitions.   Taylor Series   The Taylor series generated by at is      Taylor Polynomial of Order   The Taylor polynomial of order generated by at is the polynomial      Maclaurin Series  The centre is common enough to have its own name. The Taylor series generated by at is known as the Maclaurin series generated by , which is     Approximating near   Write down the Taylor polynomials of orders , , and generated by at .    Every derivative of is again, so , and the coefficients of are just . With this gives   The first of these is the tangent line to at . As shows, each additional term keeps the polynomial close to the curve over a wider stretch.   The function together with the Taylor polynomials , , and at . Near each polynomial hugs the curve more closely than the one before it.     f(t) = (t, exp(t))  p1(t) = (t, 1 + t)  p2(t) = (t, 1 + t + t^2\/2)  p3(t) = (t, 1 + t + t^2\/2 + t^3\/6)         f(x)=e^{x}    p_1(x)=1+x    p_2(x)=1+x+\\frac{x^2}{2!}    p_3(x)=1+x+\\frac{x^2}{2!}+\\frac{x^3}{3!}                   The same idea, animated. Each new term of the Taylor polynomial is grown in one at a time, so you can watch peel away from the previous approximation and settle closer to .     puts all three of these on one screen for . The centre slider is the of the definitions: left at it builds the Maclaurin polynomials, and moved anywhere else it rebuilds the same construction at a new point, where again touches the curve. The order slider is the of , and stepping it up adds exactly one term, . That term vanishes at , which is why raising the order changes the shape of the polynomial everywhere else but never moves it off the point .  The green band in the figure is worth watching on its own. It marks the interval on which stays within of , and it widens with every term: about for , about for , and wider than the picture by . So the Taylor polynomials do not merely improve at the centre; the region where they are usable grows. Whether that region eventually covers everything, and how large the error is at a given , are the questions of the next section.  "
},
{
  "id": "def-taylor-series",
  "level": "2",
  "url": "sec-taylor-definitions.html#def-taylor-series",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Taylor Series.",
  "body": " Taylor Series   The Taylor series generated by at is    "
},
{
  "id": "def-taylor-polynomial",
  "level": "2",
  "url": "sec-taylor-definitions.html#def-taylor-polynomial",
  "type": "Definition",
  "number": "2.2.2",
  "title": "Taylor Polynomial of Order <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Taylor Polynomial of Order   The Taylor polynomial of order generated by at is the polynomial    "
},
{
  "id": "remark-maclaurin-series",
  "level": "2",
  "url": "sec-taylor-definitions.html#remark-maclaurin-series",
  "type": "Remark",
  "number": "2.2.3",
  "title": "Maclaurin Series.",
  "body": " Maclaurin Series  The centre is common enough to have its own name. The Taylor series generated by at is known as the Maclaurin series generated by , which is   "
},
{
  "id": "example-taylor-exp",
  "level": "2",
  "url": "sec-taylor-definitions.html#example-taylor-exp",
  "type": "Example",
  "number": "2.2.4",
  "title": "Approximating <span class=\"process-math\">\\(e^x\\)<\/span> near <span class=\"process-math\">\\(x = 0\\)<\/span>.",
  "body": " Approximating near   Write down the Taylor polynomials of orders , , and generated by at .    Every derivative of is again, so , and the coefficients of are just . With this gives   The first of these is the tangent line to at . As shows, each additional term keeps the polynomial close to the curve over a wider stretch.   The function together with the Taylor polynomials , , and at . Near each polynomial hugs the curve more closely than the one before it.     f(t) = (t, exp(t))  p1(t) = (t, 1 + t)  p2(t) = (t, 1 + t + t^2\/2)  p3(t) = (t, 1 + t + t^2\/2 + t^3\/6)         f(x)=e^{x}    p_1(x)=1+x    p_2(x)=1+x+\\frac{x^2}{2!}    p_3(x)=1+x+\\frac{x^2}{2!}+\\frac{x^3}{3!}                 "
},
{
  "id": "fig-taylor-order-animation",
  "level": "2",
  "url": "sec-taylor-definitions.html#fig-taylor-order-animation",
  "type": "Figure",
  "number": "2.2.6",
  "title": "",
  "body": " The same idea, animated. Each new term of the Taylor polynomial is grown in one at a time, so you can watch peel away from the previous approximation and settle closer to .   "
},
{
  "id": "sec-taylor-example",
  "level": "1",
  "url": "sec-taylor-example.html",
  "type": "Subsection",
  "number": "2.2.2",
  "title": "More Examples",
  "body": " More Examples   The Maclaurin series of   Consider the function .   Find the Taylor series generated by at . Note that this is the same as the Maclaurin series generated by .    Calculate the first four Taylor polynomials .    Plot the original function and the Taylor polynomials obtained in part B to confirm that the higher order polynomials provide a better approximation.          Let us begin by calculating the derivatives . Evaluating at : We can summarize as , for . Hence, for the Taylor series at , we have     The first four non-zero Taylor polynomials are     The function and the four polynomials are plotted in . As the order increases, the polynomial follows the sine curve over a wider interval.      The function together with the Taylor polynomials , , , and at .     f(t) = (t, sin(t))  p1(t) = (t, t)  p3(t) = (t, t - t^3\/6)  p5(t) = (t, t - t^3\/6 + t^5\/120)  p7(t) = (t, t - t^3\/6 + t^5\/120 - t^7\/5040)          f(x)=\\sin x    p_1(x)=x    p_3(x)=x-\\frac{x^3}{3!}    p_5(x)=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}    p_7(x)=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\frac{x^7}{7!}                     Consider the function .   Compute the Maclaurin series generated by . Express the result in sigma notation.    Find the interval of convergence for this series.        A. Write , so that , and build the Maclaurin series of straight from . Differentiating repeatedly, and in general . Each differentiation brings down one more factor of from the chain rule and one more factor from the exponent, which is exactly the that the definition divides by. Evaluating at gives , so the coefficients are and therefore   The same series comes out with no differentiation at all, because is the sum of a geometric series. Taking and in , which agrees term by term with what the derivatives gave. The shortcut is worth noticing: whenever a function can be recognised as the sum of a geometric series, its Maclaurin series can be read off without computing a single derivative.  Multiplying by the factor of in front of now answers the question,    B. The geometric series above converges exactly when , that is . At either endpoint the terms do not shrink to zero: at every term equals , and at the terms alternate between and . By the th Term Test ( ) the series diverges at both endpoints, so the interval of convergence is       Compute the Taylor series of at .     Method 1: from the definition. The series is centred at , so what we need are the derivatives . Differentiating a few times, and leaving the factors of that the chain rule produces on display rather than multiplying them out,   The pattern is now readable. Each differentiation flips the sign, brings down one more factor of from the chain rule, raises the power in the denominator by one, and multiplies the factorial up by one. So for the th derivative,   At the centre, , so The from the derivative cancels the that divides by, which is what makes the coefficients so simple here. Substituting them in,    Method 2: as a geometric series. Rewrite the denominator in terms of : . Factoring out the ,   The last expression is the sum of a geometric series with and , so by ,   This is the same series as Method 1, reached without differentiating anything. It also comes with its interval for free: a geometric series converges exactly when , which here says , that is .     A list of Taylor series  The Maclaurin series below are derived or used throughout this book, and the first four are the ones on the formula sheet of the exams. Each of them is a Taylor series centered at , so each can be obtained from by computing derivatives, as we did for and . Most of the time, though, it is faster to start from one of these and substitute, differentiate, integrate, or multiply: that is how the series for , , , and are found in this book.   A list of Taylor series: the Maclaurin series derived or used in this book.    Series  Interval of convergence  Where in the book          The geometric series, .  Replacing by , , or gives the series of , , and ; see .           Derived in .  Convergence proved in .           Derived in .  Divided by in .           The derivative of the series of .  Used, with and in place of , in Assignments 2 and 3 and in Review Problems #1.           Derived in Sample Past Exam 1; it is the odd part of the series of .           The derivative of the series of ; it is the even part of the series of .           Its Taylor polynomials, for and , are the subject of problems in Assignment 3 and Review Problems #1.           Obtained by integrating the series of in .  Evaluated at to approximate in .      Two more series in this book come from the table by substitution, and both converge on : , used in to approximate an integral, and , used in to evaluate one exactly.   "
},
{
  "id": "example-taylor-sin",
  "level": "2",
  "url": "sec-taylor-example.html#example-taylor-sin",
  "type": "Example",
  "number": "2.2.7",
  "title": "The Maclaurin series of <span class=\"process-math\">\\(\\sin(x)\\)<\/span>.",
  "body": " The Maclaurin series of   Consider the function .   Find the Taylor series generated by at . Note that this is the same as the Maclaurin series generated by .    Calculate the first four Taylor polynomials .    Plot the original function and the Taylor polynomials obtained in part B to confirm that the higher order polynomials provide a better approximation.          Let us begin by calculating the derivatives . Evaluating at : We can summarize as , for . Hence, for the Taylor series at , we have     The first four non-zero Taylor polynomials are     The function and the four polynomials are plotted in . As the order increases, the polynomial follows the sine curve over a wider interval.      The function together with the Taylor polynomials , , , and at .     f(t) = (t, sin(t))  p1(t) = (t, t)  p3(t) = (t, t - t^3\/6)  p5(t) = (t, t - t^3\/6 + t^5\/120)  p7(t) = (t, t - t^3\/6 + t^5\/120 - t^7\/5040)          f(x)=\\sin x    p_1(x)=x    p_3(x)=x-\\frac{x^3}{3!}    p_5(x)=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}    p_7(x)=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\frac{x^7}{7!}                  "
},
{
  "id": "exercise-taylor-geometric",
  "level": "2",
  "url": "sec-taylor-example.html#exercise-taylor-geometric",
  "type": "Checkpoint",
  "number": "2.2.9",
  "title": "",
  "body": "  Consider the function .   Compute the Maclaurin series generated by . Express the result in sigma notation.    Find the interval of convergence for this series.        A. Write , so that , and build the Maclaurin series of straight from . Differentiating repeatedly, and in general . Each differentiation brings down one more factor of from the chain rule and one more factor from the exponent, which is exactly the that the definition divides by. Evaluating at gives , so the coefficients are and therefore   The same series comes out with no differentiation at all, because is the sum of a geometric series. Taking and in , which agrees term by term with what the derivatives gave. The shortcut is worth noticing: whenever a function can be recognised as the sum of a geometric series, its Maclaurin series can be read off without computing a single derivative.  Multiplying by the factor of in front of now answers the question,    B. The geometric series above converges exactly when , that is . At either endpoint the terms do not shrink to zero: at every term equals , and at the terms alternate between and . By the th Term Test ( ) the series diverges at both endpoints, so the interval of convergence is    "
},
{
  "id": "exercise-taylor-shifted",
  "level": "2",
  "url": "sec-taylor-example.html#exercise-taylor-shifted",
  "type": "Checkpoint",
  "number": "2.2.10",
  "title": "",
  "body": "  Compute the Taylor series of at .     Method 1: from the definition. The series is centred at , so what we need are the derivatives . Differentiating a few times, and leaving the factors of that the chain rule produces on display rather than multiplying them out,   The pattern is now readable. Each differentiation flips the sign, brings down one more factor of from the chain rule, raises the power in the denominator by one, and multiplies the factorial up by one. So for the th derivative,   At the centre, , so The from the derivative cancels the that divides by, which is what makes the coefficients so simple here. Substituting them in,    Method 2: as a geometric series. Rewrite the denominator in terms of : . Factoring out the ,   The last expression is the sum of a geometric series with and , so by ,   This is the same series as Method 1, reached without differentiating anything. It also comes with its interval for free: a geometric series converges exactly when , which here says , that is .   "
},
{
  "id": "table-taylor-series-list",
  "level": "2",
  "url": "sec-taylor-example.html#table-taylor-series-list",
  "type": "Table",
  "number": "2.2.11",
  "title": "A list of Taylor series: the Maclaurin series derived or used in this book.",
  "body": " A list of Taylor series: the Maclaurin series derived or used in this book.    Series  Interval of convergence  Where in the book          The geometric series, .  Replacing by , , or gives the series of , , and ; see .           Derived in .  Convergence proved in .           Derived in .  Divided by in .           The derivative of the series of .  Used, with and in place of , in Assignments 2 and 3 and in Review Problems #1.           Derived in Sample Past Exam 1; it is the odd part of the series of .           The derivative of the series of ; it is the even part of the series of .           Its Taylor polynomials, for and , are the subject of problems in Assignment 3 and Review Problems #1.           Obtained by integrating the series of in .  Evaluated at to approximate in .     "
},
{
  "id": "subsection-1",
  "level": "1",
  "url": "subsection-1.html",
  "type": "Subsection",
  "number": "2.3.1",
  "title": "Taylor’s Formula and The Remainder Estimation Theorem",
  "body": " Taylor's Formula and The Remainder Estimation Theorem   Taylor's Formula   Let be a function that has continuous derivatives on an open interval containing . Then for each and for each positive integer , there exists a number between and such that where and     To see a visual representation of Taylor's formula, watch the following animation.   Taylor's Formula Animation     Taylor's Formula: . The Taylor polynomial agrees with at ; away from , the vertical gap between them is the remainder .      a = 1  f(x) = 0.9 + 0.55*sin(1.15*(x - 0.4)) + 0.09*x  pn(x) = f(a) + 0.5778*(x - a) - 0.379*(x - a)^2  xt = 3.1         a     x      R_n(x)     f(x)    p_n(x)                 The proof of the remainder theorem is based on the mean value theorem and Taylor's theorem and we have included the proof in . The proof is postponed to the end of this section because it requires some technical details that are not necessary for understanding the main ideas of this section. The students are not expected to know the proof, however, they should understand the statement and its implications. Interested students are encouraged to read the proof.     Finding an upper bound for the error term without knowing the value of  Usually the value of is not explicitly known. However, we may manage to find an upper bound for the error term without knowing the exact value of . This is achieved by finding an upper bound for , where is between and , and then using this upper bound to estimate the error term.  This is the idea behind every error estimate in this section. It is used in to bound the error in approximating and , in to show that the Newtonian kinetic energy formula is accurate for everyday speeds, in to justify the small-angle approximation , and in to control the error in approximating . It is also used in to prove that the Taylor series of converges to for every .    The Remainder Estimation Theorem   Let be a function that has continuous derivatives on an open interval containing . Then for each and for each positive integer , there exists a number between and such that where is an upper bound for on the interval between and .     The proof of the remainder estimation theorem is based on the Taylor's formula . Suppose that we can find an upper bound for on the interval between and , i.e., . Taking absolute values in then gives:    "
},
{
  "id": "Taylor-Formula",
  "level": "2",
  "url": "subsection-1.html#Taylor-Formula",
  "type": "Theorem",
  "number": "2.3.1",
  "title": "Taylor’s Formula.",
  "body": " Taylor's Formula   Let be a function that has continuous derivatives on an open interval containing . Then for each and for each positive integer , there exists a number between and such that where and    "
},
{
  "id": "vid-taylor-formula",
  "level": "2",
  "url": "subsection-1.html#vid-taylor-formula",
  "type": "Figure",
  "number": "2.3.2",
  "title": "",
  "body": " Taylor's Formula Animation   "
},
{
  "id": "fig-taylor-formula",
  "level": "2",
  "url": "subsection-1.html#fig-taylor-formula",
  "type": "Figure",
  "number": "2.3.3",
  "title": "",
  "body": " Taylor's Formula: . The Taylor polynomial agrees with at ; away from , the vertical gap between them is the remainder .      a = 1  f(x) = 0.9 + 0.55*sin(1.15*(x - 0.4)) + 0.09*x  pn(x) = f(a) + 0.5778*(x - a) - 0.379*(x - a)^2  xt = 3.1         a     x      R_n(x)     f(x)    p_n(x)               "
},
{
  "id": "subsection-1-6",
  "level": "2",
  "url": "subsection-1.html#subsection-1-6",
  "type": "Proof",
  "number": "2.3.1.1",
  "title": "",
  "body": " The proof of the remainder theorem is based on the mean value theorem and Taylor's theorem and we have included the proof in . The proof is postponed to the end of this section because it requires some technical details that are not necessary for understanding the main ideas of this section. The students are not expected to know the proof, however, they should understand the statement and its implications. Interested students are encouraged to read the proof.   "
},
{
  "id": "rmk-error-upper-bound",
  "level": "2",
  "url": "subsection-1.html#rmk-error-upper-bound",
  "type": "Remark",
  "number": "2.3.4",
  "title": "Finding an upper bound for the error term without knowing the value of <span class=\"process-math\">\\(c\\)<\/span>.",
  "body": " Finding an upper bound for the error term without knowing the value of  Usually the value of is not explicitly known. However, we may manage to find an upper bound for the error term without knowing the exact value of . This is achieved by finding an upper bound for , where is between and , and then using this upper bound to estimate the error term.  This is the idea behind every error estimate in this section. It is used in to bound the error in approximating and , in to show that the Newtonian kinetic energy formula is accurate for everyday speeds, in to justify the small-angle approximation , and in to control the error in approximating . It is also used in to prove that the Taylor series of converges to for every .  "
},
{
  "id": "thm-remainder-theorem",
  "level": "2",
  "url": "subsection-1.html#thm-remainder-theorem",
  "type": "Theorem",
  "number": "2.3.5",
  "title": "The Remainder Estimation Theorem.",
  "body": " The Remainder Estimation Theorem   Let be a function that has continuous derivatives on an open interval containing . Then for each and for each positive integer , there exists a number between and such that where is an upper bound for on the interval between and .   "
},
{
  "id": "subsection-1-9",
  "level": "2",
  "url": "subsection-1.html#subsection-1-9",
  "type": "Proof",
  "number": "2.3.1.2",
  "title": "",
  "body": " The proof of the remainder estimation theorem is based on the Taylor's formula . Suppose that we can find an upper bound for on the interval between and , i.e., . Taking absolute values in then gives:   "
},
{
  "id": "subsection-2",
  "level": "1",
  "url": "subsection-2.html",
  "type": "Subsection",
  "number": "2.3.2",
  "title": "An example of a Taylor series that converges",
  "body": " An example of a Taylor series that converges  Consider the function . We know that for all . Therefore, the Taylor series generated by at is given by:   We will show that this series converges to for all . To do this, we will use the remainder theorem. Putting and into , we have:   First, we consider the case when . As in , we do not need the exact value of , only an upper bound for . Since is between and , we have , so works; see . Therefore, we can bound the remainder term as follows:   Now we can compute the limit of the remainder term as , keeping in mind that is fixed and only is changing Why is for every fixed ? Write the quotient as a product of factors, . The numerators never change, but the denominators keep growing, so eventually every new factor is small. Precisely, fix an integer with . The first factors contribute the fixed number , and each factor after that satisfies for . Hence for we get , and the right-hand side tends to as , so the squeeze theorem gives the limit . In short, the factorial in the denominator eventually outgrows any fixed power in the numerator, no matter how large is. :   This shows that the Taylor series converges to for all .   Schematic graph of and its Taylor polynomials about . For a positive the remainder uses some with , giving ; for a negative it uses some with , giving .      f(x) = exp(x)  p1(x) = 1 + x  p2(x) = 1 + x + x^2\/2  p3(x) = 1 + x + x^2\/2 + x^3\/6  p4(x) = 1 + x + x^2\/2 + x^3\/6 + x^4\/24          f(x) = e^x      x \\gt 0     c    e^c \\mathrel{\\unicode{x3C}} e^x      x \\mathrel{\\unicode{x3C}} 0     c    e^c \\mathrel{\\unicode{x3C}} 1     e^x  p_4  p_3  p_2  p_1                      The second case is when . In this case, since is between and , we have , so this time is an upper bound for ; see again. Hence, we can bound the remainder term as follows:   Now we can compute the limit of the remainder term as :   This shows that the Taylor series converges to for all . Therefore, we conclude that the Taylor series converges to for all .  The animation below illustrates this convergence geometrically. As the degree increases, the Taylor polynomials hug the graph of over a wider and wider interval, matching the fact that the remainder for every .   The Taylor polynomials of about converging to , followed by the remainder-theorem argument.    "
},
{
  "id": "fig-exp-taylor",
  "level": "2",
  "url": "subsection-2.html#fig-exp-taylor",
  "type": "Figure",
  "number": "2.3.6",
  "title": "",
  "body": " Schematic graph of and its Taylor polynomials about . For a positive the remainder uses some with , giving ; for a negative it uses some with , giving .      f(x) = exp(x)  p1(x) = 1 + x  p2(x) = 1 + x + x^2\/2  p3(x) = 1 + x + x^2\/2 + x^3\/6  p4(x) = 1 + x + x^2\/2 + x^3\/6 + x^4\/24          f(x) = e^x      x \\gt 0     c    e^c \\mathrel{\\unicode{x3C}} e^x      x \\mathrel{\\unicode{x3C}} 0     c    e^c \\mathrel{\\unicode{x3C}} 1     e^x  p_4  p_3  p_2  p_1                     "
},
{
  "id": "fig-exp-taylor-video",
  "level": "2",
  "url": "subsection-2.html#fig-exp-taylor-video",
  "type": "Figure",
  "number": "2.3.7",
  "title": "",
  "body": " The Taylor polynomials of about converging to , followed by the remainder-theorem argument.   "
},
{
  "id": "subsection-3",
  "level": "1",
  "url": "subsection-3.html",
  "type": "Subsection",
  "number": "2.3.3",
  "title": "The error in using a Taylor polynomial",
  "body": " The error in using a Taylor polynomial  In this subsection, we will discuss how to estimate the error in using a Taylor polynomial to approximate a function. We will use the remainder theorem to bound the error term .  Suppose we want to approximate using the Taylor polynomial of degree at . The error in this approximation is given by , which is rearranged. By the remainder theorem , we have:   To bound the error term, we need to find an upper bound for on the interval between and , as explained in . The examples below carry out this step in several different settings.   Approximating using a Taylor polynomial   Approximate using the Taylor polynomial of degree 2 at . Find an upper bound for the error in this approximation.    We will approximate using the Taylor polynomial of degree 2 at :   We want to approximate . The error term is given by:   We do not know the value of , so we use the idea of and bound instead. Since is increasing and lies between and , we may take , and therefore:   Therefore, the error in approximating using the Taylor polynomial of degree 2 is bounded by:   In fact, if we compute the actual value of and compare it with the approximation given by , we find that the actual error is , which is indeed less than the upper bound we calculated.   The red curve is the graph of and the blue curve is the graph of the Taylor polynomial . The exact value of is represented by the red point and the approximation given by is represented by the blue point. The vertical distance between the two points represents the error in the approximation. Note that the error is less than the upper bound we calculated, i.e., .     Given a desired error bound, find values of for which the approximation is guaranteed to be valid   Assume that we use the Taylor polynomial of degree 3 at to approximate . For approximately what values of can you replace by such a Taylor polynomial with an error of magnitude no greater than ?    The Taylor polynomial of degree 3 at for is given by:   Since , the error term is given by:   Again the value of is unknown, so we follow : since , we have for every , so we may take and obtain:   We want to find the values of such that:   This gives us:   Taking the fifth root, we get:   Therefore, we can safely replace by the Taylor polynomial of degree 3 at with an error of magnitude no greater than for .       Finding the value of such that the error is less than a given tolerance   Find the smallest value of for which the polynomial approximation for is accurate to for values of in the interval .    The Taylor polynomial of degree at for is given by:   The error term is given by:   As in , we bound the unknown derivative rather than locating . Since is either or , up to a sign, we have for every , so works and:   We want to find the smallest value of such that:   Since for , and approximating , we have:   Therefore, we want to find the smallest value of such that:   We can check the values of starting from until we find the smallest value of that satisfies the inequality. After checking, we find that the smallest value of that satisfies the inequality is .     "
},
{
  "id": "ex-error-bound-exp",
  "level": "2",
  "url": "subsection-3.html#ex-error-bound-exp",
  "type": "Example",
  "number": "2.3.8",
  "title": "Approximating <span class=\"process-math\">\\(e^x\\)<\/span> using a Taylor polynomial.",
  "body": " Approximating using a Taylor polynomial   Approximate using the Taylor polynomial of degree 2 at . Find an upper bound for the error in this approximation.    We will approximate using the Taylor polynomial of degree 2 at :   We want to approximate . The error term is given by:   We do not know the value of , so we use the idea of and bound instead. Since is increasing and lies between and , we may take , and therefore:   Therefore, the error in approximating using the Taylor polynomial of degree 2 is bounded by:   In fact, if we compute the actual value of and compare it with the approximation given by , we find that the actual error is , which is indeed less than the upper bound we calculated.   The red curve is the graph of and the blue curve is the graph of the Taylor polynomial . The exact value of is represented by the red point and the approximation given by is represented by the blue point. The vertical distance between the two points represents the error in the approximation. Note that the error is less than the upper bound we calculated, i.e., .   "
},
{
  "id": "ex-error-bound-sin-range",
  "level": "2",
  "url": "subsection-3.html#ex-error-bound-sin-range",
  "type": "Example",
  "number": "2.3.9",
  "title": "Given a desired error bound, find values of <span class=\"process-math\">\\(x\\)<\/span> for which the approximation is guaranteed to be valid.",
  "body": " Given a desired error bound, find values of for which the approximation is guaranteed to be valid   Assume that we use the Taylor polynomial of degree 3 at to approximate . For approximately what values of can you replace by such a Taylor polynomial with an error of magnitude no greater than ?    The Taylor polynomial of degree 3 at for is given by:   Since , the error term is given by:   Again the value of is unknown, so we follow : since , we have for every , so we may take and obtain:   We want to find the values of such that:   This gives us:   Taking the fifth root, we get:   Therefore, we can safely replace by the Taylor polynomial of degree 3 at with an error of magnitude no greater than for .     "
},
{
  "id": "ex-error-bound-sin-degree",
  "level": "2",
  "url": "subsection-3.html#ex-error-bound-sin-degree",
  "type": "Example",
  "number": "2.3.10",
  "title": "Finding the value of <span class=\"process-math\">\\(n\\)<\/span> such that the error is less than a given tolerance.",
  "body": " Finding the value of such that the error is less than a given tolerance   Find the smallest value of for which the polynomial approximation for is accurate to for values of in the interval .    The Taylor polynomial of degree at for is given by:   The error term is given by:   As in , we bound the unknown derivative rather than locating . Since is either or , up to a sign, we have for every , so works and:   We want to find the smallest value of such that:   Since for , and approximating , we have:   Therefore, we want to find the smallest value of such that:   We can check the values of starting from until we find the smallest value of that satisfies the inequality. After checking, we find that the smallest value of that satisfies the inequality is .    "
},
{
  "id": "section-taylor-7",
  "level": "1",
  "url": "section-taylor-7.html",
  "type": "Subsection",
  "number": "2.3.4",
  "title": "Applications of Taylor Series and Remainder Theorem",
  "body": " Applications of Taylor Series and Remainder Theorem   We begin with two uses of Taylor series that belong to single-variable calculus: computing limits of the indeterminate form , which along the way gives a proof of L'Hôpital's rule, and approximating definite integrals whose integrands have no elementary antiderivative.  The remaining three parts of this subsection are starred. Physicists often use Taylor series to approximate functions in order to simplify calculations. The first example is the kinetic energy of an object in relativistic mechanics. The second example is the approximation of the period of a pendulum. We will discuss the error in using these approximations and when it is valid to use them. Additionally, we will discuss how to use the taylor series to estimate value of in the last example.    Computing Limits and Integrals with Taylor Series  Taylor's formula replaces a function near a point by a polynomial plus a remainder whose size the Remainder Estimation Theorem controls. That is exactly what two problems from single-variable calculus call for: a limit of the indeterminate form , where numerator and denominator both vanish and the question is how fast , and a definite integral whose integrand has no elementary antiderivative.  We will use two Maclaurin series. The series of was found in : The series of is it comes from the geometric series : since , and for , integrating this from to term by term gives .   A limit by Taylor series   Compute     Both the numerator and the denominator tend to , so the limit has the form . L'Hôpital's rule applies, but it would have to be used three times, and the derivatives of get messy quickly. Taylor series give the answer in one line, because they show exactly how fast each side goes to zero.  Subtracting from and from , Both differences vanish like , and that is the information the limit needs. Factor out of each, and cancel it: As every term after the first in each bracket tends to , so   Why may the dots be ignored? This is where the Remainder Theorem enters. Taylor's formula with and gives with , because every derivative of is bounded by ; hence . Likewise with , where is a bound for the fifth derivative of on , so as well. The two brackets above are exactly and .     Proving L'Hôpital's rule with Taylor's formula   Let and have continuous second derivatives on an open interval containing , with and . Use Taylor's formula to prove L'Hôpital's rule:     Apply Taylor's formula with to each function. For every in the interval there are numbers and between and with Since , each right-hand side has the common factor . For we cancel it:   Now let . As in , we do not need to know and : since and are continuous, on a closed interval they are bounded by some constant , and then The numerator therefore tends to and the denominator to . (In particular the denominator, and with it , is nonzero for close to , so the quotient makes sense there.) This proves the first equality in : Finally, and are continuous and , so , which is the second equality.     Why the rule sometimes has to be applied several times  If as well, the quotient is again of the form and L'Hôpital's rule has to be applied again. Taylor's formula explains what is going on. Suppose and have continuous derivatives near , their first derivatives vanish at , and . Then Taylor's formula with gives because each remainder is at most a constant times . The limit is the ratio of the first nonzero Taylor coefficients, which is exactly what applications of L'Hôpital's rule compute. In the first nonzero coefficients were those of : with and we have and , and indeed .    A definite integral with no elementary antiderivative   The function has no elementary antiderivative, so the integral cannot be evaluated with the fundamental theorem of calculus. Use the Taylor polynomial of order of to approximate , bound the error with the Remainder Estimation Theorem, and find a value of that guarantees an error of at most .    By Taylor's formula for at (see ), for some between and . Put with . Then , so and : as in we may take , and   Now integrate from to . The polynomial part is a finite sum, so it can be integrated term by term: where the error satisfies   With , For an error of at most we need . With , falls just short; with , . So has error at most . (The true value is .)     A non-elementary integral computed exactly   In , term-by-term integration produced a series that we could only estimate . Sometimes, however, the series produced by term-by-term integration is one we already recognize, and then the integral can be evaluated exactly , even though the integrand has no elementary antiderivative. Show that     Each power of has to be integrated against on . Use the following fact from Calculus II, proved by integration by parts Let . Then . For , integration by parts with and gives , since as . By induction, . : for every integer ,     The function has no elementary antiderivative, so we replace by its Maclaurin series and integrate term by term.   Step 1: A series for the integrand. Dividing the Maclaurin series of by gives, for all ,    Step 2: Integrate term by term. Multiplying by and integrating each term with , , Integrating an infinite series term by term over the unbounded interval needs a justification, and the Remainder Estimation Theorem supplies one. Let be the partial sum of the series for , a polynomial of degree . For every derivative satisfies . The Taylor polynomial of of degree has no term, so it equals , and the Remainder Estimation Theorem gives . Dividing by , . Multiplying by , integrating, and using with , the integral differs from the partial sum by at most . This bound tends to as , so the partial sums of the Leibniz series converge to the integral. Since they also converge to , the integral equals . A numerical evaluation of the integral gives , which agrees with . The bound also shows why the Leibniz series converges slowly: to guarantee an error below we need roughly terms.  The factorials cancel because .   Step 3: Recognize the series. The Maclaurin series of the arctangent, , at becomes the Leibniz series used in to approximate : Therefore       *Approximating Relativistic Kinetic Energy   Starred section. This one is for the interested reader. It will not be examined.  In relativistic mechanics, the mass of an object moving with velocity is given by: where is the rest mass of the object and is the speed of light. Then the kinetic energy of an object of mass moving with velocity is:   In the case when , we can use the Taylor series to approximate the kinetic energy. In example we will show that the kinetic energy can be approximated by the formula when . See for a comparison of the relativistic kinetic energy and its Newtonian approximation.   Relativistic versus Newtonian kinetic energy. The relativistic energy races toward a wall at the speed of light , while the Newtonian energy follows a gentle parabola; the two are approximately in agreement only when .      Krel(v) = 1\/sqrt(1 - v^2) - 1  Knewt(v) = v^2\/2               c  0    \\text{Relativistic}\\, K    \\text{Newtonian} \\,K     \\text{For}\\, v \\ll c: K_{\\text{rel}} \\approx K_{\\text{new}}                  Newtonian kinetic energy as an approximation to relativistic kinetic energy when   Show that the kinetic energy of an object moving with velocity can be approximated by the formula when .    We can use the Taylor series for at to approximate . Use .    Substituting into , we can rewrite the kinetic energy as follows:   Let . Then we have:   Now we can use the Taylor series for at to approximate . The Taylor series for at is given by:   Subtracting the from , we have:   Substituting , we get:   When , the higher order terms in the series become negligible, and we can approximate the kinetic energy as:      Estimating the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy   Assume that a car a moving with a velocity of ( miles per hour). Use the remainder's theorem to estimate the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy of the car. The speed of light is .    Note that when using the Newtonian kinetic energy formula, we are keeping only the degree- term of , i.e. we are using the Taylor polynomial of degree at to approximate . Therefore, by the error term is given by:   Following , we bound the second derivative on the interval between and instead of trying to find the unknown intermediate point. Since is increasing on that interval, its largest value there is at the right endpoint, so we have:   Since , we have:   Substituting and , we get:   This shows that the error is extremely small, and the Newtonian kinetic energy formula is a very good approximation to the relativistic kinetic energy for a car moving at .      *Small-Angle Approximation for a Pendulum   Starred section. This one is for the interested reader. It will not be examined.  We begin this section by briefly reviewing the forces acting on a simple pendulum and how the small-angle approximation allows us to treat its motion as simple harmonic motion.  The bob moves along the arc, so only the component of gravity tangent to that arc drives the motion. Resolving the weight into a component along the string ( , balanced by the string tension ) and a component tangent to the arc, as shown in , gives the restoring force   The minus sign indicates that the force always points back toward the equilibrium (straight-down) position. This is not Hooke's law: the force is proportional to , not to the displacement itself, so the motion is not exactly simple harmonic. Writing the arc displacement as , we would need to be proportional to that is, to for the motion to be simple harmonic.  The small-angle approximation bridges this gap. From the Taylor series when is small (in radians) the higher-order terms are negligible and . The restoring force then becomes which is Hooke's law with effective spring constant .  This is exactly what fixes the period. Newton's second law turns Hooke's law into the equation of motion Notice that the mass cancels. The equation says that is a function whose second derivative is a negative multiple of itself, and the functions with that property are the sines and cosines: writing , every solution has the form which you can verify by differentiating twice. The number is the angular frequency, and and repeat when increases by . So the motion repeats after a time with , giving   Thus, for small swings the pendulum behaves as a simple harmonic oscillator, with the period , which is independent of both the amplitude and the mass. Taylor's Remainder Theorem (see ) enables us to quantify how small must be for this approximation .   Forces on a simple pendulum. The weight resolves into a component along the string (balanced by the tension ) and a component tangent to the arc, which acts as the restoring force.     theta = radians(33)  fscale = 0.6  ft = 0.62  pivot = (0, 0)  bob = (sin(theta), -cos(theta))  mgEnd = (sin(theta), -cos(theta) - fscale)  ftEnd = (sin(theta) - ft*sin(theta), -cos(theta) + ft*cos(theta))  sinEnd = (sin(theta) - fscale*sin(theta)*cos(theta), -cos(theta) - fscale*sin(theta)*sin(theta))  cosEnd = (sin(theta) + fscale*cos(theta)*sin(theta), -cos(theta) - fscale*cos(theta)*cos(theta))          \\ell  \\theta   \\ell\\sin\\theta  x   \\overrightarrow{\\mathbf{F}}_T   m\\overrightarrow{\\mathbf{g}}   mg\\sin\\theta   mg\\cos\\theta   m                 Forces on a simple pendulum. The weight resolves into a radial component along the string, balanced by the tension , and a tangential component directed toward equilibrium, which acts as the restoring force. For small angles, gives .     Simple Harmonic Motion of a Pendulum as an Approximation   Use the remainder theorem to analyze the claim made in Giancoli's textbook that for small angles, . Specifically, show that the error is less than for angles below .  Here is the exact quote from Giancoli's textbook:    For angles less than , the difference between (in radians) and is less than .       In deriving simple harmonic motion for a pendulum, the restoring force is , which is proportional to rather than to the angular displacement itself. The motion is therefore not exactly simple harmonic. Giancoli resolves this by appealing to the smallness of the angle: for angles below , he states that the difference between (in radians) and is less than  He notes that this can be seen by looking at the series expansion of , which is , carried one term further:   We can turn this observation into a quantitative statement using Taylor's Remainder Theorem. Let , expanded about . Replacing by amounts to using the first-degree Taylor polynomial . Since the coefficient of in the series above is zero, we have , so the error is controlled by the third derivative. By , for some with ,   The point is not known, but as in we do not need it: because , we may take , and the absolute error satisfies and dividing by bounds the relative error:   This confirms Giancoli's claim and even sharpens it. The relative error stays below precisely when , that is, when radians, or about . At Giancoli's stated cutoff of radians, the bound gives i.e. about . So is exactly the round-number boundary of the less than regime, and Taylor's Remainder Theorem locates the true threshold at . This is precisely the range in which the pendulum behaves as a simple harmonic oscillator with the period .   The relative error rises above the threshold at radians (about ), the root of .      g(t) = (t - sin(t))\/sin(t)  tstar = 0.244097      y = 0.01\\ (1\\%)     \\dfrac{|\\theta - \\sin\\theta|}{\\sin\\theta}      \\theta^* \\approx 0.244                A pendulum swinging through decreasing amplitudes while the relative error of the approximation is computed at each angle, followed by the Taylor remainder bound and the graph locating the threshold at .        *Approximating the value of using Taylor series   Starred section. This one is for the interested reader. It will not be examined.  In this subsection, we will discuss how to approximate the value of using Taylor series. We will use the Taylor series for arctan(x) to approximate .   Approximating using the Taylor series for   Use the Taylor series for to approximate the value of . Use Taylor's Remainder Theorem to find an upper bound for the error in this approximation, and show that the error decreases as the order of the Taylor polynomial increases.    The Taylor series for centered at is Since , evaluating the series at gives Therefore, if denotes the Taylor polynomial of order for centered at , we obtain the approximation   To bound the error, we apply : if for all between and , then For , the derivatives satisfy the closed form which can be verified by induction on . As in , the bound is found without locating the intermediate point: since and , it follows that so we may take . With , Taylor's Remainder Theorem gives   Multiplying by , the error in the approximation of satisfies Since as , the error decreases to zero as the order of the Taylor polynomial increases. However, the convergence is very slow. For instance, with we get with guaranteed error at most , and to guarantee an error of at most one needs to take .   The approximation converging to , and the error decreasing below the upper bound from Taylor's Remainder Theorem as increases.        As we saw in the previous example, Taylor series approached very slowly. In the project below, we will see how to use the so-called Euler's formula to approximate much faster. As you may know, there are many other methods to approximate , which we will not cover here.   Computing with Euler's identity   In we approximated by evaluating the Taylor series at , and Taylor's Remainder Theorem gave the error bound , which decreases very slowly. In this guided problem we compute far more efficiently using Euler's identity  which lets us evaluate the Taylor series at the small arguments and , where it converges much faster.    Proving Euler's identity   Let and . Use the addition formula to prove that .    Compute first. Then explain why must lie in the interval , and why this pins down its value.    Since and , Moreover implies , so . The only angle in this interval whose tangent equals is , so . (Without the interval check we could only conclude for some integer .)     The approximation   Let be the Taylor polynomial of order for centered at . Use Euler's identity to explain why Write out this approximation explicitly for .    Multiply by and replace each arctangent by its Taylor polynomial.    By , . Replacing by at and gives the stated approximation. For , , so      Bounding the error with the Remainder Theorem   In we showed that the derivatives of satisfy . Use to show that for  and conclude that     Apply with exactly as in , but keep the factor . Then use the triangle inequality on the two remainders.     with gives Writing by and using the triangle inequality, Unlike the bound at , this bound decays geometrically : each increase of by one cuts it by better than half.     How much better is it?   Evaluate the error bound for and compare it with the bound obtained in for the same order. Then find the smallest for which the bound guarantees an error of at most .    For the second part, the term dominates; try increasing odd values of .    For , roughly a thousand times smaller than the bound at ; the approximation itself is . For an error of at most , testing odd values gives, at , a bound of about , while at  so suffices. By contrast, the bound from would require for the same guarantee.     The video below shows the approximation converging to , and compares its error, together with the Remainder-Theorem bound, against the much slower method at .   The error of Euler's-identity approximation (with its bound ) decreasing geometrically as increases, compared with the series at .        "
},
{
  "id": "ex-taylor-limit-arctan-sin",
  "level": "2",
  "url": "section-taylor-7.html#ex-taylor-limit-arctan-sin",
  "type": "Example",
  "number": "2.3.11",
  "title": "A <span class=\"process-math\">\\(\\frac{0}{0}\\)<\/span> limit by Taylor series.",
  "body": " A limit by Taylor series   Compute     Both the numerator and the denominator tend to , so the limit has the form . L'Hôpital's rule applies, but it would have to be used three times, and the derivatives of get messy quickly. Taylor series give the answer in one line, because they show exactly how fast each side goes to zero.  Subtracting from and from , Both differences vanish like , and that is the information the limit needs. Factor out of each, and cancel it: As every term after the first in each bracket tends to , so   Why may the dots be ignored? This is where the Remainder Theorem enters. Taylor's formula with and gives with , because every derivative of is bounded by ; hence . Likewise with , where is a bound for the fifth derivative of on , so as well. The two brackets above are exactly and .   "
},
{
  "id": "ex-taylor-lhopital",
  "level": "2",
  "url": "section-taylor-7.html#ex-taylor-lhopital",
  "type": "Example",
  "number": "2.3.12",
  "title": "Proving L’Hôpital’s rule with Taylor’s formula.",
  "body": " Proving L'Hôpital's rule with Taylor's formula   Let and have continuous second derivatives on an open interval containing , with and . Use Taylor's formula to prove L'Hôpital's rule:     Apply Taylor's formula with to each function. For every in the interval there are numbers and between and with Since , each right-hand side has the common factor . For we cancel it:   Now let . As in , we do not need to know and : since and are continuous, on a closed interval they are bounded by some constant , and then The numerator therefore tends to and the denominator to . (In particular the denominator, and with it , is nonzero for close to , so the quotient makes sense there.) This proves the first equality in : Finally, and are continuous and , so , which is the second equality.   "
},
{
  "id": "rmk-lhopital-higher-order",
  "level": "2",
  "url": "section-taylor-7.html#rmk-lhopital-higher-order",
  "type": "Remark",
  "number": "2.3.13",
  "title": "Why the rule sometimes has to be applied several times.",
  "body": " Why the rule sometimes has to be applied several times  If as well, the quotient is again of the form and L'Hôpital's rule has to be applied again. Taylor's formula explains what is going on. Suppose and have continuous derivatives near , their first derivatives vanish at , and . Then Taylor's formula with gives because each remainder is at most a constant times . The limit is the ratio of the first nonzero Taylor coefficients, which is exactly what applications of L'Hôpital's rule compute. In the first nonzero coefficients were those of : with and we have and , and indeed .  "
},
{
  "id": "ex-taylor-integral-exp",
  "level": "2",
  "url": "section-taylor-7.html#ex-taylor-integral-exp",
  "type": "Example",
  "number": "2.3.14",
  "title": "A definite integral with no elementary antiderivative.",
  "body": " A definite integral with no elementary antiderivative   The function has no elementary antiderivative, so the integral cannot be evaluated with the fundamental theorem of calculus. Use the Taylor polynomial of order of to approximate , bound the error with the Remainder Estimation Theorem, and find a value of that guarantees an error of at most .    By Taylor's formula for at (see ), for some between and . Put with . Then , so and : as in we may take , and   Now integrate from to . The polynomial part is a finite sum, so it can be integrated term by term: where the error satisfies   With , For an error of at most we need . With , falls just short; with , . So has error at most . (The true value is .)   "
},
{
  "id": "ex-taylor-integral-exp-sin",
  "level": "2",
  "url": "section-taylor-7.html#ex-taylor-integral-exp-sin",
  "type": "Example",
  "number": "2.3.15",
  "title": "A non-elementary integral computed exactly.",
  "body": " A non-elementary integral computed exactly   In , term-by-term integration produced a series that we could only estimate . Sometimes, however, the series produced by term-by-term integration is one we already recognize, and then the integral can be evaluated exactly , even though the integrand has no elementary antiderivative. Show that     Each power of has to be integrated against on . Use the following fact from Calculus II, proved by integration by parts Let . Then . For , integration by parts with and gives , since as . By induction, . : for every integer ,     The function has no elementary antiderivative, so we replace by its Maclaurin series and integrate term by term.   Step 1: A series for the integrand. Dividing the Maclaurin series of by gives, for all ,    Step 2: Integrate term by term. Multiplying by and integrating each term with , , Integrating an infinite series term by term over the unbounded interval needs a justification, and the Remainder Estimation Theorem supplies one. Let be the partial sum of the series for , a polynomial of degree . For every derivative satisfies . The Taylor polynomial of of degree has no term, so it equals , and the Remainder Estimation Theorem gives . Dividing by , . Multiplying by , integrating, and using with , the integral differs from the partial sum by at most . This bound tends to as , so the partial sums of the Leibniz series converge to the integral. Since they also converge to , the integral equals . A numerical evaluation of the integral gives , which agrees with . The bound also shows why the Leibniz series converges slowly: to guarantee an error below we need roughly terms.  The factorials cancel because .   Step 3: Recognize the series. The Maclaurin series of the arctangent, , at becomes the Leibniz series used in to approximate : Therefore    "
},
{
  "id": "fig-ke-cartoon",
  "level": "2",
  "url": "section-taylor-7.html#fig-ke-cartoon",
  "type": "Figure",
  "number": "2.3.16",
  "title": "",
  "body": " Relativistic versus Newtonian kinetic energy. The relativistic energy races toward a wall at the speed of light , while the Newtonian energy follows a gentle parabola; the two are approximately in agreement only when .      Krel(v) = 1\/sqrt(1 - v^2) - 1  Knewt(v) = v^2\/2               c  0    \\text{Relativistic}\\, K    \\text{Newtonian} \\,K     \\text{For}\\, v \\ll c: K_{\\text{rel}} \\approx K_{\\text{new}}               "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-taylor-7.html#example-1",
  "type": "Example",
  "number": "2.3.17",
  "title": "Newtonian kinetic energy as an approximation to relativistic kinetic energy when <span class=\"process-math\">\\(v \\ll c\\)<\/span>.",
  "body": " Newtonian kinetic energy as an approximation to relativistic kinetic energy when   Show that the kinetic energy of an object moving with velocity can be approximated by the formula when .    We can use the Taylor series for at to approximate . Use .    Substituting into , we can rewrite the kinetic energy as follows:   Let . Then we have:   Now we can use the Taylor series for at to approximate . The Taylor series for at is given by:   Subtracting the from , we have:   Substituting , we get:   When , the higher order terms in the series become negligible, and we can approximate the kinetic energy as:    "
},
{
  "id": "ex-error-newtonian-ke",
  "level": "2",
  "url": "section-taylor-7.html#ex-error-newtonian-ke",
  "type": "Example",
  "number": "2.3.18",
  "title": "Estimating the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy.",
  "body": " Estimating the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy   Assume that a car a moving with a velocity of ( miles per hour). Use the remainder's theorem to estimate the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy of the car. The speed of light is .    Note that when using the Newtonian kinetic energy formula, we are keeping only the degree- term of , i.e. we are using the Taylor polynomial of degree at to approximate . Therefore, by the error term is given by:   Following , we bound the second derivative on the interval between and instead of trying to find the unknown intermediate point. Since is increasing on that interval, its largest value there is at the right endpoint, so we have:   Since , we have:   Substituting and , we get:   This shows that the error is extremely small, and the Newtonian kinetic energy formula is a very good approximation to the relativistic kinetic energy for a car moving at .   "
},
{
  "id": "fig-pendulum-forces",
  "level": "2",
  "url": "section-taylor-7.html#fig-pendulum-forces",
  "type": "Figure",
  "number": "2.3.19",
  "title": "",
  "body": " Forces on a simple pendulum. The weight resolves into a component along the string (balanced by the tension ) and a component tangent to the arc, which acts as the restoring force.     theta = radians(33)  fscale = 0.6  ft = 0.62  pivot = (0, 0)  bob = (sin(theta), -cos(theta))  mgEnd = (sin(theta), -cos(theta) - fscale)  ftEnd = (sin(theta) - ft*sin(theta), -cos(theta) + ft*cos(theta))  sinEnd = (sin(theta) - fscale*sin(theta)*cos(theta), -cos(theta) - fscale*sin(theta)*sin(theta))  cosEnd = (sin(theta) + fscale*cos(theta)*sin(theta), -cos(theta) - fscale*cos(theta)*cos(theta))          \\ell  \\theta   \\ell\\sin\\theta  x   \\overrightarrow{\\mathbf{F}}_T   m\\overrightarrow{\\mathbf{g}}   mg\\sin\\theta   mg\\cos\\theta   m               "
},
{
  "id": "fig-pendulum-forces-video",
  "level": "2",
  "url": "section-taylor-7.html#fig-pendulum-forces-video",
  "type": "Figure",
  "number": "2.3.20",
  "title": "",
  "body": " Forces on a simple pendulum. The weight resolves into a radial component along the string, balanced by the tension , and a tangential component directed toward equilibrium, which acts as the restoring force. For small angles, gives .   "
},
{
  "id": "ex-small-angle-pendulum",
  "level": "2",
  "url": "section-taylor-7.html#ex-small-angle-pendulum",
  "type": "Example",
  "number": "2.3.21",
  "title": "Simple Harmonic Motion of a Pendulum as an Approximation.",
  "body": " Simple Harmonic Motion of a Pendulum as an Approximation   Use the remainder theorem to analyze the claim made in Giancoli's textbook that for small angles, . Specifically, show that the error is less than for angles below .  Here is the exact quote from Giancoli's textbook:    For angles less than , the difference between (in radians) and is less than .       In deriving simple harmonic motion for a pendulum, the restoring force is , which is proportional to rather than to the angular displacement itself. The motion is therefore not exactly simple harmonic. Giancoli resolves this by appealing to the smallness of the angle: for angles below , he states that the difference between (in radians) and is less than  He notes that this can be seen by looking at the series expansion of , which is , carried one term further:   We can turn this observation into a quantitative statement using Taylor's Remainder Theorem. Let , expanded about . Replacing by amounts to using the first-degree Taylor polynomial . Since the coefficient of in the series above is zero, we have , so the error is controlled by the third derivative. By , for some with ,   The point is not known, but as in we do not need it: because , we may take , and the absolute error satisfies and dividing by bounds the relative error:   This confirms Giancoli's claim and even sharpens it. The relative error stays below precisely when , that is, when radians, or about . At Giancoli's stated cutoff of radians, the bound gives i.e. about . So is exactly the round-number boundary of the less than regime, and Taylor's Remainder Theorem locates the true threshold at . This is precisely the range in which the pendulum behaves as a simple harmonic oscillator with the period .   The relative error rises above the threshold at radians (about ), the root of .      g(t) = (t - sin(t))\/sin(t)  tstar = 0.244097      y = 0.01\\ (1\\%)     \\dfrac{|\\theta - \\sin\\theta|}{\\sin\\theta}      \\theta^* \\approx 0.244                A pendulum swinging through decreasing amplitudes while the relative error of the approximation is computed at each angle, followed by the Taylor remainder bound and the graph locating the threshold at .     "
},
{
  "id": "ex-approx-pi-arctan",
  "level": "2",
  "url": "section-taylor-7.html#ex-approx-pi-arctan",
  "type": "Example",
  "number": "2.3.24",
  "title": "Approximating <span class=\"process-math\">\\(\\pi\\)<\/span> using the Taylor series for <span class=\"process-math\">\\(\\arctan(x)\\)<\/span>.",
  "body": " Approximating using the Taylor series for   Use the Taylor series for to approximate the value of . Use Taylor's Remainder Theorem to find an upper bound for the error in this approximation, and show that the error decreases as the order of the Taylor polynomial increases.    The Taylor series for centered at is Since , evaluating the series at gives Therefore, if denotes the Taylor polynomial of order for centered at , we obtain the approximation   To bound the error, we apply : if for all between and , then For , the derivatives satisfy the closed form which can be verified by induction on . As in , the bound is found without locating the intermediate point: since and , it follows that so we may take . With , Taylor's Remainder Theorem gives   Multiplying by , the error in the approximation of satisfies Since as , the error decreases to zero as the order of the Taylor polynomial increases. However, the convergence is very slow. For instance, with we get with guaranteed error at most , and to guarantee an error of at most one needs to take .   The approximation converging to , and the error decreasing below the upper bound from Taylor's Remainder Theorem as increases.     "
},
{
  "id": "proj-euler-pi",
  "level": "2",
  "url": "section-taylor-7.html#proj-euler-pi",
  "type": "Project",
  "number": "2.3.4.1",
  "title": "Computing <span class=\"process-math\">\\(\\pi\\)<\/span> with Euler’s identity.",
  "body": " Computing with Euler's identity   In we approximated by evaluating the Taylor series at , and Taylor's Remainder Theorem gave the error bound , which decreases very slowly. In this guided problem we compute far more efficiently using Euler's identity  which lets us evaluate the Taylor series at the small arguments and , where it converges much faster.    Proving Euler's identity   Let and . Use the addition formula to prove that .    Compute first. Then explain why must lie in the interval , and why this pins down its value.    Since and , Moreover implies , so . The only angle in this interval whose tangent equals is , so . (Without the interval check we could only conclude for some integer .)     The approximation   Let be the Taylor polynomial of order for centered at . Use Euler's identity to explain why Write out this approximation explicitly for .    Multiply by and replace each arctangent by its Taylor polynomial.    By , . Replacing by at and gives the stated approximation. For , , so      Bounding the error with the Remainder Theorem   In we showed that the derivatives of satisfy . Use to show that for  and conclude that     Apply with exactly as in , but keep the factor . Then use the triangle inequality on the two remainders.     with gives Writing by and using the triangle inequality, Unlike the bound at , this bound decays geometrically : each increase of by one cuts it by better than half.     How much better is it?   Evaluate the error bound for and compare it with the bound obtained in for the same order. Then find the smallest for which the bound guarantees an error of at most .    For the second part, the term dominates; try increasing odd values of .    For , roughly a thousand times smaller than the bound at ; the approximation itself is . For an error of at most , testing odd values gives, at , a bound of about , while at  so suffices. By contrast, the bound from would require for the same guarantee.     The video below shows the approximation converging to , and compares its error, together with the Remainder-Theorem bound, against the much slower method at .   The error of Euler's-identity approximation (with its bound ) decreasing geometrically as increases, compared with the series at .     "
},
{
  "id": "subsection-5",
  "level": "1",
  "url": "subsection-5.html",
  "type": "Subsection",
  "number": "2.3.5",
  "title": "*Proof of the remainder theorem",
  "body": " *Proof of the remainder theorem   Starred section. This one is for the interested reader. It will not be examined.  In this subsection, we will provide a proof of the remainder theorem.  Let be a function that has continuous derivatives on an open interval containing . We want to show that for each and for each positive integer , there exists a number between and such that where and   To prove this, we will first prove the following lemma:    Let be a function that is -times differentiable. Also, suppose that and , where . Then there exists a number between and such that .     The proof of this lemma is based on the mean value theorem. Since , we can apply the mean value theorem repeatedly to show that there exists a number between and such that . Below we will do so step by step.  First, since , by the mean value theorem, there exists a number between and such that   Second, since , by the mean value theorem, there exists a number between and such that   Then by continuing this process, we can show that there exists a number between and such that   Since , by the mean value theorem, there exists a number between and such that   Therefore, we have shown that there exists a number between and such that .    The error function and its derivatives are zero at the point of expansion  Note that for the error function , we have .   Now, assume that . We can construct the function such that and for . Therefore, by the lemma and considering , there exists a number between and such that . After computing , we have . Since , we have . This completes the proof of the remainder theorem.  "
},
{
  "id": "lemma-1",
  "level": "2",
  "url": "subsection-5.html#lemma-1",
  "type": "Lemma",
  "number": "2.3.27",
  "title": "",
  "body": "  Let be a function that is -times differentiable. Also, suppose that and , where . Then there exists a number between and such that .   "
},
{
  "id": "subsection-5-7",
  "level": "2",
  "url": "subsection-5.html#subsection-5-7",
  "type": "Proof",
  "number": "2.3.5.1",
  "title": "",
  "body": " The proof of this lemma is based on the mean value theorem. Since , we can apply the mean value theorem repeatedly to show that there exists a number between and such that . Below we will do so step by step.  First, since , by the mean value theorem, there exists a number between and such that   Second, since , by the mean value theorem, there exists a number between and such that   Then by continuing this process, we can show that there exists a number between and such that   Since , by the mean value theorem, there exists a number between and such that   Therefore, we have shown that there exists a number between and such that .  "
},
{
  "id": "rmk-zero-error-function",
  "level": "2",
  "url": "subsection-5.html#rmk-zero-error-function",
  "type": "Remark",
  "number": "2.3.28",
  "title": "The error function and its derivatives are zero at the point of expansion.",
  "body": " The error function and its derivatives are zero at the point of expansion  Note that for the error function , we have .  "
},
{
  "id": "sec-3d-coordinate-system",
  "level": "1",
  "url": "sec-3d-coordinate-system.html",
  "type": "Subsection",
  "number": "3.1.1",
  "title": "The Rectangular Coordinate System",
  "body": " The Rectangular Coordinate System  To locate a point in the plane we need two numbers; to locate a point in space we need three. In this section we set up the rectangular coordinate system in space, which is the setting for everything that follows. We then measure distance, describe spheres, and practice translating between an equation and the surface or region it represents.  We will study the Cartesian coordinate system, which is also known as the rectangular coordinate system . We choose a point in space, called the origin , and three mutually perpendicular lines through it, called the coordinate axes and labelled the -, -, and -axis. A point in space is then described by an ordered triple , where , , and are the signed distances from the origin along the three axes, as in .   The point in the rectangular coordinate system. Starting at the origin, we move units along the -axis, then units parallel to the -axis, then units parallel to the -axis.    Three mutually perpendicular axes labelled x, y, and z meet at the origin O. A path drawn in magenta goes from the origin a units along the x axis, then b units parallel to the y axis, then c units straight up parallel to the z axis, ending at the point P with coordinates a, b, c.      The three axes must follow the right-hand rule : if the index finger of the right hand points along the positive -axis and the middle finger points along the positive -axis, then the thumb points along the positive -axis. illustrates this convention; the square corner marks in that figure are a reminder that the three axes are mutually orthogonal, so each pair of axes meets at a right angle. Every coordinate system in this course is arranged this way.  The right-hand rule will return in the section on the cross product, where we use it in a second form to determine the direction of the cross product of two vectors.   The right-hand rule. With the index finger of the right hand along the positive -axis and the middle finger along the positive -axis, the thumb points along the positive -axis. The square corner marks record that the three axes are mutually orthogonal: each pair of axes meets at a right angle, even though the drawing on the page must distort those angles.    A right hand with the index finger extended along the positive x axis, the middle finger bent to point along the positive y axis, and the thumb extended upward along the positive z axis. A small arc marks the angle between the index and middle fingers. Three magenta square corner marks at the origin, one for each pair of axes, indicate that the x, y, and z axes are mutually perpendicular.      As an example, shows the point . Because the first coordinate is negative we move in the direction opposite the positive -axis, and because the third coordinate is negative the point lies below the -plane.   The point . The box drawn with dashed edges shows how the three coordinates locate the point relative to the origin.    The coordinate axes with a rectangular box whose top back corner is at the origin. Edges of length 4 along the negative x direction, 3 along the positive y direction, and 5 straight down locate the point with coordinates negative 4, 3, negative 5 at the far bottom corner of the box.      "
},
{
  "id": "sec-3d-coordinate-system-3",
  "level": "2",
  "url": "sec-3d-coordinate-system.html#sec-3d-coordinate-system-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rectangular coordinate system origin coordinate axes "
},
{
  "id": "fig-3d-point-abc",
  "level": "2",
  "url": "sec-3d-coordinate-system.html#fig-3d-point-abc",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " The point in the rectangular coordinate system. Starting at the origin, we move units along the -axis, then units parallel to the -axis, then units parallel to the -axis.    Three mutually perpendicular axes labelled x, y, and z meet at the origin O. A path drawn in magenta goes from the origin a units along the x axis, then b units parallel to the y axis, then c units straight up parallel to the z axis, ending at the point P with coordinates a, b, c.     "
},
{
  "id": "sec-3d-coordinate-system-5",
  "level": "2",
  "url": "sec-3d-coordinate-system.html#sec-3d-coordinate-system-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right-hand rule "
},
{
  "id": "fig-3d-right-hand",
  "level": "2",
  "url": "sec-3d-coordinate-system.html#fig-3d-right-hand",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": " The right-hand rule. With the index finger of the right hand along the positive -axis and the middle finger along the positive -axis, the thumb points along the positive -axis. The square corner marks record that the three axes are mutually orthogonal: each pair of axes meets at a right angle, even though the drawing on the page must distort those angles.    A right hand with the index finger extended along the positive x axis, the middle finger bent to point along the positive y axis, and the thumb extended upward along the positive z axis. A small arc marks the angle between the index and middle fingers. Three magenta square corner marks at the origin, one for each pair of axes, indicate that the x, y, and z axes are mutually perpendicular.     "
},
{
  "id": "fig-3d-point-example",
  "level": "2",
  "url": "sec-3d-coordinate-system.html#fig-3d-point-example",
  "type": "Figure",
  "number": "3.1.3",
  "title": "",
  "body": " The point . The box drawn with dashed edges shows how the three coordinates locate the point relative to the origin.    The coordinate axes with a rectangular box whose top back corner is at the origin. Edges of length 4 along the negative x direction, 3 along the positive y direction, and 5 straight down locate the point with coordinates negative 4, 3, negative 5 at the far bottom corner of the box.     "
},
{
  "id": "sec-3d-planes-octants",
  "level": "1",
  "url": "sec-3d-planes-octants.html",
  "type": "Subsection",
  "number": "3.1.2",
  "title": "Coordinate Planes and Octants",
  "body": " Coordinate Planes and Octants  The three coordinate axes determine three coordinate planes . The -plane is the plane containing the - and -axes, and it is described by the single equation ; similarly the -plane is and the -plane is . These three planes are shown in .   The three coordinate planes: the -plane , the -plane , and the -plane . They divide space into eight octants.    Three shaded rectangles meeting at the origin at right angles represent the three coordinate planes. The horizontal one is the x y plane where z equals zero, and the two vertical ones are the x z plane where y equals zero and the y z plane where x equals zero.      In the plane the two axes create four quadrants; in space the three coordinate planes create eight octants . The first octant is the one in which , , and are all positive.  More generally, equations such as , , and represent planes parallel to the -, -, and -planes respectively. Each of these equations places one restriction on a point of space and leaves the other two coordinates free, so each describes a plane. Consequently a point can be thought of as the intersection of three such planes: the point of is the intersection of the planes , , and .   A point as the intersection of three planes. The planes , , and meet pairwise in three lines, and all three lines meet in the single point .    Three shaded planes, one for x equals 1, one for y equals 1, and one for z equals 1, intersect one another at right angles. Each pair of planes meets in a red line: the planes x equals 1 and y equals 1 meet in a vertical line, the planes x equals 1 and z equals 1 meet in a line running in the y direction, and the planes y equals 1 and z equals 1 meet in a line running in the x direction. All three red lines cross at the single common point, marked in green and labelled P with coordinates 1, 1, 1.      "
},
{
  "id": "sec-3d-planes-octants-2",
  "level": "2",
  "url": "sec-3d-planes-octants.html#sec-3d-planes-octants-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate planes "
},
{
  "id": "fig-3d-coordinate-planes",
  "level": "2",
  "url": "sec-3d-planes-octants.html#fig-3d-coordinate-planes",
  "type": "Figure",
  "number": "3.1.4",
  "title": "",
  "body": " The three coordinate planes: the -plane , the -plane , and the -plane . They divide space into eight octants.    Three shaded rectangles meeting at the origin at right angles represent the three coordinate planes. The horizontal one is the x y plane where z equals zero, and the two vertical ones are the x z plane where y equals zero and the y z plane where x equals zero.     "
},
{
  "id": "sec-3d-planes-octants-4",
  "level": "2",
  "url": "sec-3d-planes-octants.html#sec-3d-planes-octants-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "octants first octant "
},
{
  "id": "fig-3d-three-planes",
  "level": "2",
  "url": "sec-3d-planes-octants.html#fig-3d-three-planes",
  "type": "Figure",
  "number": "3.1.5",
  "title": "",
  "body": " A point as the intersection of three planes. The planes , , and meet pairwise in three lines, and all three lines meet in the single point .    Three shaded planes, one for x equals 1, one for y equals 1, and one for z equals 1, intersect one another at right angles. Each pair of planes meets in a red line: the planes x equals 1 and y equals 1 meet in a vertical line, the planes x equals 1 and z equals 1 meet in a line running in the y direction, and the planes y equals 1 and z equals 1 meet in a line running in the x direction. All three red lines cross at the single common point, marked in green and labelled P with coordinates 1, 1, 1.     "
},
{
  "id": "sec-3d-distance",
  "level": "1",
  "url": "sec-3d-distance.html",
  "type": "Subsection",
  "number": "3.1.3",
  "title": "Distance Between Two Points",
  "body": " Distance Between Two Points  The distance between two points and is denoted by and can be computed with the Pythagorean theorem. As shows, the segment is the diagonal of a rectangular box whose edges are parallel to the coordinate axes, and applying the Pythagorean theorem twice gives    The distance between and is the length of the diagonal of a box with edges parallel to the axes. The helper corners are and ; applying the Pythagorean theorem first in the triangle , with its right angle at , and then in the vertical triangle , with its right angle at , gives .    A rectangular box with edges parallel to the coordinate axes. The point P one sits at the near lower corner and P two at the opposite upper corner, joined by a violet diagonal. Two intermediate corners are marked: A, reached from P one along a blue edge of length the absolute value of x two minus x one, and B, reached from A along an orange edge of length the absolute value of y two minus y one. A green vertical edge of length the absolute value of z two minus z one rises from B to P two. A red segment joins P one to B across the base, and small squares mark the right angles at A and at B.      The video in builds this box one edge at a time and applies the Pythagorean theorem twice, in the same two steps and with the same colors as . Step 1 works in the base, where the right angle at gives ; step 2 goes up the vertical edge, where the right angle at gives . Substituting the first equation into the second gives .   Deriving the distance formula in space by applying the Pythagorean theorem twice: first in the base triangle , then in the vertical triangle .    "
},
{
  "id": "fig-3d-distance",
  "level": "2",
  "url": "sec-3d-distance.html#fig-3d-distance",
  "type": "Figure",
  "number": "3.1.6",
  "title": "",
  "body": " The distance between and is the length of the diagonal of a box with edges parallel to the axes. The helper corners are and ; applying the Pythagorean theorem first in the triangle , with its right angle at , and then in the vertical triangle , with its right angle at , gives .    A rectangular box with edges parallel to the coordinate axes. The point P one sits at the near lower corner and P two at the opposite upper corner, joined by a violet diagonal. Two intermediate corners are marked: A, reached from P one along a blue edge of length the absolute value of x two minus x one, and B, reached from A along an orange edge of length the absolute value of y two minus y one. A green vertical edge of length the absolute value of z two minus z one rises from B to P two. A red segment joins P one to B across the base, and small squares mark the right angles at A and at B.     "
},
{
  "id": "fig-video-distance-formula",
  "level": "2",
  "url": "sec-3d-distance.html#fig-video-distance-formula",
  "type": "Figure",
  "number": "3.1.7",
  "title": "",
  "body": " Deriving the distance formula in space by applying the Pythagorean theorem twice: first in the base triangle , then in the vertical triangle .   "
},
{
  "id": "sec-3d-spheres",
  "level": "1",
  "url": "sec-3d-spheres.html",
  "type": "Subsection",
  "number": "3.1.4",
  "title": "Spheres",
  "body": " Spheres  A sphere of radius is the set of all points whose distance from a fixed center equals . Writing that condition with the distance formula and squaring both sides gives the equation of the sphere,    A sphere of radius centered at : the set of all points at distance from the center.    A shaded sphere with its center marked and a segment of length a drawn from the center to a point P on the surface, illustrating that every point of the sphere is the same distance a from the center.       Recognizing a Sphere by Completing the Square   Describe the geometric surface represented by the following equation.     We begin by completing the squares in and in : Comparing with , this is the equation of a sphere with center and radius .    "
},
{
  "id": "sec-3d-spheres-2",
  "level": "2",
  "url": "sec-3d-spheres.html#sec-3d-spheres-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sphere "
},
{
  "id": "fig-3d-sphere",
  "level": "2",
  "url": "sec-3d-spheres.html#fig-3d-sphere",
  "type": "Figure",
  "number": "3.1.8",
  "title": "",
  "body": " A sphere of radius centered at : the set of all points at distance from the center.    A shaded sphere with its center marked and a segment of length a drawn from the center to a point P on the surface, illustrating that every point of the sphere is the same distance a from the center.     "
},
{
  "id": "example-3d-complete-square",
  "level": "2",
  "url": "sec-3d-spheres.html#example-3d-complete-square",
  "type": "Example",
  "number": "3.1.9",
  "title": "Recognizing a Sphere by Completing the Square.",
  "body": " Recognizing a Sphere by Completing the Square   Describe the geometric surface represented by the following equation.     We begin by completing the squares in and in : Comparing with , this is the equation of a sphere with center and radius .   "
},
{
  "id": "sec-3d-describing-regions",
  "level": "1",
  "url": "sec-3d-describing-regions.html",
  "type": "Subsection",
  "number": "3.1.5",
  "title": "Describing Regions in Space",
  "body": " Describing Regions in Space  A single equation in , , and normally describes a surface, two simultaneous equations describe the curve where two surfaces meet, and inequalities describe solid regions. The next example collects several of these situations.   Describing Equations and Inequalities Geometrically   Describe the geometrical meaning of the following equalities and inequalities.              A. This is the equation of the set of all points whose -coordinate equals , that is . Geometrically it is a plane parallel to the -plane, shown in .   Part A : the plane , parallel to the -plane.    A shaded rectangle parallel to the y z plane, offset from it in the positive x direction, representing the plane x equals 1.       B. This is the intersection of the two planes and , which is a line. The line is parallel to the -axis, since is unrestricted, as shown in .   Part B : the planes and meet in a line parallel to the -axis, highlighted in red.    Two shaded planes, one for x equals 1 and one for y equals 2, crossing each other. Their intersection is a vertical red line parallel to the z axis.       C. By this is a sphere of radius one centered at the origin , shown in .   Part C : the sphere , of radius one centered at the origin.    A shaded sphere of radius one centered at the origin, with a dashed ellipse marking its equator.       D. You can think of as the set of all points whose distance from the origin is at least and at most . Therefore it represents the region trapped between the two spheres centered at the origin with radii and . Then there is the extra constraint , which restricts us to the region below the -plane. The result, shown in , is a half of a thick spherical shell.   Part D : the region between the spheres of radius and , cut by the condition to leave only the half below the -plane.    A hemispherical shell sitting below the x y plane. Its outer surface is the sphere of radius two and its inner surface, visible as a smaller hemisphere hollowed out of it, is the sphere of radius one.       E. In the plane, is a circle. In space the variable is unrestricted, so the equation represents an infinitely long cylinder of radius one whose axis is the -axis, as in .   Part E : the infinite cylinder . The dashed lines indicate that it extends without bound in both directions along the -axis.    A cylinder of radius one centered on the z axis, with dashed lines extending past its top and bottom rims to indicate it continues indefinitely in both directions.       F. This is the intersection of the plane and the cylinder , which is a circle of radius one lying in the plane and centered at .   G. The difference between this part and part E is that , which means the cylinder is cut down to a piece of height two. shows the surfaces of parts F and G together.   Parts F and G . On the left, the finite cylinder with . On the right, the same cylinder extended, cut by the plane ; the solution to part F , the circle where they meet, is highlighted in red.    Two pictures side by side. On the left a short cylinder of radius one standing on the z axis between z equals negative one and z equals one. On the right a taller cylinder crossed by a horizontal plane at height three, meeting it in a circle.        "
},
{
  "id": "example-3d-describe",
  "level": "2",
  "url": "sec-3d-describing-regions.html#example-3d-describe",
  "type": "Example",
  "number": "3.1.10",
  "title": "Describing Equations and Inequalities Geometrically.",
  "body": " Describing Equations and Inequalities Geometrically   Describe the geometrical meaning of the following equalities and inequalities.              A. This is the equation of the set of all points whose -coordinate equals , that is . Geometrically it is a plane parallel to the -plane, shown in .   Part A : the plane , parallel to the -plane.    A shaded rectangle parallel to the y z plane, offset from it in the positive x direction, representing the plane x equals 1.       B. This is the intersection of the two planes and , which is a line. The line is parallel to the -axis, since is unrestricted, as shown in .   Part B : the planes and meet in a line parallel to the -axis, highlighted in red.    Two shaded planes, one for x equals 1 and one for y equals 2, crossing each other. Their intersection is a vertical red line parallel to the z axis.       C. By this is a sphere of radius one centered at the origin , shown in .   Part C : the sphere , of radius one centered at the origin.    A shaded sphere of radius one centered at the origin, with a dashed ellipse marking its equator.       D. You can think of as the set of all points whose distance from the origin is at least and at most . Therefore it represents the region trapped between the two spheres centered at the origin with radii and . Then there is the extra constraint , which restricts us to the region below the -plane. The result, shown in , is a half of a thick spherical shell.   Part D : the region between the spheres of radius and , cut by the condition to leave only the half below the -plane.    A hemispherical shell sitting below the x y plane. Its outer surface is the sphere of radius two and its inner surface, visible as a smaller hemisphere hollowed out of it, is the sphere of radius one.       E. In the plane, is a circle. In space the variable is unrestricted, so the equation represents an infinitely long cylinder of radius one whose axis is the -axis, as in .   Part E : the infinite cylinder . The dashed lines indicate that it extends without bound in both directions along the -axis.    A cylinder of radius one centered on the z axis, with dashed lines extending past its top and bottom rims to indicate it continues indefinitely in both directions.       F. This is the intersection of the plane and the cylinder , which is a circle of radius one lying in the plane and centered at .   G. The difference between this part and part E is that , which means the cylinder is cut down to a piece of height two. shows the surfaces of parts F and G together.   Parts F and G . On the left, the finite cylinder with . On the right, the same cylinder extended, cut by the plane ; the solution to part F , the circle where they meet, is highlighted in red.    Two pictures side by side. On the left a short cylinder of radius one standing on the z axis between z equals negative one and z equals one. On the right a taller cylinder crossed by a horizontal plane at height three, meeting it in a circle.       "
},
{
  "id": "sec-vec-definitions",
  "level": "1",
  "url": "sec-vec-definitions.html",
  "type": "Subsection",
  "number": "3.2.1",
  "title": "Definitions, Terminology, and Notation",
  "body": " Definitions, Terminology, and Notation  Some quantities can be described using real numbers alone, such as time or temperature. To describe other quantities we need a direction as well as a magnitude. Consider the velocity of a car: we need to know both the speed of the car and its direction of motion to specify its velocity completely. For instance, we might say that the car is moving with speed miles per hour in the direction of north. Such quantities are referred to as vector quantities , and they are the subject of this section.  A vector is a directed line segment from an initial point  to a terminal point  , and is denoted by . We denote the length of a vector by . See .   A vector is a directed line segment. It carries two pieces of information: a direction, shown by the arrowhead, and a magnitude, which is its length .          A    B    \\text{initial point}    \\text{terminal point}    \\overrightarrow{AB}               Two vectors are equal if they have the same direction and the same magnitude. Notice that this definition says nothing about where a vector is located: a vector may be moved around the plane freely, and as long as its direction and length are unchanged it is the same vector. The vectors shown in are all equal to each other, .   Four equal vectors. They have different initial points, but the same direction and the same length, so . Only begins at the origin.            A    B    C    D    O    P    E    F                Only one of the vectors in starts from the origin. We say that is in standard position , and we denote it by a bold letter such as , which is also referred to as the standard position vector .  In 2D, if the initial point of a vector is the origin, i.e. , and its final point is , then the component form of the vector is . In 3D, if the initial point of a vector is the origin, i.e. , and its final point is , then the component form of the vector is .  In we have . Also , , and . This means we have    The vector and its standard position vector . The two arrows are equal as vectors; only the second one begins at the origin.    A three dimensional coordinate system. A blue arrow runs from the point P to the point Q. A second arrow of the same length and direction, drawn in magenta, runs from the origin to the point with coordinates v one, v two, v three. Dashed lines drop from the tip of the magenta arrow to show its three components along the axes.      The magnitude of is the same as the distance between the two points and , that is    Length and Standard Position Vector      Compute the length of the vector with the initial point and the final point .    Find the standard position vector corresponding to this vector.        A. By , the length of the vector is    B. By , the standard position vector is As a check, , which agrees with part A , as it must, since and are the same vector.    "
},
{
  "id": "sec-vec-definitions-2",
  "level": "2",
  "url": "sec-vec-definitions.html#sec-vec-definitions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector quantities "
},
{
  "id": "sec-vec-definitions-3",
  "level": "2",
  "url": "sec-vec-definitions.html#sec-vec-definitions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector initial point terminal point "
},
{
  "id": "fig-vec-directed-segment",
  "level": "2",
  "url": "sec-vec-definitions.html#fig-vec-directed-segment",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " A vector is a directed line segment. It carries two pieces of information: a direction, shown by the arrowhead, and a magnitude, which is its length .          A    B    \\text{initial point}    \\text{terminal point}    \\overrightarrow{AB}              "
},
{
  "id": "sec-vec-definitions-5",
  "level": "2",
  "url": "sec-vec-definitions.html#sec-vec-definitions-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equal "
},
{
  "id": "fig-vec-equal",
  "level": "2",
  "url": "sec-vec-definitions.html#fig-vec-equal",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " Four equal vectors. They have different initial points, but the same direction and the same length, so . Only begins at the origin.            A    B    C    D    O    P    E    F               "
},
{
  "id": "sec-vec-definitions-7",
  "level": "2",
  "url": "sec-vec-definitions.html#sec-vec-definitions-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard position standard position vector "
},
{
  "id": "sec-vec-definitions-8",
  "level": "2",
  "url": "sec-vec-definitions.html#sec-vec-definitions-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "component form "
},
{
  "id": "fig-vec-components",
  "level": "2",
  "url": "sec-vec-definitions.html#fig-vec-components",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " The vector and its standard position vector . The two arrows are equal as vectors; only the second one begins at the origin.    A three dimensional coordinate system. A blue arrow runs from the point P to the point Q. A second arrow of the same length and direction, drawn in magenta, runs from the origin to the point with coordinates v one, v two, v three. Dashed lines drop from the tip of the magenta arrow to show its three components along the axes.     "
},
{
  "id": "example-vec-length",
  "level": "2",
  "url": "sec-vec-definitions.html#example-vec-length",
  "type": "Example",
  "number": "3.2.4",
  "title": "Length and Standard Position Vector.",
  "body": " Length and Standard Position Vector      Compute the length of the vector with the initial point and the final point .    Find the standard position vector corresponding to this vector.        A. By , the length of the vector is    B. By , the standard position vector is As a check, , which agrees with part A , as it must, since and are the same vector.   "
},
{
  "id": "sec-vec-algebra",
  "level": "1",
  "url": "sec-vec-algebra.html",
  "type": "Subsection",
  "number": "3.2.2",
  "title": "Vector Algebra Operations",
  "body": " Vector Algebra Operations   Vector Addition   Let and . The sum of and is the vector      Parallelogram law. The parallelogram law tells us how to add two vectors geometrically, and is described in . Placing the tail of at the head of produces the sum as the third side of a triangle; equivalently, drawing both vectors from a common initial point makes the sum the diagonal of the parallelogram they span.   The parallelogram law. On the left, the components add head to tail. On the right, is the diagonal of the parallelogram spanned by and .               x  y   \\mathbf u    \\mathbf v    \\mathbf u+\\mathbf v   u_1  u_2  v_1  v_2   \\langle u_1+v_1,\\; u_2+v_2\\rangle           x  y   \\mathbf u    \\mathbf v    \\mathbf u+\\mathbf v                    Adding Two Vectors   Add the following two vectors geometrically and algebraically.     Algebraically, by we have For the geometrical part we use the parallelogram law, as shown in .   Adding and with the parallelogram law. The diagonal of the parallelogram is .             \\mathbf u=\\langle 1,1\\rangle    \\mathbf v=\\langle -2,1\\rangle    \\mathbf u+\\mathbf v=\\langle -1,2\\rangle                    Scalar Multiplication   Let and let be a scalar. The scalar multiple  is the vector     Note that both definitions can be reduced to the 2D case simply by removing the last components of the vectors.  Let and . Then the length of the vector is , where is the absolute value of and is the length of . It is easy to see why this is the case:   The vector has the same length as ; however, the two vectors point in opposite directions. In general the length of is times the length of , and if the two vectors point in the same direction, whereas if they point in opposite directions. shows several examples.   Scalar multiples of . Multiplying by or stretches the vector without turning it; multiplying by stretches it and reverses its direction.           \\mathbf u    1.5\\,\\mathbf u    2\\,\\mathbf u    -2\\,\\mathbf u                 Vector Subtraction   Subtraction is handled with the same idea: the difference  means so we reverse and then add. Geometrically, is the vector that points from the head of to the head of when both are drawn from a common initial point.     Adding and Subtracting Geometrically   Given the two vectors and , find and geometrically.    For the sum we complete the parallelogram spanned by and . For the difference we use : we first draw and then add it to , which gives . Both constructions are shown in .   The sum is the diagonal of the parallelogram spanned by and . The difference is obtained by adding to ; equivalently, it points from the head of to the head of .                 \\mathbf u    \\mathbf v    -\\mathbf v    \\mathbf u+\\mathbf v    \\mathbf u-\\mathbf v                   The operations satisfy the familiar algebraic rules collected in .   Properties of Vector Operations   Let , , be vectors and , be scalars. Then     "
},
{
  "id": "def-vec-addition",
  "level": "2",
  "url": "sec-vec-algebra.html#def-vec-addition",
  "type": "Definition",
  "number": "3.2.5",
  "title": "Vector Addition.",
  "body": " Vector Addition   Let and . The sum of and is the vector    "
},
{
  "id": "sec-vec-algebra-3",
  "level": "2",
  "url": "sec-vec-algebra.html#sec-vec-algebra-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Parallelogram law. "
},
{
  "id": "fig-vec-parallelogram",
  "level": "2",
  "url": "sec-vec-algebra.html#fig-vec-parallelogram",
  "type": "Figure",
  "number": "3.2.6",
  "title": "",
  "body": " The parallelogram law. On the left, the components add head to tail. On the right, is the diagonal of the parallelogram spanned by and .               x  y   \\mathbf u    \\mathbf v    \\mathbf u+\\mathbf v   u_1  u_2  v_1  v_2   \\langle u_1+v_1,\\; u_2+v_2\\rangle           x  y   \\mathbf u    \\mathbf v    \\mathbf u+\\mathbf v                  "
},
{
  "id": "example-vec-add",
  "level": "2",
  "url": "sec-vec-algebra.html#example-vec-add",
  "type": "Example",
  "number": "3.2.7",
  "title": "Adding Two Vectors.",
  "body": " Adding Two Vectors   Add the following two vectors geometrically and algebraically.     Algebraically, by we have For the geometrical part we use the parallelogram law, as shown in .   Adding and with the parallelogram law. The diagonal of the parallelogram is .             \\mathbf u=\\langle 1,1\\rangle    \\mathbf v=\\langle -2,1\\rangle    \\mathbf u+\\mathbf v=\\langle -1,2\\rangle                  "
},
{
  "id": "def-vec-scalar",
  "level": "2",
  "url": "sec-vec-algebra.html#def-vec-scalar",
  "type": "Definition",
  "number": "3.2.9",
  "title": "Scalar Multiplication.",
  "body": " Scalar Multiplication   Let and let be a scalar. The scalar multiple  is the vector    "
},
{
  "id": "fig-vec-scalar",
  "level": "2",
  "url": "sec-vec-algebra.html#fig-vec-scalar",
  "type": "Figure",
  "number": "3.2.10",
  "title": "",
  "body": " Scalar multiples of . Multiplying by or stretches the vector without turning it; multiplying by stretches it and reverses its direction.           \\mathbf u    1.5\\,\\mathbf u    2\\,\\mathbf u    -2\\,\\mathbf u               "
},
{
  "id": "def-vec-subtraction",
  "level": "2",
  "url": "sec-vec-algebra.html#def-vec-subtraction",
  "type": "Definition",
  "number": "3.2.11",
  "title": "Vector Subtraction.",
  "body": " Vector Subtraction   Subtraction is handled with the same idea: the difference  means so we reverse and then add. Geometrically, is the vector that points from the head of to the head of when both are drawn from a common initial point.   "
},
{
  "id": "example-vec-add-subtract",
  "level": "2",
  "url": "sec-vec-algebra.html#example-vec-add-subtract",
  "type": "Example",
  "number": "3.2.12",
  "title": "Adding and Subtracting Geometrically.",
  "body": " Adding and Subtracting Geometrically   Given the two vectors and , find and geometrically.    For the sum we complete the parallelogram spanned by and . For the difference we use : we first draw and then add it to , which gives . Both constructions are shown in .   The sum is the diagonal of the parallelogram spanned by and . The difference is obtained by adding to ; equivalently, it points from the head of to the head of .                 \\mathbf u    \\mathbf v    -\\mathbf v    \\mathbf u+\\mathbf v    \\mathbf u-\\mathbf v                  "
},
{
  "id": "thm-vec-properties",
  "level": "2",
  "url": "sec-vec-algebra.html#thm-vec-properties",
  "type": "Theorem",
  "number": "3.2.14",
  "title": "Properties of Vector Operations.",
  "body": " Properties of Vector Operations   Let , , be vectors and , be scalars. Then    "
},
{
  "id": "sec-vec-unit",
  "level": "1",
  "url": "sec-vec-unit.html",
  "type": "Subsection",
  "number": "3.2.3",
  "title": "Unit Vectors",
  "body": " Unit Vectors  Vectors of length one are referred to as unit vectors . The standard unit vectors are the ones pointing in the positive direction of , , and , and they are denoted by , , and respectively, as in .   The standard unit vectors , , and , and the decomposition of a vector into components along the axes.    A three dimensional coordinate system showing three short magenta arrows of length one along the positive x, y and z axes, labelled i, j and k. A longer magenta arrow a runs from the origin to the point with coordinates a one, a two, a three, and blue arrows along the axes show its three components a one i, a two j and a three k.      Combining and , any vector can be written as a linear combination of , , and as   To find a unit vector pointing in the same direction as a nonzero vector , we divide by its own length. We write , read a hat , for the resulting unit vector: By this vector has length , as required. From now on a hat always marks a vector of length one, as it does for the standard unit vectors , , and .   Standard Unit Vectors and a Unit Direction   Consider the two vectors and .   Express in terms of the standard unit vectors.    Find the unit vector in the direction of .        A. We have and , and hence, using and ,    B. The length of is , and hence by we find the unit vector by dividing by its length:     "
},
{
  "id": "sec-vec-unit-2",
  "level": "2",
  "url": "sec-vec-unit.html#sec-vec-unit-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit vectors standard unit vectors "
},
{
  "id": "fig-vec-ijk",
  "level": "2",
  "url": "sec-vec-unit.html#fig-vec-ijk",
  "type": "Figure",
  "number": "3.2.15",
  "title": "",
  "body": " The standard unit vectors , , and , and the decomposition of a vector into components along the axes.    A three dimensional coordinate system showing three short magenta arrows of length one along the positive x, y and z axes, labelled i, j and k. A longer magenta arrow a runs from the origin to the point with coordinates a one, a two, a three, and blue arrows along the axes show its three components a one i, a two j and a three k.     "
},
{
  "id": "example-vec-unit",
  "level": "2",
  "url": "sec-vec-unit.html#example-vec-unit",
  "type": "Example",
  "number": "3.2.16",
  "title": "Standard Unit Vectors and a Unit Direction.",
  "body": " Standard Unit Vectors and a Unit Direction   Consider the two vectors and .   Express in terms of the standard unit vectors.    Find the unit vector in the direction of .        A. We have and , and hence, using and ,    B. The length of is , and hence by we find the unit vector by dividing by its length:    "
},
{
  "id": "sec-dot-product",
  "level": "1",
  "url": "sec-dot-product.html",
  "type": "Subsection",
  "number": "3.3.1",
  "title": "The Dot Product and the Angle between Two Vectors",
  "body": " The Dot Product and the Angle between Two Vectors  Consider two vectors and , and let , as shown in . By the law of cosines,    The vectors , , and , together with the angle between and .     u=(1.5,4)  v=(4,1)  w=u-v       \\mathbf u    \\mathbf v    \\mathbf w    \\theta                 Watch the video below for a proof of the law of cosines using vectors.   Proving the law of cosines: drop a perpendicular from the tip of and apply the Pythagorean theorem to the right triangle whose hypotenuse is .     Writing and , note that , and hence   Also, from the law of cosines in we have   From and , it follows that , and therefore the angle between the two vectors and can be evaluated using the following equation.   Angle between Two Vectors   Let and be two nonzero vectors, and let , with , be the angle between them. Then      Dot Product   The term in the numerator of is known as the dot product of the two vectors and , and is denoted .        Computing a dot product   Let and . Compute , and use it to find the angle between and .    Multiply the corresponding components and add:   Since the dot product is positive, the angle between the two vectors is acute. To find it, use :      Orthogonal vectors  If the two vectors and are orthogonal, then , which means . Conversely, if and are two vectors such that , then and are orthogonal.       A right triangle detected with the dot product   Consider the triangle with vertices , , and . Show that this is a right triangle using the dot product and the orthogonality criterion .        The triangle with vertices , , , together with the vectors and meeting at a right angle at .     A=(1,-1)  B=(1,1)  C=(2,0)      \\overrightarrow{CA}    \\overrightarrow{CB}                     The remaining angles of the triangle   For the triangle of (shown again in ), calculate the remaining angles.    For the angle between the sides and , we have      Properties of the Dot Product    If , , and are any vectors and is a scalar, then             Write , , and . Each property follows from together with the corresponding property of real numbers.    Multiplication of real numbers is commutative, so     Since , and the same computation applied to gives .    Adding componentwise and then distributing,     Taking in , and recalling that ,     Every component of is zero, so .       "
},
{
  "id": "fig-law-of-cosines",
  "level": "2",
  "url": "sec-dot-product.html#fig-law-of-cosines",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": " The vectors , , and , together with the angle between and .     u=(1.5,4)  v=(4,1)  w=u-v       \\mathbf u    \\mathbf v    \\mathbf w    \\theta               "
},
{
  "id": "sec-dot-product-4",
  "level": "2",
  "url": "sec-dot-product.html#sec-dot-product-4",
  "type": "Proof",
  "number": "3.3.1.1",
  "title": "",
  "body": " Watch the video below for a proof of the law of cosines using vectors.   Proving the law of cosines: drop a perpendicular from the tip of and apply the Pythagorean theorem to the right triangle whose hypotenuse is .    "
},
{
  "id": "thm-angle-formula",
  "level": "2",
  "url": "sec-dot-product.html#thm-angle-formula",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "Angle between Two Vectors.",
  "body": " Angle between Two Vectors   Let and be two nonzero vectors, and let , with , be the angle between them. Then    "
},
{
  "id": "def-dot-product",
  "level": "2",
  "url": "sec-dot-product.html#def-dot-product",
  "type": "Definition",
  "number": "3.3.4",
  "title": "Dot Product.",
  "body": " Dot Product   The term in the numerator of is known as the dot product of the two vectors and , and is denoted .      "
},
{
  "id": "example-dot-product-compute",
  "level": "2",
  "url": "sec-dot-product.html#example-dot-product-compute",
  "type": "Example",
  "number": "3.3.5",
  "title": "Computing a dot product.",
  "body": " Computing a dot product   Let and . Compute , and use it to find the angle between and .    Multiply the corresponding components and add:   Since the dot product is positive, the angle between the two vectors is acute. To find it, use :    "
},
{
  "id": "remark-orthogonal",
  "level": "2",
  "url": "sec-dot-product.html#remark-orthogonal",
  "type": "Remark",
  "number": "3.3.6",
  "title": "Orthogonal vectors.",
  "body": " Orthogonal vectors  If the two vectors and are orthogonal, then , which means . Conversely, if and are two vectors such that , then and are orthogonal.     "
},
{
  "id": "example-right-triangle",
  "level": "2",
  "url": "sec-dot-product.html#example-right-triangle",
  "type": "Example",
  "number": "3.3.7",
  "title": "A right triangle detected with the dot product.",
  "body": " A right triangle detected with the dot product   Consider the triangle with vertices , , and . Show that this is a right triangle using the dot product and the orthogonality criterion .        The triangle with vertices , , , together with the vectors and meeting at a right angle at .     A=(1,-1)  B=(1,1)  C=(2,0)      \\overrightarrow{CA}    \\overrightarrow{CB}                   "
},
{
  "id": "example-remaining-angles",
  "level": "2",
  "url": "sec-dot-product.html#example-remaining-angles",
  "type": "Example",
  "number": "3.3.9",
  "title": "The remaining angles of the triangle.",
  "body": " The remaining angles of the triangle   For the triangle of (shown again in ), calculate the remaining angles.    For the angle between the sides and , we have    "
},
{
  "id": "fact-properties",
  "level": "2",
  "url": "sec-dot-product.html#fact-properties",
  "type": "Fact",
  "number": "3.3.10",
  "title": "",
  "body": "  If , , and are any vectors and is a scalar, then             Write , , and . Each property follows from together with the corresponding property of real numbers.    Multiplication of real numbers is commutative, so     Since , and the same computation applied to gives .    Adding componentwise and then distributing,     Taking in , and recalling that ,     Every component of is zero, so .     "
},
{
  "id": "sec-projection",
  "level": "1",
  "url": "sec-projection.html",
  "type": "Subsection",
  "number": "3.3.2",
  "title": "Projection of <span class=\"process-math\">\\(\\mathbf u\\)<\/span> in the Direction of <span class=\"process-math\">\\(\\mathbf v\\)<\/span>",
  "body": " Projection of in the Direction of  The dot product measures how much two vectors point in the same direction. This section turns that measurement into a vector: given and , we ask how much of lies along . The answer is the projection of onto , and it lets us split any vector into a part that points along and a part perpendicular to it. That decomposition is what makes the dot product useful in practice—it is how we find the component of a force along a direction of motion, as in , or the component of gravity down a slope.  The projection of in the direction of is denoted , and is shown in .   The projection of in the direction of , together with the perpendicular component .           \\mathbf v    \\mathbf u    \\mathbf u_{\\parallel} = \\text{proj}_{\\mathbf v}\\mathbf u    \\mathbf u_{\\perp} = \\mathbf u - \\mathbf u_{\\parallel}    \\theta                   The length of is , and since its direction is the same as , we have    Projection Formula         Writing as Two Vectors, One Parallel and One Perpendicular to  As can be seen in , is parallel to , and the vector is perpendicular to it. Also, the sum of these two vectors equals . This means we can write as    The projection of onto as a shadow cast by light from above.     Decomposing a vector into parallel and perpendicular parts   Consider the two vectors and . Write as a sum of two vectors, one of which is parallel to and the other perpendicular to it.    Since the projection of in the direction of is parallel to , we have   For the perpendicular component of to , we have   To achieve a visual understanding of this decomposition, watch the video below.   Decomposing into , lying in the -plane along , and , pointing straight up.       Concept Check   Everything in rests on the claim read off from : that is parallel to , and that is perpendicular to . A picture is not a proof. Explain why each half of the claim is true.     For the parallel half, look at the formula for in and say what kind of expression it is. Why does that observation alone settle the question?    For the perpendicular half, compute . Justify each step by naming the property of the dot product from that you used, and then say what the value you obtain tells you about the two vectors.       In (b), write where is a scalar. In that form properties 2 and 3 of apply directly, and property 4 will simplify .    (a) By , so the projection is simply a number times . A scalar multiple of points along when and opposite to when ; either way it is parallel to . Nothing further needs to be checked.  (b) With as above,   The first line distributes the dot product over the difference, which is properties 1 and 3 of ; the second pulls the scalar out, which is property 2; the third replaces by , which is property 4. The last line just substitutes the value of .  So the dot product is zero, and by that is exactly what it means for to be perpendicular to .     "
},
{
  "id": "sec-projection-2",
  "level": "2",
  "url": "sec-projection.html#sec-projection-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "projection "
},
{
  "id": "fig-projection",
  "level": "2",
  "url": "sec-projection.html#fig-projection",
  "type": "Figure",
  "number": "3.3.11",
  "title": "",
  "body": " The projection of in the direction of , together with the perpendicular component .           \\mathbf v    \\mathbf u    \\mathbf u_{\\parallel} = \\text{proj}_{\\mathbf v}\\mathbf u    \\mathbf u_{\\perp} = \\mathbf u - \\mathbf u_{\\parallel}    \\theta                  "
},
{
  "id": "fact-projection-formula",
  "level": "2",
  "url": "sec-projection.html#fact-projection-formula",
  "type": "Fact",
  "number": "3.3.12",
  "title": "Projection Formula.",
  "body": " Projection Formula       "
},
{
  "id": "fig-projection-shadow",
  "level": "2",
  "url": "sec-projection.html#fig-projection-shadow",
  "type": "Figure",
  "number": "3.3.13",
  "title": "",
  "body": " The projection of onto as a shadow cast by light from above.   "
},
{
  "id": "example-decomposition",
  "level": "2",
  "url": "sec-projection.html#example-decomposition",
  "type": "Example",
  "number": "3.3.14",
  "title": "Decomposing a vector into parallel and perpendicular parts.",
  "body": " Decomposing a vector into parallel and perpendicular parts   Consider the two vectors and . Write as a sum of two vectors, one of which is parallel to and the other perpendicular to it.    Since the projection of in the direction of is parallel to , we have   For the perpendicular component of to , we have   To achieve a visual understanding of this decomposition, watch the video below.   Decomposing into , lying in the -plane along , and , pointing straight up.     "
},
{
  "id": "check-projection-decomposition",
  "level": "2",
  "url": "sec-projection.html#check-projection-decomposition",
  "type": "Checkpoint",
  "number": "3.3.16",
  "title": "Concept Check.",
  "body": " Concept Check   Everything in rests on the claim read off from : that is parallel to , and that is perpendicular to . A picture is not a proof. Explain why each half of the claim is true.     For the parallel half, look at the formula for in and say what kind of expression it is. Why does that observation alone settle the question?    For the perpendicular half, compute . Justify each step by naming the property of the dot product from that you used, and then say what the value you obtain tells you about the two vectors.       In (b), write where is a scalar. In that form properties 2 and 3 of apply directly, and property 4 will simplify .    (a) By , so the projection is simply a number times . A scalar multiple of points along when and opposite to when ; either way it is parallel to . Nothing further needs to be checked.  (b) With as above,   The first line distributes the dot product over the difference, which is properties 1 and 3 of ; the second pulls the scalar out, which is property 2; the third replaces by , which is property 4. The last line just substitutes the value of .  So the dot product is zero, and by that is exactly what it means for to be perpendicular to .   "
},
{
  "id": "sec-work",
  "level": "1",
  "url": "sec-work.html",
  "type": "Subsection",
  "number": "3.3.3",
  "title": "Application in Physics: Work",
  "body": " Application in Physics: Work  Consider the scenario in which a constant force causes an object to move from point to point , as shown in . The vector is often denoted and is referred to as the displacement vector . The work done by the force is then   Work    where is the magnitude of the force in the direction of motion, as computed in .     A constant force acting on an object causing a displacement from to .     A force displaces an object from to along the displacement vector . The reference segment shows the magnitude of the force in the direction of motion, .     P=(0,0)  Q=(4,0)  Fv=(2,1.5)  R=(6,0)   P  Q   \\mathbf D    \\mathbf F     \\theta    \\|\\mathbf F\\|\\cos\\theta                    Computing work done by a force   A force is given by the vector and moves a particle from the point to the point . Find the work done.    Consider using , evaluating with the component formula . For more help, watch the video below.   Set up the work computation: build the displacement vector first, then take the dot product. What do you get?      The displacement vector is , so by , evaluated with , the work done is       Suppose a mass of is resting on an inclined plane. Gravity exerts a force equivalent to on the object, where is the gravitational acceleration. Suppose the incline is tilted at a angle. Compute the components of the force that are parallel and perpendicular to the inclined plane.     Decomposing gravity on a incline: the parallel component pulls the mass down the slope, and the perpendicular component presses it into the surface.    First, we determine the total gravitational force vector acting on the mass. Using : Acting entirely in the negative vertical direction, this gives:     Forces acting on a mass on a incline: the weight resolves into a component down the slope and a component into the surface, with .          30^{\\circ}      \\overrightarrow{F}   \\overrightarrow{F}_{\\parallel}   \\overrightarrow{F}_{\\perp}                Next, we define a unit vector pointing down the surface of the inclined plane. Since the plane is tilted at (or radians), a unit vector pointing down the slope is directed at an angle of relative to the horizontal: where .  The component of the force parallel to the incline, , is the projection of onto , given by : Computing the dot product with : Thus, the parallel force vector is:   Since by , the perpendicular force component is found by subtraction:     "
},
{
  "id": "sec-work-2",
  "level": "2",
  "url": "sec-work.html#sec-work-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "displacement vector "
},
{
  "id": "def-work",
  "level": "2",
  "url": "sec-work.html#def-work",
  "type": "Definition",
  "number": "3.3.17",
  "title": "Work.",
  "body": " Work    where is the magnitude of the force in the direction of motion, as computed in .   "
},
{
  "id": "fig-work-force",
  "level": "2",
  "url": "sec-work.html#fig-work-force",
  "type": "Figure",
  "number": "3.3.18",
  "title": "",
  "body": " A constant force acting on an object causing a displacement from to .   "
},
{
  "id": "fig-work",
  "level": "2",
  "url": "sec-work.html#fig-work",
  "type": "Figure",
  "number": "3.3.19",
  "title": "",
  "body": " A force displaces an object from to along the displacement vector . The reference segment shows the magnitude of the force in the direction of motion, .     P=(0,0)  Q=(4,0)  Fv=(2,1.5)  R=(6,0)   P  Q   \\mathbf D    \\mathbf F     \\theta    \\|\\mathbf F\\|\\cos\\theta                  "
},
{
  "id": "example-work",
  "level": "2",
  "url": "sec-work.html#example-work",
  "type": "Example",
  "number": "3.3.20",
  "title": "Computing work done by a force.",
  "body": " Computing work done by a force   A force is given by the vector and moves a particle from the point to the point . Find the work done.    Consider using , evaluating with the component formula . For more help, watch the video below.   Set up the work computation: build the displacement vector first, then take the dot product. What do you get?      The displacement vector is , so by , evaluated with , the work done is    "
},
{
  "id": "ex-inclined-plane",
  "level": "2",
  "url": "sec-work.html#ex-inclined-plane",
  "type": "Example",
  "number": "3.3.22",
  "title": "",
  "body": "  Suppose a mass of is resting on an inclined plane. Gravity exerts a force equivalent to on the object, where is the gravitational acceleration. Suppose the incline is tilted at a angle. Compute the components of the force that are parallel and perpendicular to the inclined plane.     Decomposing gravity on a incline: the parallel component pulls the mass down the slope, and the perpendicular component presses it into the surface.    First, we determine the total gravitational force vector acting on the mass. Using : Acting entirely in the negative vertical direction, this gives:     Forces acting on a mass on a incline: the weight resolves into a component down the slope and a component into the surface, with .          30^{\\circ}      \\overrightarrow{F}   \\overrightarrow{F}_{\\parallel}   \\overrightarrow{F}_{\\perp}                Next, we define a unit vector pointing down the surface of the inclined plane. Since the plane is tilted at (or radians), a unit vector pointing down the slope is directed at an angle of relative to the horizontal: where .  The component of the force parallel to the incline, , is the projection of onto , given by : Computing the dot product with : Thus, the parallel force vector is:   Since by , the perpendicular force component is found by subtraction:    "
},
{
  "id": "sec-data-science",
  "level": "1",
  "url": "sec-data-science.html",
  "type": "Subsection",
  "number": "3.3.4",
  "title": "*Application in Data Science: Measuring Similarity in Tastes",
  "body": " *Application in Data Science: Measuring Similarity in Tastes   Starred section. This one is for the interested reader. It will not be examined.  Every time a streaming service tells you because you watched Sinners … , some piece of software has decided that your taste resembles the taste of other people in its database. Deciding whose taste resembles whose can be framed as a geometry problem, and one tool that can help us decide is the dot product.  The first step is to turn taste into a vector. Fix a list of movies and ask each person to rate every one of them on a scale from to , where means loved it , means I want those two hours back , and means indifference. Reading the ratings off in the same order for everybody turns each person into a vector, and the question do these two people have similar taste? becomes a question about the angle between two vectors, which by is exactly what the dot product measures.   Angular Distance and Cosine Similarity   Let and be two nonzero vectors. Their angular distance is the angle between them, obtained from , The quantity appearing inside is called the cosine similarity of and . The smaller the angular distance, the more similar the two vectors.    Angular distance asks how nearly do these two vectors point the same way? Notice that it is completely blind to the lengths of and : multiplying either vector by a positive number leaves untouched. We will come back to what that means for moviegoers.   Two Movies at a Time  Two movies give vectors in , which we can draw. Take two of the ten films nominated for Best Picture at the 2026 Academy Awards, Sinners and Hamnet , and record each person's rating of Sinners as the first component and of Hamnet as the second. Mehdi, Norm, and Popcorn rate them as follows: Mehdi and Norm both enjoyed the two films; Popcorn sat through both of them and regretted it. shows the three taste vectors.   The taste vectors (Mehdi), (Norm), and (Popcorn). The angle is the angular distance between and .     m=(4,5)  n=(5,3)  d=(-4,-2)        \\theta   🤓  😎  🤪  Mehdi  Norm  Popcorn                 Who should watch a movie together?   Using the taste vectors above, rank the three pairs by angular distance.    The three dot products are and the lengths are , , and . Then, by , Taking of each of these gives the three angular distances.   Angular distance between the three taste vectors.    Pair     Mehdi, Norm  Mehdi, Popcorn  Norm, Popcorn    Mehdi and Norm are the movie buddies. The sign of the dot product already told us most of the story: means an acute angle and broadly shared taste, while means an obtuse angle, and here an angle of nearly — Norm and Popcorn are as close to being opposites as two moviegoers can be.      Angular Distance Ignores Enthusiasm  Suppose Ray, Vera, and Gus rate the same two films as in . Since , the vectors and point in exactly the same direction, so : as far as angular distance is concerned, Ray and Gus have identical taste. Vera sits about away from that shared direction, since    Ray, Vera, and Gus. Ray's vector lies along Gus's vector , so their angular distance is , even though Gus handed out far more generous ratings.     r=(2,2)  v=(5,4)  g=(5,5)       😐  🤩  🥳  Ray  Vera  Gus               This is the scale invariance noted after , seen from the moviegoers' side. Ray is a cautious rater and Gus is an enthusiastic one, but they ranked the two films the same way and in the same proportion, and angular distance sees only that shared direction. If you regard a lukewarm reviewer and a euphoric one who agree about every film as having the same taste, this is exactly the behavior you want.    More Movies, More Dimensions  Nothing above depended on there being exactly two movies. With movies, a person's taste vector is in , the dot product of becomes a sum of products, , and the length of a vector becomes . The angular distance of carries over verbatim:   We can no longer draw the picture, but every formula still applies, and the language of still means something: two taste vectors with are orthogonal, an angular distance of , which here says that knowing one person's ratings tells you nothing about the other's. This is what makes the dot product useful in practice. A streaming service with titles works in , and finding the users nearest to you is still nothing more than the arithmetic in .   All ten nominees   List the ten 2026 Best Picture nominees alphabetically— Bugonia , F1 , Frankenstein , Hamnet , Marty Supreme , One Battle After Another , The Secret Agent , Sentimental Value , Sinners , Train Dreams —and suppose Mehdi, Norm, and Popcorn rate all ten: (The fourth and ninth entries are the Hamnet and Sinners ratings from before.) Which pair has the most similar taste?    The dot products are , , and , and the lengths are , , and . Applying to each pair gives the following.   Angular distance across all ten nominees.    Pair     Mehdi, Norm  Mehdi, Popcorn  Norm, Popcorn    Mehdi and Norm are again the closest pair, though the extra eight films have pulled them apart: their angular distance grew from to once we stopped judging them on Sinners and Hamnet alone. Norm and Popcorn are nearly orthogonal, with an angle of ; their tastes are essentially unrelated rather than opposed, which is precisely the distinction the two-movie picture was too small to make.    Ten components are a lot to handle by hand, and a real recommender system deals with thousands. The cell below carries out the computation of . Press Evaluate to run it, then edit the ratings and run it again to see whose taste your own vector is closest to.    "
},
{
  "id": "def-angular-distance",
  "level": "2",
  "url": "sec-data-science.html#def-angular-distance",
  "type": "Definition",
  "number": "3.3.25",
  "title": "Angular Distance and Cosine Similarity.",
  "body": " Angular Distance and Cosine Similarity   Let and be two nonzero vectors. Their angular distance is the angle between them, obtained from , The quantity appearing inside is called the cosine similarity of and . The smaller the angular distance, the more similar the two vectors.   "
},
{
  "id": "fig-taste-vectors-2d",
  "level": "2",
  "url": "sec-data-science.html#fig-taste-vectors-2d",
  "type": "Figure",
  "number": "3.3.26",
  "title": "",
  "body": " The taste vectors (Mehdi), (Norm), and (Popcorn). The angle is the angular distance between and .     m=(4,5)  n=(5,3)  d=(-4,-2)        \\theta   🤓  😎  🤪  Mehdi  Norm  Popcorn               "
},
{
  "id": "example-taste-2d",
  "level": "2",
  "url": "sec-data-science.html#example-taste-2d",
  "type": "Example",
  "number": "3.3.27",
  "title": "Who should watch a movie together?",
  "body": " Who should watch a movie together?   Using the taste vectors above, rank the three pairs by angular distance.    The three dot products are and the lengths are , , and . Then, by , Taking of each of these gives the three angular distances.   Angular distance between the three taste vectors.    Pair     Mehdi, Norm  Mehdi, Popcorn  Norm, Popcorn    Mehdi and Norm are the movie buddies. The sign of the dot product already told us most of the story: means an acute angle and broadly shared taste, while means an obtuse angle, and here an angle of nearly — Norm and Popcorn are as close to being opposites as two moviegoers can be.   "
},
{
  "id": "fig-taste-disagree",
  "level": "2",
  "url": "sec-data-science.html#fig-taste-disagree",
  "type": "Figure",
  "number": "3.3.29",
  "title": "",
  "body": " Ray, Vera, and Gus. Ray's vector lies along Gus's vector , so their angular distance is , even though Gus handed out far more generous ratings.     r=(2,2)  v=(5,4)  g=(5,5)       😐  🤩  🥳  Ray  Vera  Gus              "
},
{
  "id": "example-taste-10d",
  "level": "2",
  "url": "sec-data-science.html#example-taste-10d",
  "type": "Example",
  "number": "3.3.30",
  "title": "All ten nominees.",
  "body": " All ten nominees   List the ten 2026 Best Picture nominees alphabetically— Bugonia , F1 , Frankenstein , Hamnet , Marty Supreme , One Battle After Another , The Secret Agent , Sentimental Value , Sinners , Train Dreams —and suppose Mehdi, Norm, and Popcorn rate all ten: (The fourth and ninth entries are the Hamnet and Sinners ratings from before.) Which pair has the most similar taste?    The dot products are , , and , and the lengths are , , and . Applying to each pair gives the following.   Angular distance across all ten nominees.    Pair     Mehdi, Norm  Mehdi, Popcorn  Norm, Popcorn    Mehdi and Norm are again the closest pair, though the extra eight films have pulled them apart: their angular distance grew from to once we stopped judging them on Sinners and Hamnet alone. Norm and Popcorn are nearly orthogonal, with an angle of ; their tastes are essentially unrelated rather than opposed, which is precisely the distinction the two-movie picture was too small to make.   "
},
{
  "id": "worksheet-assignment-1",
  "level": "1",
  "url": "worksheet-assignment-1.html",
  "type": "Worksheet",
  "number": "4.1",
  "title": "Assignment 1",
  "body": " Assignment 1   These problems exercise the hyperbolic identities, the derivatives of the hyperbolic functions and the inverse hyperbolic functions. If you would like to review the material first, see .     Show that , for all real numbers .       Compute .       Simplify .       Solve the equation for .       Following the method of , show that the inverse hyperbolic tangent is given by        Use the substitution to calculate and then use to write your answer with a logarithm. Hint:  , and .     "
},
{
  "id": "rw22-1",
  "level": "2",
  "url": "worksheet-assignment-1.html#rw22-1",
  "type": "Worksheet Exercise",
  "number": "4.1.1",
  "title": "",
  "body": "  Show that , for all real numbers .    "
},
{
  "id": "pp-1",
  "level": "2",
  "url": "worksheet-assignment-1.html#pp-1",
  "type": "Worksheet Exercise",
  "number": "4.1.2",
  "title": "",
  "body": "  Compute .    "
},
{
  "id": "pp-2",
  "level": "2",
  "url": "worksheet-assignment-1.html#pp-2",
  "type": "Worksheet Exercise",
  "number": "4.1.3",
  "title": "",
  "body": "  Simplify .    "
},
{
  "id": "ex-hyp-solve-equation",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-solve-equation",
  "type": "Worksheet Exercise",
  "number": "4.1.4",
  "title": "",
  "body": "  Solve the equation for .    "
},
{
  "id": "ex-hyp-arctanh",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-arctanh",
  "type": "Worksheet Exercise",
  "number": "4.1.5",
  "title": "",
  "body": "  Following the method of , show that the inverse hyperbolic tangent is given by     "
},
{
  "id": "ex-hyp-arctanh-integral",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-arctanh-integral",
  "type": "Worksheet Exercise",
  "number": "4.1.6",
  "title": "",
  "body": "  Use the substitution to calculate and then use to write your answer with a logarithm. Hint:  , and .    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
