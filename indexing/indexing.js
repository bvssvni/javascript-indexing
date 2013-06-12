/**
 * javascript-indexing, A javascript library for sorted lists of integers.
 *
 * @version 0.000, http://isprogrammingeasy.blogspot.no/2012/08/angular-degrees-versioning-notation.html
 * @license GNU Lesser General Public License, http://www.gnu.org/copyleft/lesser.html
 * @author  Sven Nilsen, http://www.cutoutpro.com
 * @link    http://www.github.com/bvssvni/javascript-indexing
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

