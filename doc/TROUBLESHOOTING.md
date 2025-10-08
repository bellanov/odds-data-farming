# Troubleshooting

Summary of common problems encountered and their resolution steps.

```sh
NAMESPACE     NAME                               READY   STATUS                       RESTARTS      AGE
football      football-american-29332194-k4wzc   0/1     CreateContainerConfigError   0             7m7s
football      football-decimal-29332198-xr75d    0/1     CreateContainerConfigError   0             3m7s
```

The resolution is to execute the NPM Task to create the **ConfigMaps** required to initialize the containers correctly.

```sh
# Create ConfigMaps
npm run k8s-apply-football-config
```

Once the **ConfigMaps** exist, the container configurations should initialize successfully.

```sh
NAMESPACE     NAME                               READY   STATUS      RESTARTS      AGE
football      football-american-29332194-k4wzc   0/1     Completed   0             11m
football      football-american-29332205-vc6vp   1/1     Running     0             56s
football      football-decimal-29332198-xr75d    0/1     Completed   0             7m56s
```
