// See also: http://findproxyforurl.com/example-pac-file/
function FindProxyForURL(url, host) {
 
    // Local proxy ports
    var proxy_5700 = "SOCKS 127.0.0.1:5700";
    var proxy_5701 = "SOCKS 127.0.0.1:5701";
    var proxy_5702 = "SOCKS 127.0.0.1:5702";

    // Matching rules
    if ( host == "lsst-git.ncsa.illinois.edu" || host == "141.142.181.4" )
        return proxy_5700;

    if ( host == "vsphere.ncsa.illinois.edu" )
        return proxy_5701;
 
    if ( isInNet(dnsResolve(host), "140.252.32.0", "255.255.254.0") )
        return proxy_5701;

    if ( isInNet(dnsResolve(host), "192.168.28.0", "255.255.254.0") )
        return proxy_5702;

//    if ( shExpMatch( url, "*192.168*") )
//        return proxy_5702;

    // No match
    return "DIRECT";
}
