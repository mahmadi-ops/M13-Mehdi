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
  "id": "chapter-coming-soon",
  "level": "1",
  "url": "chapter-coming-soon.html",
  "type": "Chapter",
  "number": "1",
  "title": "Course Materials",
  "body": " Course Materials  The lecture notes, the assignments, and the review problem sets appear here as we reach them during the quarter. Nothing has been posted yet please check back after our first class meeting.  "
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
