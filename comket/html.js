

let comket = {}

comket.Element = ( elem, args ) => {
    let element = document.createElement( elem )
    if(args) {
        for( let attr in args ) {
            if(attr == "children") { for (const child of args["children"]) element.append( child ) }
            else if(attr == "style") { for (const oneStyle in args["style"]) element.style[oneStyle] = args["style"][oneStyle] }
            else if(attr == "text") element.innerText = args["text"]
            else if(attr.slice(0, 2) == "on") element.addEventListener(attr.slice(2), args[attr])
            else {
                element.setAttribute(attr, args[attr])
            }
        }
    }
    return element
}
comket.a = (args) =>          { return comket.Element("a",          args) }
comket.abbr = (args) =>       { return comket.Element("abbr",       args) }
comket.acronym = (args) =>    { return comket.Element("acronym",    args) }
comket.address = (args) =>    { return comket.Element("address",    args) }
comket.applet = (args) =>     { return comket.Element("applet",     args) }
comket.area = (args) =>       { return comket.Element("area",       args) }
comket.article = (args) =>    { return comket.Element("article",    args) }
comket.aside = (args) =>      { return comket.Element("aside",      args) }
comket.audio = (args) =>      { return comket.Element("audio",      args) }

comket.b = (args) =>          { return comket.Element("b",          args) }
comket.base = (args) =>       { return comket.Element("base",       args) }
comket.basefont = (args) =>   { return comket.Element("basefont",   args) }
comket.bdi = (args) =>        { return comket.Element("bdi",        args) }
comket.bdo = (args) =>        { return comket.Element("bdo",        args) }
comket.bgsound = (args) =>    { return comket.Element("bgsound",    args) }
comket.big = (args) =>        { return comket.Element("big",        args) }
comket.blink = (args) =>      { return comket.Element("blink",      args) }
comket.blockquote = (args) => { return comket.Element("blockquote", args) }
comket.body = (args) =>       { return comket.Element("body",       args) }    // BODY
comket.br = (args) =>         { return comket.Element("br",         args) }
comket.button = (args) =>     { return comket.Element("button",     args) }

comket.canvas = (args) =>     { return comket.Element("canvas",     args) }
comket.caption = (args) =>    { return comket.Element("caption",    args) }
comket.center = (args) =>     { return comket.Element("center",     args) }
comket.cite = (args) =>       { return comket.Element("cite",       args) }
comket.code = (args) =>       { return comket.Element("code",       args) }
comket.col = (args) =>        { return comket.Element("col",        args) }
comket.colgroup = (args) =>   { return comket.Element("colgroup",   args) }
comket.content = (args) =>    { return comket.Element("content",    args) }

comket.data = (args) =>       { return comket.Element("data",       args) }
comket.datalist = (args) =>   { return comket.Element("datalist",   args) }
comket.dd = (args) =>         { return comket.Element("dd",         args) }
comket.del = (args) =>        { return comket.Element("del",        args) }
comket.details = (args) =>    { return comket.Element("details",    args) }
comket.dfn = (args) =>        { return comket.Element("dfn",        args) }
comket.dialog = (args) =>     { return comket.Element("dialog",     args) }
comket.dir = (args) =>        { return comket.Element("dir",        args) }
comket.div = (args) =>        { return comket.Element("div",        args) }
comket.dl = (args) =>         { return comket.Element("dl",         args) }
comket.dt = (args) =>         { return comket.Element("dt",         args) }

comket.em = (args) =>         { return comket.Element("em",         args) }
comket.embed = (args) =>      { return comket.Element("embed",      args) }

comket.fieldset = (args) =>   { return comket.Element("fieldset",   args) }
comket.figure = (args) =>     { return comket.Element("figure",     args) }
comket.font = (args) =>       { return comket.Element("font",       args) }
comket.footer = (args) =>     { return comket.Element("footer",     args) }
comket.form = (args) =>       { return comket.Element("form",       args) }
comket.frame = (args) =>      { return comket.Element("frame",      args) }
comket.frameset = (args) =>   { return comket.Element("frameset",   args) }

comket.head = (args) =>       { return comket.Element("head",       args) }    // HEAD
comket.header = (args) =>     { return comket.Element("header",     args) }
comket.h1 = (args) =>         { return comket.Element("h1",         args) }
comket.h2 = (args) =>         { return comket.Element("h2",         args) }
comket.h3 = (args) =>         { return comket.Element("h3",         args) }
comket.h4 = (args) =>         { return comket.Element("h4",         args) }
comket.h5 = (args) =>         { return comket.Element("h5",         args) }
comket.h6 = (args) =>         { return comket.Element("h6",         args) }
comket.hgroup = (args) =>     { return comket.Element("hgroup",     args) }
comket.hr = (args) =>         { return comket.Element("hr",         args) }
comket.html = (args) =>       { return comket.Element("html",       args) }    // HTML

comket.i = (args) =>          { return comket.Element("i",          args) }
comket.iframe = (args) =>     { return comket.Element("iframe",     args) }
comket.image = (args) =>      { return comket.Element("image",      args) }
comket.img = (args) =>        { return comket.Element("img",        args) }
comket.input = (args) =>      { return comket.Element("input",      args) }
comket.ins = (args) =>        { return comket.Element("ins",        args) }

