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
  "body": " The Rectangular Coordinate System  To locate a point in the plane we need two numbers; to locate a point in space we need three. In this section we set up the rectangular coordinate system in space, which is the setting for everything that follows. We then measure distance, describe spheres, and practice translating between an equation and the surface or region it represents.  We will study the Cartesian coordinate system, which is also known as the rectangular coordinate system . We choose a point in space, called the origin , and three mutually perpendicular lines through it, called the coordinate axes and labelled the -, -, and -axis. A point in space is then described by an ordered triple , where , , and are the signed distances from the origin along the three axes, as in .   The point in the rectangular coordinate system. Starting at the origin, we move units along the -axis, then units parallel to the -axis, then units parallel to the -axis.    Three mutually perpendicular axes labelled x, y, and z meet at the origin O. A path drawn in magenta goes from the origin a units along the x axis, then b units parallel to the y axis, then c units straight up parallel to the z axis, ending at the point P with coordinates a, b, c.      The three axes must follow the right-hand rule : if the index finger of the right hand points along the positive -axis and the middle finger points along the positive -axis, then the thumb points along the positive -axis. illustrates this convention; the square corner marks in that figure are a reminder that the three axes are mutually orthogonal, so each pair of axes meets at a right angle. Every coordinate system in this course is arranged this way.  The right-hand rule will return in , where we use it in a second form to determine the direction of the cross product of two vectors.   The right-hand rule. With the index finger of the right hand along the positive -axis and the middle finger along the positive -axis, the thumb points along the positive -axis. The square corner marks record that the three axes are mutually orthogonal: each pair of axes meets at a right angle, even though the drawing on the page must distort those angles.    A right hand with the index finger extended along the positive x axis, the middle finger bent to point along the positive y axis, and the thumb extended upward along the positive z axis. A small arc marks the angle between the index and middle fingers. Three magenta square corner marks at the origin, one for each pair of axes, indicate that the x, y, and z axes are mutually perpendicular.      As an example, shows the point . Because the first coordinate is negative we move in the direction opposite the positive -axis, and because the third coordinate is negative the point lies below the -plane.   The point . The box drawn with dashed edges shows how the three coordinates locate the point relative to the origin.    The coordinate axes with a rectangular box whose top back corner is at the origin. Edges of length 4 along the negative x direction, 3 along the positive y direction, and 5 straight down locate the point with coordinates negative 4, 3, negative 5 at the far bottom corner of the box.      "
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
  "body": " Projection of in the Direction of  The dot product measures how much two vectors point in the same direction. This section turns that measurement into a vector: given and , we ask how much of lies along . The answer is the projection of onto , and it lets us split any vector into a part that points along and a part perpendicular to it. That decomposition is what makes the dot product useful in practice—it is how we find the component of a force along a direction of motion, as in , or the component of gravity down a slope.  The projection of in the direction of is denoted , and is shown in .   The projection of in the direction of , together with the perpendicular component .           \\mathbf v    \\mathbf u    \\mathbf u_{\\parallel} = \\text{proj}_{\\mathbf v}\\mathbf u    \\mathbf u_{\\perp} = \\mathbf u - \\mathbf u_{\\parallel}    \\theta                   The length of is , and since its direction is the same as , we have    Projection Formula         Writing as Two Vectors, One Parallel and One Perpendicular to  As can be seen in , is parallel to , and the vector is perpendicular to it. Also, the sum of these two vectors equals . This means we can write as    The projection of onto as a shadow cast by light from above.     Decomposing a vector into parallel and perpendicular parts   Consider the two vectors and . Write as a sum of two vectors, one of which is parallel to and the other perpendicular to it.    Since the projection of in the direction of is parallel to , we have   For the perpendicular component of to , we have   To achieve a visual understanding of this decomposition, watch the video below.   Decomposing into , lying in the -plane along , and , pointing straight up.       Concept Check   Everything in rests on the claim read off from : that is parallel to , and that is perpendicular to . A picture is not a proof. Explain why each half of the claim is true.     For the parallel half, look at the formula for in and say what kind of expression it is. Why does that observation alone settle the question?    For the perpendicular half, compute . Justify each step by naming the property of the dot product from that you used, and then say what the value you obtain tells you about the two vectors.       In (b), write where is a scalar. In that form properties 2 and 3 of apply directly, and property 4 will simplify .    (a) By , so the projection is simply a number times . A scalar multiple of points along when and opposite to when ; either way it is parallel to . Nothing further needs to be checked.  (b) With as above,   The first line distributes the dot product over the difference, which is properties 1 and 3 of ; the second pulls the scalar out, which is property 2; the third replaces by , which is property 4. The last line just substitutes the value of .  So the dot product is zero, and by that is exactly what it means for to be perpendicular to .      The Big Picture  The map below gathers the ideas of this section so far on one page: the dot product and the angle between two vectors, and the projection of one vector onto another. An arrow between two topics means the second builds on the first, and the gold arrows mark a derivation, where a formula follows from the topic behind it. Every topic on the map is a link to the part of the section where it is covered. For comfortable reading, open the map full size in a new tab .    "
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
  "id": "sec-cross-definition",
  "level": "1",
  "url": "sec-cross-definition.html",
  "type": "Subsection",
  "number": "3.4.1",
  "title": "Definition and Properties of the Cross Product",
  "body": " Definition and Properties of the Cross Product   The Cross Product (First Definition)   Given two vectors and in , the cross product  is the vector defined by where , with , is the angle between and , and is the unit vector orthogonal to both and whose direction is given by the right-hand rule.    The magnitude of is equal to the area of the parallelogram built on the two vectors and , as shown in .   The parallelogram built on the vectors and , with base and height .     u=(2,3)  v=(5,0)         \\mathbf u    \\mathbf v    \\|\\mathbf u\\|\\sin(\\theta)    \\theta                 Area of the Parallelogram        Note that is the length of the cross product . Since can be negative, we need to include its absolute value.  The vector is the unit vector that determines the direction of using the right-hand rule. Note that is orthogonal (perpendicular) to both vectors, as shown in .   The cross product points in the direction of the unit vector , given by the right-hand rule, and is orthogonal to both and ; its length is .     Two equivalent right-hand rules for .    Index–Middle–Thumb method.   Index finger along u, middle finger along v, thumb along u cross v.     Rotating-fingers method.   Fingers curl from u toward v, thumb points along u cross v.       Parallel Vectors   From , it follows that the cross product of two parallel vectors is zero.        Properties of the Cross Product   If , , and are any vectors and , are scalars, then              Although the cross product was defined geometrically above, all five properties are most easily checked using the equivalent component formula established in the next section: if and , then . Write , , and .   (1) Each component of has the form , which is times the corresponding component of . Hence .   (2) The first component of is which is the sum of the first components of and . The same holds for the other two components, so .   (3) By the same computation with the roles of the two factors exchanged, the first component of is , the sum of the first components of and ; likewise for the other two components, so .   (4) The first component of is , the negative of the first component of ; likewise for the other two components, so .   (5) Since , every component of is a difference of products each containing a factor of , so .     Show that .    Using the distributive properties of the cross product from , Since a vector is parallel to itself, and by . Also by , so      Computing a cross product using the first definition   Use to compute    , and also ;    , where and is a vector of length lying in the -plane, making an angle of with measured counterclockwise.        Part 1. The vectors and are unit vectors, so , and they are perpendicular, so and . Both lie in the -plane, so the unit vector orthogonal to both is either or ; curling the fingers of the right hand from toward points the thumb along ( ), so and For the two lengths and the angle are unchanged, but the right-hand rule now runs from toward , which points the thumb along . Hence , in agreement with property 4 of .   Part 2. Here , , and , so the length of the cross product is Both vectors lie in the -plane, and turning from to is counterclockwise, so the right-hand rule again gives and   As a check on the magnitude, says is the area of the parallelogram built on and : its base is and its height is , giving an area of ( ).   The two cross products of , computed from the first definition: the length comes from , the direction from the right-hand rule.    Curling from toward gives ; curling the other way gives .    Two copies of the coordinate axes with the unit square in the xy-plane shaded. In the first, a curved arrow turns from i toward j and the cross product k points up the z-axis. In the second, the arrow turns from j toward i and the cross product minus k points down.     The parallelogram on and has base and height , so .    The vector u of length 4 along the x-axis and the vector v of length 3 at 30 degrees from it in the xy-plane, with the parallelogram they span shaded, its height 1.5 marked by a dashed segment, and the cross product u cross v of length 6 pointing up the z-axis.        "
},
{
  "id": "def-cross-product",
  "level": "2",
  "url": "sec-cross-definition.html#def-cross-product",
  "type": "Definition",
  "number": "3.4.1",
  "title": "The Cross Product (First Definition).",
  "body": " The Cross Product (First Definition)   Given two vectors and in , the cross product  is the vector defined by where , with , is the angle between and , and is the unit vector orthogonal to both and whose direction is given by the right-hand rule.   "
},
{
  "id": "fig-parallelogram-area",
  "level": "2",
  "url": "sec-cross-definition.html#fig-parallelogram-area",
  "type": "Figure",
  "number": "3.4.2",
  "title": "",
  "body": " The parallelogram built on the vectors and , with base and height .     u=(2,3)  v=(5,0)         \\mathbf u    \\mathbf v    \\|\\mathbf u\\|\\sin(\\theta)    \\theta               "
},
{
  "id": "fact-parallelogram-area",
  "level": "2",
  "url": "sec-cross-definition.html#fact-parallelogram-area",
  "type": "Fact",
  "number": "3.4.3",
  "title": "Area of the Parallelogram.",
  "body": " Area of the Parallelogram       "
},
{
  "id": "fig-cross-product-video",
  "level": "2",
  "url": "sec-cross-definition.html#fig-cross-product-video",
  "type": "Figure",
  "number": "3.4.4",
  "title": "",
  "body": " The cross product points in the direction of the unit vector , given by the right-hand rule, and is orthogonal to both and ; its length is .   "
},
{
  "id": "fig-right-hand-rule-illustration",
  "level": "2",
  "url": "sec-cross-definition.html#fig-right-hand-rule-illustration",
  "type": "Figure",
  "number": "3.4.5",
  "title": "",
  "body": " Two equivalent right-hand rules for .    Index–Middle–Thumb method.   Index finger along u, middle finger along v, thumb along u cross v.     Rotating-fingers method.   Fingers curl from u toward v, thumb points along u cross v.     "
},
{
  "id": "fact-parallel-vectors",
  "level": "2",
  "url": "sec-cross-definition.html#fact-parallel-vectors",
  "type": "Fact",
  "number": "3.4.6",
  "title": "Parallel Vectors.",
  "body": " Parallel Vectors   From , it follows that the cross product of two parallel vectors is zero.      "
},
{
  "id": "thm-cross-properties",
  "level": "2",
  "url": "sec-cross-definition.html#thm-cross-properties",
  "type": "Theorem",
  "number": "3.4.7",
  "title": "Properties of the Cross Product.",
  "body": " Properties of the Cross Product   If , , and are any vectors and , are scalars, then            "
},
{
  "id": "sec-cross-definition-12",
  "level": "2",
  "url": "sec-cross-definition.html#sec-cross-definition-12",
  "type": "Proof",
  "number": "3.4.1.1",
  "title": "",
  "body": " Although the cross product was defined geometrically above, all five properties are most easily checked using the equivalent component formula established in the next section: if and , then . Write , , and .   (1) Each component of has the form , which is times the corresponding component of . Hence .   (2) The first component of is which is the sum of the first components of and . The same holds for the other two components, so .   (3) By the same computation with the roles of the two factors exchanged, the first component of is , the sum of the first components of and ; likewise for the other two components, so .   (4) The first component of is , the negative of the first component of ; likewise for the other two components, so .   (5) Since , every component of is a difference of products each containing a factor of , so .  "
},
{
  "id": "exercise-cross-identity",
  "level": "2",
  "url": "sec-cross-definition.html#exercise-cross-identity",
  "type": "Checkpoint",
  "number": "3.4.8",
  "title": "",
  "body": "  Show that .    Using the distributive properties of the cross product from , Since a vector is parallel to itself, and by . Also by , so    "
},
{
  "id": "example-cross-geometric",
  "level": "2",
  "url": "sec-cross-definition.html#example-cross-geometric",
  "type": "Example",
  "number": "3.4.9",
  "title": "Computing a cross product using the first definition.",
  "body": " Computing a cross product using the first definition   Use to compute    , and also ;    , where and is a vector of length lying in the -plane, making an angle of with measured counterclockwise.        Part 1. The vectors and are unit vectors, so , and they are perpendicular, so and . Both lie in the -plane, so the unit vector orthogonal to both is either or ; curling the fingers of the right hand from toward points the thumb along ( ), so and For the two lengths and the angle are unchanged, but the right-hand rule now runs from toward , which points the thumb along . Hence , in agreement with property 4 of .   Part 2. Here , , and , so the length of the cross product is Both vectors lie in the -plane, and turning from to is counterclockwise, so the right-hand rule again gives and   As a check on the magnitude, says is the area of the parallelogram built on and : its base is and its height is , giving an area of ( ).   The two cross products of , computed from the first definition: the length comes from , the direction from the right-hand rule.    Curling from toward gives ; curling the other way gives .    Two copies of the coordinate axes with the unit square in the xy-plane shaded. In the first, a curved arrow turns from i toward j and the cross product k points up the z-axis. In the second, the arrow turns from j toward i and the cross product minus k points down.     The parallelogram on and has base and height , so .    The vector u of length 4 along the x-axis and the vector v of length 3 at 30 degrees from it in the xy-plane, with the parallelogram they span shaded, its height 1.5 marked by a dashed segment, and the cross product u cross v of length 6 pointing up the z-axis.       "
},
{
  "id": "sec-cross-components",
  "level": "1",
  "url": "sec-cross-components.html",
  "type": "Subsection",
  "number": "3.4.2",
  "title": "Second Definition of the Cross Product",
  "body": " Second Definition of the Cross Product  Writing the vectors in components gives another definition for the cross product.   The Cross Product (Second Definition)   If and , then     One way to remember the second definition of the cross product is to write it as a determinant: where    Computing a cross product   Calculate the cross product if and .    By and ,      Computing a vector perpendicular to two other vectors   Consider the points , , and . Find a unit vector which is orthogonal to both and .    We first compute the two vectors:   The cross product is orthogonal to both vectors and :   The unit vector in question is then computed as follows:    The unit vector is orthogonal to both and , and hence to the plane through the points , , and .       Computing the area of a triangle   Find the area of the triangle with the vertices , , and . Note that these are the same points that we had in the previous example.    To find the area of the triangle, we first compute the area of the parallelogram built on and , shown in , and then divide by . By ,    The triangle built on the vectors and is half of the corresponding parallelogram.     b=(4,0)  c=(1.5,3)         \\overrightarrow{AC}    \\overrightarrow{AB}                  The Big Picture  The map below gathers the ideas of this section so far on one page: the two definitions of the cross product and what each one tells us. An arrow between two topics means the second builds on the first, and the gold arrows mark a derivation, where a formula follows from the topic behind it. Every topic on the map is a link to the part of the section where it is covered. For comfortable reading, open the map full size in a new tab .    "
},
{
  "id": "def-cross-components",
  "level": "2",
  "url": "sec-cross-components.html#def-cross-components",
  "type": "Definition",
  "number": "3.4.11",
  "title": "The Cross Product (Second Definition).",
  "body": " The Cross Product (Second Definition)   If and , then    "
},
{
  "id": "example-cross-compute",
  "level": "2",
  "url": "sec-cross-components.html#example-cross-compute",
  "type": "Example",
  "number": "3.4.12",
  "title": "Computing a cross product.",
  "body": " Computing a cross product   Calculate the cross product if and .    By and ,    "
},
{
  "id": "example-perpendicular-vector",
  "level": "2",
  "url": "sec-cross-components.html#example-perpendicular-vector",
  "type": "Example",
  "number": "3.4.13",
  "title": "Computing a vector perpendicular to two other vectors.",
  "body": " Computing a vector perpendicular to two other vectors   Consider the points , , and . Find a unit vector which is orthogonal to both and .    We first compute the two vectors:   The cross product is orthogonal to both vectors and :   The unit vector in question is then computed as follows:    The unit vector is orthogonal to both and , and hence to the plane through the points , , and .     "
},
{
  "id": "example-triangle-area",
  "level": "2",
  "url": "sec-cross-components.html#example-triangle-area",
  "type": "Example",
  "number": "3.4.15",
  "title": "Computing the area of a triangle.",
  "body": " Computing the area of a triangle   Find the area of the triangle with the vertices , , and . Note that these are the same points that we had in the previous example.    To find the area of the triangle, we first compute the area of the parallelogram built on and , shown in , and then divide by . By ,    The triangle built on the vectors and is half of the corresponding parallelogram.     b=(4,0)  c=(1.5,3)         \\overrightarrow{AC}    \\overrightarrow{AB}                "
},
{
  "id": "sec-true-false",
  "level": "1",
  "url": "sec-true-false.html",
  "type": "Subsection",
  "number": "3.4.3",
  "title": "True or False?",
  "body": " True or False?   True or False   Let and be two vectors in . Then, is perpendicular to .    Note that is perpendicular to both and , which gives: and therefore is perpendicular to .     True or False   Let and be two standard unit vectors in . Then, .    Note that:   Now, since and are standard unit vectors, we have , which means:     "
},
{
  "id": "exercise-true-false-1",
  "level": "2",
  "url": "sec-true-false.html#exercise-true-false-1",
  "type": "Checkpoint",
  "number": "3.4.17",
  "title": "True or False.",
  "body": " True or False   Let and be two vectors in . Then, is perpendicular to .    Note that is perpendicular to both and , which gives: and therefore is perpendicular to .   "
},
{
  "id": "exercise-true-false-2",
  "level": "2",
  "url": "sec-true-false.html#exercise-true-false-2",
  "type": "Checkpoint",
  "number": "3.4.18",
  "title": "True or False.",
  "body": " True or False   Let and be two standard unit vectors in . Then, .    Note that:   Now, since and are standard unit vectors, we have , which means:    "
},
{
  "id": "sec-torque",
  "level": "1",
  "url": "sec-torque.html",
  "type": "Subsection",
  "number": "3.4.4",
  "title": "*Application: Torque",
  "body": " *Application: Torque   Starred section. This one is for the interested reader. It will not be examined.  One of the well known physical applications of the cross product is torque , the rotational analog of force. A force makes an object accelerate; a torque makes it rotate . How effective a force is at producing rotation depends not only on its magnitude, but also on where it is applied and in what direction . Think of pushing a door: pushing hard near the hinge barely moves it, while a light push at the doorknob swings it open easily. Pushing at the doorknob but toward the hinge does nothing at all. The cross product captures all three scenarios and more.   Torque   Suppose a force is applied at a point whose position vector relative to the axis of rotation is . The torque produced by is the vector      Interactive view of . The force is applied at the head of , and the torque points along the axis of rotation.    Everything we know about the cross product now translates into physics. By , the magnitude of the torque is where is the angle between and , and the direction of is given by the right-hand rule: points along the axis of rotation, and curling the fingers of the right hand from toward gives the sense of the rotation. Torque has units of meter-newtons ( ) in SI.  The quantity in can be grouped in two useful ways:    The two groupings of . In both pictures the axis of rotation passes through , perpendicular to the page, the force is applied at , and is the angle between and ; the two products are equal because each is .    Force times lever arm: .           \\theta      O  P   \\overrightarrow{r}    \\overrightarrow{F}    r_\\perp    r_\\perp = \\|\\overrightarrow{r}\\|\\sin\\theta    \\|\\overrightarrow{\\tau}\\| = r_\\perp\\|\\overrightarrow{F}\\|                   Distance times perpendicular force: .            \\theta     O  P   \\overrightarrow{r}    \\overrightarrow{F}    F_\\perp    F_\\parallel    F_\\parallel \\text{ produces no rotation}    F_\\perp = \\|\\overrightarrow{F}\\|\\sin\\theta    \\|\\overrightarrow{\\tau}\\| = \\|\\overrightarrow{r}\\|F_\\perp                    The first grouping, shown in , says the torque is the force times the lever arm  , the perpendicular distance from the axis to the line along which the force acts. The second, shown in , says it is the distance times , the component of the force perpendicular to ; the parallel component points straight at the axis and produces no rotation.   Zero Torque   By , if is parallel to then : a force directed straight at (or away from) the axis produces no rotation. This is why you cannot open a door by pushing toward its hinge.     Biceps torque   The biceps muscle exerts a vertical force of N on the lower arm, attached at a point cm from the elbow joint (the axis of rotation). Calculate the torque about the elbow when    the forearm is horizontal, and  the forearm makes a angle below the horizontal.      The biceps exerts a 700 N force on the forearm: (a) forearm horizontal, with the muscle attached 5.0 cm from the elbow axis; (b) forearm at 30° below horizontal, with lever arm .    Side-by-side diagrams of an arm. In (a), the forearm is horizontal and a 700 N biceps force acts 5.0 cm from the elbow axis. In (b), the forearm is angled 30 degrees below horizontal, making a 60 degree angle with the vertical, with lever arm R.       Place the elbow at the origin and let the force act in the plane , with pointing straight up.   Part 1. The forearm is horizontal, so and the angle between and is . Then so . Equivalently, . The torque points in the direction (out of the page), which by the right-hand rule corresponds to a counterclockwise rotation of the forearm about the elbow.   Part 2. Now the forearm points below the horizontal, so while is unchanged. The cross product gives   So , again counterclockwise. To check with : the vector sits at and at , so the angle between them is , and   Note that , so this agrees with the lever-arm point of view: the lever arm has shortened to m. The arm exerts less torque at this angle than when the forearm is horizontal — weight machines at gyms are often designed to account for exactly this variation.    "
},
{
  "id": "sec-torque-3",
  "level": "2",
  "url": "sec-torque.html#sec-torque-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "torque "
},
{
  "id": "def-torque",
  "level": "2",
  "url": "sec-torque.html#def-torque",
  "type": "Definition",
  "number": "3.4.19",
  "title": "Torque.",
  "body": " Torque   Suppose a force is applied at a point whose position vector relative to the axis of rotation is . The torque produced by is the vector    "
},
{
  "id": "fig-int-torque",
  "level": "2",
  "url": "sec-torque.html#fig-int-torque",
  "type": "Figure",
  "number": "3.4.20",
  "title": "",
  "body": " Interactive view of . The force is applied at the head of , and the torque points along the axis of rotation.   "
},
{
  "id": "fig-torque-two-groupings",
  "level": "2",
  "url": "sec-torque.html#fig-torque-two-groupings",
  "type": "Figure",
  "number": "3.4.21",
  "title": "",
  "body": " The two groupings of . In both pictures the axis of rotation passes through , perpendicular to the page, the force is applied at , and is the angle between and ; the two products are equal because each is .    Force times lever arm: .           \\theta      O  P   \\overrightarrow{r}    \\overrightarrow{F}    r_\\perp    r_\\perp = \\|\\overrightarrow{r}\\|\\sin\\theta    \\|\\overrightarrow{\\tau}\\| = r_\\perp\\|\\overrightarrow{F}\\|                   Distance times perpendicular force: .            \\theta     O  P   \\overrightarrow{r}    \\overrightarrow{F}    F_\\perp    F_\\parallel    F_\\parallel \\text{ produces no rotation}    F_\\perp = \\|\\overrightarrow{F}\\|\\sin\\theta    \\|\\overrightarrow{\\tau}\\| = \\|\\overrightarrow{r}\\|F_\\perp                   "
},
{
  "id": "sec-torque-9",
  "level": "2",
  "url": "sec-torque.html#sec-torque-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lever arm "
},
{
  "id": "fact-zero-torque",
  "level": "2",
  "url": "sec-torque.html#fact-zero-torque",
  "type": "Fact",
  "number": "3.4.22",
  "title": "Zero Torque.",
  "body": " Zero Torque   By , if is parallel to then : a force directed straight at (or away from) the axis produces no rotation. This is why you cannot open a door by pushing toward its hinge.   "
},
{
  "id": "example-biceps-torque",
  "level": "2",
  "url": "sec-torque.html#example-biceps-torque",
  "type": "Example",
  "number": "3.4.23",
  "title": "Biceps torque.",
  "body": " Biceps torque   The biceps muscle exerts a vertical force of N on the lower arm, attached at a point cm from the elbow joint (the axis of rotation). Calculate the torque about the elbow when    the forearm is horizontal, and  the forearm makes a angle below the horizontal.      The biceps exerts a 700 N force on the forearm: (a) forearm horizontal, with the muscle attached 5.0 cm from the elbow axis; (b) forearm at 30° below horizontal, with lever arm .    Side-by-side diagrams of an arm. In (a), the forearm is horizontal and a 700 N biceps force acts 5.0 cm from the elbow axis. In (b), the forearm is angled 30 degrees below horizontal, making a 60 degree angle with the vertical, with lever arm R.       Place the elbow at the origin and let the force act in the plane , with pointing straight up.   Part 1. The forearm is horizontal, so and the angle between and is . Then so . Equivalently, . The torque points in the direction (out of the page), which by the right-hand rule corresponds to a counterclockwise rotation of the forearm about the elbow.   Part 2. Now the forearm points below the horizontal, so while is unchanged. The cross product gives   So , again counterclockwise. To check with : the vector sits at and at , so the angle between them is , and   Note that , so this agrees with the lever-arm point of view: the lever arm has shortened to m. The arm exerts less torque at this angle than when the forearm is horizontal — weight machines at gyms are often designed to account for exactly this variation.   "
},
{
  "id": "sec-circular-motion",
  "level": "1",
  "url": "sec-circular-motion.html",
  "type": "Subsection",
  "number": "3.4.5",
  "title": "*Application: Circular Motion: Velocity and Angular Velocity",
  "body": " *Application: Circular Motion: Velocity and Angular Velocity    Starred section. This one is for the interested reader. It will not be examined.  A second physical application of the cross product describes the motion of an object travelling in a circle: a rider on a circular track, a ball whirled on a string, a point on a spinning wheel, or the moon on its (nearly circular) orbit. In each case the object turns about a fixed centre, and the natural way to keep track of where it is at time is not by its coordinates and but by the single angle it has swung through. Our goal is to study how the velocity and the rate of change of that angle are related.  Throughout this section we write unit vectors with hats, so that , and are the usual fixed unit vectors , and along the coordinate axes.    A Frame that Turns with the Particle  Let an object move on a circle of radius centred at the origin of the -plane, and let be the angle its position makes with the positive -axis at time , as in . At the point where the particle sits we attach two unit vectors:    , pointing radially outward, away from the centre, and     , perpendicular to and tangent to the circle, pointing in the direction of increasing .   Reading their components off the figure, The position of the particle is then simply   The pair , is fixed once and for all, while the pair , rides along with the particle and turns as it goes; this is exactly what makes the second pair convenient. Note that together with the moving pair forms a right-handed frame, since    The moving frame at the point : points radially outward and is tangent to the circle. The fixed vectors and are drawn at for comparison; unlike and , they do not turn as the particle moves.    A circle of radius r centred at the origin. A particle sits at a point P on the circle, its position vector making an angle theta of t with the positive x-axis. At P the unit vector r hat points radially outward along the position vector, and the unit vector theta hat is perpendicular to it, tangent to the circle in the counterclockwise direction. The fixed unit vectors i and j are also drawn at P for comparison.              \\theta(t)    P  r   \\hat r(t)    \\hat\\theta(t)   \\hat{\\imath}  \\hat{\\jmath}  +x  +y                  The Velocity in Circular Motion  Because the particle moves, the angle depends on , and so do the two moving unit vectors. Differentiating and with the chain rule gives Each unit vector has constant length, so it can only turn; and turning a unit vector moves its tip perpendicular to itself, which is exactly what and say.  Now differentiate the position . The radius is constant on a circle, so only the unit vector needs differentiating: The velocity has no -component at all: it points purely along , tangent to the circle. Its -component is called the tangential component of the velocity . It is positive when the particle turns counterclockwise and negative when it turns clockwise.   Angular Speed   The angular speed of the particle is the magnitude of the rate of change of its angle, measured in radians per second. By , the speed of the particle and its angular speed are related by     It is worth seeing where comes from geometrically, without any differentiation of unit vectors. In a short time interval the particle moves from to , turning through a small angle , as in . The two position vectors have the same length , so they form an isosceles triangle whose third side is the displacement . Splitting that triangle down the middle gives   For a small angle the power series is dominated by its first term, so and the chord is very nearly the arc it cuts off: . Dividing by and letting , which is again. The direction comes out of the same picture: as the chord lines up with the tangent line to the circle, so is perpendicular to , in agreement with .   The displacement is the chord subtending the angle . For small the chord is nearly the arc, , and its direction approaches that of the tangent line, along which points.    Two position vectors of equal length r are drawn from the centre of a dashed circle, separated by a small angle delta theta. The chord delta r joins the tip of the first to the tip of the second. A dashed tangent line touches the circle at the first point, and the velocity arrow at that point lies along it.            \\Delta\\theta      \\overrightarrow{r}(t)    \\overrightarrow{r}(t+\\Delta t)    \\Delta\\overrightarrow{r}    \\overrightarrow{v}(t)    \\text{tangent line}     \\|\\Delta\\overrightarrow{r}\\| = 2r\\sin\\tfrac{\\Delta\\theta}{2} \\approx r\\,\\Delta\\theta    \\Rightarrow\\;\\; v = \\lim\\limits_{\\Delta t\\to 0}\\dfrac{\\|\\Delta\\overrightarrow{r}\\|}{\\Delta t} = r\\,\\omega                    Angular Velocity as a Vector  So far the rate of turning has been a number, . But a rotation has a direction as well as a rate: the plane of the circle can be tilted any which way, and the particle can go around it either way. Both pieces of information can be carried by a single vector, provided we point it along the axis of rotation rather than along the motion.  We always choose a right-handed coordinate system, with increasing in the counterclockwise direction when viewed from the positive -axis.   Angular Velocity Vector   For an object moving in a circle in the -plane about the origin, the angular velocity vector is directed along the axis of rotation. Its SI units are , and the angular speed of is its magnitude, .    The sign of records which way the object goes around, and the right-hand rule turns that sign into a direction in space: curl the fingers of your right hand in the direction of the motion and your thumb points along . If the particle circulates counterclockwise as seen from above, then and points in the -direction; if it circulates clockwise, then and points in the -direction. The two cases are shown in .   The angular velocity vector points along the axis of rotation, in the direction given by the right-hand rule: up the -axis for counterclockwise motion (left), down it for clockwise motion (right). Note that is not tangent to the orbit — the velocity is.    Two panels showing a particle on a circular orbit in the horizontal plane, drawn in an oblique view with the z-axis vertical. In the left panel the particle circulates counterclockwise as seen from above and the angular velocity vector points up along the positive z-direction. In the right panel the particle circulates clockwise and the angular velocity vector points down along the negative z-direction. In both panels the velocity is tangent to the orbit.     orbA(t) = (2.2*cos(t), 0.75*sin(t))  orbB(t) = (7.4 + 2.2*cos(t), 0.75*sin(t))             \\overrightarrow{\\omega}   +z  O   \\overrightarrow{r}    \\overrightarrow{v}    \\omega_z = \\dfrac{d\\theta}{dt} > 0    \\text{counterclockwise:}\\;\\; \\overrightarrow{\\omega} \\text{ points along } +\\hat{k}             \\overrightarrow{\\omega}   +z  O   \\overrightarrow{r}    \\overrightarrow{v}    \\omega_z = \\dfrac{d\\theta}{dt} < 0    \\text{clockwise:}\\;\\; \\overrightarrow{\\omega} \\text{ points along } -\\hat{k}                      Velocity as a Cross Product  We now have two vectors attached to the motion: the angular velocity , along the axis, and the position , in the plane of the circle. The velocity is perpendicular to both, which is precisely the job of the cross product.   Velocity and Angular Velocity   For an object in circular motion about the origin,     To verify this, first compute using : Therefore, using and , by . See .  The geometry of the cross product delivers all three features of the velocity at once, with no computation:    Magnitude. Since is perpendicular to the plane of the circle, it is perpendicular to , so , recovering .     Direction. The cross product is perpendicular to , so the velocity is tangent to the circle; and it is perpendicular to , so the motion stays in the plane of the orbit.     Sense. The right-hand rule applied to automatically sends the particle counterclockwise when and clockwise when , since reversing reverses the cross product.     There is a bonus. A piece of running along the axis is parallel to and so contributes nothing to the cross product, since . Consequently remains true when is measured from any point on the axis of rotation, not just from the centre of the circle.   The velocity of a particle in circular motion is . Because and are perpendicular, the speed is , and the right-hand rule places tangent to the orbit in the direction of travel.    A circular orbit in the horizontal plane drawn in an oblique view, with the z-axis vertical. The angular velocity vector points straight up along the z-axis from the centre O. The position vector runs from O out to the particle on the orbit, and the velocity vector at the particle is tangent to the orbit, equal to the cross product of the angular velocity with the position vector.     orb(t) = (2.6*cos(t), 0.9*sin(t))            \\overrightarrow{\\omega} = \\dfrac{d\\theta}{dt}\\,\\hat{k}   +z  O   \\overrightarrow{r} = r\\,\\hat r    \\overrightarrow{v} = \\overrightarrow{\\omega}\\times\\overrightarrow{r}    \\overrightarrow{v} = \\overrightarrow{\\omega}\\times\\overrightarrow{r} = \\dfrac{d\\theta}{dt}\\,\\hat{k} \\times r\\,\\hat r = r\\dfrac{d\\theta}{dt}\\,\\hat\\theta     \\|\\overrightarrow{v}\\| = \\omega r \\sin 90^\\circ = \\omega r                   Examples   Angular velocity from an angle function   A particle moves in a circle of radius centred at the origin of the -plane; at it is on the positive -axis. The angle it makes with the positive -axis is , where and are positive constants.    Find the angular velocity vector.  Find the velocity vector, in polar coordinates.  At what time is the angular velocity zero?   In which direction does the angular velocity point for , and for ?       The rate of change of the angle is    Part 1. By ,    Part 2. By , Equivalently, one can obtain this from : , using .   Part 3. The angular velocity vanishes when At that instant the particle is momentarily at rest.   Part 4. For we have , so points in the -direction and the particle travels counterclockwise. For we have , so points in the -direction and the particle has reversed and travels clockwise.     A turntable   A record turntable spins at revolutions per minute, counterclockwise when viewed from above. Take the axis of rotation to be the -axis, with the turntable lying in the -plane, distances in meters.    Find the angular velocity vector .   Find the velocity of the point of the record at , and its speed.        Part 1. One revolution is radians, so the frequency rev\/min rev\/s corresponds to an angular speed The rotation is counterclockwise seen from the -axis, so and (For comparison, the period of one revolution is s.)   Part 2. By , The point in question is on the positive -axis, and its velocity points in the -direction — tangent to its circle and consistent with counterclockwise motion, as it should be. Its speed is , which agrees with : .     A carousel   A carousel turns clockwise when viewed from above, making one complete turn every seconds. Taking the axis of rotation as the -axis, find the angular velocity vector, and the velocity of a horse located at meters.    The angular speed is . The motion is clockwise as seen from above, so and the angular velocity points along : Then The horse is on the positive -axis and moves in the -direction, which is indeed clockwise seen from above. Its speed is .     "
},
{
  "id": "fig-polar-frame",
  "level": "2",
  "url": "sec-circular-motion.html#fig-polar-frame",
  "type": "Figure",
  "number": "3.4.25",
  "title": "",
  "body": " The moving frame at the point : points radially outward and is tangent to the circle. The fixed vectors and are drawn at for comparison; unlike and , they do not turn as the particle moves.    A circle of radius r centred at the origin. A particle sits at a point P on the circle, its position vector making an angle theta of t with the positive x-axis. At P the unit vector r hat points radially outward along the position vector, and the unit vector theta hat is perpendicular to it, tangent to the circle in the counterclockwise direction. The fixed unit vectors i and j are also drawn at P for comparison.              \\theta(t)    P  r   \\hat r(t)    \\hat\\theta(t)   \\hat{\\imath}  \\hat{\\jmath}  +x  +y               "
},
{
  "id": "subsec-circular-velocity-3",
  "level": "2",
  "url": "sec-circular-motion.html#subsec-circular-velocity-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangential component of the velocity "
},
{
  "id": "def-angular-speed",
  "level": "2",
  "url": "sec-circular-motion.html#def-angular-speed",
  "type": "Definition",
  "number": "3.4.26",
  "title": "Angular Speed.",
  "body": " Angular Speed   The angular speed of the particle is the magnitude of the rate of change of its angle, measured in radians per second. By , the speed of the particle and its angular speed are related by    "
},
{
  "id": "fig-circular-chord",
  "level": "2",
  "url": "sec-circular-motion.html#fig-circular-chord",
  "type": "Figure",
  "number": "3.4.27",
  "title": "",
  "body": " The displacement is the chord subtending the angle . For small the chord is nearly the arc, , and its direction approaches that of the tangent line, along which points.    Two position vectors of equal length r are drawn from the centre of a dashed circle, separated by a small angle delta theta. The chord delta r joins the tip of the first to the tip of the second. A dashed tangent line touches the circle at the first point, and the velocity arrow at that point lies along it.            \\Delta\\theta      \\overrightarrow{r}(t)    \\overrightarrow{r}(t+\\Delta t)    \\Delta\\overrightarrow{r}    \\overrightarrow{v}(t)    \\text{tangent line}     \\|\\Delta\\overrightarrow{r}\\| = 2r\\sin\\tfrac{\\Delta\\theta}{2} \\approx r\\,\\Delta\\theta    \\Rightarrow\\;\\; v = \\lim\\limits_{\\Delta t\\to 0}\\dfrac{\\|\\Delta\\overrightarrow{r}\\|}{\\Delta t} = r\\,\\omega                 "
},
{
  "id": "def-angular-velocity",
  "level": "2",
  "url": "sec-circular-motion.html#def-angular-velocity",
  "type": "Definition",
  "number": "3.4.28",
  "title": "Angular Velocity Vector.",
  "body": " Angular Velocity Vector   For an object moving in a circle in the -plane about the origin, the angular velocity vector is directed along the axis of rotation. Its SI units are , and the angular speed of is its magnitude, .   "
},
{
  "id": "fig-angular-velocity-sign",
  "level": "2",
  "url": "sec-circular-motion.html#fig-angular-velocity-sign",
  "type": "Figure",
  "number": "3.4.29",
  "title": "",
  "body": " The angular velocity vector points along the axis of rotation, in the direction given by the right-hand rule: up the -axis for counterclockwise motion (left), down it for clockwise motion (right). Note that is not tangent to the orbit — the velocity is.    Two panels showing a particle on a circular orbit in the horizontal plane, drawn in an oblique view with the z-axis vertical. In the left panel the particle circulates counterclockwise as seen from above and the angular velocity vector points up along the positive z-direction. In the right panel the particle circulates clockwise and the angular velocity vector points down along the negative z-direction. In both panels the velocity is tangent to the orbit.     orbA(t) = (2.2*cos(t), 0.75*sin(t))  orbB(t) = (7.4 + 2.2*cos(t), 0.75*sin(t))             \\overrightarrow{\\omega}   +z  O   \\overrightarrow{r}    \\overrightarrow{v}    \\omega_z = \\dfrac{d\\theta}{dt} > 0    \\text{counterclockwise:}\\;\\; \\overrightarrow{\\omega} \\text{ points along } +\\hat{k}             \\overrightarrow{\\omega}   +z  O   \\overrightarrow{r}    \\overrightarrow{v}    \\omega_z = \\dfrac{d\\theta}{dt} < 0    \\text{clockwise:}\\;\\; \\overrightarrow{\\omega} \\text{ points along } -\\hat{k}                   "
},
{
  "id": "fact-velocity-cross-product",
  "level": "2",
  "url": "sec-circular-motion.html#fact-velocity-cross-product",
  "type": "Fact",
  "number": "3.4.30",
  "title": "Velocity and Angular Velocity.",
  "body": " Velocity and Angular Velocity   For an object in circular motion about the origin,    "
},
{
  "id": "fig-omega-cross-r",
  "level": "2",
  "url": "sec-circular-motion.html#fig-omega-cross-r",
  "type": "Figure",
  "number": "3.4.31",
  "title": "",
  "body": " The velocity of a particle in circular motion is . Because and are perpendicular, the speed is , and the right-hand rule places tangent to the orbit in the direction of travel.    A circular orbit in the horizontal plane drawn in an oblique view, with the z-axis vertical. The angular velocity vector points straight up along the z-axis from the centre O. The position vector runs from O out to the particle on the orbit, and the velocity vector at the particle is tangent to the orbit, equal to the cross product of the angular velocity with the position vector.     orb(t) = (2.6*cos(t), 0.9*sin(t))            \\overrightarrow{\\omega} = \\dfrac{d\\theta}{dt}\\,\\hat{k}   +z  O   \\overrightarrow{r} = r\\,\\hat r    \\overrightarrow{v} = \\overrightarrow{\\omega}\\times\\overrightarrow{r}    \\overrightarrow{v} = \\overrightarrow{\\omega}\\times\\overrightarrow{r} = \\dfrac{d\\theta}{dt}\\,\\hat{k} \\times r\\,\\hat r = r\\dfrac{d\\theta}{dt}\\,\\hat\\theta     \\|\\overrightarrow{v}\\| = \\omega r \\sin 90^\\circ = \\omega r                "
},
{
  "id": "example-angular-velocity",
  "level": "2",
  "url": "sec-circular-motion.html#example-angular-velocity",
  "type": "Example",
  "number": "3.4.32",
  "title": "Angular velocity from an angle function.",
  "body": " Angular velocity from an angle function   A particle moves in a circle of radius centred at the origin of the -plane; at it is on the positive -axis. The angle it makes with the positive -axis is , where and are positive constants.    Find the angular velocity vector.  Find the velocity vector, in polar coordinates.  At what time is the angular velocity zero?   In which direction does the angular velocity point for , and for ?       The rate of change of the angle is    Part 1. By ,    Part 2. By , Equivalently, one can obtain this from : , using .   Part 3. The angular velocity vanishes when At that instant the particle is momentarily at rest.   Part 4. For we have , so points in the -direction and the particle travels counterclockwise. For we have , so points in the -direction and the particle has reversed and travels clockwise.   "
},
{
  "id": "example-turntable",
  "level": "2",
  "url": "sec-circular-motion.html#example-turntable",
  "type": "Example",
  "number": "3.4.33",
  "title": "A turntable.",
  "body": " A turntable   A record turntable spins at revolutions per minute, counterclockwise when viewed from above. Take the axis of rotation to be the -axis, with the turntable lying in the -plane, distances in meters.    Find the angular velocity vector .   Find the velocity of the point of the record at , and its speed.        Part 1. One revolution is radians, so the frequency rev\/min rev\/s corresponds to an angular speed The rotation is counterclockwise seen from the -axis, so and (For comparison, the period of one revolution is s.)   Part 2. By , The point in question is on the positive -axis, and its velocity points in the -direction — tangent to its circle and consistent with counterclockwise motion, as it should be. Its speed is , which agrees with : .   "
},
{
  "id": "exercise-carousel-velocity",
  "level": "2",
  "url": "sec-circular-motion.html#exercise-carousel-velocity",
  "type": "Checkpoint",
  "number": "3.4.34",
  "title": "A carousel.",
  "body": " A carousel   A carousel turns clockwise when viewed from above, making one complete turn every seconds. Taking the axis of rotation as the -axis, find the angular velocity vector, and the velocity of a horse located at meters.    The angular speed is . The motion is clockwise as seen from above, so and the angular velocity points along : Then The horse is on the positive -axis and moves in the -direction, which is indeed clockwise seen from above. Its speed is .   "
},
{
  "id": "sec-parametric-equations",
  "level": "1",
  "url": "sec-parametric-equations.html",
  "type": "Subsection",
  "number": "3.5.1",
  "title": "Parametric Equations",
  "body": " Parametric Equations  Imagine that you would like to describe the motion of an object whose motion is confined to a plane. If you know how its Cartesian coordinates, and , change as time passes, you will be able to draw a curve that represents the trajectory of its motion, as shown in . Mathematically, we will need two equations to demonstrate how the - and -coordinates evolve in time , which are known as the parametric equations .   Parametric Equations   If and are given as functions of a third variable , called a parameter , by then the points trace out a curve in the plane, called a parametric curve . The equations and are the parametric equations of the curve.     A point moves in the plane. As time passes, its coordinates and change, and the point traces out the trajectory of the motion.     The trajectory of a moving point whose coordinates are given by the parametric equations , .     f(t)=(0.62*t*cos(t), 0.62*t*sin(t))        (x,y)=(f(t),\\,g(t))                 As an example, consider and . Let us calculate some of the points .   Points on the curve ,                 Plotting these points and connecting them, we recognize the parabola , traced from left to right as increases from to . See and .   The parametric curve , : the points from the table appear first, and then the moving point traces out the parabola in the direction of increasing .     The curve , is the parabola . The marked points correspond to the integer values from the table, and the arrows show the direction of increasing .     g(t)=(t, t^2)               t=-3    t=3                       As our second example, consider the equation of the circle centered at with unit radius,   Here, we would like to parametrize and in terms of a single parameter , as in , in such a way that by varying the value of we can reconstruct the circle . Remember that , so one way to achieve our goal is to write where . The parametrization is illustrated in and .   Parametrizing the unit circle: as increases from to , the point travels counterclockwise around the circle, passing through the marked points at , , , and .     Parametrizing the unit circle by , , . A generic point of the circle corresponds to the parameter value .     c(t)=(cos(t), sin(t))            t=0    t=\\frac{\\pi}{2}    t=\\pi    t=\\frac{3\\pi}{2}    (x,y)=(\\cos(t_0),\\,\\sin(t_0))    t_0                      Question   Can you think of another way to write a parametric form of the circle ?    "
},
{
  "id": "sec-parametric-equations-2",
  "level": "2",
  "url": "sec-parametric-equations.html#sec-parametric-equations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parametric equations "
},
{
  "id": "def-parametric-equations",
  "level": "2",
  "url": "sec-parametric-equations.html#def-parametric-equations",
  "type": "Definition",
  "number": "3.5.1",
  "title": "Parametric Equations.",
  "body": " Parametric Equations   If and are given as functions of a third variable , called a parameter , by then the points trace out a curve in the plane, called a parametric curve . The equations and are the parametric equations of the curve.   "
},
{
  "id": "fig-parametric-motion-video",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-parametric-motion-video",
  "type": "Figure",
  "number": "3.5.2",
  "title": "",
  "body": " A point moves in the plane. As time passes, its coordinates and change, and the point traces out the trajectory of the motion.   "
},
{
  "id": "fig-parametric-motion",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-parametric-motion",
  "type": "Figure",
  "number": "3.5.3",
  "title": "",
  "body": " The trajectory of a moving point whose coordinates are given by the parametric equations , .     f(t)=(0.62*t*cos(t), 0.62*t*sin(t))        (x,y)=(f(t),\\,g(t))                "
},
{
  "id": "table-parabola-points",
  "level": "2",
  "url": "sec-parametric-equations.html#table-parabola-points",
  "type": "Table",
  "number": "3.5.4",
  "title": "Points on the curve <span class=\"process-math\">\\(x=t\\text{,}\\)<\/span> <span class=\"process-math\">\\(y=t^2\\)<\/span>",
  "body": " Points on the curve ,                "
},
{
  "id": "fig-parabola-param-video",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-parabola-param-video",
  "type": "Figure",
  "number": "3.5.5",
  "title": "",
  "body": " The parametric curve , : the points from the table appear first, and then the moving point traces out the parabola in the direction of increasing .   "
},
{
  "id": "fig-parabola-param",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-parabola-param",
  "type": "Figure",
  "number": "3.5.6",
  "title": "",
  "body": " The curve , is the parabola . The marked points correspond to the integer values from the table, and the arrows show the direction of increasing .     g(t)=(t, t^2)               t=-3    t=3                      "
},
{
  "id": "fig-unit-circle-param-video",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-unit-circle-param-video",
  "type": "Figure",
  "number": "3.5.7",
  "title": "",
  "body": " Parametrizing the unit circle: as increases from to , the point travels counterclockwise around the circle, passing through the marked points at , , , and .   "
},
{
  "id": "fig-unit-circle-param",
  "level": "2",
  "url": "sec-parametric-equations.html#fig-unit-circle-param",
  "type": "Figure",
  "number": "3.5.8",
  "title": "",
  "body": " Parametrizing the unit circle by , , . A generic point of the circle corresponds to the parameter value .     c(t)=(cos(t), sin(t))            t=0    t=\\frac{\\pi}{2}    t=\\pi    t=\\frac{3\\pi}{2}    (x,y)=(\\cos(t_0),\\,\\sin(t_0))    t_0                    "
},
{
  "id": "question-another-parametrization",
  "level": "2",
  "url": "sec-parametric-equations.html#question-another-parametrization",
  "type": "Checkpoint",
  "number": "3.5.9",
  "title": "Question.",
  "body": " Question   Can you think of another way to write a parametric form of the circle ?   "
},
{
  "id": "sec-parametrizing-examples",
  "level": "1",
  "url": "sec-parametrizing-examples.html",
  "type": "Subsection",
  "number": "3.5.2",
  "title": "Some Examples of Parametrizing Curves",
  "body": " Some Examples of Parametrizing Curves   Parametrizing Curves   Find the parametric equations corresponding to the following curves.    The line segment connecting the two points and .  The ellipse .  The circle of radius centered at .       Solution   Part A. The segment lies on the line , so we may take   At we are at the point , and at we arrive at the point . See and .   The line segment from to , traced by , as increases from to .     Part A: the segment , , , which starts at when and ends at when .           t=0    t=1                 Part B. Guided by the unit circle, we take   To verify, note that   See and .   The ellipse , traced counterclockwise by , , with the points at , , , and marked.     Part B: the ellipse , , .     e(t)=(2*cos(t), 3*sin(t))          t=0    t=\\frac{\\pi}{2}    t=\\pi    t=\\frac{3\\pi}{2}                   Part C. The equation of such a circle in Cartesian coordinates is , so we shift the standard parametrization of a circle of radius by units in the -direction:   To verify, note that   See and .   The circle of radius centered at , traced by , .     Part C: the circle , , , of radius centered at .     s(t)=(2*cos(t)+2, 2*sin(t))           (2,0)                    "
},
{
  "id": "ex-parametrizing-curves",
  "level": "2",
  "url": "sec-parametrizing-examples.html#ex-parametrizing-curves",
  "type": "Example",
  "number": "3.5.10",
  "title": "Parametrizing Curves.",
  "body": " Parametrizing Curves   Find the parametric equations corresponding to the following curves.    The line segment connecting the two points and .  The ellipse .  The circle of radius centered at .     "
},
{
  "id": "fig-segment-param-video",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-segment-param-video",
  "type": "Figure",
  "number": "3.5.11",
  "title": "",
  "body": " The line segment from to , traced by , as increases from to .   "
},
{
  "id": "fig-segment-param",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-segment-param",
  "type": "Figure",
  "number": "3.5.12",
  "title": "",
  "body": " Part A: the segment , , , which starts at when and ends at when .           t=0    t=1               "
},
{
  "id": "fig-ellipse-param-video",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-ellipse-param-video",
  "type": "Figure",
  "number": "3.5.13",
  "title": "",
  "body": " The ellipse , traced counterclockwise by , , with the points at , , , and marked.   "
},
{
  "id": "fig-ellipse-param",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-ellipse-param",
  "type": "Figure",
  "number": "3.5.14",
  "title": "",
  "body": " Part B: the ellipse , , .     e(t)=(2*cos(t), 3*sin(t))          t=0    t=\\frac{\\pi}{2}    t=\\pi    t=\\frac{3\\pi}{2}                 "
},
{
  "id": "fig-shifted-circle-param-video",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-shifted-circle-param-video",
  "type": "Figure",
  "number": "3.5.15",
  "title": "",
  "body": " The circle of radius centered at , traced by , .   "
},
{
  "id": "fig-shifted-circle-param",
  "level": "2",
  "url": "sec-parametrizing-examples.html#fig-shifted-circle-param",
  "type": "Figure",
  "number": "3.5.16",
  "title": "",
  "body": " Part C: the circle , , , of radius centered at .     s(t)=(2*cos(t)+2, 2*sin(t))           (2,0)                  "
},
{
  "id": "sec-projectile-motion",
  "level": "1",
  "url": "sec-projectile-motion.html",
  "type": "Subsection",
  "number": "3.5.3",
  "title": "*Projectile Motion",
  "body": " *Projectile Motion   Starred section. This one is for the interested reader. It will not be examined.  A type of parametric equation you may have already seen is the equation of motion for a projectile. Here the parameter is time, and gives the position of the projectile at time .  Recall two basic facts about motion in one dimension from your introductory physics course. For motion along a straight line at constant speed , the position is For motion with uniform acceleration , the position is   Now consider an object moving under the influence of gravity alone, ignoring air resistance. No horizontal force acts on it, so it moves at constant speed in the -direction; in the -direction it moves with constant acceleration , directed downward. Resolving the initial velocity into its horizontal component and vertical component , and applying and , gives the equations of motion for a projectile: where is the initial speed, is the launch angle, and is the acceleration due to gravity. For simplicity, we take the initial position to be the origin .  To find the trajectory of the projectile, we can solve for and substitute into the equation . Solving for in the equation gives   Substituting into the equation gives   As expected, the trajectory equation shows that the trajectory of a projectile is a parabola. Also, note that differentiating the equations of motion gives the velocity of the projectile: the horizontal component stays constant, since nothing accelerates the projectile horizontally, while the vertical component decreases steadily under gravity, so it is positive while the projectile rises, zero at the apex, and negative as it falls. shows these components at five instants along the path.   The velocity of a projectile at five instants along its parabolic path. The horizontal component stays constant while the vertical component changes under the constant downward acceleration ; at the apex the vertical component is zero.     f(x) = 0.14*x*(10 - x)    0      \\overrightarrow{a} = \\overrightarrow{g} = -g\\hat{\\jmath}        \\theta  \\overrightarrow{v}_0  \\overrightarrow{v}_{x0}  \\overrightarrow{v}_{y0}      \\overrightarrow{v}  \\overrightarrow{v}_x  \\overrightarrow{v}_y    \\overrightarrow{v}   \\overrightarrow{v}_y = 0 \\text{ at this point}      \\overrightarrow{v}_x  \\overrightarrow{v}_y  \\overrightarrow{v}      \\overrightarrow{v}_x  \\overrightarrow{v}_y  \\overrightarrow{v}                              animates this motion: the projectile follows the parabolic path while its horizontal velocity stays constant and its vertical velocity is steadily turned around by gravity.   A projectile launched from the origin traces out its parabolic trajectory. The horizontal velocity component is constant, while the vertical component shrinks to zero at the apex and then grows in the downward direction as the projectile falls.     Projectiles on an Inclined Plane   A particle is launched from a point on an inclined plane and travels in the vertical plane that contains the line of greatest slope through . The plane makes an angle with the horizontal, and the particle leaves with initial speed at an elevation to the horizontal. Taking the origin at with horizontal and vertical axes and neglecting air resistance, the trajectory is the projectile parabola Let be the point where the particle meets the plane again, and let be the range measured along the plane , so that . Work through the tasks below to find the range on the plane, the maximum range for a given , and the time of flight, and then to read off the corresponding results when the particle is fired down the plane.   A particle projected up the plane with speed at elevation , striking the incline (angle ) at after travelling a range along the slope.      f(x) = 1.2*x - 0.1*x^2               \\beta  \\theta     O  P  M  v_0  R  R\\sin\\beta  R\\cos\\beta  \\text{inclined plane}                        Since lies on the trajectory, substitute these coordinates into the parabola and cancel a factor of to show that     Putting and into gives Dividing through by (the particle is not at ) yields the stated relation.      Rearrange the relation from the previous task to isolate , and use to obtain the range up the plane      Collect the -term: Solving for ,       Using the identity , rewrite the range as For a fixed launch speed , deduce the elevation that maximizes , and show that the maximum range up the plane is     With , , and held constant, only varies, and it is largest when it equals . Afterwards use .     is greatest when , i.e. when , giving the optimal elevation At this value,       The horizontal distance to the foot of is covered at the constant horizontal speed . Using , show that the time of flight is     From ,       When the particle is projected down the plane, the geometry is the same with replaced by . Write down the range, maximum range, and time of flight down the inclined plane.    Replacing :       The maximum range up the plane occurs when , which rearranges to . The left side is the angle the launch direction makes above the incline , and the right side is the angle it makes below the vertical . Since they are equal, the direction of projection for maximum range up an inclined plane bisects the angle between the upward vertical through and the line of greatest slope.    "
},
{
  "id": "fig-projectile-velocity",
  "level": "2",
  "url": "sec-projectile-motion.html#fig-projectile-velocity",
  "type": "Figure",
  "number": "3.5.17",
  "title": "",
  "body": " The velocity of a projectile at five instants along its parabolic path. The horizontal component stays constant while the vertical component changes under the constant downward acceleration ; at the apex the vertical component is zero.     f(x) = 0.14*x*(10 - x)    0      \\overrightarrow{a} = \\overrightarrow{g} = -g\\hat{\\jmath}        \\theta  \\overrightarrow{v}_0  \\overrightarrow{v}_{x0}  \\overrightarrow{v}_{y0}      \\overrightarrow{v}  \\overrightarrow{v}_x  \\overrightarrow{v}_y    \\overrightarrow{v}   \\overrightarrow{v}_y = 0 \\text{ at this point}      \\overrightarrow{v}_x  \\overrightarrow{v}_y  \\overrightarrow{v}      \\overrightarrow{v}_x  \\overrightarrow{v}_y  \\overrightarrow{v}                            "
},
{
  "id": "fig-projectile-motion-video",
  "level": "2",
  "url": "sec-projectile-motion.html#fig-projectile-motion-video",
  "type": "Figure",
  "number": "3.5.18",
  "title": "",
  "body": " A projectile launched from the origin traces out its parabolic trajectory. The horizontal velocity component is constant, while the vertical component shrinks to zero at the apex and then grows in the downward direction as the projectile falls.   "
},
{
  "id": "activity-projectile-incline",
  "level": "2",
  "url": "sec-projectile-motion.html#activity-projectile-incline",
  "type": "Activity",
  "number": "3.5.3.1",
  "title": "Projectiles on an Inclined Plane.",
  "body": " Projectiles on an Inclined Plane   A particle is launched from a point on an inclined plane and travels in the vertical plane that contains the line of greatest slope through . The plane makes an angle with the horizontal, and the particle leaves with initial speed at an elevation to the horizontal. Taking the origin at with horizontal and vertical axes and neglecting air resistance, the trajectory is the projectile parabola Let be the point where the particle meets the plane again, and let be the range measured along the plane , so that . Work through the tasks below to find the range on the plane, the maximum range for a given , and the time of flight, and then to read off the corresponding results when the particle is fired down the plane.   A particle projected up the plane with speed at elevation , striking the incline (angle ) at after travelling a range along the slope.      f(x) = 1.2*x - 0.1*x^2               \\beta  \\theta     O  P  M  v_0  R  R\\sin\\beta  R\\cos\\beta  \\text{inclined plane}                        Since lies on the trajectory, substitute these coordinates into the parabola and cancel a factor of to show that     Putting and into gives Dividing through by (the particle is not at ) yields the stated relation.      Rearrange the relation from the previous task to isolate , and use to obtain the range up the plane      Collect the -term: Solving for ,       Using the identity , rewrite the range as For a fixed launch speed , deduce the elevation that maximizes , and show that the maximum range up the plane is     With , , and held constant, only varies, and it is largest when it equals . Afterwards use .     is greatest when , i.e. when , giving the optimal elevation At this value,       The horizontal distance to the foot of is covered at the constant horizontal speed . Using , show that the time of flight is     From ,       When the particle is projected down the plane, the geometry is the same with replaced by . Write down the range, maximum range, and time of flight down the inclined plane.    Replacing :       The maximum range up the plane occurs when , which rearranges to . The left side is the angle the launch direction makes above the incline , and the right side is the angle it makes below the vertical . Since they are equal, the direction of projection for maximum range up an inclined plane bisects the angle between the upward vertical through and the line of greatest slope.   "
},
{
  "id": "sec-intersection-collision",
  "level": "1",
  "url": "sec-intersection-collision.html",
  "type": "Subsection",
  "number": "3.5.4",
  "title": "*Intersection Points versus Collision Points",
  "body": " *Intersection Points versus Collision Points   Starred section. This one is for the interested reader. It will not be examined.  A parametrization carries more information than the curve it traces: it also records when the moving point visits each place on the curve. Because of this, there are two different questions we can ask about two parametric curves thought of as the trajectories of two particles.   Intersection Points and Collision Points   A point is an intersection point of the two curves if lies on both curves; that is, if there are parameter values and , not necessarily equal , with   A point is a collision point of the two particles if both particles are at at the same time; that is, if there is a single value of with     An intersection point is a statement about the two paths : they cross, like two roads on a map. A collision point is a statement about the two motions : the cars are at the crossroads at the same instant. Every collision point is automatically an intersection point, but, as the next two examples show, an intersection point need not be a collision point.  In practice this dictates how we set up the equations.   To find intersection points, give the two curves different parameter names, as in , and solve , for the pair . Equivalently, eliminate the parameters and intersect the two Cartesian curves.    To find collision points, use the same parameter in both curves and solve , for .     In the next two examples the two paths are always the same: the parabola and the line . Setting gives , so the paths meet at the two points Only the schedule of the second particle will change.   The paths cross, but the particles never meet   Two particles move in the plane with position vectors Find all intersection points of their paths, and all collision points of the particles.     Paths. Eliminating the parameter, the first particle traces the parabola . For the second, and , so it traces the line . As computed above, the two paths intersect at and .   Collisions. By , a collision requires a single with The first equation forces , but then while . There is no solution, so the particles never collide .  We can see exactly how they miss each other. The first particle is at when , while the second particle arrives there only at . Similarly, the first particle reaches at , long after the second particle passed through it at . Each intersection point is visited twice, but never simultaneously. See and .     The particles and move simultaneously. Their paths cross at and , but the clock shows that the two particles are never at either crossing at the same time.     The parabola and the line intersect at and . At each of these points the two particles arrive at different times, so neither point is a collision point.    The parabola and the line drawn on the same axes, crossing at the points and . Each crossing is labeled with the two different parameter values at which the two particles pass through it.     r1(t) = (t, t^2)  r2(t) = (-t, 2 - t)       C_1    C_2      (-1,1)        (2,4)                     The same paths, a different schedule now they collide   Keep the first particle, but re-schedule the second one: Find the intersection points of the paths and the collision points of the particles.     Paths. For the second particle, and , so it travels along the very same line as before, only faster and in the opposite direction. The paths are therefore unchanged, and they still intersect at and .   Collisions. Now requires a single with The first equation gives , and this value does satisfy the second equation, since . Hence the particles do collide, at   The other intersection point is not a collision point: the first particle passes through at , while the second particle passes through it at . Two intersection points, but only one collision. See and .     With the second particle follows the same line as before, but on a different schedule. It misses the first particle at and collides with it at when .     The same two paths as in . The point is now a collision point, reached by both particles at , while remains an intersection point that is not a collision point.    The parabola and the line crossing at and . The point is highlighted as a collision point, reached by both particles at time , while the particles pass through at the different times and .     r1(t) = (t, t^2)  r2(t) = (2*t - 2, 2*t)       C_1    C_2      (-1,1)        (2,4)   collision at  t=2                    Every Collision Is an Intersection, but Not Conversely  If two particles collide at , then certainly lies on both paths, so every collision point is an intersection point. The converse fails: the paths may cross at a point that the two particles visit at different times. Changing the parametrization of a curve does not move the curve, but it can create or destroy collisions.     Keep . Find a parametrization of the line for which the two particles collide at both intersection points.    Try to arrange that the second particle has the same -coordinate as the first one at every time .     .    With the collision equations become and , i.e. . Thus gives the collision at and gives the collision at : both intersection points are now collision points.    "
},
{
  "id": "def-intersection-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#def-intersection-collision",
  "type": "Definition",
  "number": "3.5.20",
  "title": "Intersection Points and Collision Points.",
  "body": " Intersection Points and Collision Points   A point is an intersection point of the two curves if lies on both curves; that is, if there are parameter values and , not necessarily equal , with   A point is a collision point of the two particles if both particles are at at the same time; that is, if there is a single value of with    "
},
{
  "id": "ex-no-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#ex-no-collision",
  "type": "Example",
  "number": "3.5.21",
  "title": "The paths cross, but the particles never meet.",
  "body": " The paths cross, but the particles never meet   Two particles move in the plane with position vectors Find all intersection points of their paths, and all collision points of the particles.     Paths. Eliminating the parameter, the first particle traces the parabola . For the second, and , so it traces the line . As computed above, the two paths intersect at and .   Collisions. By , a collision requires a single with The first equation forces , but then while . There is no solution, so the particles never collide .  We can see exactly how they miss each other. The first particle is at when , while the second particle arrives there only at . Similarly, the first particle reaches at , long after the second particle passed through it at . Each intersection point is visited twice, but never simultaneously. See and .   "
},
{
  "id": "fig-no-collision-video",
  "level": "2",
  "url": "sec-intersection-collision.html#fig-no-collision-video",
  "type": "Figure",
  "number": "3.5.22",
  "title": "",
  "body": " The particles and move simultaneously. Their paths cross at and , but the clock shows that the two particles are never at either crossing at the same time.   "
},
{
  "id": "fig-no-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#fig-no-collision",
  "type": "Figure",
  "number": "3.5.23",
  "title": "",
  "body": " The parabola and the line intersect at and . At each of these points the two particles arrive at different times, so neither point is a collision point.    The parabola and the line drawn on the same axes, crossing at the points and . Each crossing is labeled with the two different parameter values at which the two particles pass through it.     r1(t) = (t, t^2)  r2(t) = (-t, 2 - t)       C_1    C_2      (-1,1)        (2,4)                   "
},
{
  "id": "ex-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#ex-collision",
  "type": "Example",
  "number": "3.5.24",
  "title": "The same paths, a different schedule—now they collide.",
  "body": " The same paths, a different schedule now they collide   Keep the first particle, but re-schedule the second one: Find the intersection points of the paths and the collision points of the particles.     Paths. For the second particle, and , so it travels along the very same line as before, only faster and in the opposite direction. The paths are therefore unchanged, and they still intersect at and .   Collisions. Now requires a single with The first equation gives , and this value does satisfy the second equation, since . Hence the particles do collide, at   The other intersection point is not a collision point: the first particle passes through at , while the second particle passes through it at . Two intersection points, but only one collision. See and .   "
},
{
  "id": "fig-collision-video",
  "level": "2",
  "url": "sec-intersection-collision.html#fig-collision-video",
  "type": "Figure",
  "number": "3.5.25",
  "title": "",
  "body": " With the second particle follows the same line as before, but on a different schedule. It misses the first particle at and collides with it at when .   "
},
{
  "id": "fig-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#fig-collision",
  "type": "Figure",
  "number": "3.5.26",
  "title": "",
  "body": " The same two paths as in . The point is now a collision point, reached by both particles at , while remains an intersection point that is not a collision point.    The parabola and the line crossing at and . The point is highlighted as a collision point, reached by both particles at time , while the particles pass through at the different times and .     r1(t) = (t, t^2)  r2(t) = (2*t - 2, 2*t)       C_1    C_2      (-1,1)        (2,4)   collision at  t=2                  "
},
{
  "id": "insight-collision-vs-intersection",
  "level": "2",
  "url": "sec-intersection-collision.html#insight-collision-vs-intersection",
  "type": "Insight",
  "number": "3.5.27",
  "title": "Every Collision Is an Intersection, but Not Conversely.",
  "body": " Every Collision Is an Intersection, but Not Conversely  If two particles collide at , then certainly lies on both paths, so every collision point is an intersection point. The converse fails: the paths may cross at a point that the two particles visit at different times. Changing the parametrization of a curve does not move the curve, but it can create or destroy collisions.  "
},
{
  "id": "checkpoint-collision",
  "level": "2",
  "url": "sec-intersection-collision.html#checkpoint-collision",
  "type": "Checkpoint",
  "number": "3.5.28",
  "title": "",
  "body": "  Keep . Find a parametrization of the line for which the two particles collide at both intersection points.    Try to arrange that the second particle has the same -coordinate as the first one at every time .     .    With the collision equations become and , i.e. . Thus gives the collision at and gives the collision at : both intersection points are now collision points.   "
},
{
  "id": "sec-lines-vector-eq",
  "level": "1",
  "url": "sec-lines-vector-eq.html",
  "type": "Subsection",
  "number": "3.6.1",
  "title": "Vector Equation for a Line in Space",
  "body": " Vector Equation for a Line in Space  Consider a line that passes through the point and is parallel to the vector . Then any arbitrary point on the line can be obtained by adding a scalar multiple of to the position vector of that we will denote by . This way we can write the vector equation of the line as   where is the position vector of an arbitrary point on the line. See .   The line through parallel to . For any point on the line, the vector is parallel to .    A three dimensional coordinate system with a blue line passing through two labelled points. The point P zero equals x zero comma y zero comma z zero sits higher on the line, and the point P equals x comma y comma z sits lower. A magenta vector from P zero to P lies along the line, and a separate magenta vector v below the line points in the same direction, illustrating that the vector P zero P is parallel to v.       lets you move and and slide the parameter to see the point travel along the line.   The line . Drag or to move the line, and change to move the point along it.    "
},
{
  "id": "fig-lines-vector-eq",
  "level": "2",
  "url": "sec-lines-vector-eq.html#fig-lines-vector-eq",
  "type": "Figure",
  "number": "3.6.1",
  "title": "",
  "body": " The line through parallel to . For any point on the line, the vector is parallel to .    A three dimensional coordinate system with a blue line passing through two labelled points. The point P zero equals x zero comma y zero comma z zero sits higher on the line, and the point P equals x comma y comma z sits lower. A magenta vector from P zero to P lies along the line, and a separate magenta vector v below the line points in the same direction, illustrating that the vector P zero P is parallel to v.     "
},
{
  "id": "fig-lines-vector-eq-interactive",
  "level": "2",
  "url": "sec-lines-vector-eq.html#fig-lines-vector-eq-interactive",
  "type": "Figure",
  "number": "3.6.2",
  "title": "",
  "body": " The line . Drag or to move the line, and change to move the point along it.   "
},
{
  "id": "sec-lines-parametric",
  "level": "1",
  "url": "sec-lines-parametric.html",
  "type": "Subsection",
  "number": "3.6.2",
  "title": "Parametric Equations for a Line",
  "body": " Parametric Equations for a Line  The vector equation can be interpreted as the following parametric equations, where :   When none of is zero, each parametric equation can be solved for ; equating the three expressions eliminates and gives the standard equations (also called the symmetric equations ) of the line: If one of the components of is zero, say , that coordinate stays constant along the line, and the standard equations are written as .   The line through two points   Find the vector equation, the parametric equations and the standard equations of the line that passes through the points and .    We begin by finding a vector parallel to the line by using the two given points:   By , the vector equation of the line is   where and , hence   Equivalently, . By , the parametric equations of the line are   Finally, every component of is nonzero, so solving each parametric equation for and equating, as in , gives the standard equations    The line through and . The vector is parallel to the line.    A three dimensional coordinate system with a blue line passing through the point P zero at two comma zero comma zero on the x axis and climbing toward the upper left. A short green vector from P zero along the line represents the direction vector P zero P equals negative one comma negative one comma one.        "
},
{
  "id": "sec-lines-parametric-3",
  "level": "2",
  "url": "sec-lines-parametric.html#sec-lines-parametric-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard equations symmetric equations "
},
{
  "id": "example-lines-two-points",
  "level": "2",
  "url": "sec-lines-parametric.html#example-lines-two-points",
  "type": "Example",
  "number": "3.6.3",
  "title": "The line through two points.",
  "body": " The line through two points   Find the vector equation, the parametric equations and the standard equations of the line that passes through the points and .    We begin by finding a vector parallel to the line by using the two given points:   By , the vector equation of the line is   where and , hence   Equivalently, . By , the parametric equations of the line are   Finally, every component of is nonzero, so solving each parametric equation for and equating, as in , gives the standard equations    The line through and . The vector is parallel to the line.    A three dimensional coordinate system with a blue line passing through the point P zero at two comma zero comma zero on the x axis and climbing toward the upper left. A short green vector from P zero along the line represents the direction vector P zero P equals negative one comma negative one comma one.       "
},
{
  "id": "sec-lines-distance",
  "level": "1",
  "url": "sec-lines-distance.html",
  "type": "Subsection",
  "number": "3.6.3",
  "title": "The Distance from a Point to a Line",
  "body": " The Distance from a Point to a Line  Our goal is to find the distance of the point from the line . As shown in , if is any point on the line and is the angle between and the direction vector , then   which can be written in terms of the cross product as    The distance of the point from the line is , where is any point on the line.              S    P    L    \\theta    \\|\\overrightarrow{PS}\\|\\left|\\sin\\theta\\right|    \\mathbf v                   Distance from a point to a line   Calculate the distance between the point and the line with the vector equation , .    The vector parallel to the line is which has length . We also need a point on the line. For , we have and hence .  Hence, by ,     "
},
{
  "id": "fig-lines-dist-line",
  "level": "2",
  "url": "sec-lines-distance.html#fig-lines-dist-line",
  "type": "Figure",
  "number": "3.6.5",
  "title": "",
  "body": " The distance of the point from the line is , where is any point on the line.              S    P    L    \\theta    \\|\\overrightarrow{PS}\\|\\left|\\sin\\theta\\right|    \\mathbf v                 "
},
{
  "id": "example-lines-distance",
  "level": "2",
  "url": "sec-lines-distance.html#example-lines-distance",
  "type": "Example",
  "number": "3.6.6",
  "title": "Distance from a point to a line.",
  "body": " Distance from a point to a line   Calculate the distance between the point and the line with the vector equation , .    The vector parallel to the line is which has length . We also need a point on the line. For , we have and hence .  Hence, by ,    "
},
{
  "id": "sec-planes-equation",
  "level": "1",
  "url": "sec-planes-equation.html",
  "type": "Subsection",
  "number": "3.6.4",
  "title": "Equation of a Plane in Space",
  "body": " Equation of a Plane in Space  In the past, we learned how to compute the normal vector to a plane. Let us assume that we have computed this vector and that we have a point on the plane. We know that a normal vector is perpendicular to the plane and hence it is perpendicular to any vector in the plane. Let us denote an arbitrary point on the plane by , then    The normal vector to a plane is perpendicular to all the vectors in the plane.    A parallelogram represents a plane seen in perspective. A red vector n points straight up from a point P zero on the plane, and a blue vector lies in the plane from P zero to another point P. A small right angle marker at P zero shows that the two vectors are perpendicular.      If , and , then the above equation gives us   which can also be re-written in the form   where .   Finding the equation of a plane   Find an equation of the plane through the point with normal vector . Find the intercepts and sketch the plane.    Substituting into the point-normal form :   Setting two of the variables equal to zero at a time gives the intercepts: the -intercept is , the -intercept is , and the -intercept is . The portion of the plane in the first octant is sketched in .   The plane meets the coordinate axes at , , and .    A three dimensional coordinate system in which a shaded triangle represents the portion of the plane two x plus three y plus four z equals twelve in the first octant. The triangle's vertices are the intercepts six comma zero comma zero on the x axis, zero comma four comma zero on the y axis, and zero comma zero comma three on the z axis, with dashed lines marking the triangle's edges along the coordinate planes.        "
},
{
  "id": "fig-planes-normal",
  "level": "2",
  "url": "sec-planes-equation.html#fig-planes-normal",
  "type": "Figure",
  "number": "3.6.7",
  "title": "",
  "body": " The normal vector to a plane is perpendicular to all the vectors in the plane.    A parallelogram represents a plane seen in perspective. A red vector n points straight up from a point P zero on the plane, and a blue vector lies in the plane from P zero to another point P. A small right angle marker at P zero shows that the two vectors are perpendicular.     "
},
{
  "id": "example-planes-equation",
  "level": "2",
  "url": "sec-planes-equation.html#example-planes-equation",
  "type": "Example",
  "number": "3.6.8",
  "title": "Finding the equation of a plane.",
  "body": " Finding the equation of a plane   Find an equation of the plane through the point with normal vector . Find the intercepts and sketch the plane.    Substituting into the point-normal form :   Setting two of the variables equal to zero at a time gives the intercepts: the -intercept is , the -intercept is , and the -intercept is . The portion of the plane in the first octant is sketched in .   The plane meets the coordinate axes at , , and .    A three dimensional coordinate system in which a shaded triangle represents the portion of the plane two x plus three y plus four z equals twelve in the first octant. The triangle's vertices are the intercepts six comma zero comma zero on the x axis, zero comma four comma zero on the y axis, and zero comma zero comma three on the z axis, with dashed lines marking the triangle's edges along the coordinate planes.       "
},
{
  "id": "sec-planes-intersection",
  "level": "1",
  "url": "sec-planes-intersection.html",
  "type": "Subsection",
  "number": "3.6.5",
  "title": "Lines of Intersection",
  "body": " Lines of Intersection  Suppose we would like to find the line of intersection of two planes with normal vectors and . To write down the equation of we need a direction vector for it, and the two normal vectors are enough to produce one.  First, notice that each normal vector is perpendicular to . By , the normal vector is orthogonal to every line in the first plane. The line lies in that plane, and therefore . The line lies in the second plane as well, so the same argument with gives . These two right angles are marked in .  So we are looking for a vector orthogonal to both and  and by that is exactly what the cross product delivers. Provided the planes are not parallel, the normal vectors are not parallel either, so . A direction vector is only determined up to a nonzero scalar multiple, so we may take   Then, we can use it together with any common point to the two planes to find the equation of the line of intersection. See .   The cross product of the normal vectors gives the direction vector of the line of intersection.    Two planes intersect inside a three dimensional box: a horizontal blue plane and a slanted pink plane, meeting at an oblique angle rather than a right angle. Both normal vectors leave the same marked point on the line where the planes meet. The blue vector n one points straight up, perpendicular to the blue horizontal plane; the pink vector n two points up and to the side, perpendicular to the pink slanted plane. A black vector runs along the crease where the planes meet. A legend in the upper right names the three vectors: n one, n two, and v equals n one cross n two. A square corner mark on either side of the common point, drawn in the colour of its normal, shows that each normal makes a right angle with that line.       The line of intersection of two planes   Find the parametric equations of the line of intersection of the two planes and .    The two normal vectors are and , so by ,   We have found the direction of the line so far and now we need to find a common point between the two planes. After substituting into the equations of the planes we get   Adding the last pair of equations gives , hence   Hence, the point is in common between the two planes. Finally, by , the parametric equations of the line of intersection are     "
},
{
  "id": "fig-planes-intersection",
  "level": "2",
  "url": "sec-planes-intersection.html#fig-planes-intersection",
  "type": "Figure",
  "number": "3.6.10",
  "title": "",
  "body": " The cross product of the normal vectors gives the direction vector of the line of intersection.    Two planes intersect inside a three dimensional box: a horizontal blue plane and a slanted pink plane, meeting at an oblique angle rather than a right angle. Both normal vectors leave the same marked point on the line where the planes meet. The blue vector n one points straight up, perpendicular to the blue horizontal plane; the pink vector n two points up and to the side, perpendicular to the pink slanted plane. A black vector runs along the crease where the planes meet. A legend in the upper right names the three vectors: n one, n two, and v equals n one cross n two. A square corner mark on either side of the common point, drawn in the colour of its normal, shows that each normal makes a right angle with that line.     "
},
{
  "id": "example-planes-intersection",
  "level": "2",
  "url": "sec-planes-intersection.html#example-planes-intersection",
  "type": "Example",
  "number": "3.6.11",
  "title": "The line of intersection of two planes.",
  "body": " The line of intersection of two planes   Find the parametric equations of the line of intersection of the two planes and .    The two normal vectors are and , so by ,   We have found the direction of the line so far and now we need to find a common point between the two planes. After substituting into the equations of the planes we get   Adding the last pair of equations gives , hence   Hence, the point is in common between the two planes. Finally, by , the parametric equations of the line of intersection are    "
},
{
  "id": "sec-planes-distance",
  "level": "1",
  "url": "sec-planes-distance.html",
  "type": "Subsection",
  "number": "3.6.6",
  "title": "Distance of a Point from a Plane",
  "body": " Distance of a Point from a Plane  Our goal here is to find the distance of the point from the plane. To do so we need a point on the plane and the normal vector to the plane . As shown in , the distance can be found by projecting the vector in the direction of and then finding its magnitude:    Distance from a point to a plane       The distance of the point from the plane is the magnitude of the projection of onto the normal vector . The corner mark records that the dashed segment meets the plane at a right angle, so it is parallel to .    A parallelogram represents a plane seen in perspective. From a point P on the plane, a blue normal vector n points straight up and a green vector points up and to the right to a point S above the plane. A dashed dark red segment drops vertically from S to the plane; its length d is the distance from S to the plane, which equals the magnitude of the projection of P S onto n. A small square corner mark where the dashed segment meets the plane shows that the segment is perpendicular to the plane, and a grey dashed segment on the plane joins P to the foot of that drop.       Distance from a point to a plane   Find the distance from the point to the plane with equation .    We need a point on the plane. We choose , which when substituted into the equation of the plane , gives . Hence, we have a point on the plane. We then compute the vector . Note that we also can extract the normal vector , from the equation of the plane, which is in the standard form . Substituting into gives     "
},
{
  "id": "fig-planes-distance",
  "level": "2",
  "url": "sec-planes-distance.html#fig-planes-distance",
  "type": "Figure",
  "number": "3.6.12",
  "title": "",
  "body": " The distance of the point from the plane is the magnitude of the projection of onto the normal vector . The corner mark records that the dashed segment meets the plane at a right angle, so it is parallel to .    A parallelogram represents a plane seen in perspective. From a point P on the plane, a blue normal vector n points straight up and a green vector points up and to the right to a point S above the plane. A dashed dark red segment drops vertically from S to the plane; its length d is the distance from S to the plane, which equals the magnitude of the projection of P S onto n. A small square corner mark where the dashed segment meets the plane shows that the segment is perpendicular to the plane, and a grey dashed segment on the plane joins P to the foot of that drop.     "
},
{
  "id": "example-planes-distance",
  "level": "2",
  "url": "sec-planes-distance.html#example-planes-distance",
  "type": "Example",
  "number": "3.6.13",
  "title": "Distance from a point to a plane.",
  "body": " Distance from a point to a plane   Find the distance from the point to the plane with equation .    We need a point on the plane. We choose , which when substituted into the equation of the plane , gives . Hence, we have a point on the plane. We then compute the vector . Note that we also can extract the normal vector , from the equation of the plane, which is in the standard form . Substituting into gives    "
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
