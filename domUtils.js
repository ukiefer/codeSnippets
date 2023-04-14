/**
* Shortcut for function querySelector
* @author   Uwe Kiefer
* @param    {String}  selector          Valid CSS selector string
* @param    {Element} [parent=ducument] Base element
* @return   {Element}                   The first descendant element of parent
*                                       which matches the specified group of selector
*/
const qs = (selector, parent = document) => {
    return parent.querySelector(selector)
}

/**
* Shortcut for function querySelectorAll
* @author   Uwe Kiefer
* @param    {String}  selector          Valid CSS selector string
* @param    {Element} [parent=ducument] Base element
* @return   {Array}                     Array containing one element object for each 
*                                       descendant node that matches at least one of the
*                                       specified selector.
*/
const qsa = (selector, parent = document) => {
    return [...parent.querySelectorAll(selector)]
}

/**
* Helper for a global event listener
* Add an eventListener to the base element.
* If the event is triggered and the selector matched the selector,
* the function callback is called with the current event as a parameter.
* @author   Uwe Kiefer
* @param    {String}   type              Valid event type
* @param    {String}   selector          Valid CSS selector string
* @param    {Function} callback          Callback function
* @param    {Object}   [options]         Specifies characteristics about the event listener
* @param    {Element}  [parent=ducument] Base element
*/
const addGlobalEventListener = (type, selector, callback, options, parent = document) => {
    parent.addEventListener(
        type,
        e => {
            if (e.target.matches(selector)) callback(e)
        },
        options
    )
}

/**
* Helper to create an element by given html markup
* @author   Uwe Kiefer
* @param    {String}   html  Valid html markup with a single nodeElement
* @return   {Element}        Eelement based on the html
*/
const createElement = (html) => {
    const container = document.createElement('div')
    container.innerHTML = html
    return container.firstElementChild
}