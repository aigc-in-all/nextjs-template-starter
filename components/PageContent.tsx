import { getPageContent } from "@/lib/contents";

type Props = {
    name: string;
}

const PageContent = async ({ name }: Props) => {
    const contentHtml = await getPageContent(name);
    return (
        <div className="p-4 bg-zinc-900 rounded-md">
            <div
                dangerouslySetInnerHTML={{ __html: contentHtml }}
                className="markdown-content prose prose-invert prose-h1:text-center max-w-none"
            />
        </div>
    )
}

export default PageContent;