comket.kbd = (args) =>        { return comket.Element("kbd",        args) }
comket.keygen = (args) =>     { return comket.Element("keygen",     args) }

comket.label = (args) =>      { return comket.Element("label",      args) }
comket.legend = (args) =>     { return comket.Element("legend",     args) }
comket.li = (args) =>         { return comket.Element("li",         args) }
comket.link = (args) =>       { return comket.Element("link",       args) }

comket.main = (args) =>       { return comket.Element("main",       args) }
comket.map = (args) =>        { return comket.Element("map",        args) }
comket.mark = (args) =>       { return comket.Element("mark",       args) }
comket.marquee = (args) =>    { return comket.Element("marquee",    args) }
comket.menu = (args) =>       { return comket.Element("menu",       args) }
comket.menuitem = (args) =>   { return comket.Element("menuitem",   args) }
comket.meta = (args) =>       { return comket.Element("meta",       args) }
comket.meter = (args) =>      { return comket.Element("meter",      args) }

comket.nav = (args) =>        { return comket.Element("nav",        args) }
comket.nobr = (args) =>       { return comket.Element("nobr",       args) }
comket.noembed = (args) =>    { return comket.Element("noembed",    args) }
comket.noframes = (args) =>   { return comket.Element("noframes",   args) }
comket.noscript = (args) =>   { return comket.Element("noscript",   args) }

comket.object = (args) =>     { return comket.Element("object",     args) }
comket.ol = (args) =>         { return comket.Element("ol",         args) }
comket.optgroup = (args) =>   { return comket.Element("optgroup",   args) }
comket.option = (args) =>     { return comket.Element("option",     args) }
comket.output = (args) =>     { return comket.Element("output",     args) }

comket.p = (args) =>          { return comket.Element("p",          args) }
comket.param = (args) =>      { return comket.Element("param",      args) }
comket.picture = (args) =>    { return comket.Element("picture",    args) }
comket.plaintext = (args) =>  { return comket.Element("plaintext",  args) }
comket.portal = (args) =>     { return comket.Element("portal",     args) }
comket.pre = (args) =>        { return comket.Element("pre",        args) }
comket.progress = (args) =>   { return comket.Element("progress",   args) }

comket.q = (args) =>          { return comket.Element("q",          args) }

comket.rb = (args) =>         { return comket.Element("rb",         args) }
comket.rp = (args) =>         { return comket.Element("rp",         args) }
comket.rt = (args) =>         { return comket.Element("rt",         args) }
comket.rtc = (args) =>        { return comket.Element("rtc",        args) }
comket.ruby = (args) =>       { return comket.Element("ruby",       args) }

comket.s = (args) =>          { return comket.Element("s",          args) }
comket.samp = (args) =>       { return comket.Element("samp",       args) }
comket.script = (args) =>     { return comket.Element("script",     args) }
comket.section = (args) =>    { return comket.Element("section",    args) }
comket.select = (args) =>     { return comket.Element("select",     args) }
comket.shadow = (args) =>     { return comket.Element("shadow",     args) }
comket.slot = (args) =>       { return comket.Element("slot",       args) }
comket.small = (args) =>      { return comket.Element("small",      args) }
comket.source = (args) =>     { return comket.Element("source",     args) }
comket.spacer = (args) =>     { return comket.Element("spacer",     args) }
comket.span = (args) =>       { return comket.Element("span",       args) }
comket.strike = (args) =>     { return comket.Element("strike",     args) }
comket.strong = (args) =>     { return comket.Element("strong",     args) }
comket.style = (args) =>      { return comket.Element("style",      args) }
comket.sub = (args) =>        { return comket.Element("sub",        args) }
comket.summary = (args) =>    { return comket.Element("summary",    args) }
comket.sup = (args) =>        { return comket.Element("sup",        args) }
comket.ruby = (args) =>       { return comket.Element("ruby",       args) }

comket.table = (args) =>      { return comket.Element("table",      args) }
comket.tbody = (args) =>      { return comket.Element("tbody",      args) }
comket.td = (args) =>         { return comket.Element("td",         args) }
comket.template = (args) =>   { return comket.Element("template",   args) }
comket.textarea = (args) =>   { return comket.Element("textarea",   args) }
comket.tfoot = (args) =>      { return comket.Element("tfoot",      args) }
comket.th = (args) =>         { return comket.Element("th",         args) }
comket.thead = (args) =>      { return comket.Element("thead",      args) }
comket.time = (args) =>       { return comket.Element("time",       args) }
comket.title = (args) =>      { return comket.Element("title",      args) }
comket.tr = (args) =>         { return comket.Element("tr",         args) }
comket.track = (args) =>      { return comket.Element("track",      args) }
comket.tt = (args) =>         { return comket.Element("tt",         args) }

comket.u = (args) =>          { return comket.Element("u",          args) }
comket.ul = (args) =>         { return comket.Element("ul",         args) }

comket.Var = (args) =>        { return comket.Element("var",        args) }
comket.video = (args) =>      { return comket.Element("video",      args) }

comket.wbr = (args) =>        { return comket.Element("wbr",        args) }

comket.xmp = (args) =>        { return comket.Element("xmp",        args) }



export default comket

