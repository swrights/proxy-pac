// See also: http://findproxyforurl.com/example-pac-file/
function FindProxyForURL(url, host) {
 
    // SAMPLES
    //return url;  //useful for troubleshooting
    //return host; //useful for troubleshooting
    //if ( shExpMatch( host, "(vsphere|netdot).ncsa.illinois.edu" ) )
    //if ( shExpMatch( url, "*192.168*") )

    // Local proxy ports
    var proxy_5700 = "SOCKS 127.0.0.1:5700";
    var proxy_5701 = "SOCKS 127.0.0.1:5701";
    var proxy_5702 = "SOCKS 127.0.0.1:5702";
    var proxy_5703 = "SOCKS 127.0.0.1:5703";

    // Matching rules
    if ( shExpMatch( host, "*git.ncsa.illinois.edu") )
        return proxy_5700;

    if ( host == "vsphere.ncsa.illinois.edu" )
        return proxy_5701;

    // LSSTCORP addrs should go direct
    if ( shExpMatch( host, "ls.st|*.lsstcorp.org") )
        return "DIRECT";
    // LSSTCORP IPs should use proxy
    if ( isInNet(dnsResolve(host), "140.252.32.0", "255.255.254.0") )
        return proxy_5701;

    if ( isInNet(dnsResolve(host), "192.168.28.0", "255.255.254.0") )
        return proxy_5702;

    if ( host == "netdot.ncsa.illinois.edu" )
        return proxy_5703;

    // No match
    return "DIRECT";
}
