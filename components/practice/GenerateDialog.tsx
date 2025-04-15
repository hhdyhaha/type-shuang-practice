'use client';

import { useChat } from '@ai-sdk/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface GenerateDialogProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export default function GenerateDialog({ open, onOpenChange }: GenerateDialogProps) {
    const { messages, input, handleInputChange, handleSubmit } = useChat({});

    return (
        <Dialog open={open} onOpenChange={onOpenChange} >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>AI 生成练习文章</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    <ScrollArea className="h-[300px] pr-4">
                        {messages.map(message => (
                            <div key={message.id} className={`mb-4 ${message.role === 'assistant' ? 'pl-4 border-l-2' : 'text-right'}`}>
                                {/* <p className="text-sm font-medium mb-1">
                                    {message.role === 'user' ? 'USER：' : 'AI：'}
                                </p> */}
                                <p className="inline-block text-sm text-muted-foreground bg-muted rounded-lg p-2">
                                    {message.content}
                                </p>
                            </div>
                        ))}
                    </ScrollArea>
                </div>

                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="flex gap-2">
                        <Input
                            placeholder="输入你想练习的主题..."
                            name="prompt"
                            value={input}
                            onChange={handleInputChange}
                        />
                        <Button type="submit">发送</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}