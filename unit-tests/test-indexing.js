

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

    return true;
}

function test_indexing_or () {
    var a = [1, 2, 3];
    var b = [2, 3, 4];
    var c = indexing_or (a, b);
    if (c.length != 4) {
        console.log ("unit test failed!");
        return false;
    }
    if (c [0] != 1) {
        console.log ("unit test failed!");
        return false;
    }
    if (c [1] != 2) {
        console.log ("unit test failed!");
        return false;
    }
    if (c[2] != 3) {
        console.log ("unit test failed!");
        return false;
    }
    if (c[3] != 4) {
        console.log ("unit test failed!");
        return false;
    }

    return true;
}

function test_indexing_and () {
    var a = [1, 2, 3];
    var b = [2, 3, 4];
    var c = indexing_and (a, b);
    if (c.length != 2) {
        console.log ("unit test failed!");
        return false;
    }
    if (c [0] != 2) {
        console.log ("unit test failed!");
        return false;
    }
    if (c [1] != 3) {
        console.log ("unit test failed!");
        return false;
    }

    return true;
}

function test_indexing_except () {
    var a = [1, 2, 3];
    var b = [2, 3, 4];
    var c = indexing_except (a, b);
    if (c.length != 1) {
        console.log ("unit test failed!");
        return false;
    }
    if (c [0] != 1) {
        console.log ("unit test failed!");
        return false;
    }
    
    return true;
}