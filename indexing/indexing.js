/**
 * javascript-indexing, A javascript library for sorted lists of integers.
 *
 * @version 0.001, http://isprogrammingeasy.blogspot.no/2012/08/angular-degrees-versioning-notation.html
 * @license GNU Lesser General Public License, http://www.gnu.org/copyleft/lesser.html
 * @author  Sven Nilsen, http://www.cutoutpro.com
 * @link    http://www.github.com/bvssvni/javascript-indexing
 *
 * 0.001 - Added 'indexOf'.
 */

// Finds the last number in list that is less than current item.
// If no less item is found, returns the item.
function indexing_before (list, item) {
    if (list === null) {
        console.log ("list is null");
        return;
    }
    if (item === null) {
        console.log ("item is null");
        return;
    }

    var before = item;
    for (var i = 0; i < list.length; i++) {
        if (list [i] < item) {
            before = list [i];
            continue;
        }

        return before;
    }

    return before;
}

// Finds the first larger number in list that is more than current item.
// If no more item is found, returns the item.
function indexing_after (list, item) {
    if (list === null) {
        console.log ("list is null");
        return;
    }
    if (item === null) {
        console.log ("item is null");
        return;
    }

    var after = item;
    for (var i = list.length - 1; i >= 0; i--) {
        if (list [i] > item) {
            after = list [i];
            continue;
        }

        return after;
    }

    return after;
}

// Boolean algebra or = union.
function indexing_or (a, b) {
    if (a === null) {
        console.log ("a is null");
        return;
    }
    if (b === null) {
        console.log ("b is null");
        return;
    }

    var list = [];
    var ai = 0;
    var bi = 0;
    var max = 9007199254740992;
    while (ai < a.length || bi < b.length) {
        var aItem = ai < a.length ? a [ai] : max;
        var bItem = bi < b.length ? b [bi] : max;
        var min = aItem < bItem ? aItem : bItem;
        if (aItem === min) {
            ai++;
        }
        if (bItem === min) {
            bi++;
        }

        list.push (min);
    }

    return list;
}

// Boolean algebra and = intersect.
function indexing_and (a, b) {
    if (a === null) {
        console.log ("a is null");
        return;
    }
    if (b === null) {
        console.log ("b is null");
        return;
    }

    var list = [];
    var ai = 0;
    var bi = 0;
    var max = 9007199254740992;
    while (ai < a.length && bi < b.length) {
        var aItem = ai < a.length ? a [ai] : max;
        var bItem = bi < b.length ? b [bi] : max;
        var min = aItem < bItem ? aItem : bItem;
        if (aItem === min) {
            ai++;
        }
        if (bItem === min) {
            bi++;
        }

        if (aItem === min && bItem === min) {
            list.push (min);
        }
    }
    
    return list;
}

// Boolean algebra except = and not.
function indexing_except (a, b) {
    if (a === null) {
        console.log ("a is null");
        return;
    }
    if (b === null) {
        console.log ("b is null");
        return;
    }

    var list = [];
    var ai = 0;
    var bi = 0;
    var max = 9007199254740992;
    while (ai < a.length && bi < b.length) {
        var aItem = ai < a.length ? a [ai] : max;
        var bItem = bi < b.length ? b [bi] : max;
        var min = aItem < bItem ? aItem : bItem;
        if (aItem === min) {
            ai++;
        }
        if (bItem === min) {
            bi++;
        }

        if (aItem === min && bItem !== min) {
            list.push (min);
        }
    }

    return list;
}

// Returns index of item in list.
// If not found, returns -(next + 1) which can be converted back for insertion.
function indexing_indexOf (list, item) {
    if (list === null) {
        console.log ("list is null");
        return;
    }
    if (item === null) {
        console.log ("item is null");
        return;
    }

    var low = 0, high = list.length - 1, i, comparison;
    while (low <= high) {
        i = Math.floor((low + high) / 2);
        if (list[i] < item) { low = i + 1; continue; };
        if (list[i] > item) { high = i - 1; continue; };
        
        return i;
    }
    
    return -(low + 1);
}
