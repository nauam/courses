# System Properties Configuration

This document explains how to declare Java System Properties used for configuring QW Control.

These properties must be declared on the Java commandline when starting QW Control.

## Executable War

If you are using [Executable War](/administration/install/jar.md) to start QW Control, you would set the properties directly
on the commandline, using the `-Dpropertyname=value` syntax. Add a `-D` for each property:

```sh
java -server -Dserver.servlet.session.timeout=3600 -Dserver.port=8080 -jar qwcontrol-{{{qwcontrolVersionFull}}}.war
```

## Properties Reference

- `server.port` The HTTP port to use for the server, default "4440"
- `server.https.port` The HTTPS port to use or the server, default "4443"
- `server.address` Address/hostname to listen on, default is "localhost"
- `server.servlet.context-path` Web context path to use, such as "/qwcontrol". Default is "/".
- `server.servlet.session.timeout` Session timeout in seconds.
- `rdeck.base` QW Control Basedir to use, default is the directory containing the executable war
- `qwcontrol.server.logDir` The location where QW Control will write log files
- `server.datastore.path` Path to server datastore dir
- `default.user.name` Username for default user account to create
- `default.user.password` Password for default user account to create
- `qwcontrol.jaaslogin` "true/false" - if true, enable JAAS login. If false, use the realm.properties file for login information.
- `loginmodule.name` Custom JAAS loginmodule name to use
- `loginmodule.conf.name` Name of a custom JAAS config file, located in the server's config dir.
- `qwcontrol.config.name` Name of a custom qwcontrol config file, located in the server's config dir.
- `qwcontrol.ssl.config` Path to the SSL config properties file to enable SSL. If not set, SSL is not enabled.
- `qwcontrol.jetty.connector.forwarded` true/false. Set to true to enable support for "X-forwarded-\*" headers which may be sent by a front-end proxy to the qwcontrol server. See [Using an SSL Terminated Proxy](/administration/security/ssl.md#using-an-ssl-terminated-proxy).
- `qwcontrol.jetty.connector.ssl.excludedProtocols` Comma-separated list of SSL protocols to disable. Default: 'SSLv3'. See [Disabling SSL Protocols](/administration/security/ssl.md#disabling-ssl-protocols).
- `qwcontrol.jetty.connector.ssl.includedProtocols` Comma-separated list of SSL protocols to include. Default is based on available protocols. See [Disabling SSL Protocols](/administration/security/ssl.md#disabling-ssl-protocols).
- `qwcontrol.jetty.connector.ssl.excludedCipherSuites` Comma-separated list of Cipher suites to disable. No default. See [Disabling SSL Protocols](/administration/security/ssl.md#disabling-ssl-protocols).
- `qwcontrol.jetty.connector.ssl.includedCipherSuites` Comma-separated list of Cipher suites to enable. Default is based on available cipher suites. See [Disabling SSL Protocols](/administration/security/ssl.md#disabling-ssl-protocols).
- `logging.config` The absolute path to your log4j2 configuration file. This is the Spring Boot log file setting and must be set in rpm,deb, and docker environments for the logging system to initialize properly
- `log4j.configurationFile` The absolute path to your log4j2 configuration file.
- `java.io.tmpdir` Specifies the temporary directory used by plugins, such as Node Sources and Workflow steps.

For more information about using SSL, see [Configuring QW Control for SSL](/administration/security/ssl.md).

## RPM and DEB

You should _not_ modify the `/etc/qwcontrol/profile` file directly, as it may be overwritten during upgrade,
or any changes from the upgrade might not be applied.

Instead, For RPM or DEB installations, you can use environment variables set in a "defaults" file to add
additional Java Sytem Properties.

- RPM install: `/etc/sysconfig/qwcontrold`
- DEB install: `/etc/default/qwcontrold`

Within the `qwcontrold` defaults file, declare a `RDECK_JVM_OPTS` variable:

```properties
RDECK_JVM_OPTS="-Dserver.session.timeout=3600 -Dserver.port=8080"
```

### Environment Variables Defaults

Here is a partial list of environment variables which are set in the `/etc/qwcontrol/profile`, and can be overridden in the `/etc/sysconfig/qwcontrold` file for RPM installation or `/etc/default/qwcontrold` file for DEB installation.

(from `/etc/qwcontrol/profile`)

```
RDECK_INSTALL="${RDECK_INSTALL:-/var/lib/qwcontrol}"
RDECK_BASE="${RDECK_BASE:-/var/lib/qwcontrol}"
RDECK_CONFIG="${RDECK_CONFIG:-/etc/qwcontrol}"
RDECK_CONFIG_FILE="${RDECK_CONFIG_FILE:-$RDECK_CONFIG/qwcontrol-config.properties}"
RDECK_SERVER_BASE="${RDECK_SERVER_BASE:-$RDECK_BASE}"
RDECK_SERVER_CONFIG="${RDECK_SERVER_CONFIG:-$RDECK_CONFIG}"
RDECK_SERVER_DATA="${RDECK_SERVER_DATA:-$RDECK_BASE/data}"
RDECK_PROJECTS="${RDECK_PROJECTS:-$RDECK_BASE/projects}"
QWCONTROL_TEMPDIR="${QWCONTROL_TEMPDIR:-/tmp/qwcontrol}"
QWCONTROL_WORKDIR="${QWCONTROL_TEMPDIR:-$RDECK_BASE/work}"
QWCONTROL_LOGDIR="${QWCONTROL_LOGDIR:-$RDECK_BASE/logs}"
RDECK_JVM_SETTINGS="${RDECK_JVM_SETTINGS:- -Xmx1024m -Xms256m -XX:MaxMetaspaceSize=256m -server}"
RDECK_TRUSTSTORE_FILE="${RDECK_TRUSTSTORE_FILE:-$RDECK_CONFIG/ssl/truststore}"
RDECK_TRUSTSTORE_TYPE="${RDECK_TRUSTSTORE_TYPE:-jks}"
JAAS_LOGIN="${JAAS_LOGIN:-true}"
JAAS_CONF="${JAAS_CONF:-$RDECK_CONFIG/jaas-loginmodule.conf}"
LOGIN_MODULE="${LOGIN_MODULE:-RDpropertyfilelogin}"
RDECK_HTTP_PORT=${RDECK_HTTP_PORT:-4440}
RDECK_HTTPS_PORT=${RDECK_HTTPS_PORT:-4443}
```