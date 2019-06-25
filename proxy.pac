// See also: http://findproxyforurl.com/example-pac-file/
function FindProxyForURL(url, host) {
 
    // Local proxy ports
    var proxy_lsstpup = "SOCKS 127.0.0.1:5700";
    var proxy_cerb4 = "SOCKS 127.0.0.1:5701";

    // Matching rules
    if ( host == "vsphere.ncsa.illinois.edu" )
        return proxy_cerb4

    if ( host == "lsst-git.ncsa.illinois.edu" || host == "141.142.181.4" )
        return proxy_lsstpup

    // Example
//    if (shExpMatch(url, "http://abcdomain.com/folder/*"))
//        return cerberus_bastion_proxy;
 
    // No match
    return "DIRECT";
}
