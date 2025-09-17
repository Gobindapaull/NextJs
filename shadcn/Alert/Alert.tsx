import { CheckCircle2Icon } from "lucide-react";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function AlertComp() {
    return (
        <div className="max-w-xl">
            <Alert>
                <CheckCircle2Icon />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                    This is an alert with logo, title and description.
                </AlertDescription>
            </Alert>
        </div>
    )
}
