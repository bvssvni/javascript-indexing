

function test_indexing_before () {
    var list = [3, 5];
    if (indexing_before (list, 2) != 2) {
        console.log ("unit test failed!");
        return false;
    }
    if (indexing_before (list, 3) != 3) {
        console.log ("unit test failed!");
        return false;
    }
    if (indexing_before (list, 4) != 3) {
        console.log ("unit test failed!");
        return false;
    }
    if (indexing_before (list, 5) != 3) {
        console.log ("unit test failed!");
        return false;
    }
    if (indexing_before (list, 6) != 5) {
        console.log ("unit test failed!");
        return false;
    }

    return true;
}

function test_indexing_after () {
    var list = [3, 5];
    if (indexing_after (list, 2) != 3) {
        console.log ("unit test failed!");
        return false;
    }
    if (indexing_after (list, 3) != 5) {
        console.log ("unit test failed!");
        return false;
    }
    if (indexing_after (list, 4) != 5) {
        console.log ("unit test failed!");
        return false;
    }
    if (indexing_after (list, 5) != 5) {
        console.log ("unit test failed!");
        return false;
    }
    if (indexing_after (list, 6) != 6) {
        console.log ("unit test failed!");
        return false;
    }
}

