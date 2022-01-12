// See also:
// Info:    http://findproxyforurl.com/example-pac-file/
// Testing: https://app.thorsen.pm/proxyforurl
function FindProxyForURL(url, host) {
 
  // SAMPLES
  //return url;  //useful for troubleshooting
  //return host; //useful for troubleshooting
  //if ( shExpMatch( host, "(vsphere|netdot).ncsa.illinois.edu" ) )
  //if ( shExpMatch( url, "*192.168*") )

  // Local proxy ports
  var proxy_5700 = "SOCKS5 127.0.0.1:5700";
  var proxy_5701 = "SOCKS5 127.0.0.1:5701";
  var proxy_5702 = "SOCKS5 127.0.0.1:5702";
  var proxy_5703 = "SOCKS5 127.0.0.1:5703";
  var proxy_5705 = "SOCKS5 127.0.0.1:5705";
  var proxy_5704 = "SOCKS5 127.0.0.1:5704";
 
  // ACHE (5700)
  var ache_tunnel_hosts = [
    "ache-vcenter.internal.ncsa.edu",
    "ache-git.ncsa.illinois.edu",
  ];
  if ( ache_tunnel_hosts.includes( host ) )
    return proxy_5700;


  // CERBERUS (5701)
  var cerb_tunnel_hosts = [
    "netdot.ncsa.illinois.edu",
    "vsphere.ncsa.illinois.edu",
  ];
  if ( cerb_tunnel_hosts.includes( host ) )
    return proxy_5701;

  // VMs (5702)
  if ( isInNet(dnsResolve(host), "192.168.28.0", "255.255.254.0") )
    return proxy_5702;

  // LSST BMC (5705)
  if ( isInNet(dnsResolve(host), "192.168.180.0", "255.255.252.0") )
    return proxy_5705;
 
 // ICCP BMC (5704)
  if ( isInNet(dnsResolve(host), "10.60.0.0", "255.255.0.0") )
    return proxy_5704;

  // Anything below here isn't needed when accessed from work
  if (isInNet(myIpAddress(), "141.142.0.0", "255.255.0.0"))
    return "DIRECT";

  // NCSA (5703)
  var ncsa_tunnel_hosts = [
    "netact.ncsa.illinois.edu",
    "odcim.ncsa.illinois.edu",
  ];
  if ( ncsa_tunnel_hosts.includes( host ) )
    return proxy_5703;

  // No match
  return "DIRECT";
}
