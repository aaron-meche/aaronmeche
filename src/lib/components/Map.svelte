<!-- created by Aaron Meche -->
<script>
    import { onMount, onDestroy } from "svelte";
    import { convHeading } from "$lib/components/Map"

    const apiKey = "AIzaSyDOw3H-TmyQ-8loTqL9srN-55X9vh3zA7A"
    const mapId = "fdec73faebb85aa7c224831f"

    let mapContainer;
    let map;

    onMount(async () => {
        const { Loader } = await import('@googlemaps/js-api-loader');
        const loader = new Loader({ apiKey: apiKey });
        await loader.load();

        map = new google.maps.Map(mapDiv, {
            center: { 
                lat: 30.246869, 
                lng: -92.071491
            },
            zoom: 16,
            tilt: 70,
            heading: convHeading(90),
            mapId: mapId,
            disableDefaultUI: true,
            zoomControl: false,
        });
    });

    async function loadGoogleMaps() {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        document.head.appendChild(script);

        await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
        });
    }

    onMount(async () => {
        await loadGoogleMaps();

        map = new google.maps.Map(mapContainer, {
            center: { 
                lat: 30.246869, 
                lng: -92.071491
            },
            zoom: 16,
            tilt: 70,
            heading: convHeading(90),
            mapId: mapId,
            disableDefaultUI: true,
            zoomControl: false,

        });
    });

    onDestroy(() => map = null);

</script>

<!--  -->

<div bind:this={mapContainer} class="map-container"></div>

<!--  -->

<style>
    .map-container {
        width: 100%;
        height: 100vh;
    }
</style>
