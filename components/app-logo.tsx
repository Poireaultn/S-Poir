import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="w-24 aspect-[5/3] rounded-md bg-white flex items-center justify-center">
                <AppLogoIcon className="h-full w-auto object-contain" />
            </div>
        </>
    );
}
