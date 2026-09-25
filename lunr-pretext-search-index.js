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
  "id": "worksheet-assignment-1",
  "level": "1",
  "url": "worksheet-assignment-1.html",
  "type": "Worksheet",
  "number": "2.1",
  "title": "Assignment 1",
  "body": " Assignment 1   These problems exercise the hyperbolic identities, the derivatives of the hyperbolic functions and the inverse hyperbolic functions. If you would like to review the material first, see .     Show that , for all real numbers .       Compute .       Simplify .       Solve the equation for .       Following the method of , show that the inverse hyperbolic tangent is given by        Use the substitution to calculate and then use to write your answer with a logarithm. Hint:  , and .     "
},
{
  "id": "rw22-1",
  "level": "2",
  "url": "worksheet-assignment-1.html#rw22-1",
  "type": "Worksheet Exercise",
  "number": "2.1.1",
  "title": "",
  "body": "  Show that , for all real numbers .    "
},
{
  "id": "pp-1",
  "level": "2",
  "url": "worksheet-assignment-1.html#pp-1",
  "type": "Worksheet Exercise",
  "number": "2.1.2",
  "title": "",
  "body": "  Compute .    "
},
{
  "id": "pp-2",
  "level": "2",
  "url": "worksheet-assignment-1.html#pp-2",
  "type": "Worksheet Exercise",
  "number": "2.1.3",
  "title": "",
  "body": "  Simplify .    "
},
{
  "id": "ex-hyp-solve-equation",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-solve-equation",
  "type": "Worksheet Exercise",
  "number": "2.1.4",
  "title": "",
  "body": "  Solve the equation for .    "
},
{
  "id": "ex-hyp-arctanh",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-arctanh",
  "type": "Worksheet Exercise",
  "number": "2.1.5",
  "title": "",
  "body": "  Following the method of , show that the inverse hyperbolic tangent is given by     "
},
{
  "id": "ex-hyp-arctanh-integral",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-arctanh-integral",
  "type": "Worksheet Exercise",
  "number": "2.1.6",
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
