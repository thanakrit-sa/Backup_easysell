import React, { useMemo } from 'react'
import objectPath from "object-path";
import {useHtmlClassService} from "../../_metronic/layout/_core/MetronicLayout";
import { Header } from "../../_metronic/layout/components/header/Header";
import { HeaderMobile } from "../../_metronic/layout/components/header-mobile/HeaderMobile";
import { Aside } from "../../_metronic/layout/components/aside/Aside";
import { Footer } from "../../_metronic/layout/components/footer/Footer";
import { LayoutInit } from "../../_metronic/layout/components/LayoutInit";
import { SubHeader } from "../../_metronic/layout/components/subheader/SubHeader";
import { QuickPanel } from "../../_metronic/layout/components/extras/offcanvas/QuickPanel";
import { QuickUser } from "../../_metronic/layout/components/extras/offcanvas/QuickUser";
import { ScrollTop } from "../../_metronic/layout/components/extras/ScrollTop";
import { StickyToolbar } from "../../_metronic/layout/components/extras/StickyToolbar";

export function Layout({ children }) {
    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => {
        return {
            layoutConfig: uiService.config,
            selfLayout: objectPath.get(uiService.config, "self.layout"),
            asideDisplay: objectPath.get(uiService.config, "aside.self.display"),
            subheaderDisplay: objectPath.get(uiService.config, "subheader.display"),
            desktopHeaderDisplay: objectPath.get(
                uiService.config,
                "header.self.fixed.desktop"
            ),
            contentCssClasses: uiService.getClasses("content", true),
            contentContainerClasses: uiService.getClasses("content_container", true),
            contentExtended: objectPath.get(uiService.config, "content.extended")
        };
    });

    return (
        <>
            {/*begin::Main*/}
            <HeaderMobile />
            <div className="d-flex flex-column flex-root">
                {/*begin::Page*/}
                <div className="d-flex flex-row flex-column-fluid page">
                    {layoutProps.asideDisplay && (<Aside />)}
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                        <Header />
                        {/*begin::Content*/}
                        <div
                            id="kt_content"
                            className={`content ${layoutProps.contentCssClasses} bg-white d-flex flex-column flex-column-fluid`}
                        >
                            {layoutProps.subheaderDisplay && <SubHeader />}
                            {/*begin::Entry*/}
                            {!layoutProps.contentExtended && (
                                <div className="d-flex flex-column-fluid">
                                    {/*begin::Container*/}
                                    <div className={layoutProps.contentContainerClasses}>
                                        {children}
                                    </div>
                                    {/*end::Container*/}
                                </div>
                            )}

                            {layoutProps.contentExtended && { children }}
                            {/*end::Entry*/}
                        </div>
                        {/*end::Content*/}
                        <Footer />
                    </div>
                    {/*end::Wrapper*/}
                </div>
                {/*end::Page*/}
            </div>
            <QuickUser />
            <QuickPanel />
            <ScrollTop />
            <StickyToolbar />
            {/*end::Main*/}
            <LayoutInit />
        </>
    )
}
